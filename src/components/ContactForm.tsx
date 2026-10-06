"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";
import type { Dict } from "@/dictionaries";

type Status = "idle" | "sending" | "success" | "demo" | "error";

export function ContactForm({ t, lang, privacyHref }: { t: Dict["contact"]["form"]; lang: string; privacyHref: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      reason: data.get("reason"),
      time: data.get("time"),
      message: data.get("message"),
      website: data.get("website"),
      consent: data.get("consent") === "on",
      lang,
    };
    const next: Record<string, boolean> = {
      name: payload.name.length < 2,
      phone: !/^[+\d\s().-]{6,20}$/.test(payload.phone),
      consent: !payload.consent,
    };
    setErrors(next);
    if (Object.values(next).some(Boolean)) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error();
      const json = (await res.json()) as { delivered?: boolean };
      track("contact_form_submit", { delivered: Boolean(json.delivered), language: lang });
      setStatus(json.delivered ? "success" : "demo");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const field = "mt-1.5 block w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-base text-ink placeholder:text-ink-mute/60 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/30";
  const label = "block text-sm font-semibold text-ink";
  const err = (k: string) => errors[k] && <p role="alert" className="mt-1 text-sm text-blush-600">{t.required}</p>;

  return (
    <form onSubmit={onSubmit} noValidate className="card space-y-5 p-6 sm:p-8">
      <div>
        <h2 className="text-2xl">{t.title}</h2>
        <p className="mt-2 text-[0.95rem] text-ink-soft">{t.intro}</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={label}>{t.name} *</label>
          <input id="cf-name" name="name" autoComplete="name" required aria-invalid={errors.name} className={field} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="cf-phone" className={label}>{t.phone} *</label>
          <input id="cf-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" dir="ltr" required aria-invalid={errors.phone} className={`${field} rtl:text-end`} />
          {err("phone")}
        </div>
        <div>
          <label htmlFor="cf-reason" className={label}>{t.reason}</label>
          <select id="cf-reason" name="reason" className={field} defaultValue={t.reasons[0]}>
            {t.reasons.map((r) => <option key={r}>{r}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="cf-time" className={label}>{t.time}</label>
          <select id="cf-time" name="time" className={field} defaultValue={t.times[2]}>
            {t.times.map((r) => <option key={r}>{r}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className={label}>{t.message}</label>
        <textarea id="cf-message" name="message" rows={4} maxLength={1000} className={field} aria-describedby="cf-hint" />
        <p id="cf-hint" className="mt-1 text-sm text-ink-mute">{t.messageHint}</p>
      </div>

      {/* honeypot */}
      <div className="absolute -start-[9999px]" aria-hidden="true">
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-ink-soft">
          <input type="checkbox" name="consent" className="mt-1 h-5 w-5 shrink-0 rounded border-ink/30 text-teal-700 focus:ring-teal-600" aria-invalid={errors.consent} />
          <span>{t.consent} <a href={privacyHref} className="link-inline">→</a></span>
        </label>
        {err("consent")}
      </div>

      <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full sm:w-auto disabled:opacity-60" data-track-ignore>
        {status === "sending" ? t.sending : t.submit}
      </button>

      <div aria-live="polite">
        {status === "success" && <p className="rounded-xl bg-teal-50 p-4 text-[0.95rem] text-teal-900">{t.success}</p>}
        {status === "demo" && <p className="rounded-xl bg-sand-100 p-4 text-[0.95rem] text-ink-soft">{t.demo}</p>}
        {status === "error" && <p className="rounded-xl bg-blush-50 p-4 text-[0.95rem] text-blush-600">{t.error}</p>}
      </div>
    </form>
  );
}
