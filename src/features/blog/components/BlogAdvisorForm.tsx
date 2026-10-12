"use client";

import { useState } from "react";

export function BlogAdvisorForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <aside
      aria-labelledby="article-advisor-heading"
      className="article-advisor"
      data-reveal="left"
      data-reveal-delay="2"
    >
      <p className="article-advisor__eyebrow">Get Started</p>
      <h2 id="article-advisor-heading">Explore the AI leadership program</h2>
      <p>
        Speak with a program advisor about the curriculum, learning model, eligibility and fit
        for your leadership journey.
      </p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
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

        <div className="article-advisor__phone">
          <label className="sr-only" htmlFor="article-advisor-country-code">
            Country code
          </label>
          <select
            aria-label="Country code"
            defaultValue="+1"
            id="article-advisor-country-code"
            name="countryCode"
            required
          >
            <option value="+1">CA +1</option>
            <option value="+91">IN +91</option>
            <option value="+44">UK +44</option>
            <option value="+61">AU +61</option>
            <option value="+971">UAE +971</option>
          </select>
          <label className="sr-only" htmlFor="article-advisor-phone">
            Phone number
          </label>
          <input
            autoComplete="tel-national"
            id="article-advisor-phone"
            inputMode="tel"
            name="phone"
            placeholder="Phone Number"
            required
            type="tel"
          />
        </div>

        <label className="sr-only" htmlFor="article-advisor-message">
          Message
        </label>
        <textarea id="article-advisor-message" name="message" placeholder="Message" rows={4} />

        <button type="submit">{submitted ? "Request Received" : "Talk to an Advisor"}</button>
        <p className="article-advisor__status" role="status">
          {submitted ? "Thank you. An advisor will be in touch." : ""}
        </p>
      </form>
    </aside>
  );
}
