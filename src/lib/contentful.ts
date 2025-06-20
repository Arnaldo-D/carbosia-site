import { createClient, Entry } from "contentful";

/* ----------------------------------------------------------------
   Configurazione client Contentful (usa le variabili d’ambiente)
-----------------------------------------------------------------*/
const space  = process.env.CF_SPACE_ID || "";
const token  = process.env.CF_CDA_TOKEN || process.env.CF_CMA_TOKEN || "";
const client = space && token ? createClient({ space, accessToken: token }) : null;

/* ----------------------------------------------------------------
   1 · Pagina generica (Home, About, ecc.)
-----------------------------------------------------------------*/
type PageFields = { title: string; body: any };

export async function getPage(slug: string) {
  if (!client) return undefined;
  const res = await client.getEntries<PageFields>({
    content_type: "page",
    "fields.slug": slug,
    limit: 1,
  });
  return res.items[0]?.fields;
}

/* ----------------------------------------------------------------
   2 · Blog helpers
-----------------------------------------------------------------*/
type BlogPostFields = {
  title: string;
  slug: string;
  date: string;
  body: any;
  hero?: any;
};

/** Ritorna tutti i post del blog, ordinati dal più recente */
export async function getBlogPosts() {
  if (!client) return [];
  const res = await client.getEntries<BlogPostFields>({
    content_type: "blogPost",
    order: "-fields.date",
  });
  return res.items;           // array di Entry<BlogPostFields>
}

/** Ritorna un singolo post dato lo slug; se non esiste → null */
export async function getBlogPost(slug: string) {
  if (!client) return null;
  const res = await client.getEntries<BlogPostFields>({
    content_type: "blogPost",
    "fields.slug": slug,
    limit: 1,
  });
  return res.items[0] ?? null; // Entry<BlogPostFields> | null
}
/* ----------------------------------------------------------------
   3 · Project helpers
-----------------------------------------------------------------*/
type ProjectFields = {
  title: string;
  slug: string;
  tco2: number;
  pdfLink?: any;
  hero?: any;
  status: "planned" | "active" | "completed";
};

/** Ritorna tutti i progetti ordinati per titolo */
export async function getProjects() {
  if (!client) return [];
  const res = await client.getEntries<ProjectFields>({
    content_type: "project",
    order: "fields.title",
  });
  return res.items;           // Entry<ProjectFields>[]
}

/** Ritorna un singolo progetto dato lo slug; se non esiste → null */
export async function getProject(slug: string) {
  if (!client) return null;
  const res = await client.getEntries<ProjectFields>({
    content_type: "project",
    "fields.slug": slug,
    limit: 1,
  });
  return res.items[0] ?? null; // Entry<ProjectFields> | null
}

