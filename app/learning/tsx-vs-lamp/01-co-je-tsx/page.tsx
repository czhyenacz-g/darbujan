import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-xl font-bold mt-12 mb-3 text-gray-900">{children}</h2>;
}
function H3({ children }: { children: ReactNode }) {
  return <h3 className="font-semibold mt-6 mb-2 text-gray-800">{children}</h3>;
}
function P({ children }: { children: ReactNode }) {
  return <p className="text-gray-600 mb-4 leading-relaxed">{children}</p>;
}
function IC({ children }: { children: ReactNode }) {
  return <code className="bg-gray-100 text-gray-800 text-sm px-1.5 py-0.5 rounded font-mono">{children}</code>;
}
function CB({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-xl bg-gray-950 text-gray-100 p-4 text-sm font-mono leading-relaxed mb-6">
      <code>{children}</code>
    </pre>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://darbujan.com"),
  title: "Co je TSX | Hynek Dařbujan",
  description: "Vysvětlení TSX jako TypeScriptového zápisu UI pro vývojáře přicházející z LAMP, PHP a jQuery světa.",
  alternates: { canonical: "https://darbujan.com/learning/tsx-vs-lamp/01-co-je-tsx" },
  openGraph: {
    title: "Co je TSX | Hynek Dařbujan",
    description: "Vysvětlení TSX jako TypeScriptového zápisu UI pro vývojáře přicházející z LAMP, PHP a jQuery světa.",
    url: "https://darbujan.com/learning/tsx-vs-lamp/01-co-je-tsx",
    siteName: "Hynek Dařbujan",
    locale: "cs_CZ",
    type: "article",
  },
};

export default function Chapter01() {
  return (
    <main className="px-6 pt-12 pb-24 max-w-2xl mx-auto">
      <Link href="/learning/tsx-vs-lamp" className="text-sm text-gray-400 hover:text-gray-700 mb-8 inline-block">
        ← TSX pro LAMP vývojáře
      </Link>

      <article>
        <span className="inline-block text-xs font-mono text-gray-400 bg-gray-100 px-2 py-1 rounded mb-4">kapitola 01</span>
        <h1 className="text-3xl font-black mb-6 text-gray-900">Co je TSX</h1>

        <P>
          Tato kapitola vysvětluje, co vlastně znamená TSX, proč vypadá jako HTML uvnitř JavaScriptu/TypeScriptu a
          proč to není totéž jako klasická PHP šablona, jQuery generování HTML stringů nebo statické HTML.
        </P>
        <P>
          <em>
            Cíl kapitoly: získat základní orientaci. Po přečtení by mělo být jasné, co je <IC>.tsx</IC> soubor, jak
            souvisí s Reactem, TypeScriptem a JSX, a proč se v moderním frontendu často píše UI právě tímto způsobem.
          </em>
        </P>

        <H2>Krátká definice</H2>
        <P>TSX znamená:</P>
        <CB>{`TypeScript + JSX`}</CB>
        <P>
          Jinými slovy: TSX je syntaxe, ve které můžeš psát TypeScript a zároveň uvnitř něj zapisovat UI strukturou
          podobnou HTML.
        </P>
        <P>Jednoduchý příklad:</P>
        <CB>{`function Hello() {\n  return <h1>Ahoj světe</h1>;\n}`}</CB>
        <P>
          Na první pohled to vypadá, jako by JavaScriptová funkce vracela HTML. Technicky ale nejde o čisté HTML.
          Jde o syntaxi, kterou build nástroj přeloží do JavaScriptu, kterému prohlížeč rozumí.
        </P>

        <H2>TSX není HTML</H2>
        <P>Tohle je první důležitá věc. Když napíšeš:</P>
        <CB>{`const title = <h1>Ahoj</h1>;`}</CB>
        <P>nevzniká tím rovnou HTML string:</P>
        <CB>{`<h1>Ahoj</h1>`}</CB>
        <P>Vzniká popis UI, se kterým potom pracuje React.</P>
        <CB>{`TSX zápis\n→ build nástroj ho přeloží\n→ React podle něj vytvoří nebo aktualizuje UI`}</CB>
        <P>
          Důležité je, že TSX je zdrojový zápis pro UI, ne finální HTML dokument.
        </P>

        <H2>TSX vs JSX</H2>
        <P>Možná narazíš na dvě podobné přípony:</P>
        <CB>{`.jsx\n.tsx`}</CB>
        <P>Rozdíl:</P>
        <CB>{`JSX = JavaScript + JSX syntaxe\nTSX = TypeScript + JSX syntaxe`}</CB>
        <P>Příklad JSX:</P>
        <CB>{`function UserCard({ name }) {\n  return <div>{name}</div>;\n}`}</CB>
        <P>Příklad TSX:</P>
        <CB>{`type UserCardProps = {\n  name: string;\n};\n\nfunction UserCard({ name }: UserCardProps) {\n  return <div>{name}</div>;\n}`}</CB>
        <P>
          V TSX navíc používáš TypeScript typy. To znamená, že můžeš typovat props, stav, data z API, eventy a
          další věci.
        </P>
        <P>
          Pro zkušeného back-end vývojáře je TSX většinou lepší než čistý JSX, protože typy výrazně pomáhají
          udržet větší projekt pod kontrolou.
        </P>

        <H2>Co je JSX část</H2>
        <P>
          JSX je syntaxe, která umožňuje psát něco jako HTML přímo uvnitř JavaScriptu nebo TypeScriptu.
        </P>
        <CB>{`function App() {\n  return (\n    <main>\n      <h1>Moje aplikace</h1>\n      <p>Vítej na stránce.</p>\n    </main>\n  );\n}`}</CB>
        <P>Toto není PHP šablona a není to ani HTML soubor. Je to TypeScriptový kód s JSX syntaxí.</P>
        <P>Uvnitř můžeš kombinovat:</P>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1 leading-relaxed">
          <li>značky podobné HTML,</li>
          <li>vlastní komponenty,</li>
          <li>proměnné,</li>
          <li>podmínky,</li>
          <li>mapování polí,</li>
          <li>event handlery.</li>
        </ul>
        <P>Například:</P>
        <CB>{`function Greeting() {\n  const name = "Hynek";\n\n  return <p>Ahoj, {name}</p>;\n}`}</CB>
        <P>
          Složené závorky <IC>{"{}"}</IC> znamenají: tady se vyhodnotí JavaScriptový/TypeScriptový výraz.
        </P>

        <H2>Co je TypeScript část</H2>
        <P>TypeScript je nadstavba JavaScriptu, která přidává typy.</P>
        <P>JavaScript:</P>
        <CB>{`function add(a, b) {\n  return a + b;\n}`}</CB>
        <P>TypeScript:</P>
        <CB>{`function add(a: number, b: number): number {\n  return a + b;\n}`}</CB>
        <P>U TSX komponent to znamená, že můžeš jasně říct, jaká data komponenta očekává:</P>
        <CB>{`type ProjectCardProps = {\n  title: string;\n  description: string;\n  url: string;\n};\n\nfunction ProjectCard({ title, description, url }: ProjectCardProps) {\n  return (\n    <article>\n      <h2>{title}</h2>\n      <p>{description}</p>\n      <a href={url}>Otevřít projekt</a>\n    </article>\n  );\n}`}</CB>
        <P>
          Když pak komponentě předáš špatná data, TypeScript tě může upozornit ještě před tím, než se chyba projeví
          v prohlížeči.
        </P>
        <P>Užitečná analogie pro PHP vývojáře:</P>
        <CB>{`// PHP s type hinty\nfunction formatPrice(float $price): string {\n  return $price . " Kč";\n}\n\n// TypeScript\nfunction formatPrice(price: number): string {\n  return price + " Kč";\n}`}</CB>

        <H2>Jak se TSX liší od PHP šablony</H2>
        <P>V PHP můžeš psát například:</P>
        <CB>{`<h1><?= $title ?></h1>\n<p><?= $description ?></p>`}</CB>
        <P>nebo:</P>
        <CB>{`<?php foreach ($projects as $project): ?>\n  <h2><?= $project['title'] ?></h2>\n<?php endforeach; ?>`}</CB>
        <P>V TSX by podobný princip vypadal takto:</P>
        <CB>{`function ProjectList({ projects }: { projects: Project[] }) {\n  return (\n    <section>\n      {projects.map((project) => (\n        <article key={project.id}>\n          <h2>{project.title}</h2>\n          <p>{project.description}</p>\n        </article>\n      ))}\n    </section>\n  );\n}`}</CB>
        <P>Podobnost: data se promítají do výsledného UI.</P>
        <P>Rozdíl:</P>
        <CB>{`PHP šablona typicky generuje HTML na serveru pro jeden request\n\nTSX komponenta popisuje UI jako funkci nad daty a stavem\nReact podle toho UI vytváří a aktualizuje v prohlížeči nebo v rámci frameworku`}</CB>
        <P>V PHP přemýšlíš: „vygeneruj HTML odpověď". V React/TSX světě přemýšlíš: „popiš, jak má UI vypadat pro aktuální data a stav".</P>

        <H2>Jak se TSX liší od jQuery přístupu</H2>
        <P>V jQuery se často pracovalo procedurálně:</P>
        <CB>{`$("#title").text("Ahoj");\n$("#box").hide();\n$("#items").append("<li>Nová položka</li>");`}</CB>
        <P>Tedy: najdi element → změň ho → přidej HTML → skryj HTML → pověs event handler.</P>
        <P>V TSX/Reactu se snažíš spíš popsat výsledek:</P>
        <CB>{`function Box({ visible }: { visible: boolean }) {\n  return (\n    <div>\n      {visible && <p>Viditelný obsah</p>}\n    </div>\n  );\n}`}</CB>
        <P>Neříkáš tedy: „najdi element a skryj ho", ale: „pokud <IC>visible</IC> je <IC>true</IC>, zobraz tento kus UI, pokud <IC>false</IC>, vůbec ho nevyrenderuj".</P>
        <P>To je jeden z hlavních mentálních rozdílů.</P>

        <H2>TSX jako zápis stromu UI</H2>
        <P>UI si můžeš představit jako strom.</P>
        <CB>{`function App() {\n  return (\n    <main>\n      <Header />\n      <ProjectList />\n      <Footer />\n    </main>\n  );\n}`}</CB>
        <P>Stromově:</P>
        <CB>{`App\n└── main\n    ├── Header\n    ├── ProjectList\n    └── Footer`}</CB>
        <P>Komponenty můžeš skládat do sebe podobně jako funkce nebo šablony.</P>
        <CB>{`function Header() {\n  return <header>Moje stránka</header>;\n}\n\nfunction App() {\n  return (\n    <>\n      <Header />\n      <main>Obsah stránky</main>\n    </>\n  );\n}`}</CB>
        <P>Komponenta je v základu funkce, která vrací UI.</P>

        <H2>Malá písmena vs velká písmena</H2>
        <P>V TSX je důležitý rozdíl mezi malými a velkými písmeny.</P>
        <P>HTML elementy se píšou malým písmenem:</P>
        <CB>{`<div>\n  <h1>Nadpis</h1>\n</div>`}</CB>
        <P>Vlastní komponenty se píšou velkým písmenem:</P>
        <CB>{`<ProjectCard />\n<UserProfile />\n<MainNavigation />`}</CB>
        <P>React podle toho pozná, jestli jde o běžný HTML element, nebo o tvoji komponentu.</P>
        <CB>{`function ProjectCard() {\n  return <article>Projekt</article>;\n}\n\nfunction App() {\n  return <ProjectCard />;\n}`}</CB>
        <P>
          Kdybys komponentu napsal malým písmenem, React by ji bral jako HTML tag, což není to, co chceš.
        </P>

        <H2>TSX soubor v projektu</H2>
        <P>
          Soubor s příponou <IC>.tsx</IC> se používá tam, kde kombinuješ TypeScript a JSX syntaxi.
        </P>
        <CB>{`App.tsx\npage.tsx\nlayout.tsx\nProjectCard.tsx\nButton.tsx`}</CB>
        <P>Soubory <IC>.ts</IC> se používají pro TypeScript bez JSX/TSX zápisu.</P>
        <CB>{`// .ts soubor\nexport function formatPrice(value: number): string {\n  return value + " Kč";\n}\n\n// .tsx soubor\nexport function Price({ value }: { value: number }) {\n  return <span>{value} Kč</span>;\n}`}</CB>
        <P>Jednoduché pravidlo:</P>
        <CB>{`když soubor vrací nebo obsahuje JSX/TSX značky → .tsx\nkdyž obsahuje jen logiku, typy, helpery nebo konfiguraci → .ts`}</CB>

        <H2>TSX a React</H2>
        <CB>{`TSX\n→ způsob, jak zapisuješ UI\n\nReact\n→ knihovna, která podle tohoto zápisu vytváří a aktualizuje UI\n\nNext.js\n→ framework nad Reactem, který řeší stránky, routování,\n   metadata, serverové renderování a další věci`}</CB>
        <P>Tohle je užitečné rozlišovat:</P>
        <CB>{`TypeScript není React\nTSX není React\nReact není Next.js\nNext.js používá React\nReact často používá TSX`}</CB>

        <H2>TSX a Next.js</H2>
        <P>V Next.js App Routeru jsou <IC>.tsx</IC> soubory často přímo stránky.</P>
        <CB>{`app/page.tsx                        → /\napp/learning/page.tsx              → /learning\napp/learning/tsx-vs-lamp/page.tsx  → /learning/tsx-vs-lamp`}</CB>
        <P>Uvnitř <IC>page.tsx</IC> může být komponenta:</P>
        <CB>{`export default function Page() {\n  return (\n    <main>\n      <h1>TSX pro LAMP fullstack vývojáře</h1>\n      <p>Úvod do školení.</p>\n    </main>\n  );\n}`}</CB>
        <P>
          V Next.js tedy TSX často nepíšeš jen jako malý widget, ale jako celou stránku.
        </P>

        <H2>Co se s TSX stane při buildu</H2>
        <P>Prohlížeč neumí přímo spustit TSX. Build nástroj z něj připraví JavaScript, kterému prohlížeč rozumí.</P>
        <CB>{`App.tsx\n↓\nTypeScript/React build\n↓\nJavaScript bundle nebo serverový build\n↓\nprohlížeč dostane HTML/CSS/JS`}</CB>
        <P>
          Proto nestačí vzít <IC>.tsx</IC> soubor a otevřít ho přímo v prohlížeči jako <IC>.html</IC>.
          Potřebuješ vývojový server nebo build proces: <IC>npm run dev</IC> nebo <IC>npm run build</IC>.
        </P>

        <H2>Základní syntaxe TSX</H2>
        <H3>Jeden kořenový element</H3>
        <P>Komponenta musí vracet jeden kořenový element. Správně:</P>
        <CB>{`function App() {\n  return (\n    <main>\n      <h1>Nadpis</h1>\n      <p>Text</p>\n    </main>\n  );\n}`}</CB>
        <P>Pokud nechceš přidávat zbytečný <IC>{"<div>"}</IC>, použiješ fragment:</P>
        <CB>{`function App() {\n  return (\n    <>\n      <h1>Nadpis</h1>\n      <p>Text</p>\n    </>\n  );\n}`}</CB>
        <H3>Hodnoty přes složené závorky</H3>
        <CB>{`function Greeting() {\n  const name = "Hynek";\n\n  return <p>Ahoj, {name}</p>;\n}`}</CB>
        <P>Uvnitř <IC>{"{}"}</IC> může být výraz:</P>
        <CB>{`<p>{user.isAdmin ? "Admin" : "Uživatel"}</p>`}</CB>
        <P>Ne klasický blok s <IC>if</IC>:</P>
        <CB>{`// špatně\n<p>{if (user.isAdmin) "Admin"}</p>`}</CB>
        <H3>Atributy</H3>
        <CB>{`// string atribut\n<input type="email" />\n\n// hodnota z proměnné\n<input value={email} />\n\n// boolean atribut\n<button disabled={isSaving}>Uložit</button>\n\n// event handler\n<button onClick={handleClick}>Klikni</button>`}</CB>

        <H2>Proč se používá className místo class</H2>
        <P>V HTML píšeš:</P>
        <CB>{`<div class="card"></div>`}</CB>
        <P>V TSX píšeš:</P>
        <CB>{`<div className="card"></div>`}</CB>
        <P>
          Důvod je historický a technický: <IC>class</IC> je v JavaScriptu klíčové slovo. JSX/TSX proto
          používá <IC>className</IC>.
        </P>
        <P>Podobně:</P>
        <CB>{`// HTML\n<label for="email">E-mail</label>\n\n// TSX\n<label htmlFor="email">E-mail</label>`}</CB>
        <P>Tyto rozdíly jsou ze začátku otravné, ale rychle se zautomatizují.</P>

        <H2>Bezpečnost: hodnoty se escapují</H2>
        <P>Když v TSX vložíš hodnotu:</P>
        <CB>{`const name = "<script>alert('xss')</script>";\n\nfunction App() {\n  return <p>{name}</p>;\n}`}</CB>
        <P>
          React ji standardně nevloží jako spustitelné HTML, ale jako text. To je bezpečnější než ruční skládání
          HTML stringů.
        </P>
        <P>V jQuery nebo klasickém JS bylo rizikové:</P>
        <CB>{`element.innerHTML = userInput;\n// nebo\n$("#box").html(userInput);`}</CB>
        <P>
          V TSX je běžný zápis <IC>{"<p>{userInput}</p>"}</IC> standardně bezpečnější, protože React hodnotu
          escapuje.
        </P>
        <P>
          Pokud bys opravdu potřeboval vložit raw HTML, existuje <IC>dangerouslySetInnerHTML</IC> — ale již název
          napovídá, že s tím je potřeba zacházet velmi opatrně.
        </P>

        <H2>Malý praktický příklad</H2>
        <P>Datový typ:</P>
        <CB>{`type Project = {\n  id: string;\n  title: string;\n  description: string;\n  url: string;\n};`}</CB>
        <P>Komponenta:</P>
        <CB>{`type ProjectCardProps = {\n  project: Project;\n};\n\nfunction ProjectCard({ project }: ProjectCardProps) {\n  return (\n    <article className="project-card">\n      <h2>{project.title}</h2>\n      <p>{project.description}</p>\n      <a href={project.url}>Otevřít</a>\n    </article>\n  );\n}`}</CB>
        <P>Použití:</P>
        <CB>{`const project = {\n  id: "levnemenu",\n  title: "LevnéMenu.cz",\n  description: "Denní menu a restaurace přehledně na mapě.",\n  url: "https://levnemenu.cz",\n};\n\nfunction App() {\n  return <ProjectCard project={project} />;\n}`}</CB>
        <P>Tady už je vidět několik základních principů:</P>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1 leading-relaxed">
          <li>UI je komponenta,</li>
          <li>komponenta dostává data přes props,</li>
          <li>data jsou typovaná,</li>
          <li>výstup vypadá jako HTML, ale je to TSX,</li>
          <li>hodnoty se vkládají přes <IC>{"{}"}</IC>.</li>
        </ul>

        <H2>Jak o TSX přemýšlet jako LAMP vývojář</H2>
        <CB>{`PHP šablona:\ndata + template → HTML\n\nTSX komponenta:\nprops/state + komponenta → UI`}</CB>
        <P>
          Ale rozdíl je v tom, že TSX komponenta se může v prohlížeči opakovaně přepočítávat podle změny stavu.
        </P>
        <CB>{`uživatel klikne na tlačítko\n↓\nzmění se stav\n↓\nReact znovu vyhodnotí komponentu\n↓\nUI se aktualizuje`}</CB>
        <P>
          Není potřeba ručně hledat element a měnit jeho text. Změníš data nebo stav a UI z toho vyplyne.
        </P>

        <H2>Co si z této kapitoly odnést</H2>
        <P>
          TSX je zápis UI pomocí TypeScriptu a JSX syntaxe. Vypadá podobně jako HTML, ale není to HTML soubor ani
          HTML string. Je to zdrojový kód, který se při buildu překládá do JavaScriptu.
        </P>
        <P>
          TSX se nejčastěji používá s Reactem. React podle něj vytváří a aktualizuje uživatelské rozhraní.
          Frameworky jako Next.js na Reactu staví a používají TSX nejen pro komponenty, ale i pro celé stránky.
        </P>
        <P>
          Pro LAMP vývojáře je nejdůležitější změna v myšlení: místo ručního generování HTML stringů nebo manipulace
          s DOMem popisuješ, jak má UI vypadat pro aktuální data a stav.
        </P>
        <CB>{`TSX je TypeScriptový zápis UI, který vypadá jako HTML,\nale chová se jako součást JavaScript/React aplikace.`}</CB>

        <H2>Mini tahák</H2>
        <CB>{`// komponenta\nfunction App() {\n  return <h1>Ahoj</h1>;\n}\n\n// hodnota v UI\nconst name = "Hynek";\n<p>{name}</p>;\n\n// vlastní komponenta\n<ProjectCard />\n\n// HTML element\n<div></div>\n\n// CSS třída\n<div className="card"></div>\n\n// label for\n<label htmlFor="email">E-mail</label>\n\n// fragment\n<>\n  <h1>Nadpis</h1>\n  <p>Text</p>\n</>\n\n// typované props\ntype ButtonProps = {\n  label: string;\n};\n\nfunction Button({ label }: ButtonProps) {\n  return <button>{label}</button>;\n}`}</CB>

        <H2>Co bude dál</H2>
        <P>
          Teď už víš, co je TSX na základní úrovni. Další kapitola vysvětlí mentální model Reactu/TSX: proč se
          neprogramuje hlavně stylem „najdi element a změň ho", ale stylem „změň stav/data a UI se podle toho samo
          přepočítá".
        </P>
      </article>

      <nav className="mt-16 flex justify-between items-center text-sm border-t border-gray-100 pt-8">
        <Link
          href="/learning/tsx-vs-lamp/00-priprava-prostredi"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
        >
          <span aria-hidden="true">←</span>
          <span>00. Příprava prostředí</span>
        </Link>
        <span className="text-gray-300 text-xs">02 — připravuje se</span>
      </nav>
    </main>
  );
}
