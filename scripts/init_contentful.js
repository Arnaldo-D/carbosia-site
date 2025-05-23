// scripts/init_contentful.js  – versione CommonJS
const contentful = require('contentful-management');
require('dotenv').config({ path: '.env.local' });

const { CF_SPACE_ID, CF_ENV_ID, CF_CMA_TOKEN } = process.env;

const client = contentful.createClient({ accessToken: CF_CMA_TOKEN });

(async () => {
  const space = await client.getSpace(CF_SPACE_ID);
  const env   = await space.getEnvironment(CF_ENV_ID);

  // 1. Content type Page
  let pageCT;
  try { pageCT = await env.getContentType('page'); }
  catch {
    pageCT = await env.createContentTypeWithId('page', {
      name: 'Page', displayField: 'title',
      fields: [
        { id: 'slug',  name: 'Slug',  type: 'Symbol',    required: true },
        { id: 'title', name: 'Title', type: 'Symbol',    required: true },
        { id: 'body',  name: 'Body',  type: 'RichText',  required: true },
        { id: 'metaTitle', name: 'Meta Title', type: 'Symbol' },
        { id: 'metaDesc',  name: 'Meta Description', type: 'Symbol' }
      ]
    });
    await pageCT.publish();
  }

  // 2. Entry “Home”
  const home = await env.createEntry('page', {
    fields: {
      slug:  { 'en-US': 'home' },
      title: { 'en-US': 'Carbosia – Tokenising sustainability' },
      body:  { 'en-US': {
        nodeType: 'document', data: {}, content: [
          { nodeType: 'paragraph', data: {}, content: [
            { nodeType: 'text', value: 'Sito in costruzione…', marks: [], data: {} }
          ]}
        ]
      }}
    }
  });
  await home.publish();

  console.log('✅  Bootstrap completato!');
})();
