import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://darbujan.com"),
  title: "TSX pro LAMP fullstack vývojáře | Hynek Dařbujan",
  description: "Mini školení pro zkušeného PHP/LAMP vývojáře — TSX, React komponenty a moderní frontendový způsob přemýšlení.",
  alternates: { canonical: "https://darbujan.com/learning/tsx-vs-lamp" },
  openGraph: {
    title: "TSX pro LAMP fullstack vývojáře | Hynek Dařbujan",
    description: "Mini školení pro zkušeného PHP/LAMP vývojáře — TSX, React komponenty a moderní frontendový způsob přemýšlení.",
    url: "https://darbujan.com/learning/tsx-vs-lamp",
    siteName: "Hynek Dařbujan",
    locale: "cs_CZ",
    type: "article",
  },
};

const outline = [
  "Co je TSX",
  "Mentální model Reactu/TSX",
  "Komponenta jako funkce",
  <>Vkládání hodnot přes <code className="text-sm bg-gray-100 px-1 rounded">{"{}"}</code></>,
  "Props",
  <>
    <code className="text-sm bg-gray-100 px-1 rounded">className</code>,{" "}
    <code className="text-sm bg-gray-100 px-1 rounded">htmlFor</code> a rozdíly oproti HTML
  </>,
  "Eventy",
  <>Stav přes <code className="text-sm bg-gray-100 px-1 rounded">useState</code></>,
  "Render seznamů",
  "Podmíněné zobrazení",
  <><code className="text-sm bg-gray-100 px-1 rounded">children</code></>,
  "Formuláře a controlled inputy",
  "TypeScript typování props, stavu a API dat",
  "TSX vs jQuery / klasické JS",
  "Časté chyby při přechodu z jQuery/DOM stylu",
  "Praktický mini příklad",
  "Jak o TSX přemýšlet jako back-end vývojář",
  "Mini tahák",
  "Co se učit po základech TSX",
];

export default function TsxVsLamp() {
  return (
    <main className="px-6 pt-12 pb-24 max-w-2xl mx-auto">
      <Link href="/learning" className="text-sm text-gray-400 hover:text-gray-700 mb-8 inline-block">← Školení</Link>

      <article>
        <h1 className="text-3xl font-black mb-4 text-gray-900">TSX pro LAMP fullstack vývojáře</h1>
        <p className="text-gray-600 mb-12">
          Mini školení pro zkušeného PHP/LAMP vývojáře, který zná čistý JS, jQuery a menší interní knihovny, ale chce pochopit TSX, React komponenty a moderní frontendový způsob přemýšlení.
        </p>

        <h2 className="text-xl font-bold mb-4 text-gray-800">Obsah</h2>
        <ol className="flex flex-col gap-2 text-gray-600">
          {outline.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-gray-300 font-mono w-6 shrink-0 text-right">{i + 1}.</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>

        <p className="mt-16 text-gray-400 text-sm italic">Obsah lekce se připravuje — brzy zde.</p>
      </article>
    </main>
  );
}
