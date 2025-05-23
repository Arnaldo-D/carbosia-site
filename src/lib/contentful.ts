import { createClient } from 'contentful';

const space  = process.env.CF_SPACE_ID!;
const token  = process.env.CF_CDA_TOKEN || process.env.CF_CMA_TOKEN!;
const client = createClient({ space, accessToken: token });

export async function getPage(slug: string) {
  const res = await client.getEntries<{ title: string; body: any }>({
    content_type: 'page',
    'fields.slug': slug,
    limit: 1,
  });
  return res.items[0]?.fields;
}
