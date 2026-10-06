"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dict } from "@/dictionaries";

type Gtag = (...args: unknown[]) => void;

function applyConsent(granted: boolean) {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  gtag?.("consent", "update", { analytics_storage: granted ? "granted" : "denied" });
}

/** Consent banner (Consent Mode v2). Re-openable from the footer through the "open-cookie-settings" event. */
export function ConsentBanner({ t, policyHref }: { t: Dict["cookie"]; policyHref: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let saved: string | null = null;
    try { saved = localStorage.getItem("cookie-consent"); } catch {}
    if (!saved) setOpen(true);
    else applyConsent(saved === "granted");
    const reopen = () => setOpen(true);
    window.addEventListener("open-cookie-settings", reopen);
    return () => window.removeEventListener("open-cookie-settings", reopen);
  }, []);

  const choose = (granted: boolean) => {
    try { localStorage.setItem("cookie-consent", granted ? "granted" : "denied"); } catch {}
    applyConsent(granted);
    setOpen(false);
  };

  if (!open) return null;
  return (
    <div role="dialog" aria-live="polite" aria-label={t.title} className="no-print fixed inset-x-3 bottom-[88px] z-[60] mx-auto max-w-xl rounded-2xl border border-ink/10 bg-white p-5 shadow-lift lg:bottom-5 lg:start-5 lg:end-auto lg:mx-0">
      <p className="font-display text-base font-semibold rtl:font-sans">{t.title}</p>
      <p className="mt-1 text-sm leading-relaxed text-ink-soft">
        {t.text}{" "}
        <Link href={policyHref} className="link-inline">{t.more}</Link>
      </p>
      <div className="mt-4 flex gap-2">
        <button type="button" onClick={() => choose(true)} className="btn btn-primary !min-h-[44px] !px-5 !py-2 text-sm">{t.accept}</button>
        <button type="button" onClick={() => choose(false)} className="btn btn-secondary !min-h-[44px] !px-5 !py-2 text-sm">{t.refuse}</button>
      </div>
    </div>
  );
}

export function CookieSettingsButton({ label }: { label: string }) {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))} className="text-sm text-white/70 underline-offset-4 hover:text-white hover:underline">
      {label}
    </button>
  );
}
