# Starter — instrukce pro Claude

Tento repozitář je šablona pro rychlé zakládání nových Next.js projektů.
Hynek řekne název a nápad → Claude udělá vše ostatní.

---

## Nastavení nového MacBooku (udělat jednou)

Bez těchto nástrojů Claude nemůže plně automatizovat zakládání projektů.
Projdi kroky v tomto pořadí.

### 1. Xcode Command Line Tools (git, make, atd.)
```bash
xcode-select --install
```

### 2. Homebrew (package manager)
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 3. Node.js (přes nvm — správa verzí)
```bash
brew install nvm
# přidej do ~/.zshrc:
export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"
# pak:
source ~/.zshrc
nvm install --lts
nvm use --lts
```

### 4. GitHub CLI
```bash
brew install gh
gh auth login
# → zvolí: GitHub.com → HTTPS → Login with a browser
```

### 5. Vercel CLI
```bash
npm i -g vercel
vercel login
# → přihlásí přes browser
```

### 6. SSH klíč pro GitHub (pro git push)
```bash
ssh-keygen -t ed25519 -C "tvuj@email.cz"
# Enter třikrát (výchozí cesta, bez hesla)
cat ~/.ssh/id_ed25519.pub
# zkopíruj výstup a přidej na github.com/settings/keys
```

### 7. Git konfigurace
```bash
git config --global user.name "darbujan"
git config --global user.email "tvuj@email.cz"
```

### 8. Vercel — napoj GitHub účet
Na vercel.com → Settings → Git → Connect GitHub účet `czhyenacz-g`.
Zaškrtni "Auto-deploy on push" pro všechna repozitáře.

### Ověření že vše funguje
```bash
node --version      # v20+
git --version       # 2.x
gh auth status      # Logged in to github.com
vercel whoami       # tvoje jméno na Vercel
```

---

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Vercel Analytics** (`@vercel/analytics`)
- **GoatCounter** (volitelně, nastavit v `app/config/analytics.ts`)
- Deploy: **Vercel** (auto-deploy z GitHubu na push do `main`)

---

## Tokeny (API přístupy)

Uloženy v `~/PhpstormProjects/starter/.tokens` — soubor není commitován (.gitignore).

Obsahuje:
- `GITHUB_TOKEN` — pro vytváření GitHub repozitářů přes API
- `VERCEL_TOKEN` — pro vytváření a deploy Vercel projektů přes API

Před každou akcí načti tokeny:
```bash
source ~/PhpstormProjects/starter/.tokens
```

---

## Jak založit nový projekt

### 1. Zkopíruj starter

```bash
cp -r ~/PhpstormProjects/starter ~/PhpstormProjects/PROJEKT_NAZEV
cd ~/PhpstormProjects/PROJEKT_NAZEV
rm -rf .git node_modules .next
```

### 2. Nahraď placeholdery

V celém projektu vyhledej a nahraď:
- `PROJECT_NAME` → název projektu (např. "Kolik piv to je?")
- `PROJECT_DESCRIPTION` → jeden řádek co to dělá
- `PROJECT_DOMAIN` → doména (např. `kolikpiv.cz`) nebo zatím `TODO`

Soubory kde se placeholdery vyskytují:
- `app/layout.tsx` — metadata (title, description, OG)
- `app/page.tsx` — hlavní stránka
- `app/api/og/route.tsx` — OG image
- `package.json` — `"name"` pole

### 3. Inicializuj Git a pushnui na GitHub

```bash
git init
git add .
git commit -m "init"
# Vytvoř repo na github.com/czhyenacz-g (nebo přes gh CLI):
gh repo create czhyenacz-g/PROJEKT_NAZEV --public --source=. --push
```

Pokud `gh` není nainstalované:
```bash
brew install gh
gh auth login
```

### 4. Napoj Vercel

Buď automaticky (pokud je Vercel napojený na GitHub org) — stačí push.

Nebo manuálně:
```bash
npm i -g vercel
vercel login
vercel --prod
```

### 5. Nainstaluj závislosti a spusť lokálně

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## Struktura projektu

```
app/
  layout.tsx          # Root layout, metadata, analytics
  page.tsx            # Hlavní stránka
  globals.css         # Tailwind direktivy
  config/
    analytics.ts      # GoatCounter kód
  api/
    og/
      route.tsx       # Dynamický OG image endpoint
```

---

## Konvence

- **Tmavý theme**: `bg-gray-900 text-white` na body (v layout.tsx)
- **Max šířka obsahu**: `max-w-md` nebo `max-w-lg` + `mx-auto`
- **Barvy**: amber pro akcenty (`text-amber-400`, `bg-amber-600`)
- **Jazyk**: česky, neformální tón
- **Komponenty**: pokud je stránka interaktivní, přidej `"use client"` komponentu do `app/components/`
- **Sdílení**: OG image přes `/api/og` s query params (`title`, `sub`, vlastní)

---

## Checklist pro nový projekt

- [ ] Nahrazeny všechny `PROJECT_*` placeholdery
- [ ] `package.json` má správné `"name"`
- [ ] `npm install` proběhl
- [ ] `npm run dev` funguje na localhost:3000
- [ ] Git repo vytvořeno a pushnuté
- [ ] Vercel nasadil — URL funguje
- [ ] OG image funguje: `https://DOMENA/api/og?title=Test`

---

## Vzorový projekt

Referenční implementace: `~/PhpstormProjects/kolikpiv.cz/kolikpiv/`

Obsahuje příklady:
- Kalkulačka s výsledkem a sdílením
- Dynamický OG image s parametry
- Share text s URL params
- GoatCounter + Vercel Analytics
- QR kód generování
- LocalStorage pro uložení nastavení

## Final Report → Content API (povinné po každém úkolu)

Po dokončení každého úkolu (implementace, oprava, analýza) ulož výslednou
zprávu (Final Report) i do Content API a uživateli vrať její veřejný
odkaz — uživatel ho vkládá přímo do ChatGPT. Příklad výsledku:
https://content-api.darbujan.com/r/UccMohrIRCtAW2lKcncviP8y

**Jak na to:**

1. Token je na tomhle stroji v `~/.config/claude-code/content-api-token`
   (chmod 600). **Nikdy** ho nezapisuj do repozitáře, reportu ani logu.
   Když soubor chybí (jiný stroj), zeptej se uživatele — token
   nehádej a nevytvářej nový.
2. Napiš report v Markdownu v této struktuře: **Summary / Changed files /
   Implementation / Validation / Git / Issues / Recommended next step**.
3. Odešli ho `POST https://content-api.darbujan.com/api/reports`:

   ```bash
   # report.json = {"source":"claude-code","project":"<slug-projektu>",
   #   "title":"<krátký titulek>","status":"completed|partial|failed",
   #   "report":"<Markdown>","branch":"<větev>","commit_hash":"<hash, pokud je>"}
   CONTENT_API_TOKEN=$(cat ~/.config/claude-code/content-api-token) \
     sh /srv/projects/universal-content-api/scripts/publish-report.sh report.json
   ```

   Bez helper skriptu stejně funguje přímý `curl -X POST … -H
   "Authorization: Bearer $CONTENT_API_TOKEN" -H "Content-Type:
   application/json" -d @report.json`. JSON sestav přes `python3`/`jq`
   (kvůli escapování Markdownu), ne ručně. Soubor dej do scratchpadu,
   ne do repozitáře.
4. Odpověď `201` obsahuje `url` (veřejná HTML stránka `/r/{token}`)
   a `api_url` (JSON). Finální odpověď uživateli **ukonči holou `url`
   na samostatném řádku** — nic dalšího na tom řádku.
5. Když endpoint neodpovídá nebo chybí token, výslovně to napiš — ale
   kvůli tomu neblokuj dokončení a shrnutí samotného úkolu.

Podrobnosti API: `docs/claude-reports.md` v repozitáři
`universal-content-api`.
