import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { Lang } from "./types";
import { allStaticParams, resolvePage } from "./links";
import { getContent } from "./content";
import { buildMetadata } from "./metadata";
import { PageView } from "@/components/PageView";
import { SiteShell } from "@/components/SiteShell";

type Props = { params: Promise<{ slug?: string[] }> };

export const staticParamsFor = (lang: Lang) => allStaticParams().filter((p) => p.lang === lang).map(({ slug }) => ({ slug }));

export async function metadataFor(lang: Lang, { params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = resolvePage(lang, slug);
  if (!page) return {};
  return buildMetadata(page, lang, getContent(lang, page.id));
}

export async function PageFor({ lang, params }: { lang: Lang } & Props) {
  const { slug } = await params;
  const page = resolvePage(lang, slug);
  if (!page) notFound();
  return (
    <SiteShell lang={lang} pageId={page.id}>
      <PageView page={page} lang={lang} />
    </SiteShell>
  );
}
