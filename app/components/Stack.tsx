const stack = [
  { area: "Backend", items: "PHP, Laravel, MariaDB, MySQL" },
  { area: "Frontend", items: "Next.js, React, TypeScript" },
  { area: "Infrastruktura", items: "Docker, Vercel, VPS, GitLab" },
  { area: "AI", items: "Claude Code, Gemini, OpenRouter, automatizované obsahové workflow" },
  { area: "Co mě baví", items: "praktické webové nástroje, automatizace, otevřená data, SEO a mikroprojekty" },
];

export default function Stack() {
  return (
    <section id="stack" className="px-6 pt-8 pb-24 max-w-2xl mx-auto border-t border-gray-100">
      <h2 className="text-2xl font-black mb-10 text-gray-900">S čím pracuju</h2>
      <dl className="flex flex-col gap-5">
        {stack.map((s) => (
          <div key={s.area} className="flex flex-col sm:flex-row sm:gap-6">
            <dt className="text-xs font-mono uppercase tracking-widest text-gray-400 sm:w-36 shrink-0 sm:mt-1">
              {s.area}
            </dt>
            <dd className="text-gray-900 text-sm leading-relaxed">{s.items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
