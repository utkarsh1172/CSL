import type { FormEvent } from "react";

import { PhoneField } from "@/components/forms/PhoneField";

type AdvisorFormProps = {
  submitted: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function AdvisorForm({ submitted, onSubmit }: AdvisorFormProps) {
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
      <form id="advisor-form" onSubmit={onSubmit}>
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

        <button type="submit">{submitted ? "Request Received" : "Talk to an Advisor"}</button>
        <p className="advisor-card__status" role="status">
          {submitted ? "Thank you. An advisor will be in touch." : ""}
        </p>
      </form>
    </aside>
  );
}
