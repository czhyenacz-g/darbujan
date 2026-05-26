# 01. Co je TSX

Tato kapitola vysvětluje, co vlastně znamená TSX, proč vypadá jako HTML uvnitř JavaScriptu/TypeScriptu a proč to není totéž jako klasická PHP šablona, jQuery generování HTML stringů nebo statické HTML.

Cíl kapitoly: získat základní orientaci. Po přečtení by mělo být jasné, co je `.tsx` soubor, jak souvisí s Reactem, TypeScriptem a JSX, a proč se v moderním frontendu často píše UI právě tímto způsobem.

---

## Krátká definice

TSX znamená:

```text
TypeScript + JSX
```

Jinými slovy: TSX je syntaxe, ve které můžeš psát TypeScript a zároveň uvnitř něj zapisovat UI strukturou podobnou HTML.

Jednoduchý příklad:

```tsx
function Hello() {
  return <h1>Ahoj světe</h1>;
}
```

Na první pohled to vypadá, jako by JavaScriptová funkce vracela HTML. Technicky ale nejde o čisté HTML. Jde o syntaxi, kterou build nástroj přeloží do JavaScriptu, kterému prohlížeč rozumí.

---

## TSX není HTML

Tohle je první důležitá věc.

Když napíšeš:

```tsx
const title = <h1>Ahoj</h1>;
```

nevzniká tím rovnou HTML string:

```html
<h1>Ahoj</h1>
```

Vzniká popis UI, se kterým potom pracuje React.

Dříve se JSX/TSX často vysvětlovalo tak, že se překládá přibližně na:

```ts
React.createElement("h1", null, "Ahoj");
```

Moderní React build nástroje to interně řeší trochu jinak, ale mentální model je pořád podobný:

```text
TSX zápis
→ build nástroj ho přeloží
→ React podle něj vytvoří nebo aktualizuje UI
```

Důležité je, že TSX je zdrojový zápis pro UI, ne finální HTML dokument.

---

## TSX vs JSX

Možná narazíš na dvě podobné přípony:

```text
.jsx
.tsx
```

Rozdíl:

```text
JSX = JavaScript + JSX syntaxe
TSX = TypeScript + JSX syntaxe
```

Příklad JSX:

```jsx
function UserCard({ name }) {
  return <div>{name}</div>;
}
```

Příklad TSX:

```tsx
type UserCardProps = {
  name: string;
};

function UserCard({ name }: UserCardProps) {
  return <div>{name}</div>;
}
```

V TSX navíc používáš TypeScript typy. To znamená, že můžeš typovat props, stav, data z API, eventy a další věci.

Pro zkušeného back-end vývojáře je TSX většinou lepší než čistý JSX, protože typy výrazně pomáhají udržet větší projekt pod kontrolou.

---

## Co je JSX část

JSX je syntaxe, která umožňuje psát něco jako HTML přímo uvnitř JavaScriptu nebo TypeScriptu.

Příklad:

```tsx
function App() {
  return (
    <main>
      <h1>Moje aplikace</h1>
      <p>Vítej na stránce.</p>
    </main>
  );
}
```

Toto není PHP šablona a není to ani HTML soubor. Je to TypeScriptový kód s JSX syntaxí.

Uvnitř můžeš kombinovat:

- značky podobné HTML,
- vlastní komponenty,
- proměnné,
- podmínky,
- mapování polí,
- event handlery.

Například:

```tsx
function Greeting() {
  const name = "Hynek";

  return <p>Ahoj, {name}</p>;
}
```

Složené závorky `{}` znamenají: tady se vyhodnotí JavaScriptový/TypeScriptový výraz.

---

## Co je TypeScript část

TypeScript je nadstavba JavaScriptu, která přidává typy.

JavaScript:

```js
function add(a, b) {
  return a + b;
}
```

TypeScript:

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

U TSX komponent to znamená, že můžeš jasně říct, jaká data komponenta očekává.

Příklad:

```tsx
type ProjectCardProps = {
  title: string;
  description: string;
  url: string;
};

function ProjectCard({ title, description, url }: ProjectCardProps) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={url}>Otevřít projekt</a>
    </article>
  );
}
```

Když pak komponentě předáš špatná data, TypeScript tě může upozornit ještě před tím, než se chyba projeví v prohlížeči.

---

## Jak se TSX liší od PHP šablony

V PHP můžeš psát například:

```php
<h1><?= $title ?></h1>
<p><?= $description ?></p>
```

nebo:

```php
<?php foreach ($projects as $project): ?>
  <h2><?= $project['title'] ?></h2>
<?php endforeach; ?>
```

V TSX by podobný princip vypadal takto:

```tsx
function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <section>
      {projects.map((project) => (
        <article key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </article>
      ))}
    </section>
  );
}
```

Podobnost:

```text
data se promítají do výsledného UI
```

Rozdíl:

```text
PHP šablona typicky generuje HTML na serveru pro jeden request

TSX komponenta popisuje UI jako funkci nad daty a stavem
React podle toho UI vytváří a aktualizuje v prohlížeči nebo v rámci frameworku typu Next.js
```

V PHP často přemýšlíš:

```text
vygeneruj HTML odpověď
```

V React/TSX světě přemýšlíš:

```text
popiš, jak má UI vypadat pro aktuální data a stav
```

---

## Jak se TSX liší od jQuery přístupu

V jQuery se často pracovalo procedurálně:

```js
$("#title").text("Ahoj");
$("#box").hide();
$("#items").append("<li>Nová položka</li>");
```

Tedy:

```text
najdi element
změň ho
přidej HTML
skryj HTML
pověs event handler
```

V TSX/Reactu se snažíš spíš popsat výsledek:

```tsx
function Box({ visible }: { visible: boolean }) {
  return (
    <div>
      {visible && <p>Viditelný obsah</p>}
    </div>
  );
}
```

Neříkáš tedy přímo:

```text
najdi element a skryj ho
```

ale:

```text
pokud visible je true, zobraz tento kus UI
pokud visible je false, tento kus UI vůbec nevyrenderuj
```

To je jeden z hlavních mentálních rozdílů.

---

## TSX jako zápis stromu UI

UI si můžeš představit jako strom.

Například:

```tsx
function App() {
  return (
    <main>
      <Header />
      <ProjectList />
      <Footer />
    </main>
  );
}
```

Stromově:

```text
App
└── main
    ├── Header
    ├── ProjectList
    └── Footer
```

Komponenty můžeš skládat do sebe podobně jako funkce nebo šablony.

Menší komponenta:

```tsx
function Header() {
  return <header>Moje stránka</header>;
}
```

Větší komponenta:

```tsx
function App() {
  return (
    <>
      <Header />
      <main>Obsah stránky</main>
    </>
  );
}
```

Komponenta je v základu funkce, která vrací UI.

---

## Malá písmena vs velká písmena

V TSX je důležitý rozdíl mezi malými a velkými písmeny.

HTML elementy se píšou malým písmenem:

```tsx
<div>
  <h1>Nadpis</h1>
</div>
```

Vlastní komponenty se píšou velkým písmenem:

```tsx
<ProjectCard />
<UserProfile />
<MainNavigation />
```

React podle toho pozná, jestli jde o běžný HTML element, nebo o tvoji komponentu.

Příklad:

```tsx
function ProjectCard() {
  return <article>Projekt</article>;
}

function App() {
  return <ProjectCard />;
}
```

Kdybys komponentu napsal malým písmenem, React by ji bral jako HTML tag, což není to, co chceš.

---

## TSX soubor v projektu

Soubor s příponou `.tsx` se používá tam, kde kombinuješ TypeScript a JSX syntaxi.

Typické názvy:

```text
App.tsx
page.tsx
layout.tsx
ProjectCard.tsx
Button.tsx
```

Soubory `.ts` se používají pro TypeScript bez JSX/TSX zápisu.

Příklad `.ts` souboru:

```ts
export function formatPrice(value: number): string {
  return `${value} Kč`;
}
```

Příklad `.tsx` souboru:

```tsx
export function Price({ value }: { value: number }) {
  return <span>{value} Kč</span>;
}
```

Jednoduché pravidlo:

```text
když soubor vrací nebo obsahuje JSX/TSX značky, použij .tsx

když obsahuje jen logiku, typy, helpery nebo konfiguraci bez JSX, použij .ts
```

---

## TSX a React

TSX se nejčastěji používá s Reactem. React je knihovna pro tvorbu uživatelského rozhraní.

TSX je syntaxe. React je knihovna, která s tímto zápisem pracuje.

Zjednodušeně:

```text
TSX
→ způsob, jak zapisuješ UI

React
→ knihovna, která podle tohoto zápisu vytváří a aktualizuje UI

Next.js
→ framework nad Reactem, který řeší stránky, routování, metadata, serverové renderování a další věci
```

Tohle je užitečné rozlišovat:

```text
TypeScript není React
TSX není React
React není Next.js
Next.js používá React
React často používá TSX
```

---

## TSX a Next.js

V Next.js App Routeru jsou `.tsx` soubory často přímo stránky.

Například:

```text
app/page.tsx
```

odpovídá URL:

```text
/
```

Soubor:

```text
app/learning/page.tsx
```

odpovídá URL:

```text
/learning
```

Soubor:

```text
app/learning/tsx-vs-lamp/page.tsx
```

odpovídá URL:

```text
/learning/tsx-vs-lamp
```

Uvnitř `page.tsx` může být komponenta:

```tsx
export default function Page() {
  return (
    <main>
      <h1>TSX pro LAMP fullstack vývojáře</h1>
      <p>Úvod do školení.</p>
    </main>
  );
}
```

V Next.js tedy TSX často nepíšeš jen jako malý widget, ale jako celou stránku.

---

## Co se s TSX stane při buildu

Prohlížeč neumí přímo spustit TSX.

Když napíšeš:

```tsx
function App() {
  return <h1>Ahoj</h1>;
}
```

build nástroj z toho připraví JavaScript, kterému prohlížeč rozumí.

Zjednodušeně:

```text
App.tsx
↓
TypeScript/React build
↓
JavaScript bundle nebo serverový build
↓
prohlížeč dostane HTML/CSS/JS
```

Proto nestačí vzít `.tsx` soubor a otevřít ho přímo v prohlížeči jako `.html`.

Potřebuješ vývojový server nebo build proces:

```bash
npm run dev
```

nebo:

```bash
npm run build
```

---

## Základní syntaxe TSX

### Jeden kořenový element

Komponenta musí vracet jeden kořenový element.

Správně:

```tsx
function App() {
  return (
    <main>
      <h1>Nadpis</h1>
      <p>Text</p>
    </main>
  );
}
```

Špatně:

```tsx
function App() {
  return (
    <h1>Nadpis</h1>
    <p>Text</p>
  );
}
```

Pokud nechceš přidávat zbytečný `<div>`, použiješ fragment:

```tsx
function App() {
  return (
    <>
      <h1>Nadpis</h1>
      <p>Text</p>
    </>
  );
}
```

### Hodnoty přes složené závorky

```tsx
function Greeting() {
  const name = "Hynek";

  return <p>Ahoj, {name}</p>;
}
```

Uvnitř `{}` může být výraz:

```tsx
<p>{user.isAdmin ? "Admin" : "Uživatel"}</p>
```

Ne klasický blok s `if`:

```tsx
// špatně
<p>{if (user.isAdmin) "Admin"}</p>
```

### Atributy

String atribut:

```tsx
<input type="email" />
```

Hodnota z proměnné:

```tsx
<input value={email} />
```

Boolean atribut:

```tsx
<button disabled={isSaving}>Uložit</button>
```

Event handler:

```tsx
<button onClick={handleClick}>Klikni</button>
```

---

## Proč se používá className místo class

V HTML píšeš:

```html
<div class="card"></div>
```

V TSX píšeš:

```tsx
<div className="card"></div>
```

Důvod je historický a technický: `class` je v JavaScriptu klíčové slovo. JSX/TSX proto používá `className`.

Podobně:

```html
<label for="email">E-mail</label>
```

se v TSX píše:

```tsx
<label htmlFor="email">E-mail</label>
```

Tyto rozdíly jsou ze začátku otravné, ale rychle se zautomatizují.

---

## Bezpečnost: hodnoty se escapují

Když v TSX vložíš hodnotu:

```tsx
const name = "<script>alert('xss')</script>";

function App() {
  return <p>{name}</p>;
}
```

React ji standardně nevloží jako spustitelné HTML, ale jako text. To je bezpečnější než ruční skládání HTML stringů.

V jQuery nebo klasickém JS bylo rizikové používat:

```js
element.innerHTML = userInput;
```

nebo:

```js
$("#box").html(userInput);
```

V TSX je běžný zápis:

```tsx
<p>{userInput}</p>
```

standardně bezpečnější, protože React hodnotu escapuje.

Pokud bys opravdu potřeboval vložit raw HTML, existuje `dangerouslySetInnerHTML`, ale už název napovídá, že je potřeba s tím zacházet velmi opatrně.

---

## Malý praktický příklad

Představ si, že chceš zobrazit kartu projektu.

Datový typ:

```tsx
type Project = {
  id: string;
  title: string;
  description: string;
  url: string;
};
```

Komponenta:

```tsx
type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <a href={project.url}>Otevřít</a>
    </article>
  );
}
```

Použití:

```tsx
const project = {
  id: "levnemenu",
  title: "LevnéMenu.cz",
  description: "Denní menu a restaurace přehledně na mapě.",
  url: "https://levnemenu.cz",
};

function App() {
  return <ProjectCard project={project} />;
}
```

Tady už je vidět několik základních principů:

- UI je komponenta,
- komponenta dostává data přes props,
- data jsou typovaná,
- výstup vypadá jako HTML, ale je to TSX,
- hodnoty se vkládají přes `{}`.

---

## Jak o TSX přemýšlet jako LAMP vývojář

Nejbližší analogie:

```text
PHP šablona:
data + template → HTML

TSX komponenta:
props/state + komponenta → UI
```

Ale rozdíl je v tom, že TSX komponenta se může v prohlížeči opakovaně přepočítávat podle změny stavu.

Například:

```text
uživatel klikne na tlačítko
↓
změní se stav
↓
React znovu vyhodnotí komponentu
↓
UI se aktualizuje
```

Není potřeba ručně hledat element a měnit jeho text. Změníš data nebo stav a UI z toho vyplyne.

---

## Co si z této kapitoly odnést

TSX je zápis UI pomocí TypeScriptu a JSX syntaxe. Vypadá podobně jako HTML, ale není to HTML soubor ani HTML string. Je to zdrojový kód, který se při buildu překládá do JavaScriptu.

TSX se nejčastěji používá s Reactem. React podle něj vytváří a aktualizuje uživatelské rozhraní. Frameworky jako Next.js na Reactu staví a používají TSX nejen pro komponenty, ale i pro celé stránky.

Pro LAMP vývojáře je nejdůležitější změna v myšlení: místo ručního generování HTML stringů nebo manipulace s DOMem popisuješ, jak má UI vypadat pro aktuální data a stav.

Základní věta, kterou si zapamatuj:

```text
TSX je TypeScriptový zápis UI, který vypadá jako HTML, ale chová se jako součást JavaScript/React aplikace.
```

---

## Mini tahák

```tsx
// komponenta
function App() {
  return <h1>Ahoj</h1>;
}

// hodnota v UI
const name = "Hynek";
<p>{name}</p>;

// vlastní komponenta
<ProjectCard />

// HTML element
<div></div>

// CSS třída
<div className="card"></div>

// label for
<label htmlFor="email">E-mail</label>

// fragment
<>
  <h1>Nadpis</h1>
  <p>Text</p>
</>

// typované props
type ButtonProps = {
  label: string;
};

function Button({ label }: ButtonProps) {
  return <button>{label}</button>;
}
```

---

## Co bude dál

Teď už víš, co je TSX na základní úrovni. Další kapitola by měla vysvětlit mentální model Reactu/TSX: proč se neprogramuje hlavně stylem „najdi element a změň ho“, ale stylem „změň stav/data a UI se podle toho samo přepočítá“.
