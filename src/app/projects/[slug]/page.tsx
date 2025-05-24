import { notFound } from "next/navigation";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getProject } from "@/lib/contentful";

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);
  if (!project) return notFound();

  const { title, tco2, pdfLink, hero, status, body } = project.fields as any;

  return (
    <article className="prose lg:prose-lg mx-auto">
      <p className="text-sm text-gray-500 uppercase">{status}</p>
      <h1>{title}</h1>
      <p><strong>{tco2} tonnellate CO₂</strong></p>

      {hero && (
        <Image
          src={`https:${hero.fields.file.url}`}
          alt={title}
          width={800}
          height={400}
          className="rounded-lg my-6"
        />
      )}

      {body && documentToReactComponents(body as any)}

      {pdfLink && (
        <p>
          <a
            href={`https:${pdfLink.fields.file.url}`}
            target="_blank"
            rel="noopener"
            className="underline text-brand"
          >
            Scarica il certificato PDF
          </a>
        </p>
      )}
    </article>
  );
}
