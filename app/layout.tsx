import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Hynek Dařbujan",
  description: "Stavím weby a testuju nápady v praxi. Podívej se na projekty.",
  openGraph: {
    title: "Hynek Dařbujan",
    description: "Stavím weby a testuju nápady v praxi.",
    url: "https://darbujan.com",
    siteName: "Hynek Dařbujan",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hynek Dařbujan",
    description: "Stavím weby a testuju nápady v praxi.",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body className="bg-white text-gray-900 antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
