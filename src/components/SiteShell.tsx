import type { Lang } from "@/lib/types";
import { pathOf } from "@/lib/links";
import { getDict } from "@/dictionaries";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyMobileBar } from "./StickyMobileBar";
import { ConsentBanner } from "./ConsentBanner";
import { TrackingListener } from "./TrackingListener";
import { Analytics, GtmNoScript } from "./Analytics";

export function SiteShell({ lang, pageId, children }: { lang: Lang; pageId?: string; children: React.ReactNode }) {
  const t = getDict(lang);
  return (
    <>
      <GtmNoScript />
      <a href="#main" className="sr-only z-[100] rounded-full bg-teal-800 px-5 py-3 text-white focus:not-sr-only focus:fixed focus:start-4 focus:top-4">{t.skipToContent}</a>
      <Header lang={lang} pageId={pageId} />
      <main id="main">{children}</main>
      <Footer lang={lang} pageId={pageId} />
      <StickyMobileBar lang={lang} />
      <ConsentBanner t={t.cookie} policyHref={pathOf("cookies", lang)} />
      <TrackingListener />
      <Analytics />
    </>
  );
}
