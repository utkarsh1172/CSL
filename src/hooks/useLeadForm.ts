"use client";

import { useRef, useState, type FormEvent } from "react";

import { trackEvent } from "@/lib/analytics";
import { spawnBoomBurstFrom } from "@/utils/boom-burst";

export type LeadFormStatus = "idle" | "sending" | "sent" | "error";

/** Set in sessionStorage once any enquiry is sent, so the contact popup stops asking. */
export const leadSentKey = "csl_lead_sent";

/**
 * Wires an enquiry form for conversion tracking: records the first interaction (form_start),
 * posts the fields to /api/leads, then records lead_submit or lead_error. A successful send
 * fires the confetti burst from the submit button.
 */
export function useLeadForm(formName: string) {
  const [status, setStatus] = useState<LeadFormStatus>("idle");
  const started = useRef(false);

  const handleFocus = () => {
    if (started.current) return;
    started.current = true;
    trackEvent({ name: "form_start", form: formName });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    // Read the form before awaiting: React clears currentTarget once the handler yields.
    const form = event.currentTarget;
    const submitButton = form.querySelector('button[type="submit"]');
    const fields = Object.fromEntries(new FormData(form));
    setStatus("sending");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...fields, form: formName, page: window.location.pathname }),
      });
      const result = (await response.json().catch(() => ({}))) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) throw new Error(result.error ?? `http_${response.status}`);

      setStatus("sent");
      form.reset();
      try {
        window.sessionStorage.setItem(leadSentKey, "1");
      } catch {}
      trackEvent({ name: "lead_submit", form: formName, page: window.location.pathname });
      if (submitButton) spawnBoomBurstFrom(submitButton, { variant: "confetti" });
    } catch (error) {
      setStatus("error");
      trackEvent({
        name: "lead_error",
        form: formName,
        reason: error instanceof Error ? error.message : "unknown",
      });
    }
  };

  return { status, handleSubmit, handleFocus };
}

/** Submit-button text for each state, so every form reads the same while sending. */
export function leadButtonLabel(status: LeadFormStatus, idleLabel: string) {
  if (status === "sending") return "Sending…";
  if (status === "sent") return "Request Received";
  return idleLabel;
}

/** Status line under the button; announced to screen readers via role="status". */
export function leadStatusMessage(status: LeadFormStatus, successMessage: string) {
  if (status === "sent") return successMessage;
  if (status === "error") return "Something went wrong. Please try again in a moment.";
  return "";
}
