const projects = [
  {
    url: "https://kolikpiv.cz",
    name: "kolikpiv.cz",
    desc: "Kolik piv stojí tvůj nákup",
    tag: "kalkulačka",
  },
  {
    url: "https://za-sobovani.cz",
    name: "za-sobovani.cz",
    desc: "Pomáhá firmám neztrácet zákazníky",
    tag: "SaaS",
  },
  {
    url: "https://vyhledavac-darku.cz",
    name: "vyhledavac-darku.cz",
    desc: "Pomáhá najít originální dárek — aby to nebyl trash",
    tag: "web",
  },
  {
    url: "https://zdravotniterapie.cz",
    name: "zdravotniterapie.cz",
    desc: "Rezervační a komunikační systém pro masery a klienty",
    tag: "SaaS",
  },
  {
    url: "https://levnemenu.cz",
    name: "levnemenu.cz",
    desc: "Protože se člověk má mít kde najíst za levno",
    tag: "web",
  },
  {
    url: "https://uklidnaklik.cz",
    name: "uklidnaklik.cz",
    desc: "Web pro úklidovou firmu TOPTERKA",
    tag: "web",
  },
  {
    url: null,
    name: "…další",
    desc: "Další projekty přibývají každý týden",
    tag: "brzy",
  },
];

export default function Projects() {
  return (
    <section id="projekty" className="px-6 pt-8 pb-24 max-w-2xl mx-auto">
      <h2 className="text-2xl font-black mb-12 text-gray-900">Projekty</h2>

      <div className="flex flex-col gap-4">
        {projects.map((p) =>
          p.url ? (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between p-5 rounded-2xl border-2 border-gray-100 hover:border-gray-900 transition-colors"
            >
              <div>
                <p className="font-bold text-gray-900 group-hover:underline">{p.name}</p>
                <p className="text-gray-500 text-sm mt-1">{p.desc}</p>
              </div>
              <span className="text-xs font-mono text-gray-400 mt-1 shrink-0 ml-4">{p.tag}</span>
            </a>
          ) : (
            <div
              key={p.name}
              className="flex items-start justify-between p-5 rounded-2xl border-2 border-dashed border-gray-200"
            >
              <div>
                <p className="font-bold text-gray-400">{p.name}</p>
                <p className="text-gray-400 text-sm mt-1">{p.desc}</p>
              </div>
              <span className="text-xs font-mono text-gray-300 mt-1 shrink-0 ml-4">{p.tag}</span>
            </div>
          )
        )}
      </div>
    </section>
  );
}
