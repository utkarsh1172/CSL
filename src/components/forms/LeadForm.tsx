"use client";

import { leadButtonLabel, leadStatusMessage, useLeadForm } from "@/hooks/useLeadForm";

type LeadFormProps = {
  /** Prefix for field ids, so several lead forms can share a page; also names the form in analytics. */
  idPrefix: string;
  submitLabel: string;
  /** Adds a free-text message field below the email. */
  withMessage?: boolean;
  className?: string;
};

/** Name and email capture used by advisor cards and banners across pages. */
export function LeadForm({ idPrefix, submitLabel, withMessage = false, className }: LeadFormProps) {
  const { status, handleSubmit, handleFocus } = useLeadForm(idPrefix);

  return (
    <form className={className} onFocus={handleFocus} onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor={`${idPrefix}-name`}>
        Full name
      </label>
      <input
        autoComplete="name"
        id={`${idPrefix}-name`}
        name="name"
        placeholder="Full Name"
        required
      />

      <label className="sr-only" htmlFor={`${idPrefix}-email`}>
        Email
      </label>
      <input
        autoComplete="email"
        id={`${idPrefix}-email`}
        name="email"
        placeholder="Email"
        required
        type="email"
      />

      {withMessage ? (
        <>
          <label className="sr-only" htmlFor={`${idPrefix}-message`}>
            Message
          </label>
          <textarea id={`${idPrefix}-message`} name="message" placeholder="Message" rows={4} />
        </>
      ) : null}

      <button disabled={status === "sending"} type="submit">
        {leadButtonLabel(status, submitLabel)}
      </button>
      <p className="lead-form__status" data-status={status} role="status">
        {leadStatusMessage(status, "Thank you. Our team will respond promptly.")}
      </p>
    </form>
  );
}
