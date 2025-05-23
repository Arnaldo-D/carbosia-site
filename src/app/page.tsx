import { getPage } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default async function HomePage() {
  // recupera l’entry con slug “home”
  const data = await getPage('home');

  if (!data) {
    return (
      <main className="p-10 text-center">
        Contenuto non trovato.
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">{data.title}</h1>

      <article className="prose prose-green">
        {documentToReactComponents(data.body as any)}
      </article>
    </main>
  );
}
