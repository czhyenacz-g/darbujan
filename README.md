# darbujan.com

Osobní web Hynka Dařbujana — project-driven landing page navržená pro generování kontaktů z existujících projektů.

## Co to je

Není to CV. Je to stránka, která:
- ukazuje co stavím
- přitahuje návštěvníky z footerů existujících projektů
- má je přimět napsat: "Chci něco podobného"

## Struktura

- **Hero** — jméno, krátký text o práci v Logio/Veritico + vlastních projektech, dvě CTA tlačítka
- **Projekty** — kolikpiv.cz, za-sobovani.cz, placeholder pro další
- **Proč pracovat se mnou** — 4 bullet pointy
- **CTA** — "Chceš něco podobného? Napiš mi"
- **Kontakt** — email + GitHub

## Stack

- Next.js 15 (App Router)
- TailwindCSS
- Vercel Analytics
- Deploy: Vercel (auto-deploy z GitHubu na push do `main`)

## Kde je nasazeno

- **GitHub:** https://github.com/czhyenacz-g/darbujan
- **Vercel:** https://darbujan.vercel.app (nebo aktuální preview URL)
- **Doména:** darbujan.com — zatím nepropojeno, připraví Hynek

## Lokální spuštění

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Napojení domény darbujan.com

1. Jdi na vercel.com → projekt `darbujan` → Settings → Domains
2. Přidej `darbujan.com` a `www.darbujan.com`
3. Vercel zobrazí DNS záznamy — nastav je u svého registrátora domény
4. Po propagaci DNS (max 24h) bude web live na darbujan.com
