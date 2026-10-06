import type { Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "../globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap", axes: ["opsz"] });

export const viewport: Viewport = { themeColor: "#1f5450", width: "device-width", initialScale: 1 };

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-TN" dir="ltr" className={`${sans.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
