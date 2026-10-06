import type { Viewport } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "../globals.css";

const arabic = IBM_Plex_Sans_Arabic({ subsets: ["arabic", "latin"], weight: ["400", "500", "600", "700"], variable: "--font-sans", display: "swap" });

export const viewport: Viewport = { themeColor: "#1f5450", width: "device-width", initialScale: 1 };

export default function ArLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar-TN" dir="rtl" className={arabic.variable} style={{ ["--font-display" as string]: "var(--font-sans)" }}>
      <body>{children}</body>
    </html>
  );
}
