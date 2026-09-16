import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://darbujan.com"),
  title: "AI | Hynek Dařbujan",
  description: "Odkazy na modely a spotřebu kreditů.",
  alternates: { canonical: "https://darbujan.com/ai" },
  robots: { index: false, follow: false },
};

type Link = {
  title: string;
  desc: string;
  href: string;
  tag: string;
};

const sections: { title: string; links: Link[] }[] = [
  {
    title: "Modely",
    links: [
      {
        title: "OpenRouter",
        desc: "Katalog modelů od všech poskytovatelů na jednom místě.",
        href: "https://openrouter.ai/models",
        tag: "modely",
      },
      {
        title: "DeepSeek",
        desc: "Chat s DeepSeek modely.",
        href: "https://chat.deepseek.com",
        tag: "chat",
      },
      {
        title: "Claude",
        desc: "Chat s Claude modely.",
        href: "https://claude.ai",
        tag: "chat",
      },
    ],
  },
  {
    title: "Kredity a spotřeba",
    links: [
      {
        title: "OpenRouter — kredity",
        desc: "Stav kreditu a historie útraty.",
        href: "https://openrouter.ai/settings/credits",
        tag: "kredity",
      },
      {
        title: "DeepSeek — spotřeba",
        desc: "Přehled využití a nákladů na API.",
        href: "https://platform.deepseek.com/usage",
        tag: "usage",
      },
      {
        title: "Claude — billing",
        desc: "Fakturace a spotřeba u Anthropicu.",
        href: "https://platform.claude.com/settings/billing",
        tag: "billing",
      },
    ],
  },
];

export default function Ai() {
  return (
    <main className="px-6 pt-12 pb-24 max-w-2xl mx-auto">
      <a href="/" className="text-sm text-gray-400 hover:text-gray-700 mb-8 inline-block">
        ← darbujan.com
      </a>

      <h1 className="text-3xl font-black mb-4 text-gray-900">AI</h1>
      <p className="text-gray-600 mb-12">
        Moje modely a spotřeba kreditů. Rychlý přehled, ať nemusím hledat účty pokaždé znovu.
      </p>

      {sections.map((section) => (
        <section key={section.title} className="mb-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-4">
            {section.title}
          </h2>

          <div className="flex flex-col gap-4">
            {section.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between p-5 rounded-2xl border-2 border-gray-100 hover:border-gray-900 transition-colors"
              >
                <div>
                  <p className="font-bold text-gray-900 group-hover:underline">{link.title}</p>
                  <p className="text-gray-500 text-sm mt-1">{link.desc}</p>
                </div>
                <span className="text-xs font-mono text-gray-400 mt-1 shrink-0 ml-4">
                  {link.tag} ↗
                </span>
              </a>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
