"use client";

import { PhoneField } from "@/components/forms/PhoneField";
import { leadButtonLabel, leadStatusMessage, useLeadForm } from "@/hooks/useLeadForm";

export function BlogAdvisorForm() {
  const { status, handleSubmit, handleFocus } = useLeadForm("blog-article-advisor");

  return (
    <aside
      aria-labelledby="article-advisor-heading"
      className="article-advisor"
      data-reveal="card"
      data-reveal-delay="2"
    >
      <p className="article-advisor__eyebrow">Get Started</p>
      <h2 id="article-advisor-heading">Explore the AI leadership program</h2>
      <p>
        Speak with a program advisor about the curriculum, learning model, eligibility and fit
        for your leadership journey.
      </p>
      <form onFocus={handleFocus} onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="article-advisor-name">
          Full name
        </label>
        <input id="article-advisor-name" name="name" placeholder="Full Name" required />

        <label className="sr-only" htmlFor="article-advisor-email">
          Email
        </label>
        <input
          id="article-advisor-email"
          name="email"
          placeholder="Email"
          required
          type="email"
        />

        <PhoneField idPrefix="article-advisor" required />

        <label className="sr-only" htmlFor="article-advisor-message">
          Message
        </label>
        <textarea id="article-advisor-message" name="message" placeholder="Message" rows={4} />

        <button disabled={status === "sending"} type="submit">
          {leadButtonLabel(status, "Talk to an Advisor")}
        </button>
        <p className="article-advisor__status" data-status={status} role="status">
          {leadStatusMessage(status, "Thank you. An advisor will be in touch.")}
        </p>
      </form>
    </aside>
  );
}
