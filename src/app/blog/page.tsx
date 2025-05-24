import Link from "next/link";
import { format } from "date-fns";
import { it } from "date-fns/locale";
import { getBlogPosts } from "@/lib/contentful";

export const metadata = { title: "Blog | Carbosia" };

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold">Blog</h1>

      {posts.map((p: any) => (
        <article key={p.sys.id} className="border-b pb-6">
          <h2 className="text-2xl font-semibold">
            <Link href={`/blog/${p.fields.slug}`} className="hover:underline">
              {p.fields.title}
            </Link>
          </h2>
          <p className="text-sm text-gray-500">
            {format(new Date(p.fields.date), "d MMMM yyyy", { locale: it })}
          </p>
        </article>
      ))}
    </section>
  );
}
