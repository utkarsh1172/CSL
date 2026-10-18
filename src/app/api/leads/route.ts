import { parseLead } from "@/lib/validation/lead";

/**
 * Receives enquiry-form leads. With LEAD_WEBHOOK_URL set (a CRM, Zapier/Make hook or email
 * service), each valid lead is forwarded there as JSON; without it the lead is accepted and only
 * its form name is logged, so no personal data lands in server logs.
 */
export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const lead = parseLead(body);
  if (!lead.ok) {
    return Response.json({ ok: false, error: lead.error }, { status: 400 });
  }

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (!webhook) {
    console.info(`[leads] received from "${lead.data.form}"; set LEAD_WEBHOOK_URL to forward leads.`);
    return Response.json({ ok: true });
  }

  try {
    const forwarded = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...lead.data, receivedAt: new Date().toISOString() }),
    });

    if (!forwarded.ok) {
      return Response.json({ ok: false, error: "forward_failed" }, { status: 502 });
    }
  } catch {
    return Response.json({ ok: false, error: "forward_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
