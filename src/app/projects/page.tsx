import Link from "next/link";
import { getProjects } from "@/lib/contentful";

export const metadata = { title: "Projects | Carbosia" };

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold">Projects</h1>

      {projects.map((p: any) => (
        <article key={p.sys.id} className="border-b pb-6">
          <h2 className="text-2xl font-semibold">
            <Link
              href={`/projects/${p.fields.slug}`}
              className="hover:underline"
            >
              {p.fields.title}
            </Link>
          </h2>
          <p className="text-sm text-gray-500">
            {p.fields.tCO2} tCO2 · {p.fields.status}
          </p>
        </article>
      ))}
    </section>
  );
}
