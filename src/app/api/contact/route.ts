import { NextResponse } from "next/server";

/**
 * Contact request endpoint.
 *  - With CONTACT_WEBHOOK_URL set (Make, Zapier, n8n, Formspree-compatible endpoint…), the request is forwarded as JSON.
 *  - Without it, the site runs in DEMO mode: the request is validated but NOT stored or sent anywhere,
 *    and the UI says so honestly. No personal data is logged.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  if (body.website) return NextResponse.json({ ok: true, delivered: false }); // honeypot
  if (name.length < 2 || name.length > 120 || !/^[+\d\s().-]{6,20}$/.test(phone) || body.consent !== true) {
    return NextResponse.json({ ok: false }, { status: 422 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) return NextResponse.json({ ok: true, delivered: false });

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name,
        phone,
        reason: String(body.reason ?? "").slice(0, 120),
        time: String(body.time ?? "").slice(0, 60),
        message: String(body.message ?? "").slice(0, 1000),
        lang: String(body.lang ?? ""),
        receivedAt: new Date().toISOString(),
      }),
    });
    if (!res.ok) return NextResponse.json({ ok: false }, { status: 502 });
    return NextResponse.json({ ok: true, delivered: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
