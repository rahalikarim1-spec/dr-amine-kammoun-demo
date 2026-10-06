import Link from "next/link";
import type { Lang } from "@/lib/types";
import { PAGES, childrenOf } from "@/lib/registry";
import { pathOf } from "@/lib/links";
import { getContent } from "@/lib/content";
import { getDict } from "@/dictionaries";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu, type MenuGroup } from "./MobileMenu";
import { ChevronIcon } from "./Icons";

export function navGroups(lang: Lang): (MenuGroup & { nav: string })[] {
  const hubs = PAGES.filter((p) => p.template === "hub" && p.inNav);
  const singles = PAGES.filter((p) => p.template !== "hub" && p.inNav);
  const toGroup = (id: string, withChildren: boolean) => {
    const c = getContent(lang, id);
    return {
      href: pathOf(id, lang),
      label: c.label,
      nav: c.navLabel ?? c.label,
      children: withChildren ? childrenOf(id).map((ch) => ({ href: pathOf(ch, lang), label: getContent(lang, ch.id).label })) : undefined,
    };
  };
  return [...hubs.map((h) => toGroup(h.id, true)), ...singles.map((s) => toGroup(s.id, false))];
}

export function Header({ lang, pageId }: { lang: Lang; pageId?: string }) {
  const t = getDict(lang);
  const groups = navGroups(lang);
  const appointmentHref = pathOf("appointment", lang);
  // Mobile architecture: Home, doctor, topic clusters, info hub, practice, FAQ, contact.
  const byHref = new Map(groups.map((g) => [g.href, g]));
  const plain = (id: string): MenuGroup => ({ href: pathOf(id, lang), label: getContent(lang, id).label });
  const pick = (id: string): MenuGroup => byHref.get(pathOf(id, lang)) ?? plain(id);
  const mobileGroups: MenuGroup[] = [
    { href: pathOf("home", lang), label: t.home },
    pick("doctor"),
    pick("hub-gyneco"), pick("hub-pregnancy"), pick("hub-echo"), pick("hub-conditions"), pick("hub-fertility"),
    plain("info-hub"), plain("cabinet"), plain("faq"), pick("contact"),
  ];

  return (
    <header className="no-print sticky top-0 z-50 border-b border-ink/[0.06] bg-sand-50/90 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
        <Logo lang={lang} />

        <nav aria-label={t.mainNav} className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {groups.map((g) => (
              <li key={g.href} className="group relative">
                <Link href={g.href} className="flex min-h-[44px] items-center gap-1 whitespace-nowrap rounded-full px-3 text-[0.93rem] font-medium text-ink-soft transition-colors hover:bg-teal-50 hover:text-teal-900">
                  {g.nav}
                  {g.children?.length ? <ChevronIcon className="h-4 w-4 opacity-60" /> : null}
                </Link>
                {g.children?.length ? (
                  <div className="invisible absolute start-0 top-full z-50 w-72 pt-2 opacity-0 transition-all duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="card p-2 shadow-lift">
                      {g.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className="block rounded-xl px-3 py-2.5 text-[0.93rem] text-ink-soft hover:bg-teal-50 hover:text-teal-900">{c.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 min-[360px]:gap-2">
          <div className="hidden sm:block"><LanguageSwitcher lang={lang} pageId={pageId} label={t.switchTo} /></div>
          <Link href={appointmentHref} data-track="appointment_click" data-track-location="header" className="btn btn-primary hidden !min-h-[44px] whitespace-nowrap !py-2 text-sm xl:inline-flex">{t.cta.appointmentShort}</Link>
          <div className="sm:hidden"><LanguageSwitcher lang={lang} pageId={pageId} label={t.switchTo} /></div>
          <MobileMenu groups={mobileGroups} labels={{ menu: t.menu, close: t.closeMenu }} cta={{ href: appointmentHref, label: t.cta.appointment }} />
        </div>
      </div>
    </header>
  );
}
