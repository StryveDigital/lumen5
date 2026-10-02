// Build config for the standalone page export. Used by scripts/build-pages.mjs.
// Each page is built separately into export/<page>/ with relative paths,
// so a folder can be uploaded anywhere (any domain, any sub-folder).
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

const page = process.env.PAGE
if (!page) throw new Error('PAGE env var is required (lp1, lp2, lp3, explainers, demo)')

// Source code refers to images/videos as "/file.png" (site-root paths).
// For a portable export, turn those into "./file.png" so they load from
// the page's own folder instead of the root of the domain.
const relativePublicPaths = (): Plugin => ({
  name: 'relative-public-paths',
  enforce: 'pre',
  transform(code, id) {
    // Fonts in index.css: point at the real files so Vite bundles them into
    // assets/ next to the CSS (works from any folder).
    if (id.endsWith('/src/index.css')) {
      return code.replace(/url\((['"]?)\/Fonts\//g, 'url($1../public/Fonts/')
    }
    if (!/\.(tsx?|jsx?)$/.test(id) || id.includes('node_modules')) return
    return code.replace(
      /(["'`(])\/(?=[A-Za-z][^"'`)\s]*\.(?:svg|png|jpe?g|webp|gif|mp4|webm|woff2?))/g,
      '$1./',
    )
  },
})

export default defineConfig({
  root: path.resolve(__dirname, 'export-template'),
  base: './',
  publicDir: false, // only the files a page actually uses are copied afterwards
  plugins: [relativePublicPaths(), react()],
  resolve: {
    alias: { '@page': path.resolve(__dirname, `src/pages/${page}/Page.tsx`) },
  },
  css: { postcss: path.resolve(__dirname) },
  build: {
    outDir: path.resolve(__dirname, `export/${page}`),
    emptyOutDir: true,
    assetsDir: 'assets',
  },
})
