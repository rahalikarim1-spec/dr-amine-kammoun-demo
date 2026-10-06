"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon, ChevronIcon } from "./Icons";

export interface MenuGroup {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
}

export function MobileMenu({ groups, labels, cta }: { groups: MenuGroup[]; labels: { menu: string; close: string }; cta: { href: string; label: string } }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div className="xl:hidden">
      <button type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(true)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-ink hover:bg-teal-50">
        <MenuIcon /><span className="sr-only">{labels.menu}</span>
      </button>
      {open && (
        <div id="mobile-menu" role="dialog" aria-modal="true" aria-label={labels.menu} className="fixed inset-0 z-[70] overflow-y-auto bg-sand-50">
          <div className="container-x flex h-[68px] items-center justify-end">
            <button type="button" onClick={() => setOpen(false)} className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white">
              <CloseIcon /><span className="sr-only">{labels.close}</span>
            </button>
          </div>
          <nav className="container-x pb-32">
            <ul className="divide-y divide-ink/10">
              {groups.map((g) => (
                <li key={g.href} className="py-2">
                  {g.children?.length ? (
                    <details className="group">
                      <summary className="flex min-h-[52px] cursor-pointer items-center justify-between font-display text-xl rtl:font-sans rtl:font-semibold">
                        {g.label}
                        <ChevronIcon className="h-5 w-5 transition-transform group-open:rotate-180" />
                      </summary>
                      <ul className="mb-3 space-y-1 ps-1">
                        <li><Link href={g.href} onClick={() => setOpen(false)} className="block min-h-[44px] py-2 font-semibold text-teal-800">{g.label}</Link></li>
                        {g.children.map((c) => (
                          <li key={c.href}><Link href={c.href} onClick={() => setOpen(false)} className="block min-h-[44px] py-2 text-ink-soft">{c.label}</Link></li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link href={g.href} onClick={() => setOpen(false)} className="flex min-h-[52px] items-center font-display text-xl rtl:font-sans rtl:font-semibold">{g.label}</Link>
                  )}
                </li>
              ))}
            </ul>
            <Link href={cta.href} onClick={() => setOpen(false)} data-track="appointment_click" data-track-location="mobile-menu" className="btn btn-primary mt-6 w-full">{cta.label}</Link>
          </nav>
        </div>
      )}
    </div>
  );
}
