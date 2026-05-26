import { redirect } from "next/navigation";
import { publishedChapters } from "@/lib/learning/tsxVsLampChapters";

export function generateStaticParams() {
  return publishedChapters.map((ch) => ({ slug: ch.slug }));
}

export default async function SkoleniChapterSlug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/learning/tsx-vs-lamp/${slug}`);
}
