"use client";

import { useState } from "react";

export function BlogAdvisorForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <aside className="article-advisor" aria-labelledby="article-advisor-heading">
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
