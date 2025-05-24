import { notFound } from "next/navigation";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getBlogPost } from "@/lib/contentful";

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);
  if (!post) return notFound();

  const { title, body, hero, date } = post.fields as any;

  return (
    <article className="prose prose-slate lg:prose-lg mx-auto">
      <p className="text-sm text-gray-500">
        {new Date(date).toLocaleDateString("it-IT")}
      </p>
      <h1>{title}</h1>

      {hero && (
        <Image
          src={`https:${hero.fields.file.url}`}
          alt={title}
          width={800}
          height={400}
          className="rounded-lg my-6"
        />
      )}

      {documentToReactComponents(body as any)}
    </article>
  );
}
