"use client";

import { useSubmitBurst } from "@/hooks/useSubmitBurst";

type LeadFormProps = {
  /** Prefix for field ids, so several lead forms can share a page. */
  idPrefix: string;
  submitLabel: string;
  className?: string;
};

/** Name and email capture used by the advisor card and the franchise banner. */
export function LeadForm({ idPrefix, submitLabel, className }: LeadFormProps) {
  const { submitted, handleSubmit } = useSubmitBurst();

  return (
    <form className={className} onSubmit={handleSubmit}>
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

      <button type="submit">{submitted ? "Request Received" : submitLabel}</button>
      <p className="lead-form__status" role="status">
        {submitted ? "Thank you. Our team will respond promptly." : ""}
      </p>
    </form>
  );
}
