import { notFound } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getPage } from "@/lib/contentful";

export default async function AboutPage() {
  const data = await getPage("about");
  if (!data) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">{data.title}</h1>

      <article className="prose prose-green">
        {documentToReactComponents(data.body as any)}
      </article>
    </main>
  );
}
