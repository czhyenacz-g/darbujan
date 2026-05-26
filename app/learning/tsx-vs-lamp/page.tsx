import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

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

type Chapter = { num: number; title: ReactNode; slug: string | null };

const chapters: Chapter[] = [
  { num: 0, title: "Příprava prostředí pro vývoj TSX aplikace", slug: "00-priprava-prostredi" },
  { num: 1, title: "Co je TSX", slug: "01-co-je-tsx" },
  { num: 2, title: "Mentální model Reactu/TSX", slug: null },
  { num: 3, title: "Komponenta jako funkce", slug: null },
  {
    num: 4,
    title: <>Vkládání hodnot přes <code className="text-sm bg-gray-100 px-1 rounded">{"{}"}  </code></>,
    slug: null,
  },
  { num: 5, title: "Props", slug: null },
  {
    num: 6,
    title: (
      <>
        <code className="text-sm bg-gray-100 px-1 rounded">className</code>,{" "}
        <code className="text-sm bg-gray-100 px-1 rounded">htmlFor</code> a rozdíly oproti HTML
      </>
    ),
    slug: null,
  },
  { num: 7, title: "Eventy", slug: null },
  {
    num: 8,
    title: <>Stav přes <code className="text-sm bg-gray-100 px-1 rounded">useState</code></>,
    slug: null,
  },
  { num: 9, title: "Render seznamů", slug: null },
  { num: 10, title: "Podmíněné zobrazení", slug: null },
  {
    num: 11,
    title: <><code className="text-sm bg-gray-100 px-1 rounded">children</code></>,
    slug: null,
  },
  { num: 12, title: "Formuláře a controlled inputy", slug: null },
  { num: 13, title: "TypeScript typování props, stavu a API dat", slug: null },
  { num: 14, title: "TSX vs jQuery / klasické JS", slug: null },
  { num: 15, title: "Časté chyby při přechodu z jQuery/DOM stylu", slug: null },
  { num: 16, title: "Praktický mini příklad", slug: null },
  { num: 17, title: "Jak o TSX přemýšlet jako back-end vývojář", slug: null },
  { num: 18, title: "Mini tahák", slug: null },
  { num: 19, title: "Co se učit po základech TSX", slug: null },
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

        <section className="mb-12 border-l-2 border-gray-200 pl-5 flex flex-col gap-4 text-gray-600 text-sm leading-relaxed">
          <h2 className="text-base font-bold text-gray-800 -ml-5 pl-5 border-l-2 border-gray-900">Proč tohle školení vzniká</h2>
          <p>Nejsem člověk, který by chtěl psát další univerzální React tutorial. Vycházím hlavně z LAMP světa, backendu, PHP, databází, čistého JavaScriptu, jQuery a různých vlastních mini řešení. TSX, React a Next.js beru jako další krok, který se chci naučit pořádně — ne jen tak, že něco vygeneruju a budu doufat, že to funguje.</p>
          <p>Tohle školení vzniká jako moje vlastní cesta, jak si moderní frontend srovnat v hlavě. A zároveň jako pokus pomoct někomu dalšímu, kdo je na tom podobně: už umí programovat, má za sebou reálné projekty, ale nechce se tvářit, že nový stack pochopí za deset minut jen proto, že „je senior".</p>
          <p>Věřím, že když se díky mně budeš rozvíjet ty, budu se rozvíjet i já. Nejvíc si člověk často ujasní věci ve chvíli, kdy je musí vysvětlit někomu jinému. A opravdová seniorita podle mě není jen v tom, co člověk sám umí, ale i v tom, co dokáže předat dál.</p>
          <p>AI používám hodně a myslím si, že může vývojáře výrazně posílit. Ale neměla by se používat slepě. AI je násobič — když má člověk zkušenost, úsudek a chuť ověřovat výsledek, může mu hodně pomoct. Kde ale není základní porozumění, není moc co násobit. Nula vynásobená čímkoliv je pořád nula.</p>
          <p>Jasně, jsem metalista a samuraj, takže mám rád sílu, disciplínu a trochu teatrálnosti. Ale taky mám rozum a vím, že AI není magie. Je to jazykový model — dobrý sluha, špatný pán a velmi špatná náhrada za vlastní úsudek.</p>
          <p>Cílem téhle série proto není jen opsat syntaxi TSX. Chci hlavně pochopit, proč se věci dělají určitým způsobem, jak o nich přemýšlet a jak moderní nástroje včetně AI používat jako pomocníka, ne jako náhradu vlastního mozku.</p>
          <p className="text-gray-400 italic">A férově přiznávám: všechny texty jsem prošel, upravil a ovlivnil, ale při jejich přípravě a revizi mi pomáhala AI.</p>
        </section>

        <h2 className="text-xl font-bold mb-4 text-gray-800">Obsah</h2>
        <ol className="flex flex-col gap-1">
          {chapters.map((ch) =>
            ch.slug ? (
              <li key={ch.num}>
                <Link
                  href={`/learning/tsx-vs-lamp/${ch.slug}`}
                  className="group flex items-start gap-3 p-4 rounded-2xl border-2 border-gray-100 hover:border-gray-900 transition-colors"
                >
                  <span className="text-gray-300 font-mono text-sm w-6 shrink-0 text-right pt-0.5">{ch.num}.</span>
                  <span className="text-gray-900 font-medium group-hover:underline">{ch.title}</span>
                </Link>
              </li>
            ) : (
              <li key={ch.num} className="flex items-start gap-3 px-4 py-2">
                <span className="text-gray-200 font-mono text-sm w-6 shrink-0 text-right">{ch.num}.</span>
                <span className="text-gray-400 text-sm">{ch.title}</span>
              </li>
            )
          )}
        </ol>

        <p className="mt-8 text-gray-400 text-sm italic">Kapitoly 2–19 se připravují.</p>
      </article>
    </main>
  );
}
