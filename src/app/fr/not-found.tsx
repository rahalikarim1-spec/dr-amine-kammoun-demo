import type { Metadata } from "next";
import { NotFoundView } from "@/components/NotFoundView";

export const metadata: Metadata = { title: "Page introuvable | Dr Amine Kammoun", robots: { index: false, follow: true } };

export default function NotFound() {
  return <NotFoundView lang="fr" />;
}
