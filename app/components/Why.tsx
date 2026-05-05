const items = [
  {
    title: "Znám základ, ne jen výstup",
    body: "AI chaty jsou zajímavé nástroj — ale zajímá mě, co je pod tím. Mám praktické zkušenosti s image recognition, generováním obrázků (Stable Diffusion), LLM (Llama), forecastingem a dalšími oblastmi strojového učení.",
  },
  {
    title: "Odpůrce vibe codění",
    body: "Nekopíruji kód, kterému nerozumím. Každý řádek musí dávat smysl — vím proč tam je, co dělá a co se stane, když to odstraním. Rychlost bez porozumění je dluh, který se vždy vrátí.",
  },
  {
    title: "Stavím rychlé MVP a testuju v praxi",
    body: "Nečekám na dokonalost. Udělám funkční verzi, nasadím ji a zjistím, jestli má smysl.",
  },
  {
    title: "Dodávám funkční řešení, ne prezentace",
    body: "Žádné mockupy ani slidey. Výsledkem je věc, která běží.",
  },
];

export default function Why() {
  return (
    <section id="proc" className="px-6 pt-8 pb-24 max-w-2xl mx-auto border-t border-gray-100">
      <h2 className="text-2xl font-black mb-10 text-gray-900">Proč pracovat se mnou</h2>
      <ul className="flex flex-col gap-8">
        {items.map((item) => (
          <li key={item.title} className="flex items-start gap-4">
            <span className="mt-1 text-gray-300 shrink-0">—</span>
            <div>
              <p className="font-bold text-gray-900 mb-1">{item.title}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
