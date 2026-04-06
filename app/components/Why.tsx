const bullets = [
  "Stavím rychlé MVP",
  "Používám AI (ChatGPT + Claude Code)",
  "Testuju nápady v praxi",
  "Dodávám funkční řešení, ne prezentace",
];

export default function Why() {
  return (
    <section id="proc" className="px-6 pt-8 pb-24 max-w-2xl mx-auto border-t border-gray-100">
      <h2 className="text-2xl font-black mb-10 text-gray-900">Proč pracovat se mnou</h2>
      <ul className="flex flex-col gap-4">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-gray-700">
            <span className="mt-1 text-gray-300">—</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
