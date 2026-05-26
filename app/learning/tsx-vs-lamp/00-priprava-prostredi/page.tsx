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
  title: "Příprava prostředí pro vývoj TSX aplikace | Hynek Dařbujan",
  description: "Praktická příprava lokálního i serverového prostředí pro vývoj TSX, React a Next.js aplikací.",
  alternates: { canonical: "https://darbujan.com/learning/tsx-vs-lamp/00-priprava-prostredi" },
  openGraph: {
    title: "Příprava prostředí pro vývoj TSX aplikace | Hynek Dařbujan",
    description: "Praktická příprava lokálního i serverového prostředí pro vývoj TSX, React a Next.js aplikací.",
    url: "https://darbujan.com/learning/tsx-vs-lamp/00-priprava-prostredi",
    siteName: "Hynek Dařbujan",
    locale: "cs_CZ",
    type: "article",
  },
};

export default function Chapter00() {
  return (
    <main className="px-6 pt-12 pb-24 max-w-2xl mx-auto">
      <Link href="/learning/tsx-vs-lamp" className="text-sm text-gray-400 hover:text-gray-700 mb-8 inline-block">
        ← TSX pro LAMP vývojáře
      </Link>

      <article>
        <span className="inline-block text-xs font-mono text-gray-400 bg-gray-100 px-2 py-1 rounded mb-4">kapitola 00</span>
        <h1 className="text-3xl font-black mb-6 text-gray-900">Příprava prostředí pro vývoj TSX aplikace</h1>

        <P>
          Tato kapitola je praktický start před samotným TSX. Cílem není zatím psát komponenty, ale pochopit, co je
          potřeba mít připravené, jak se TSX aplikace spouští lokálně, co znamenají příkazy
          typu <IC>npm install</IC>, <IC>npm run dev</IC>, <IC>npm run build</IC>, a jak se taková aplikace liší od
          klasického LAMP projektu.
        </P>
        <P>
          <em>
            Cílový čtenář: zkušený PHP/LAMP fullstack vývojář, který zná čistý JavaScript, jQuery a případně vlastní
            interní JS mini knihovny, ale zatím nemá pevný mentální model moderního React/TSX/Next.js vývoje.
          </em>
        </P>

        <H2>Proč tuhle kapitolu řešit před samotným TSX</H2>
        <P>U klasického LAMP projektu je prostředí většinou poměrně přímočaré:</P>
        <CB>{`Apache nebo Nginx\nPHP\nMySQL/MariaDB\nsoubory projektu na serveru`}</CB>
        <P>
          Request přijde na server, PHP ho zpracuje a vrátí HTML. V jednoduchém případě upravíš <IC>.php</IC> soubor,
          nahraješ ho na server a změna je hned vidět.
        </P>
        <P>U moderní TSX aplikace je mezi zdrojovým kódem a výslednou stránkou ještě další vrstva:</P>
        <CB>{`zdrojové .tsx/.ts/.css soubory\n↓\ninstalace závislostí\n↓\nlokální dev server\n↓\nbuild\n↓\nvýsledná aplikace pro prohlížeč nebo Node.js runtime`}</CB>
        <P>
          To je jeden z hlavních rozdílů. TSX soubor obvykle neposíláš do prohlížeče přímo tak, jak ho napíšeš.
          Nejdřív ho zpracuje nástroj jako Vite, Next.js, Webpack, SWC, Babel nebo TypeScript compiler. Výsledkem je
          JavaScript, kterému prohlížeč rozumí.
        </P>
        <P>Prakticky to znamená, že se musíš naučit několik nových pojmů:</P>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1 leading-relaxed">
          <li>Node.js</li>
          <li>npm</li>
          <li><IC>package.json</IC></li>
          <li><IC>node_modules</IC></li>
          <li>dev server</li>
          <li>build</li>
          <li>produkční start</li>
          <li>statický deployment vs. serverový běh</li>
          <li>rozdíl mezi React + Vite a Next.js</li>
        </ul>

        <H2>Základní rozdíl proti LAMP vývoji</H2>
        <P>V LAMP světě často přemýšlíš takto:</P>
        <CB>{`URL → PHP soubor nebo router → server vygeneruje HTML → browser zobrazí výsledek`}</CB>
        <P>Příklad:</P>
        <CB>{`/products.php\n/article.php?id=123\n/admin/index.php`}</CB>
        <P>U React/TSX světa často přemýšlíš spíš takto:</P>
        <CB>{`data + komponenty + stav aplikace → výsledné UI`}</CB>
        <P>A podle použitého frameworku existují dvě běžné varianty:</P>
        <CB>{`React + Vite\n→ frontendová aplikace\n→ po buildu statické soubory HTML/CSS/JS\n→ servíruje Nginx, Apache nebo CDN`}</CB>
        <P>nebo:</P>
        <CB>{`Next.js\n→ aplikace se stránkami, routováním, metadaty a možností serverového renderování\n→ může generovat statické stránky\n→ nebo běžet jako Node.js server`}</CB>
        <P>
          Pro první pochopení TSX je jednodušší <strong>React + Vite</strong>. Pro reálný osobní web, katalog,
          obsahovou stránku nebo projekt se SEO je často vhodnější <strong>Next.js</strong>.
        </P>
        <P>
          Tento web <IC>darbujan.com</IC> je postavený v TSX a podle struktury
          typu <IC>app/learning/page.tsx</IC> odpovídá Next.js App Routeru.
        </P>

        <H2>Co je Node.js a proč ho potřebuješ</H2>
        <P>
          Node.js je JavaScriptový runtime mimo prohlížeč. Umožňuje spouštět JavaScript na počítači nebo serveru.
        </P>
        <P>
          Důležité: to, že má projekt Node.js nástroje, ještě neznamená, že musíš psát backend v Node.js.
        </P>
        <P>Pro PHP vývojáře může být užitečná analogie:</P>
        <CB>{`Composer v PHP světě\n→ správa závislostí a autoloadingu\n\nnpm v JS/TS světě\n→ správa závislostí, build nástrojů a skriptů`}</CB>
        <P>Node.js můžeš používat jen proto, aby:</P>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1 leading-relaxed">
          <li>stáhl JS/TS závislosti,</li>
          <li>spustil lokální dev server,</li>
          <li>zkompiloval TSX/TypeScript,</li>
          <li>sestavil produkční frontend,</li>
          <li>spustil Next.js aplikaci.</li>
        </ul>
        <P>Backend může klidně dál běžet v PHP. Node.js může být jen nástroj pro frontend.</P>

        <H2>Co je npm</H2>
        <P>
          <IC>npm</IC> je správce balíčků pro JavaScriptový ekosystém. Instaluje závislosti a spouští skripty
          definované v <IC>package.json</IC>.
        </P>
        <P>Základní příkazy:</P>
        <CB>{`npm install\nnpm run dev\nnpm run build\nnpm run start`}</CB>
        <P>Co znamenají:</P>
        <CB>{`npm install\n→ stáhne závislosti projektu do node_modules\n\nnpm run dev\n→ spustí lokální vývojový server\n\nnpm run build\n→ sestaví produkční verzi aplikace\n\nnpm run start\n→ spustí sestavenou produkční aplikaci, pokud to projekt podporuje`}</CB>
        <P>Existují i alternativy:</P>
        <CB>{`pnpm\nyarn\nbun`}</CB>
        <P>
          Ale pro začátek je nejjednodušší držet se <IC>npm</IC>, protože je dostupné automaticky s Node.js a většina
          projektů ho podporuje.
        </P>

        <H2>Co je package.json</H2>
        <P>
          Soubor <IC>package.json</IC> je jeden z nejdůležitějších souborů v JS/TS projektu. Je to něco jako kombinace:
        </P>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1 leading-relaxed">
          <li><IC>composer.json</IC>,</li>
          <li>metadat projektu,</li>
          <li>seznamu závislostí,</li>
          <li>seznamu příkazů,</li>
          <li>informací pro build nástroje.</li>
        </ul>
        <P>Typický <IC>package.json</IC> může vypadat například takto:</P>
        <CB>{`{\n  "name": "moje-aplikace",\n  "version": "0.1.0",\n  "private": true,\n  "scripts": {\n    "dev": "next dev",\n    "build": "next build",\n    "start": "next start",\n    "lint": "next lint"\n  },\n  "dependencies": {\n    "next": "15.0.0",\n    "react": "19.0.0",\n    "react-dom": "19.0.0"\n  },\n  "devDependencies": {\n    "typescript": "^5.0.0",\n    "@types/node": "^22.0.0",\n    "@types/react": "^19.0.0"\n  }\n}`}</CB>
        <P>Nejdůležitější část pro běžnou práci je <IC>scripts</IC>.</P>
        <P>Když v <IC>package.json</IC> vidíš:</P>
        <CB>{`{\n  "scripts": {\n    "dev": "next dev",\n    "build": "next build"\n  }\n}`}</CB>
        <P>znamená to, že můžeš spustit:</P>
        <CB>{`npm run dev\nnpm run build`}</CB>
        <P><IC>npm run dev</IC> najde skript <IC>dev</IC> a spustí příkaz <IC>next dev</IC>.</P>

        <H2>Dependencies vs devDependencies</H2>
        <P>V <IC>package.json</IC> obvykle najdeš dvě skupiny závislostí:</P>
        <CB>{`dependencies\ndevDependencies`}</CB>
        <P><IC>dependencies</IC> jsou balíčky, které aplikace potřebuje pro běh. Typicky:</P>
        <CB>{`react\nreact-dom\nnext`}</CB>
        <P><IC>devDependencies</IC> jsou balíčky potřebné hlavně při vývoji, typování, lintování nebo buildu. Typicky:</P>
        <CB>{`typescript\neslint\nprettier\n@types/react\n@types/node`}</CB>
        <P>
          Pro běžnou práci to nemusíš řešit moc do hloubky. Důležité je vědět, že obě skupiny se obvykle instalují přes:
        </P>
        <CB>{`npm install`}</CB>

        <H2>Co je package-lock.json</H2>
        <P><IC>package-lock.json</IC> zamyká konkrétní verze nainstalovaných závislostí.</P>
        <CB>{`package.json\n→ říká, jaké balíčky projekt chce\n\npackage-lock.json\n→ říká, jaké přesné verze byly nainstalované`}</CB>
        <P>
          Díky lock souboru by měl projekt nainstalovat stejné verze závislostí na tvém počítači, na počítači kolegy
          i na serveru.
        </P>
        <P>Obvykle platí:</P>
        <CB>{`package-lock.json commitovat ano\nnode_modules commitovat ne`}</CB>
        <P>
          V týmovém nebo produkčním projektu nemaž lock soubor automaticky. Když je projekt v divném stavu,
          bezpečnější první krok je:
        </P>
        <CB>{`rm -rf node_modules\nnpm install`}</CB>
        <P>Mazání <IC>package-lock.json</IC> dělej až ve chvíli, kdy víš proč.</P>

        <H2>Co je node_modules</H2>
        <P><IC>node_modules</IC> je složka, kam npm instaluje závislosti.</P>
        <P>
          Typicky je velká, obsahuje tisíce souborů a <strong>necommituje se do Gitu</strong>.
        </P>
        <P>
          Když projekt stáhneš z Gitu, často tam <IC>node_modules</IC> nebude. Obnovíš ho příkazem:
        </P>
        <CB>{`npm install`}</CB>
        <P>
          Pro PHP vývojáře je to podobné jako <IC>vendor/</IC>, ale v JS světě se <IC>node_modules</IC> obvykle
          negituje téměř vždy.
        </P>
        <P>Do <IC>.gitignore</IC> typicky patří:</P>
        <CB>{`node_modules\n.next\ndist\n.env.local`}</CB>

        <H2>Co potřebuješ mít nainstalované lokálně</H2>
        <P>Minimum pro vývoj:</P>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1 leading-relaxed">
          <li>Node.js</li>
          <li>npm</li>
          <li>Git</li>
          <li>editor</li>
          <li>terminál</li>
        </ul>
        <P>Doporučený editor:</P>
        <CB>{`VS Code\nCursor\nWebStorm`}</CB>
        <P>Pro práci s Claude Code budeš navíc používat terminál v kořenové složce projektu.</P>
        <P>Ověření verzí:</P>
        <CB>{`node -v\nnpm -v\ngit --version`}</CB>
        <P>Pokud příkazy vypíšou verze, základ funguje. Konkrétní verze se budou lišit.</P>
        <CB>{`v22.11.0\n10.9.0\ngit version 2.45.0`}</CB>

        <H2>Jak nainstalovat Node.js na macOS</H2>
        <H3>Varianta 1: oficiální instalátor</H3>
        <P>
          Stáhneš Node.js z oficiálního webu a nainstaluješ klasicky jako aplikaci. Nejjednodušší pro začátek,
          ale horší práce s více verzemi Node.js.
        </P>
        <H3>Varianta 2: Homebrew</H3>
        <P>Pokud používáš Homebrew:</P>
        <CB>{`brew install node`}</CB>
        <P>Ověření:</P>
        <CB>{`node -v\nnpm -v`}</CB>
        <H3>Varianta 3: nvm</H3>
        <P>
          <IC>nvm</IC> je nástroj pro správu více verzí Node.js. Hodí se, pokud pracuješ na více projektech, které
          vyžadují různé verze Node.js.
        </P>
        <CB>{`nvm install --lts\nnvm use --lts\nnode -v`}</CB>
        <P>
          Tuto variantu bych doporučil spíš vývojářům, kteří už vědí, že budou spravovat více Node/TS projektů.
        </P>

        <H2>Lokální vývoj: základní workflow</H2>
        <P>Když máš existující projekt, běžný postup je:</P>
        <CB>{`cd cesta/k/projektu\nnpm install\nnpm run dev`}</CB>
        <P>
          Pak otevřeš adresu, kterou vypíše terminál. U Next.js to často bývá <IC>http://localhost:3000</IC>,
          u Vite <IC>http://localhost:5173</IC>.
        </P>
        <P>
          Vývojový server sleduje změny v souborech. Když upravíš <IC>.tsx</IC> soubor a uložíš ho, stránka se
          většinou sama aktualizuje. To je rozdíl proti klasickému PHP, kde server přímo čte aktuální soubor z disku.
          U moderního frontendu mezi tím běží dev server a build nástroj.
        </P>

        <H2>Jak poznat, jaké příkazy projekt podporuje</H2>
        <P>Podívej se do <IC>package.json</IC> na sekci <IC>scripts</IC>.</P>
        <CB>{`{\n  "scripts": {\n    "dev": "next dev",\n    "build": "next build",\n    "start": "next start",\n    "lint": "next lint",\n    "typecheck": "tsc --noEmit"\n  }\n}`}</CB>
        <P>
          Ne každý projekt má všechny skripty. Když <IC>npm run lint</IC> neexistuje, npm vypíše chybu, že skript
          není definovaný.
        </P>
        <P>Seznam dostupných skriptů zobrazíš příkazem:</P>
        <CB>{`npm run`}</CB>

        <H2>Rozdíl mezi npm run dev, npm run build a npm run start</H2>
        <H3>npm run dev</H3>
        <P>Používáš během vývoje. Spustí lokální server, sleduje změny, zobrazuje chyby v terminálu a prohlížeči. Není optimalizovaný pro produkci.</P>
        <H3>npm run build</H3>
        <P>
          Používáš před nasazením nebo před commitem větších změn. Sestaví produkční verzi, odhalí typové chyby,
          špatné importy a chyby v routování.
        </P>
        <P>
          Důležité: to, že funguje <IC>npm run dev</IC>, ještě neznamená, že projde <IC>npm run build</IC>.
        </P>
        <H3>npm run start</H3>
        <P>Používáš pro spuštění produkční verze, pokud to projekt podporuje. U Next.js platí:</P>
        <CB>{`npm run build\nnpm run start`}</CB>
        <P>Nejdřív build, potom start.</P>

        <H2>Vytvoření nové React + TSX aplikace přes Vite</H2>
        <P>
          Pro první experimenty s TSX je Vite velmi dobrý start. Je jednoduchý, rychlý a nemá tolik frameworkové
          magie jako Next.js.
        </P>
        <CB>{`npm create vite@latest moje-tsx-aplikace -- --template react-ts\ncd moje-tsx-aplikace\nnpm install\nnpm run dev`}</CB>
        <P>Typická struktura:</P>
        <CB>{`moje-tsx-aplikace/\n├── index.html\n├── package.json\n├── tsconfig.json\n├── vite.config.ts\n└── src/\n    ├── App.tsx\n    ├── main.tsx\n    └── assets/`}</CB>
        <P>
          V <IC>index.html</IC> bývá <IC>{"<div id=\"root\"></div>"}</IC> a v <IC>src/main.tsx</IC> se do něj připojí React:
        </P>
        <CB>{`import React from "react";\nimport ReactDOM from "react-dom/client";\nimport App from "./App";\n\nReactDOM.createRoot(document.getElementById("root")!).render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);`}</CB>
        <P>
          Tohle zatím nemusíš umět psát zpaměti. Důležité je pochopit, že <IC>App.tsx</IC> je tvoje hlavní UI
          komponenta.
        </P>

        <H2>Vytvoření nové Next.js aplikace</H2>
        <P>Next.js je vhodnější pro projekty, kde řešíš stránky, routování, SEO, metadata, SSR, statické generování, API routy nebo produkční weby.</P>
        <CB>{`npx create-next-app@latest moje-next-aplikace\ncd moje-next-aplikace\nnpm run dev`}</CB>
        <P>Pro moderní projekt obvykle dává smysl: TypeScript yes, ESLint yes, App Router yes.</P>
        <P>Typická struktura s App Routerem:</P>
        <CB>{`moje-next-aplikace/\n├── app/\n│   ├── layout.tsx\n│   ├── page.tsx\n│   └── globals.css\n├── public/\n├── package.json\n├── next.config.ts\n└── tsconfig.json`}</CB>

        <H2>Routování v Next.js App Routeru</H2>
        <P>URL se odvozuje z adresářové struktury:</P>
        <CB>{`app/page.tsx\n→ /\n\napp/about/page.tsx\n→ /about\n\napp/learning/page.tsx\n→ /learning\n\napp/learning/tsx-vs-lamp/page.tsx\n→ /learning/tsx-vs-lamp`}</CB>
        <P>
          To je důležité pro LAMP vývojáře. Nehledáš <IC>index.php</IC>, ale soubor <IC>page.tsx</IC> v odpovídající
          složce.
        </P>
        <P>
          Layout pro část webu může být v <IC>app/learning/layout.tsx</IC> — pokud existuje, použije se pro všechny
          stránky pod <IC>/learning</IC>.
        </P>

        <H2>Metadata v Next.js</H2>
        <P>Next.js umožňuje definovat metadata stránky přímo v souboru stránky nebo layoutu:</P>
        <CB>{`export const metadata = {\n  title: "TSX pro LAMP fullstack vývojáře | Hynek Dařbujan",\n  description:\n    "Praktické mini školení TSX a Reactu pro zkušené PHP/LAMP vývojáře.",\n};`}</CB>
        <P>U osobního webu nebo veřejného školení je dobré myslet na title, description, canonical URL, sitemap a Open Graph metadata.</P>

        <H2>Statický web vs serverová aplikace</H2>
        <H3>Statický build</H3>
        <P>Typické pro Vite nebo staticky exportovaný web.</P>
        <CB>{`npm run build\n→ vznikne složka dist/\n→ Nginx/Apache/CDN servíruje hotové soubory`}</CB>
        <P>Výhoda: jednoduché nasazení, rychlé servírování, není potřeba Node proces na serveru.</P>
        <H3>Serverová Next.js aplikace</H3>
        <P>Typické pro Next.js při SSR nebo dynamických funkcích.</P>
        <CB>{`npm run build\nnpm run start\n→ běží Node.js proces`}</CB>
        <P>Na serveru potřebuješ process manager nebo hosting, který podporuje Node.js (Vercel, Docker, PM2, systemd).</P>
        <CB>{`npm install -g pm2\nnpm run build\npm2 start npm --name moje-next-aplikace -- run start\npm2 save`}</CB>
        <P>Typický reverse proxy model:</P>
        <CB>{`Nginx poslouchá na 80/443\n↓\npředává requesty na localhost:3000\n↓\ntam běží Next.js aplikace`}</CB>

        <H2>Práce s env soubory</H2>
        <P>Moderní projekty používají <IC>.env</IC> soubory. V Next.js je běžné <IC>.env.local</IC>, který se necommituje.</P>
        <CB>{`DATABASE_URL="..."\nAPI_TOKEN="..."\nNEXT_PUBLIC_API_URL="https://example.com/api"`}</CB>
        <P>
          Pozor na prefix <IC>NEXT_PUBLIC_</IC> — proměnné s tímto prefixem jsou dostupné v browseru. Nikdy do nich
          nedávej tajné klíče.
        </P>
        <CB>{`# špatně\nNEXT_PUBLIC_SECRET_TOKEN="tajny-token"\n\n# správně\nSECRET_TOKEN="tajny-token"\nNEXT_PUBLIC_API_URL="https://example.com/api"`}</CB>

        <H2>Co commitovat a co ne</H2>
        <P>Do Gitu patří zejména:</P>
        <CB>{`app/\nsrc/\ncomponents/\npublic/\npackage.json\npackage-lock.json\ntsconfig.json\nnext.config.ts\nvite.config.ts\nREADME.md\ndocs/`}</CB>
        <P>Do Gitu typicky nepatří:</P>
        <CB>{`node_modules/\n.next/\ndist/\n.env.local\n.env.*.local\n.DS_Store`}</CB>
        <P>
          Build výstupy jako <IC>.next</IC>, <IC>dist</IC> nebo <IC>out</IC> se negitují, protože se dají znovu
          vytvořit.
        </P>

        <H2>Jak spustit existující projekt krok za krokem</H2>
        <H3>1. Přejdi do složky projektu</H3>
        <CB>{`cd ~/projekty/moje-aplikace`}</CB>
        <H3>2. Podívej se na package.json</H3>
        <CB>{`cat package.json\n# nebo jen skripty:\nnpm run`}</CB>
        <H3>3. Nainstaluj závislosti</H3>
        <CB>{`npm install`}</CB>
        <H3>4. Spusť vývojový server</H3>
        <CB>{`npm run dev`}</CB>
        <H3>5. Otevři URL z terminálu</H3>
        <CB>{`http://localhost:3000\n# nebo u Vite:\nhttp://localhost:5173`}</CB>
        <H3>6. Před commitem nebo deploymentem ověř build</H3>
        <CB>{`npm run build`}</CB>

        <H2>Časté chyby při prvním spuštění</H2>
        <H3>Chyba: command not found: npm</H3>
        <P>Node.js/npm není nainstalovaný nebo není v PATH. Ověř:</P>
        <CB>{`node -v\nnpm -v`}</CB>
        <H3>Chyba: chybí node_modules</H3>
        <P>Projekt nemá nainstalované závislosti. Řešení:</P>
        <CB>{`npm install`}</CB>
        <H3>Chyba: port už se používá</H3>
        <P>Port 3000 nebo 5173 používá jiný projekt.</P>
        <CB>{`lsof -i :3000\n# nebo spusť na jiném portu:\nnpm run dev -- -p 3001`}</CB>
        <H3>Chyba: npm run build spadne, ale dev funguje</H3>
        <P>
          To je běžné. Dev server může být tolerantnější, zatímco build odhalí typové chyby, špatné importy, chyby
          v server/client komponentách, použití browser API na serveru nebo chybějící environment variables.
        </P>
        <H3>Chyba: hledám index.php</H3>
        <P>V Next.js App Routeru hledej:</P>
        <CB>{`app/page.tsx\n\n# pro konkrétní URL:\n/learning/tsx-vs-lamp\n→ app/learning/tsx-vs-lamp/page.tsx`}</CB>
        <H3>Chyba: upravuju .next nebo dist</H3>
        <P>Neupravuj build výstup. Správně upravuj:</P>
        <CB>{`app/\nsrc/\ncomponents/\nstyles/\npublic/`}</CB>
        <P>Build výstup se při dalším buildu přepíše.</P>

        <H2>Jak otevřít projekt v terminálu na macOS</H2>
        <ol className="list-decimal list-inside text-gray-600 mb-6 space-y-1 leading-relaxed">
          <li>otevři Terminál,</li>
          <li>napiš <IC>cd </IC> včetně mezery,</li>
          <li>přetáhni složku projektu z Finderu do Terminálu,</li>
          <li>stiskni Enter.</li>
        </ol>
        <P>Pak můžeš spustit:</P>
        <CB>{`npm install\nnpm run dev`}</CB>

        <H2>Jak otevřít projekt v editoru</H2>
        <P>
          Pokud používáš VS Code a máš nainstalovaný příkaz <IC>code</IC>, můžeš v rootu projektu spustit:
        </P>
        <CB>{`code .\n# nebo u Cursoru:\ncursor .`}</CB>
        <P>Pokud příkaz neexistuje, dá se zapnout přímo v editoru přes command palette.</P>

        <H2>Doporučený workflow při práci s Claude Code</H2>
        <P>Když pracuješ s Claude Code v projektu, je dobré:</P>
        <ol className="list-decimal list-inside text-gray-600 mb-6 space-y-1 leading-relaxed">
          <li>být v rootu projektu,</li>
          <li>mít čistý nebo aspoň známý stav Gitu,</li>
          <li>dávat malé tasky,</li>
          <li>požadovat validaci,</li>
          <li>chtít stručný souhrn změn,</li>
          <li>commitovat po malých smysluplných celcích.</li>
        </ol>
        <P>Před taskem: <IC>git status</IC>. Po tasku:</P>
        <CB>{`npm run build\ngit diff\ngit status`}</CB>
        <P>Dobrý prompt pro Claude Code typicky obsahuje:</P>
        <CB>{`Context\nGoal\nRequired changes\nValidation\nConstraints\nCommit message\nFinal response format`}</CB>

        <H2>Mini tahák příkazů</H2>
        <H3>Ověření prostředí</H3>
        <CB>{`node -v\nnpm -v\ngit --version`}</CB>
        <H3>Existující projekt</H3>
        <CB>{`npm install\nnpm run dev\nnpm run build`}</CB>
        <H3>Vite React + TypeScript</H3>
        <CB>{`npm create vite@latest moje-tsx-aplikace -- --template react-ts\ncd moje-tsx-aplikace\nnpm install\nnpm run dev\nnpm run build`}</CB>
        <H3>Next.js</H3>
        <CB>{`npx create-next-app@latest moje-next-aplikace\ncd moje-next-aplikace\nnpm run dev\nnpm run build\nnpm run start`}</CB>
        <H3>Vyčištění závislostí</H3>
        <CB>{`# bezpečnější první krok:\nrm -rf node_modules\nnpm install\n\n# radikálnější, opatrně:\nrm -rf node_modules\nrm package-lock.json\nnpm install`}</CB>
        <H3>Git kontrola</H3>
        <CB>{`git status\ngit diff`}</CB>

        <H2>Shrnutí</H2>
        <P>
          Před samotným TSX je potřeba pochopit, že moderní frontend má vlastní vývojový a build proces. Node.js a
          npm nejsou nutně náhrada PHP backendu — často slouží hlavně jako nástroje pro správu balíčků, lokální
          vývoj a sestavení aplikace.
        </P>
        <P>
          Pro první experimenty je jednoduchý React + Vite ideální, protože rychle ukáže komponenty, props, stav a
          TSX bez zbytečné frameworkové vrstvy. Pro reálnější weby, stránky, SEO a routování je praktičtější Next.js.
        </P>
        <P>Tři nejdůležitější příkazy pro začátek jsou:</P>
        <CB>{`npm install\nnpm run dev\nnpm run build`}</CB>
        <P>
          Pokud víš, k čemu slouží, kde je <IC>package.json</IC>, proč existuje <IC>node_modules</IC>, a kde v
          Next.js hledat <IC>app/page.tsx</IC>, máš připravený základ pro další kapitoly.
        </P>
      </article>

      <nav className="mt-16 flex justify-between items-center text-sm border-t border-gray-100 pt-8">
        <div />
        <Link
          href="/learning/tsx-vs-lamp/01-co-je-tsx"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
        >
          <span>01. Co je TSX</span>
          <span aria-hidden="true">→</span>
        </Link>
      </nav>
    </main>
  );
}
