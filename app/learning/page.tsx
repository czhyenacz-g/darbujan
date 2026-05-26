import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://darbujan.com"),
  title: "Školení | Hynek Dařbujan",
  description: "Praktické mini lekce pro zkušené vývojáře, kteří nechtějí začínat od nuly, ale potřebují rychle pochopit jiný stack nebo nový mentální model.",
  alternates: { canonical: "https://darbujan.com/learning" },
  openGraph: {
    title: "Školení | Hynek Dařbujan",
    description: "Praktické mini lekce pro zkušené vývojáře.",
    url: "https://darbujan.com/learning",
    siteName: "Hynek Dařbujan",
    locale: "cs_CZ",
    type: "website",
  },
};

const lessons = [
  {
    slug: "tsx-vs-lamp",
    title: "TSX pro LAMP fullstack vývojáře",
    desc: "Základy TSX, React mental model a rozdíly proti jQuery / klasickému JS.",
  },
];

export default function Learning() {
  return (
    <main className="px-6 pt-12 pb-24 max-w-2xl mx-auto">
      <a href="/" className="text-sm text-gray-400 hover:text-gray-700 mb-8 inline-block">← darbujan.com</a>

      <h1 className="text-3xl font-black mb-4 text-gray-900">Školení</h1>
      <p className="text-gray-600 mb-12">
        Praktické mini lekce pro zkušené vývojáře, kteří nechtějí začínat od nuly, ale potřebují rychle pochopit jiný stack nebo nový mentální model.
      </p>

      <div className="flex flex-col gap-4">
        {lessons.map((lesson) => (
          <Link
            key={lesson.slug}
            href={`/learning/${lesson.slug}`}
            className="group flex items-start justify-between p-5 rounded-2xl border-2 border-gray-100 hover:border-gray-900 transition-colors"
          >
            <div>
              <p className="font-bold text-gray-900 group-hover:underline">{lesson.title}</p>
              <p className="text-gray-500 text-sm mt-1">{lesson.desc}</p>
            </div>
            <span className="text-xs font-mono text-gray-400 mt-1 shrink-0 ml-4">lekce</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
