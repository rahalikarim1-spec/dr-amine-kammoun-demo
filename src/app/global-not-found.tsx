import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "404 | Dr Amine Kammoun", robots: { index: false, follow: true } };

/** Fallback 404 for URLs outside /fr/ and /ar/. */
export default function GlobalNotFound() {
  return (
    <html lang="fr-TN">
      <body>
        <main className="container-x py-24 text-center">
          <p className="font-display text-7xl font-semibold text-teal-700/30">404</p>
          <h1 className="mt-2">Page introuvable · الصفحة غير موجودة</h1>
          <div className="mt-8 flex justify-center gap-3">
            <a href="/fr/" className="btn btn-primary">Français</a>
            <a href="/ar/" className="btn btn-secondary" lang="ar" dir="rtl">العربية</a>
          </div>
        </main>
      </body>
    </html>
  );
}
