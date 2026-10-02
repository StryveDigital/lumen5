// Builds each landing page as its own self-contained folder in export/.
// Usage: npm run build:pages
import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const PAGES = ['lp1', 'lp2', 'lp3', 'explainers', 'demo']
const root = path.resolve(import.meta.dirname, '..')
const publicDir = path.join(root, 'public')

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) =>
    d.isDirectory() ? walk(path.join(dir, d.name)) : [path.join(dir, d.name)])

const publicFiles = walk(publicDir).map((f) => path.relative(publicDir, f).split(path.sep).join('/'))

for (const page of PAGES) {
  console.log(`\n▶ Building ${page}`)
  execSync('npx vite build --config vite.pages.config.ts --logLevel warn', {
    cwd: root, stdio: 'inherit', env: { ...process.env, PAGE: page },
  })
  const out = path.join(root, 'export', page)
  // Copy only the public files this page's built code references.
  const built = walk(out).filter((f) => /\.(html|js|css)$/.test(f))
    .map((f) => fs.readFileSync(f, 'utf8')).join('\n')
  let copied = 0
  for (const rel of publicFiles) {
    if (built.includes(rel)) {
      const dest = path.join(out, rel)
      fs.mkdirSync(path.dirname(dest), { recursive: true })
      fs.copyFileSync(path.join(publicDir, rel), dest)
      copied++
    }
  }
  console.log(`  ✓ export/${page}/ (${copied} images, fonts and videos)`)
}
