"use client";

import { useState, type FormEvent } from "react";

import { spawnBoomBurstFrom } from "@/utils/boom-burst";

/** Marks a lead form as sent and fires the confetti burst from its submit button. */
export function useSubmitBurst() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    const submitButton = event.currentTarget.querySelector('button[type="submit"]');
    if (submitButton) spawnBoomBurstFrom(submitButton, { variant: "confetti" });
  };

  return { submitted, handleSubmit };
}
