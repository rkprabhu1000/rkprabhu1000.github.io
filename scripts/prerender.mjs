// Bakes the rendered page into dist/index.html so search engines and AI crawlers
// that don't run JavaScript still see all of the content.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)
const file = resolve('dist/index.html')
const html = readFileSync(file, 'utf8')
const marker = '<div id="root"></div>'
if (!html.includes(marker)) throw new Error('root marker not found in dist/index.html')
writeFileSync(file, html.replace(marker, `<div id="root">${render()}</div>`))
rmSync(resolve('dist-ssr'), { recursive: true, force: true })
console.log('prerendered dist/index.html')
