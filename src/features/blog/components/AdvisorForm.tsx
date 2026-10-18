"use client";

import { PhoneField } from "@/components/forms/PhoneField";
import { leadButtonLabel, leadStatusMessage, useLeadForm } from "@/hooks/useLeadForm";

export function AdvisorForm() {
  const { status, handleSubmit, handleFocus } = useLeadForm("blog-directory-advisor");

  return (
    <aside
      aria-labelledby="advisor-heading"
      className="advisor-card"
      data-reveal="card"
      data-reveal-delay="2"
    >
      <p className="advisor-card__eyebrow">Get Started</p>
      <h2 id="advisor-heading">Explore the AI leadership program</h2>
      <p className="advisor-card__intro">
        Speak with a program advisor about the curriculum, learning model, eligibility and fit
        for your leadership journey.
      </p>
      <form id="advisor-form" onFocus={handleFocus} onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="advisor-name">
          Full name
        </label>
        <input id="advisor-name" name="name" placeholder="Full Name" required type="text" />

        <label className="sr-only" htmlFor="advisor-email">
          Email
        </label>
        <input id="advisor-email" name="email" placeholder="Email" required type="email" />

        <PhoneField idPrefix="advisor" required />

        <label className="sr-only" htmlFor="advisor-message">
          Message
        </label>
        <textarea id="advisor-message" name="message" placeholder="Message" rows={4} />

        <button disabled={status === "sending"} type="submit">
          {leadButtonLabel(status, "Talk to an Advisor")}
        </button>
        <p className="advisor-card__status" data-status={status} role="status">
          {leadStatusMessage(status, "Thank you. An advisor will be in touch.")}
        </p>
      </form>
    </aside>
  );
}
