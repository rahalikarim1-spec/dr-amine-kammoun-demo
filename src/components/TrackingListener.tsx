"use client";

import { useEffect } from "react";
import { track, type TrackEvent } from "@/lib/analytics";

/**
 * Global click delegation: any element with data-track="phone_click" (etc.) pushes a dataLayer event.
 * Keeps server components free of client-side handlers.
 */
export function TrackingListener() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-track]");
      if (!el) return;
      const event = el.dataset.track as TrackEvent;
      track(event, {
        location: el.dataset.trackLocation,
        language: document.documentElement.lang,
        page_path: window.location.pathname,
        ...(el.dataset.trackTo ? { to_language: el.dataset.trackTo } : {}),
      });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
