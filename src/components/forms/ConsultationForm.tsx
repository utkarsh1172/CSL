"use client";

import { CanadaFlag } from "@/components/ui/CanadaFlag";
import { useSubmitBurst } from "@/hooks/useSubmitBurst";

export function ConsultationForm() {
  const { submitted, handleSubmit } = useSubmitBurst();

  return (
    <form
      aria-labelledby="footer-consultation-heading"
      className="consultation-form"
      onSubmit={handleSubmit}
    >
      <h2 id="footer-consultation-heading">
        Book a Consultation
        <span>Enquire About Program</span>
      </h2>

      <label className="sr-only" htmlFor="consultation-name">
        Full name
      </label>
      <input autoComplete="name" id="consultation-name" name="name" placeholder="Full Name" required />

      <label className="sr-only" htmlFor="consultation-email">
        Email
      </label>
      <input
        autoComplete="email"
        id="consultation-email"
        name="email"
        placeholder="Email"
        required
        type="email"
      />

      <label className="sr-only" htmlFor="consultation-linkedin">
        LinkedIn profile URL
      </label>
      <input
        id="consultation-linkedin"
        name="linkedin"
        placeholder="LinkedIn Profile URL"
        type="url"
      />

      <div className="consultation-form__phone">
        <CanadaFlag />
        <span aria-hidden="true">(+1)</span>
        <label className="sr-only" htmlFor="consultation-phone">
          Phone number (+1)
        </label>
        <input
          autoComplete="tel-national"
          id="consultation-phone"
          inputMode="tel"
          name="phone"
          placeholder="Phone Number"
          type="tel"
        />
      </div>

      <button type="submit">{submitted ? "Request Received" : "Request Connect"}</button>
      <p className="consultation-form__status" role="status">
        {submitted ? "Thank you. We will be in touch shortly." : ""}
      </p>
    </form>
  );
}
