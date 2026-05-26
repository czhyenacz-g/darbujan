# 00. Příprava prostředí pro vývoj TSX aplikace

Tato kapitola je praktický start před samotným TSX. Cílem není zatím psát komponenty, ale pochopit, co je potřeba mít připravené, jak se TSX aplikace spouští lokálně, co znamenají příkazy typu `npm install`, `npm run dev`, `npm run build`, a jak se taková aplikace liší od klasického LAMP projektu.

Cílový čtenář: zkušený PHP/LAMP fullstack vývojář, který zná čistý JavaScript, jQuery a případně vlastní interní JS mini knihovny, ale zatím nemá pevný mentální model moderního React/TSX/Next.js vývoje.

---

## Proč tuhle kapitolu řešit před samotným TSX

U klasického LAMP projektu je prostředí většinou poměrně přímočaré:

```text
Apache nebo Nginx
PHP
MySQL/MariaDB
soubory projektu na serveru
```

Request přijde na server, PHP ho zpracuje a vrátí HTML. V jednoduchém případě upravíš `.php` soubor, nahraješ ho na server a změna je hned vidět.

U moderní TSX aplikace je mezi zdrojovým kódem a výslednou stránkou ještě další vrstva:

```text
zdrojové .tsx/.ts/.css soubory
↓
instalace závislostí
↓
lokální dev server
↓
build
↓
výsledná aplikace pro prohlížeč nebo Node.js runtime
```

To je jeden z hlavních rozdílů. TSX soubor obvykle neposíláš do prohlížeče přímo tak, jak ho napíšeš. Nejdřív ho zpracuje nástroj jako Vite, Next.js, Webpack, SWC, Babel nebo TypeScript compiler. Výsledkem je JavaScript, kterému prohlížeč rozumí.

Prakticky to znamená, že se musíš naučit několik nových pojmů:

- Node.js
- npm
- `package.json`
- `node_modules`
- dev server
- build
- produkční start
- statický deployment vs. serverový běh
- rozdíl mezi React + Vite a Next.js

---

## Základní rozdíl proti LAMP vývoji

V LAMP světě často přemýšlíš takto:

```text
URL → PHP soubor nebo router → server vygeneruje HTML → browser zobrazí výsledek
```

Příklad:

```text
/products.php
/article.php?id=123
/admin/index.php
```

U React/TSX světa často přemýšlíš spíš takto:

```text
data + komponenty + stav aplikace → výsledné UI
```

A podle použitého frameworku existují dvě běžné varianty:

```text
React + Vite
→ frontendová aplikace
→ po buildu statické soubory HTML/CSS/JS
→ servíruje Nginx, Apache nebo CDN
```

nebo:

```text
Next.js
→ aplikace se stránkami, routováním, metadaty a možností serverového renderování
→ může generovat statické stránky
→ nebo běžet jako Node.js server
```

Pro první pochopení TSX je jednodušší **React + Vite**. Pro reálný osobní web, katalog, obsahovou stránku nebo projekt se SEO je často vhodnější **Next.js**.

Tento web `darbujan.com` je postavený v TSX a podle struktury typu `app/learning/page.tsx` odpovídá Next.js App Routeru.

---

## Co je Node.js a proč ho potřebuješ

Node.js je JavaScriptový runtime mimo prohlížeč. Umožňuje spouštět JavaScript na počítači nebo serveru.

Důležité: to, že má projekt Node.js nástroje, ještě neznamená, že musíš psát backend v Node.js.

Pro PHP vývojáře může být užitečná analogie:

```text
Composer v PHP světě
→ správa závislostí a autoloadingu

npm v JS/TS světě
→ správa závislostí, build nástrojů a skriptů
```

Node.js můžeš používat jen proto, aby:

- stáhl JS/TS závislosti,
- spustil lokální dev server,
- zkompiloval TSX/TypeScript,
- sestavil produkční frontend,
- spustil Next.js aplikaci.

Backend může klidně dál běžet v PHP. Node.js může být jen nástroj pro frontend.

---

## Co je npm

`npm` je správce balíčků pro JavaScriptový ekosystém. Instaluje závislosti a spouští skripty definované v `package.json`.

Základní příkazy:

```bash
npm install
npm run dev
npm run build
npm run start
```

Co znamenají:

```text
npm install
→ stáhne závislosti projektu do node_modules

npm run dev
→ spustí lokální vývojový server

npm run build
→ sestaví produkční verzi aplikace

npm run start
→ spustí sestavenou produkční aplikaci, pokud to projekt podporuje
```

Existují i alternativy:

```text
pnpm
yarn
bun
```

Ale pro začátek je nejjednodušší držet se `npm`, protože je dostupné automaticky s Node.js a většina projektů ho podporuje.

---

## Co je package.json

Soubor `package.json` je jeden z nejdůležitějších souborů v JS/TS projektu. Je to něco jako kombinace:

- `composer.json`,
- metadat projektu,
- seznamu závislostí,
- seznamu příkazů,
- informací pro build nástroje.

Typický `package.json` může vypadat například takto:

```json
{
  "name": "moje-aplikace",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "15.0.0",
    "react": "19.0.0",
    "react-dom": "19.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0"
  }
}
```

Nejdůležitější část pro běžnou práci je `scripts`.

Když v `package.json` vidíš:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build"
  }
}
```

znamená to, že můžeš spustit:

```bash
npm run dev
npm run build
```

`npm run dev` najde skript `dev` a spustí příkaz `next dev`.

---

## Dependencies vs devDependencies

V `package.json` obvykle najdeš dvě skupiny závislostí:

```text
dependencies
devDependencies
```

`dependencies` jsou balíčky, které aplikace potřebuje pro běh.

Typicky:

```text
react
react-dom
next
```

`devDependencies` jsou balíčky potřebné hlavně při vývoji, typování, lintování nebo buildu.

Typicky:

```text
typescript
eslint
prettier
@types/react
@types/node
```

Pro běžnou práci to nemusíš řešit moc do hloubky. Důležité je vědět, že obě skupiny se obvykle instalují přes:

```bash
npm install
```

---

## Co je package-lock.json

`package-lock.json` zamyká konkrétní verze nainstalovaných závislostí.

Smysl:

```text
package.json
→ říká, jaké balíčky projekt chce

package-lock.json
→ říká, jaké přesné verze byly nainstalované
```

Díky lock souboru by měl projekt nainstalovat stejné verze závislostí na tvém počítači, na počítači kolegy i na serveru.

Obvykle platí:

```text
package-lock.json commitovat ano
node_modules commitovat ne
```

V týmovém nebo produkčním projektu nemaž lock soubor automaticky. Když je projekt v divném stavu, bezpečnější první krok je:

```bash
rm -rf node_modules
npm install
```

Mazání `package-lock.json` dělej až ve chvíli, kdy víš proč.

---

## Co je node_modules

`node_modules` je složka, kam npm instaluje závislosti.

Typicky je velká, obsahuje tisíce souborů a **necommituje se do Gitu**.

Když projekt stáhneš z Gitu, často tam `node_modules` nebude. Obnovíš ho příkazem:

```bash
npm install
```

Pro PHP vývojáře je to podobné jako `vendor/`, ale v JS světě se `node_modules` obvykle negituje téměř vždy.

Do `.gitignore` typicky patří:

```gitignore
node_modules
.next
dist
.env.local
```

---

## Co potřebuješ mít nainstalované lokálně

Minimum pro vývoj:

- Node.js
- npm
- Git
- editor
- terminál

Doporučený editor:

```text
VS Code
Cursor
WebStorm
```

Pro práci s Claude Code budeš navíc používat terminál v kořenové složce projektu.

Ověření verzí:

```bash
node -v
npm -v
git --version
```

Pokud příkazy vypíšou verze, základ funguje.

Příklad výstupu:

```text
v22.11.0
10.9.0
git version 2.45.0
```

Konkrétní verze se budou lišit.

---

## Jak nainstalovat Node.js na macOS

Nejjednodušší možnosti:

### Varianta 1: oficiální instalátor

Stáhneš Node.js z oficiálního webu a nainstaluješ klasicky jako aplikaci.

Výhoda:

```text
nejjednodušší pro začátek
```

Nevýhoda:

```text
horší práce s více verzemi Node.js
```

### Varianta 2: Homebrew

Pokud používáš Homebrew:

```bash
brew install node
```

Ověření:

```bash
node -v
npm -v
```

### Varianta 3: nvm

`nvm` je nástroj pro správu více verzí Node.js.

Hodí se, pokud pracuješ na více projektech, které vyžadují různé verze Node.js.

Typické použití:

```bash
nvm install --lts
nvm use --lts
node -v
```

Tuto variantu bych doporučil spíš vývojářům, kteří už vědí, že budou spravovat více Node/TS projektů.

---

## Lokální vývoj: základní workflow

Když máš existující projekt, běžný postup je:

```bash
cd cesta/k/projektu
npm install
npm run dev
```

Pak otevřeš adresu, kterou vypíše terminál. U Next.js to často bývá:

```text
http://localhost:3000
```

U Vite často:

```text
http://localhost:5173
```

Vývojový server sleduje změny v souborech. Když upravíš `.tsx` soubor a uložíš ho, stránka se většinou sama aktualizuje.

To je rozdíl proti klasickému PHP, kde server často přímo čte aktuální soubor z disku. U moderního frontendu mezi tím běží dev server a build nástroj.

---

## Jak poznat, jaké příkazy projekt podporuje

Podívej se do `package.json` na sekci `scripts`.

Příklad:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  }
}
```

Pak můžeš spouštět:

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

Ne každý projekt má všechny skripty. Když `npm run lint` neexistuje, npm vypíše chybu, že skript není definovaný.

Seznam dostupných skriptů zobrazíš příkazem:

```bash
npm run
```

---

## Rozdíl mezi npm run dev, npm run build a npm run start

### npm run dev

Používáš během vývoje.

```bash
npm run dev
```

Typicky:

- spustí lokální server,
- sleduje změny,
- zobrazuje chyby v terminálu a prohlížeči,
- není optimalizovaný pro produkci.

### npm run build

Používáš před nasazením nebo před commitem větších změn.

```bash
npm run build
```

Typicky:

- sestaví produkční verzi,
- odhalí typové chyby,
- odhalí špatné importy,
- odhalí chyby v routování,
- u Next.js vygeneruje stránky nebo serverový build.

Důležité: to, že funguje `npm run dev`, ještě neznamená, že projde `npm run build`.

### npm run start

Používáš pro spuštění produkční verze, pokud to projekt podporuje.

```bash
npm run start
```

U Next.js obvykle platí:

```bash
npm run build
npm run start
```

Nejdřív build, potom start.

---

## Vytvoření nové React + TSX aplikace přes Vite

Pro první experimenty s TSX je Vite velmi dobrý start. Je jednoduchý, rychlý a nemá tolik frameworkové magie jako Next.js.

Vytvoření projektu:

```bash
npm create vite@latest moje-tsx-aplikace -- --template react-ts
cd moje-tsx-aplikace
npm install
npm run dev
```

Typická struktura:

```text
moje-tsx-aplikace/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── App.tsx
    ├── main.tsx
    └── assets/
```

Důležité soubory:

```text
src/main.tsx
→ vstupní bod aplikace, připojuje React do HTML

src/App.tsx
→ hlavní komponenta aplikace
```

Ve Vite aplikaci je často v `index.html` element:

```html
<div id="root"></div>
```

a v `src/main.tsx` se do něj připojí React:

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Tohle zatím nemusíš umět psát zpaměti. Důležité je pochopit, že `App.tsx` je tvoje hlavní UI komponenta.

---

## Vytvoření nové Next.js aplikace

Next.js je vhodnější pro projekty, kde řešíš:

- stránky,
- routování,
- SEO,
- metadata,
- server-side rendering,
- statické generování,
- API routy,
- produkční weby.

Vytvoření projektu:

```bash
npx create-next-app@latest moje-next-aplikace
cd moje-next-aplikace
npm run dev
```

Během vytváření se tě CLI může ptát na různé volby, například:

```text
TypeScript?
ESLint?
Tailwind CSS?
src/ directory?
App Router?
import alias?
```

Pro moderní projekt obvykle dává smysl:

```text
TypeScript: yes
ESLint: yes
Tailwind: podle projektu
App Router: yes
```

Typická struktura s App Routerem:

```text
moje-next-aplikace/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
├── package.json
├── next.config.ts
└── tsconfig.json
```

---

## Routování v Next.js App Routeru

V Next.js App Routeru se URL často odvozuje z adresářové struktury.

Příklady:

```text
app/page.tsx
→ /

app/about/page.tsx
→ /about

app/learning/page.tsx
→ /learning

app/learning/tsx-vs-lamp/page.tsx
→ /learning/tsx-vs-lamp
```

To je důležité pro LAMP vývojáře. Nehledáš `index.php`, ale soubor `page.tsx` v odpovídající složce.

Layout pro více stránek může být v:

```text
app/layout.tsx
```

Layout pro část webu může být například v:

```text
app/learning/layout.tsx
```

Pokud existuje, použije se pro všechny stránky pod `/learning`.

---

## Metadata v Next.js

Next.js umožňuje definovat metadata stránky přímo v souboru stránky nebo layoutu.

Příklad:

```tsx
export const metadata = {
  title: "TSX pro LAMP fullstack vývojáře | Hynek Dařbujan",
  description:
    "Praktické mini školení TSX a Reactu pro zkušené PHP/LAMP vývojáře.",
};
```

Tohle je důležité pro SEO, sdílení odkazu a titulky v prohlížeči.

U osobního webu nebo veřejného školení je dobré myslet na:

- title,
- description,
- canonical URL,
- sitemap,
- Open Graph metadata, pokud je projekt používá.

---

## Statický web vs serverová aplikace

Moderní TSX projekty se můžou nasazovat různě.

### Statický build

Typické pro Vite nebo staticky exportovaný web.

```text
npm run build
→ vznikne složka dist/
→ Nginx/Apache/CDN servíruje hotové soubory
```

Výhoda:

```text
jednoduché nasazení
rychlé servírování
není potřeba Node proces na serveru
```

Nevýhoda:

```text
serverové funkce musí řešit jiný backend nebo API
```

### Serverová Next.js aplikace

Typické pro Next.js, pokud používá serverové renderování nebo dynamické funkce.

```text
npm run build
npm run start
→ běží Node.js proces
```

Výhoda:

```text
lepší integrace routování, SSR, metadat a dynamických funkcí
```

Nevýhoda:

```text
na serveru musí běžet Node.js proces
je potřeba řešit proces manager, reverse proxy nebo hosting
```

---

## Produkční build u Vite

U Vite aplikace:

```bash
npm run build
```

Výstup bývá:

```text
dist/
```

Lokální náhled produkčního buildu:

```bash
npm run preview
```

Pokud projekt tento skript podporuje.

Na serveru můžeš `dist/` servírovat jako statické soubory.

Příklad principu pro Nginx:

```text
server root → /var/www/moje-tsx-aplikace/dist
```

---

## Produkční build u Next.js

U Next.js:

```bash
npm run build
npm run start
```

V produkci ale nechceš mít aplikaci spuštěnou ručně v terminálu. Potřebuješ, aby běžela jako služba.

Běžné možnosti:

- Vercel
- Docker
- PM2
- systemd
- vlastní VPS s Nginx reverse proxy
- hosting, který podporuje Node.js

Jednoduchý PM2 příklad:

```bash
npm install -g pm2
npm run build
pm2 start npm --name moje-next-aplikace -- run start
pm2 save
```

Typický reverse proxy model:

```text
Nginx poslouchá na 80/443
↓
předává requesty na localhost:3000
↓
tam běží Next.js aplikace
```

Pro první pochopení TSX není potřeba deployment řešit do detailu. Ale je důležité vědět, že Next.js aplikace nemusí být jen sada souborů nahraná přes FTP.

---

## Práce s env soubory

Moderní projekty často používají `.env` soubory.

Typické soubory:

```text
.env
.env.local
.env.production
```

V Next.js je běžné používat:

```text
.env.local
```

Ten se obvykle necommituje, protože může obsahovat citlivé údaje.

Příklad:

```env
DATABASE_URL="..."
API_TOKEN="..."
NEXT_PUBLIC_API_URL="https://example.com/api"
```

Pozor na prefix `NEXT_PUBLIC_`.

V Next.js platí, že proměnné s prefixem:

```text
NEXT_PUBLIC_
```

můžou být dostupné v browseru. Nedávej do nich tajné klíče.

Špatně:

```env
NEXT_PUBLIC_SECRET_TOKEN="tajny-token"
```

Lépe:

```env
SECRET_TOKEN="tajny-token"
NEXT_PUBLIC_API_URL="https://example.com/api"
```

---

## Co commitovat a co ne

Do Gitu patří zejména:

```text
app/
src/
components/
public/
package.json
package-lock.json
tsconfig.json
next.config.ts
vite.config.ts
README.md
docs/
```

Do Gitu typicky nepatří:

```text
node_modules/
.next/
dist/
.env.local
.env.*.local
.DS_Store
```

Typický `.gitignore` pro Next.js může obsahovat:

```gitignore
node_modules
.next
out
dist
.env*.local
.DS_Store
```

Build výstupy jako `.next`, `dist` nebo `out` se většinou negitují, protože se dají znovu vytvořit.

---

## Jak spustit existující projekt krok za krokem

Když dostaneš existující TSX projekt:

### 1. Přejdi do složky projektu

```bash
cd ~/projekty/moje-aplikace
```

### 2. Podívej se na package.json

```bash
cat package.json
```

Nebo jen na scripts:

```bash
npm run
```

### 3. Nainstaluj závislosti

```bash
npm install
```

### 4. Spusť vývojový server

```bash
npm run dev
```

### 5. Otevři URL z terminálu

Typicky:

```text
http://localhost:3000
```

nebo:

```text
http://localhost:5173
```

### 6. Před commitem nebo deploymentem ověř build

```bash
npm run build
```

Pokud existuje lint nebo typecheck:

```bash
npm run lint
npm run typecheck
```

---

## Časté chyby při prvním spuštění

### Chyba: command not found: npm

Node.js/npm není nainstalovaný nebo není v PATH.

Ověř:

```bash
node -v
npm -v
```

### Chyba: chybí node_modules

Projekt nemá nainstalované závislosti.

Řešení:

```bash
npm install
```

### Chyba: port už se používá

Například port 3000 už používá jiný projekt.

Možnosti:

```bash
lsof -i :3000
```

Pak ukončit proces, nebo spustit projekt na jiném portu, pokud to framework umožňuje.

U Next.js například:

```bash
npm run dev -- -p 3001
```

### Chyba: npm run build spadne, ale dev funguje

To je běžné. Dev server může být tolerantnější, zatímco build odhalí chyby, které by v produkci vadily.

Typicky:

- špatný import,
- typová chyba,
- chyba v server/client komponentě,
- použití browser API na serveru,
- chybějící environment variable,
- chyba v metadatech nebo routování.

### Chyba: hledám index.php

V Next.js App Routeru hledej:

```text
app/page.tsx
```

Pro konkrétní URL:

```text
/learning/tsx-vs-lamp
→ app/learning/tsx-vs-lamp/page.tsx
```

### Chyba: upravuju .next nebo dist

Neupravuj build výstup.

Správně upravuj:

```text
app/
src/
components/
styles/
public/
```

Build výstup se při dalším buildu přepíše.

---

## Jak otevřít projekt v terminálu na macOS

Nejjednodušší cesta:

1. otevři Terminál,
2. napiš `cd ` včetně mezery,
3. přetáhni složku projektu z Finderu do Terminálu,
4. stiskni Enter.

Příklad:

```bash
cd /Users/hynek/Projects/darbujan-com
```

Pak můžeš spustit:

```bash
npm install
npm run dev
```

Ve Finderu lze také zapnout službu „New Terminal at Folder“, ale pokud se nezobrazuje, přetažení složky do Terminálu je spolehlivý fallback.

---

## Jak otevřít projekt v editoru

Pokud používáš VS Code a máš nainstalovaný příkaz `code`, můžeš v rootu projektu spustit:

```bash
code .
```

U Cursoru může fungovat:

```bash
cursor .
```

Pokud příkaz neexistuje, dá se obvykle zapnout přímo v editoru přes command palette.

---

## Doporučený workflow při práci s Claude Code

Když pracuješ s Claude Code v projektu, je dobré:

1. být v rootu projektu,
2. mít čistý nebo aspoň známý stav Gitu,
3. dávat malé tasky,
4. požadovat validaci,
5. chtít stručný souhrn změn,
6. commitovat po malých smysluplných celcích.

Před taskem:

```bash
git status
```

Po tasku:

```bash
npm run build
git diff
git status
```

Dobrý prompt pro Claude Code typicky obsahuje:

```text
Context
Goal
Required changes
Validation
Constraints
Commit message
Final response format
```

---

## Mini tahák příkazů

### Ověření prostředí

```bash
node -v
npm -v
git --version
```

### Existující projekt

```bash
npm install
npm run dev
npm run build
```

### Vite React + TypeScript

```bash
npm create vite@latest moje-tsx-aplikace -- --template react-ts
cd moje-tsx-aplikace
npm install
npm run dev
npm run build
```

### Next.js

```bash
npx create-next-app@latest moje-next-aplikace
cd moje-next-aplikace
npm run dev
npm run build
npm run start
```

### Vyčištění závislostí

Bezpečnější první krok:

```bash
rm -rf node_modules
npm install
```

Radikálnější varianta, používat opatrně:

```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### Zjištění dostupných npm skriptů

```bash
npm run
```

### Git kontrola

```bash
git status
git diff
```

---

## Shrnutí

Před samotným TSX je potřeba pochopit, že moderní frontend má vlastní vývojový a build proces. Node.js a npm nejsou nutně náhrada PHP backendu. Často slouží hlavně jako nástroje pro správu balíčků, lokální vývoj a sestavení aplikace.

Pro první experimenty je jednoduchý React + Vite ideální, protože rychle ukáže komponenty, props, stav a TSX bez zbytečné frameworkové vrstvy. Pro reálnější weby, stránky, SEO a routování je praktičtější Next.js.

Tři nejdůležitější příkazy pro začátek jsou:

```bash
npm install
npm run dev
npm run build
```

Pokud víš, k čemu slouží, kde je `package.json`, proč existuje `node_modules`, a kde v Next.js hledat `app/page.tsx`, máš připravený základ pro další kapitoly.
