"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CloseIcon, MenuIcon, ChevronIcon } from "./Icons";

export interface MenuGroup {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
}

const FOCUSABLE = 'a[href], button:not([disabled]), summary, [tabindex]:not([tabindex="-1"])';

/**
 * Mobile navigation drawer.
 * The drawer is rendered in a portal on <body>: the sticky header uses backdrop-filter, which would
 * otherwise become the containing block of `position: fixed` and clip the drawer to the header height.
 */
export function MobileMenu({ groups, labels, cta }: { groups: MenuGroup[]; labels: { menu: string; close: string }; cta: { href: string; label: string } }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => setMounted(true), []);

  // Body scroll lock only while open.
  useEffect(() => {
    if (!open) return;
    const { overflow, paddingRight } = document.body.style;
    const gap = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (gap > 0) document.body.style.paddingRight = `${gap}px`;
    return () => { document.body.style.overflow = overflow; document.body.style.paddingRight = paddingRight; };
  }, [open]);

  // Escape, focus trap, focus restore, auto-close when reaching desktop width.
  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    panelRef.current?.querySelector<HTMLElement>("[data-close]")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { close(); return; }
      if (e.key !== "Tab" || !panelRef.current) return;
      const items = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((el) => el.offsetParent !== null);
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    const mq = window.matchMedia("(min-width: 1280px)");
    const onMq = () => mq.matches && close();
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => { document.removeEventListener("keydown", onKey); mq.removeEventListener("change", onMq); trigger?.focus(); };
  }, [open, close]);

  const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2";

  const drawer = (
    <div id="mobile-menu" role="dialog" aria-modal="true" aria-label={labels.menu} className="fixed inset-0 z-[1000] xl:hidden">
      <div className="absolute inset-0 bg-ink/50 backdrop-blur-[2px]" onClick={close} aria-hidden="true" />
      <div
        ref={panelRef}
        className="absolute inset-y-0 end-0 flex h-[100dvh] w-[min(88vw,24rem)] flex-col bg-sand-50 shadow-2xl"
        style={{ height: "100dvh" }}
      >
        <div className="flex h-[68px] shrink-0 items-center justify-between border-b border-ink/10 px-4">
          <span className="font-display text-lg font-semibold text-teal-900 rtl:font-sans">{labels.menu}</span>
          <button type="button" data-close onClick={close} aria-label={labels.close} className={`flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white hover:bg-teal-50 ${focusRing}`}>
            <CloseIcon />
          </button>
        </div>
        <nav aria-label={labels.menu} className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-[calc(2rem+env(safe-area-inset-bottom))]">
          <ul className="divide-y divide-ink/10">
            {groups.map((g) => {
              const isOpen = expanded === g.href;
              const panelId = `mm-sub-${g.href.replace(/[^a-z0-9]/gi, "-")}`;
              return (
                <li key={g.href}>
                  {g.children?.length ? (
                    <>
                      <button type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setExpanded(isOpen ? null : g.href)}
                        className={`flex min-h-[52px] w-full items-center justify-between gap-3 text-start font-display text-lg rtl:font-sans rtl:font-semibold ${focusRing}`}>
                        <span>{g.label}</span>
                        <ChevronIcon className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                      <ul id={panelId} hidden={!isOpen} className="mb-3 space-y-0.5 border-s-2 border-teal-200 ps-3">
                        <li><Link href={g.href} onClick={close} className={`block min-h-[44px] py-2.5 font-semibold text-teal-800 ${focusRing}`}>{g.label}</Link></li>
                        {g.children.map((c) => (
                          <li key={c.href}><Link href={c.href} onClick={close} className={`block min-h-[44px] py-2.5 text-ink-soft ${focusRing}`}>{c.label}</Link></li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link href={g.href} onClick={close} className={`flex min-h-[52px] items-center font-display text-lg rtl:font-sans rtl:font-semibold ${focusRing}`}>{g.label}</Link>
                  )}
                </li>
              );
            })}
          </ul>
          <Link href={cta.href} onClick={close} data-track="appointment_click" data-track-location="mobile-menu" className="btn btn-primary mt-6 w-full">{cta.label}</Link>
        </nav>
      </div>
    </div>
  );

  return (
    <div className="xl:hidden">
      <button ref={triggerRef} type="button" aria-expanded={open} aria-controls="mobile-menu" aria-haspopup="dialog" aria-label={labels.menu} onClick={() => setOpen(true)}
        className={`flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-ink hover:bg-teal-50 ${focusRing}`}>
        <MenuIcon />
      </button>
      {mounted && open ? createPortal(drawer, document.body) : null}
    </div>
  );
}
