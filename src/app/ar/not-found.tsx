import type { Metadata } from "next";
import { NotFoundView } from "@/components/NotFoundView";

export const metadata: Metadata = { title: "الصفحة غير موجودة | د. أمين قمون", robots: { index: false, follow: true } };

export default function NotFound() {
  return <NotFoundView lang="ar" />;
}
