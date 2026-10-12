import type { FormEvent } from "react";

type AdvisorFormProps = {
  submitted: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function AdvisorForm({ submitted, onSubmit }: AdvisorFormProps) {
  return (
    <aside
      aria-labelledby="advisor-heading"
      className="advisor-card"
      data-reveal="left"
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

        <div className="advisor-card__phone">
          <label className="sr-only" htmlFor="advisor-country-code">
            Country code
          </label>
          <select
            aria-label="Country code"
            defaultValue="+1"
            id="advisor-country-code"
            name="countryCode"
            required
          >
            <option value="+1">CA +1</option>
            <option value="+91">IN +91</option>
            <option value="+44">UK +44</option>
            <option value="+61">AU +61</option>
            <option value="+971">UAE +971</option>
          </select>
          <label className="sr-only" htmlFor="advisor-phone">
            Phone number
          </label>
          <input
            autoComplete="tel-national"
            id="advisor-phone"
            inputMode="tel"
            name="phone"
            placeholder="Phone Number"
            required
            type="tel"
          />
        </div>

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
