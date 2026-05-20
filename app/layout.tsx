import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://darbujan.com"),
  title: "Hynek Dařbujan — weby a projekty",
  description: "Stavím weby a SaaS projekty večer po práci. Levné menu, ticketing, kalkulačky a další.",
  alternates: { canonical: "https://darbujan.com" },
  openGraph: {
    title: "Hynek Dařbujan — weby a projekty",
    description: "Stavím weby a SaaS projekty večer po práci. Levné menu, ticketing, kalkulačky a další.",
    url: "https://darbujan.com",
    siteName: "Hynek Dařbujan",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/api/og?title=Hynek+Da%C5%99bujan&sub=weby+a+projekty", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hynek Dařbujan — weby a projekty",
    description: "Stavím weby a SaaS projekty večer po práci.",
    images: ["/api/og?title=Hynek+Da%C5%99bujan&sub=weby+a+projekty"],
  },
  icons: { icon: "/favicon.svg" },
  robots: { index: true, follow: true },
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
