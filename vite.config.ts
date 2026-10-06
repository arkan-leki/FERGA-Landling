import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, type Plugin, type UserConfig } from 'vite';

/**
 * Canonical origin of the deployed site. Every absolute SEO/OG URL in
 * index.html, plus robots.txt and sitemap.xml, are built from this.
 * Override at build time:  SITE_URL=https://staging.example.com npm run build
 */
const SITE_URL = (process.env.SITE_URL || 'https://ferga.app').replace(/\/+$/, '');

const ROBOTS_TXT = `# Ferga — Teaching & Learning
User-agent: *
Allow: /
# Internal redirect page used by the QR code — keep it out of the index.
Disallow: /get.html

Sitemap: ${SITE_URL}/sitemap.xml
`;

const SITEMAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

/**
 * SEO plugin
 *  · replaces the %SITE_URL% placeholder in index.html (canonical, og:url,
 *    og:image, twitter:image, JSON-LD) — crawlers ignore relative OG images
 *  · emits robots.txt and sitemap.xml into the build output
 *  · serves both in dev too, so they can be checked without a build
 */
function seoPlugin(): Plugin {
  return {
    name: 'ferga-seo',

    transformIndexHtml(html) {
      return html.replaceAll('%SITE_URL%', SITE_URL);
    },

    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = (req.url || '').split('?')[0];
        if (url === '/robots.txt' || url === '/sitemap.xml') {
          res.setHeader(
            'Content-Type',
            url === '/robots.txt' ? 'text/plain; charset=utf-8' : 'application/xml; charset=utf-8'
          );
          res.end(url === '/robots.txt' ? ROBOTS_TXT : SITEMAP_XML);
          return;
        }
        next();
      });
    },

    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: ROBOTS_TXT });
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: SITEMAP_XML });
    },
  };
}

export default defineConfig((): UserConfig => {
  return {
    // 'mpa' (not the default 'spa'): the site is a single page, and the SPA
    // html-fallback would otherwise swallow the static /get.html quick-download page
    // that the QR code points at, serving the landing page instead of it.
    appType: 'mpa',
    plugins: [react(), tailwindcss(), seoPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
