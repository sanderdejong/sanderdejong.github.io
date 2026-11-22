// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sanderdejong.dev',
  prefetch: true,
  integrations: [sitemap({
    filter: (page) => !/^\/(?:about|projects|contact)\/?$/.test(new URL(page).pathname)
  })]
});
