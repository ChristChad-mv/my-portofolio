import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv, type Plugin } from 'vite';

function normalizeSiteUrl(value?: string) {
  if (!value) return undefined;
  const url = value.startsWith('http://') || value.startsWith('https://') ? value : `https://${value}`;
  return url.replace(/\/$/, '');
}

function seoFilesPlugin(siteUrl?: string): Plugin {
  return {
    name: 'portfolio-seo-files',
    transformIndexHtml(html) {
      if (!siteUrl) return html;

      return html.replace(
        '</head>',
        `    <link rel="canonical" href="${siteUrl}/" />\n    <meta property="og:url" content="${siteUrl}/" />\n</head>`,
      );
    },
    generateBundle() {
      if (!siteUrl) return;

      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      });

      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${siteUrl}/</loc>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`,
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  const siteUrl = normalizeSiteUrl(
    env.VITE_SITE_URL ||
      env.VERCEL_PROJECT_PRODUCTION_URL ||
      env.VITE_VERCEL_PROJECT_PRODUCTION_URL,
  );

  return {
    plugins: [react(), tailwindcss(), seoFilesPlugin(siteUrl)],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
