import { createClient, Entry } from "contentful";

/* ----------------------------------------------------------------
   Configurazione client Contentful (usa le variabili d’ambiente)
-----------------------------------------------------------------*/
const space  = process.env.CF_SPACE_ID!;
const token  = process.env.CF_CDA_TOKEN || process.env.CF_CMA_TOKEN!;
const client = createClient({ space, accessToken: token });

/* ----------------------------------------------------------------
   1 · Pagina generica (Home, About, ecc.)
-----------------------------------------------------------------*/
type PageFields = { title: string; body: any };

export async function getPage(slug: string) {
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
  const res = await client.getEntries<BlogPostFields>({
    content_type: "BlogPost",
    order: "-fields.date",
  });
  return res.items;           // array di Entry<BlogPostFields>
}

/** Ritorna un singolo post dato lo slug; se non esiste → null */
export async function getBlogPost(slug: string) {
  const res = await client.getEntries<BlogPostFields>({
    content_type: "BlogPost",
    "fields.slug": slug,
    limit: 1,
  });
  return res.items[0] ?? null; // Entry<BlogPostFields> | null
}
