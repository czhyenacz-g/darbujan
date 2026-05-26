export type Chapter = {
  num: number;
  slug: string | null;
  title: string;
  description: string;
};

export const tsxVsLampChapters: Chapter[] = [
  {
    num: 0,
    slug: "00-priprava-prostredi",
    title: "Příprava prostředí pro vývoj TSX aplikace",
    description: "Praktická příprava lokálního i serverového prostředí pro vývoj TSX, React a Next.js aplikací.",
  },
  {
    num: 1,
    slug: "01-co-je-tsx",
    title: "Co je TSX",
    description: "Vysvětlení TSX jako TypeScriptového zápisu UI pro vývojáře přicházející z LAMP, PHP a jQuery světa.",
  },
  { num: 2, slug: null, title: "Mentální model Reactu/TSX", description: "" },
  { num: 3, slug: null, title: "Komponenta jako funkce", description: "" },
  { num: 4, slug: null, title: "Vkládání hodnot přes {}", description: "" },
  { num: 5, slug: null, title: "Props", description: "" },
  { num: 6, slug: null, title: "className, htmlFor a rozdíly oproti HTML", description: "" },
  { num: 7, slug: null, title: "Eventy", description: "" },
  { num: 8, slug: null, title: "Stav přes useState", description: "" },
  { num: 9, slug: null, title: "Render seznamů", description: "" },
  { num: 10, slug: null, title: "Podmíněné zobrazení", description: "" },
  { num: 11, slug: null, title: "children", description: "" },
  { num: 12, slug: null, title: "Formuláře a controlled inputy", description: "" },
  { num: 13, slug: null, title: "TypeScript typování props, stavu a API dat", description: "" },
  { num: 14, slug: null, title: "TSX vs jQuery / klasické JS", description: "" },
  { num: 15, slug: null, title: "Časté chyby při přechodu z jQuery/DOM stylu", description: "" },
  { num: 16, slug: null, title: "Praktický mini příklad", description: "" },
  { num: 17, slug: null, title: "Jak o TSX přemýšlet jako back-end vývojář", description: "" },
  { num: 18, slug: null, title: "Mini tahák", description: "" },
  { num: 19, slug: null, title: "Co se učit po základech TSX", description: "" },
];

export const publishedChapters = tsxVsLampChapters.filter(
  (ch): ch is Chapter & { slug: string } => ch.slug !== null
);
