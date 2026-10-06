"use client";

export type TrackEvent =
  | "phone_click"
  | "appointment_click"
  | "whatsapp_click"
  | "map_click"
  | "language_change"
  | "contact_form_submit";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Push a GTM/GA4-ready event to the dataLayer. Safe to call when no tracking is configured. */
export function track(event: TrackEvent, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
