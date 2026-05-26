import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import { remark } from "remark";
import remarkHtml from "remark-html";
import { publishedChapters } from "@/lib/learning/tsxVsLampChapters";

export function generateStaticParams() {
  return publishedChapters.map((ch) => ({ slug: ch.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const chapter = publishedChapters.find((ch) => ch.slug === slug);
  if (!chapter) return {};
  return {
    metadataBase: new URL("https://darbujan.com"),
    title: `${chapter.title} | Hynek Dařbujan`,
    description: chapter.description,
    alternates: { canonical: `https://darbujan.com/learning/tsx-vs-lamp/${chapter.slug}` },
    openGraph: {
      title: `${chapter.title} | Hynek Dařbujan`,
      description: chapter.description,
      url: `https://darbujan.com/learning/tsx-vs-lamp/${chapter.slug}`,
      siteName: "Hynek Dařbujan",
      locale: "cs_CZ",
      type: "article",
    },
  };
}

async function loadChapterHtml(slug: string): Promise<string> {
  const filePath = path.join(process.cwd(), "content/learning/tsx-vs-lamp", `${slug}.md`);
  const source = fs.readFileSync(filePath, "utf-8");
  const result = await remark().use(remarkHtml, { sanitize: false }).process(source);
  // Strip the leading h1 — we render the chapter title separately above the content
  return result.toString().replace(/<h1[\s\S]*?<\/h1>\n?/, "");
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = publishedChapters.find((ch) => ch.slug === slug);
  if (!chapter) notFound();

  const html = await loadChapterHtml(slug);

  const idx = publishedChapters.indexOf(chapter);
  const prev = idx > 0 ? publishedChapters[idx - 1] : null;
  const next = idx < publishedChapters.length - 1 ? publishedChapters[idx + 1] : null;

  return (
    <main className="px-6 pt-12 pb-24 max-w-2xl mx-auto">
      <Link
        href="/learning/tsx-vs-lamp"
        className="text-sm text-gray-400 hover:text-gray-700 mb-8 inline-block"
      >
        ← TSX pro LAMP vývojáře
      </Link>

      <article>
        <span className="inline-block text-xs font-mono text-gray-400 bg-gray-100 px-2 py-1 rounded mb-4">
          kapitola {String(chapter.num).padStart(2, "0")}
        </span>
        <h1 className="text-3xl font-black mb-10 text-gray-900">{chapter.title}</h1>
        <div
          className="chapter-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>

      <nav className="mt-16 flex justify-between items-center text-sm border-t border-gray-100 pt-8">
        {prev ? (
          <Link
            href={`/learning/tsx-vs-lamp/${prev.slug}`}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
          >
            <span aria-hidden="true">←</span>
            <span>{String(prev.num).padStart(2, "0")}. {prev.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/learning/tsx-vs-lamp/${next.slug}`}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
          >
            <span>{String(next.num).padStart(2, "0")}. {next.title}</span>
            <span aria-hidden="true">→</span>
          </Link>
        ) : (
          <span className="text-gray-300 text-xs">02 — připravuje se</span>
        )}
      </nav>
    </main>
  );
}
