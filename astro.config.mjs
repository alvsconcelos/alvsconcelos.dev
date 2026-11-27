// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import relativizeUrls from './scripts/relativize-urls.mjs';

export default defineConfig({
  site: 'https://alvsconcelos.dev',
  trailingSlash: 'always',
  integrations: [
    relativizeUrls(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          pt: 'pt-BR',
        },
      },
      filter: (page) => !page.includes('/en'),
      serialize(item) {
        const resumeEn = 'https://alvsconcelos.dev/resume/';
        const resumePt = 'https://alvsconcelos.dev/pt/curriculo/';
        if (item.url === resumeEn || item.url === resumePt) {
          item.links = [
            { lang: 'en', url: resumeEn },
            { lang: 'pt-BR', url: resumePt },
            { lang: 'x-default', url: resumeEn },
          ];
        }
        return item;
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
