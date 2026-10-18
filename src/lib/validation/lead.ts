/** A lead from any enquiry form, after validation. Optional fields are omitted when blank. */
export type Lead = {
  form: string;
  page: string;
  name: string;
  email: string;
  message?: string;
  phone?: string;
  countryCode?: string;
  linkedin?: string;
};

type LeadResult = { ok: true; data: Lead } | { ok: false; error: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Field → maximum length; anything longer is rejected rather than silently truncated.
const limits = {
  form: 60,
  page: 200,
  name: 120,
  email: 200,
  message: 2000,
  phone: 40,
  countryCode: 8,
  linkedin: 300,
} as const;

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

/** Checks a submitted lead; shared by the API route so every form follows the same rules. */
export function parseLead(input: unknown): LeadResult {
  if (!input || typeof input !== "object") return { ok: false, error: "invalid_body" };

  const raw = input as Record<string, unknown>;
  const fields = Object.fromEntries(
    Object.keys(limits).map((key) => [key, text(raw[key])]),
  ) as Record<keyof typeof limits, string>;

  for (const [key, max] of Object.entries(limits)) {
    if (fields[key as keyof typeof limits].length > max) return { ok: false, error: `too_long_${key}` };
  }

  if (!fields.form || !fields.name) return { ok: false, error: "missing_fields" };
  if (!emailPattern.test(fields.email)) return { ok: false, error: "invalid_email" };

  const data: Lead = { form: fields.form, page: fields.page, name: fields.name, email: fields.email };
  if (fields.message) data.message = fields.message;
  if (fields.phone) data.phone = fields.phone;
  if (fields.countryCode) data.countryCode = fields.countryCode;
  if (fields.linkedin) data.linkedin = fields.linkedin;

  return { ok: true, data };
}
