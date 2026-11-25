// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sanderdejong.dev',
  prefetch: true,
  security: {
    csp: {
      styleDirective: {
        resources: [
          { resource: "'self'", kind: 'element' },
          { resource: "'unsafe-inline'", kind: 'attribute' },
        ],
      },
    },
  },
  markdown: {
    syntaxHighlight: false,
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Bricolage Grotesque',
      cssVariable: '--font-display',
      weights: [600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'ui-sans-serif', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'DM Sans',
      cssVariable: '--font-body',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'ui-sans-serif', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: [400],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
    },
  ],
  image: {
    service: {
      config: {
        webp: { effort: 6 },
      },
    },
  },
  integrations: [sitemap({
    filter: (page) => !/^\/(?:about|projects|contact)\/?$/.test(new URL(page).pathname)
  })]
});
