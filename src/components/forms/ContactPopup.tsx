"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState, type MouseEvent, type PointerEvent } from "react";

import { leadSentKey, useLeadForm } from "@/hooks/useLeadForm";

// Modelled on leadershipprograms.ca's "Get in Touch" popup: it opens once per page per browser
// session, here after 5 seconds on the page (the reference waits 15).
// To change when the popup appears, edit this value (milliseconds: 5_000 = 5 seconds).
const openDelayMs = 5_000;
// Matches the exit animation in globals.css; the dialog closes once it has played.
const closeAnimationMs = 200;
// After a successful send, the thank-you message stays this long before the popup closes.
const successCloseMs = 2_500;

const shownKey = (path: string) => `csl_popup_shown:${path}`;

// sessionStorage can be blocked (private modes, strict settings); the popup still works, it just
// can't remember that it has been shown.
function readSession(key: string) {
  try {
    return window.sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeSession(key: string) {
  try {
    window.sessionStorage.setItem(key, "1");
  } catch {}
}

/** True while the visitor is typing somewhere, so the popup doesn't take focus mid-sentence. */
function isTyping() {
  const active = document.activeElement;
  return active instanceof HTMLElement && (active.isContentEditable || active.matches("input, textarea, select"));
}

/** Stops the page scrolling behind the popup, keeping the scrollbar's width so nothing shifts. */
function lockPageScroll() {
  const { documentElement: html, body } = document;
  const scrollbarWidth = window.innerWidth - html.clientWidth;
  const previous = { overflow: html.style.overflow, paddingRight: body.style.paddingRight };
  html.style.overflow = "hidden";
  if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;
  return () => {
    html.style.overflow = previous.overflow;
    body.style.paddingRight = previous.paddingRight;
  };
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
      <path d="m21.854 2.147-10.94 10.939" />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg aria-hidden="true" className="contact-popup__spinner" viewBox="0 0 24 24">
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}

function SuccessIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

type PopupFormProps = {
  onSent: () => void;
};

/** The enquiry form; mounted fresh for every opening so it never shows a previous attempt. */
function PopupForm({ onSent }: PopupFormProps) {
  const { status, handleSubmit, handleFocus } = useLeadForm("contact-popup");
  const id = useId();

  useEffect(() => {
    if (status !== "sent") return;
    const timer = window.setTimeout(onSent, successCloseMs);
    return () => window.clearTimeout(timer);
  }, [status, onSent]);

  if (status === "sent") {
    return (
      <div className="contact-popup__success" role="status">
        <span className="contact-popup__success-icon">
          <SuccessIcon />
        </span>
        <p className="contact-popup__success-title">Message sent!</p>
        <p className="contact-popup__success-text">We will be in touch soon.</p>
      </div>
    );
  }

  return (
    <form className="contact-popup__form" onFocus={handleFocus} onSubmit={handleSubmit}>
      <div className="contact-popup__field">
        <label htmlFor={`${id}-name`}>Name</label>
        <input autoComplete="name" id={`${id}-name`} maxLength={120} name="name" placeholder="Your full name" required />
      </div>
      <div className="contact-popup__field">
        <label htmlFor={`${id}-email`}>Email</label>
        <input
          autoComplete="email"
          id={`${id}-email`}
          maxLength={200}
          name="email"
          placeholder="you@company.com"
          required
          type="email"
        />
      </div>
      <div className="contact-popup__field">
        <label htmlFor={`${id}-phone`}>Phone Number</label>
        <input
          autoComplete="tel"
          id={`${id}-phone`}
          maxLength={40}
          name="phone"
          placeholder="+1 (555) 000-0000"
          type="tel"
        />
      </div>
      <div className="contact-popup__field">
        <label htmlFor={`${id}-message`}>What are you interested in?</label>
        <textarea
          id={`${id}-message`}
          maxLength={2000}
          name="message"
          placeholder="e.g. CXO Program, Advisory roles, Speaking opportunities..."
          rows={3}
        />
      </div>

      {status === "error" ? (
        <p className="contact-popup__error" role="alert">
          Something went wrong. Please try again.
        </p>
      ) : null}

      <button className="contact-popup__submit" disabled={status === "sending"} type="submit">
        {status === "sending" ? <SpinnerIcon /> : <SendIcon />}
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

/**
 * "Get in Touch" enquiry popup, shown on every page from the root layout. It opens 5 seconds
 * after a page is reached, once per page per session, and stays away for the rest of the
 * session once the visitor has sent any enquiry. If they are typing in another form when the
 * time comes, it waits until they leave the field.
 */
export function ContactPopup() {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pressStartedOutside = useRef(false);
  const closingRef = useRef(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [opening, setOpening] = useState(0);
  const titleId = useId();
  const descriptionId = useId();

  // Schedule the popup for this page.
  useEffect(() => {
    const key = shownKey(pathname);
    if (readSession(key) || readSession(leadSentKey)) return;

    let waitingForTyping = false;
    const open = () => {
      if (document.querySelector("dialog[open]")) return;
      writeSession(key);
      setOpening((count) => count + 1);
      setIsOpen(true);
    };
    const openWhenIdle = () => {
      // Focus moves between fields one event at a time; check once it has settled.
      window.setTimeout(() => {
        if (isTyping()) return;
        document.removeEventListener("focusout", openWhenIdle);
        waitingForTyping = false;
        open();
      }, 0);
    };
    const timer = window.setTimeout(() => {
      if (readSession(leadSentKey)) return;
      if (isTyping()) {
        waitingForTyping = true;
        document.addEventListener("focusout", openWhenIdle);
        return;
      }
      open();
    }, openDelayMs);

    return () => {
      window.clearTimeout(timer);
      if (waitingForTyping) document.removeEventListener("focusout", openWhenIdle);
    };
  }, [pathname]);

  // Show the dialog once its contents have rendered, and keep the page still behind it.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return;
    const unlockScroll = lockPageScroll();
    if (!dialog.open) dialog.showModal();
    // On touch screens, focusing the first field would throw the keyboard up unasked.
    if (window.matchMedia("(pointer: coarse)").matches) dialog.focus();
    return unlockScroll;
  }, [isOpen, opening]);

  // Stable, so the form's thank-you timer isn't restarted by re-renders.
  const close = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    const instant = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setIsClosing(true);
    window.setTimeout(
      () => {
        dialogRef.current?.close();
        closingRef.current = false;
        setIsClosing(false);
        setIsOpen(false);
      },
      instant ? 0 : closeAnimationMs,
    );
  }, []);

  // A click on the dimmed backdrop lands on the dialog element itself, outside its box. Only
  // presses that also started outside count, so dragging a text selection out doesn't close it.
  const isOutside = (event: MouseEvent<HTMLDialogElement> | PointerEvent<HTMLDialogElement>) => {
    const box = event.currentTarget.getBoundingClientRect();
    return (
      event.target === event.currentTarget &&
      (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)
    );
  };

  return (
    <dialog
      aria-describedby={descriptionId}
      aria-labelledby={titleId}
      className="contact-popup"
      data-closing={isClosing || undefined}
      onCancel={(event) => {
        event.preventDefault();
        close();
      }}
      onClick={(event) => {
        if (pressStartedOutside.current && isOutside(event)) close();
      }}
      onClose={() => setIsOpen(false)}
      onPointerDown={(event) => {
        pressStartedOutside.current = isOutside(event);
      }}
      ref={dialogRef}
      tabIndex={-1}
    >
      {isOpen ? (
        <>
          <div className="contact-popup__header">
            <h2 id={titleId}>Get in Touch</h2>
            <p id={descriptionId}>Fill out the form and we will reach out to you shortly.</p>
          </div>
          <PopupForm key={opening} onSent={close} />
          <button aria-label="Close" className="contact-popup__close" onClick={close} type="button">
            <CloseIcon />
          </button>
        </>
      ) : null}
    </dialog>
  );
}
