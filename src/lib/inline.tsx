import Link from "next/link";
import type { ReactNode } from "react";
import type { Lang } from "./types";
import { pathOf } from "./links";
import { hasPage } from "./registry";
import { siteConfig } from "@/config/site";

/**
 * Inline markup used in content files:
 *   [[page-id|anchor text]]  -> internal link (localized, validated by scripts/validate-seo.ts)
 *   **bold**
 *   {phone}                  -> clickable phone number from config/site.ts
 */
const TOKEN = /(\[\[[a-z0-9-]+\|[^\]]+\]\]|\*\*[^*]+\*\*|\{phone\})/g;

export function Inline({ text, lang }: { text: string; lang: Lang }): ReactNode {
  const parts = text.split(TOKEN).filter((s) => s !== "");
  return parts.map((part, i) => {
    if (part.startsWith("[[")) {
      const [id, label] = part.slice(2, -2).split("|");
      if (!hasPage(id)) return label;
      return (
        <Link key={i} href={pathOf(id, lang)} className="link-inline">
          {label}
        </Link>
      );
    }
    if (part.startsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part === "{phone}")
      return (
        <a key={i} href={siteConfig.phone.href} className="link-inline whitespace-nowrap" dir="ltr" data-track="phone_click" data-track-location="inline">
          {siteConfig.phone.display}
        </a>
      );
    return part;
  });
}

/** Plain-text version (no markup) for metadata / JSON-LD. */
export function plain(text: string): string {
  return text
    .replace(/\[\[[a-z0-9-]+\|([^\]]+)\]\]/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\{phone\}/g, siteConfig.phone.display);
}
