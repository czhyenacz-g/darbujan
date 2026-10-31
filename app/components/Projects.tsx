type Link = { url: string; label: string };

type Project = {
  name: string;
  desc: string;
  links: Link[];
  tag: string;
};

const l = (domain: string, label?: string): Link => ({
  url: `https://${domain}`,
  label: label ?? domain,
});

const active: Project[] = [
  {
    name: "LevnéMenu.cz / ČeskéMenu.cz",
    desc: "Vyhledávače denních menu restaurací. Automatický sběr jídelních lístků, filtrování podle ceny, lokality a typu jídla. Do rodiny patří i VegMenu.cz.",
    links: [l("levnemenu.cz", "LevnéMenu.cz"), l("ceskemenu.cz", "ČeskéMenu.cz"), l("vegmenu.cz", "VegMenu.cz")],
    tag: "jídlo · scraping",
  },
  {
    name: "NechciVolit.cz",
    desc: "Nezávislý občanský web o českých volbách — kandidáti, výsledky, volební historie a vysvětlení, jak funguje demokracie.",
    links: [l("nechcivolit.cz", "NechciVolit.cz")],
    tag: "otevřená data",
  },
  {
    name: "KdeJeMetro.cz / KdeJeMHD.cz",
    desc: "Praktické nástroje pro cestující: nejbližší vstup do metra, zastávky MHD a navigace k nim.",
    links: [l("kdejemetro.cz", "KdeJeMetro.cz"), l("kdejemhd.cz", "KdeJeMHD.cz")],
    tag: "doprava",
  },
  {
    name: "Hlasuju.cz",
    desc: "Živé hlasování, ankety a kvízy z mobilu s výsledky v reálném čase. Teď přidávám sdílené ankety a widgety pro cizí weby.",
    links: [l("hlasuju.cz", "Hlasuju.cz")],
    tag: "realtime",
  },
  {
    name: "ReceptMenu.cz",
    desc: "Recepty a celodenní jídelníčky. AI pomáhá navrhovat menu, dietní varianty a inspiraci na vaření doma.",
    links: [l("receptmenu.cz", "ReceptMenu.cz")],
    tag: "AI",
  },
  {
    name: "StreamerSetup.cz",
    desc: "Katalog českých a slovenských streamerů a jejich techniky — PC, mikrofony, kamery. Návody, doporučené sestavy a přehled živých vysílání.",
    links: [l("streamersetup.cz", "StreamerSetup.cz")],
    tag: "katalog",
  },
  {
    name: "HowToFish.cz",
    desc: "Rybaření ve videohrách — katalog her s rybářskými mechanikami a související obsah.",
    links: [l("howtofish.cz", "HowToFish.cz")],
    tag: "hry",
  },
];

const inProgress: Project[] = [
  {
    name: "OsmáLiga.cz",
    desc: "Vlastní browserová fotbalová hra z prostředí okresního fotbalu. Arkádová hratelnost, humor, satira a herní ekonomika.",
    links: [l("osmaliga.cz", "OsmáLiga.cz")],
    tag: "hra",
  },
];

const experiments: { name: string; desc: string; url?: string }[] = [
  { name: "JeToAI.cz", desc: "rozpoznávání obsahu vytvořeného AI", url: "https://jetoai.cz" },
  { name: "Vyhledavac-Darku.cz", desc: "inspirace na originální dárky", url: "https://vyhledavac-darku.cz" },
  { name: "ŠokujícíOdhalení.cz", desc: "zkoušení automatizované redakční práce", url: "https://sokujiciodhaleni.cz" },
  { name: "KolikPiv.cz", desc: "kolik piv stojí tvůj nákup", url: "https://kolikpiv.cz" },
  { name: "NočníSlužba.cz", desc: "experiment", url: "https://nocnisluzba.cz" },
  { name: "CT25.cz", desc: "experiment", url: "https://ct25.cz" },
  { name: "UklidNaKlikHK.cz", desc: "web pro úklidovou firmu TOPTERKA", url: "https://www.uklidnaklikhk.cz" },
  { name: "Topterka.cz", desc: "web úklidové firmy TOPTERKA", url: "https://topterka.cz" },
  { name: "Kendista", desc: "menší osobní projekt" },
];

function ProjectCard({ p, muted = false }: { p: Project; muted?: boolean }) {
  return (
    <div
      className={`p-5 rounded-2xl border-2 ${
        muted ? "border-dashed border-gray-200" : "border-gray-100"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <p className="font-bold text-gray-900">{p.name}</p>
        <span className="text-xs font-mono text-gray-400 mt-1 shrink-0">{p.tag}</span>
      </div>
      <p className="text-gray-500 text-sm mt-1 leading-relaxed">{p.desc}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
        {p.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-gray-900 underline decoration-dotted hover:text-gray-600 transition-colors"
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </div>
  );
}

function GroupHeading({ title, note }: { title: string; note: string }) {
  return (
    <div className="mb-5">
      <h3 className="text-sm font-mono uppercase tracking-widest text-gray-400">{title}</h3>
      <p className="text-gray-500 text-sm mt-1">{note}</p>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projekty" className="px-6 pt-8 pb-24 max-w-2xl mx-auto">
      <h2 className="text-2xl font-black mb-4 text-gray-900">Projekty</h2>
      <p className="text-gray-500 text-sm leading-relaxed mb-12">
        Většinu z nich navrhuji, programuji a provozuji sám. Některé denně používají lidi,
        jiné jsou rozpracované a pár je čistě na hraní.
      </p>

      <GroupHeading title="Běží" note="Provozované služby, které mají reálné uživatele." />
      <div className="flex flex-col gap-4 mb-14">
        {active.map((p) => (
          <ProjectCard key={p.name} p={p} />
        ))}
      </div>

      <GroupHeading title="Ve vývoji" note="Rozpracované projekty — dají se zkusit, ale ještě nejsou hotové." />
      <div className="flex flex-col gap-4 mb-14">
        {inProgress.map((p) => (
          <ProjectCard key={p.name} p={p} muted />
        ))}
      </div>

      <GroupHeading title="Experimenty a menší weby" note="Pokusy a mikroprojekty, na kterých zkouším nápady a technologie." />
      <ul className="flex flex-col gap-2 text-sm">
        {experiments.map((e) => (
          <li key={e.name} className="flex flex-wrap gap-x-2">
            {e.url ? (
              <a
                href={e.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gray-900 underline decoration-dotted hover:text-gray-600 transition-colors"
              >
                {e.name}
              </a>
            ) : (
              <span className="font-semibold text-gray-900">{e.name}</span>
            )}
            <span className="text-gray-500">— {e.desc}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
