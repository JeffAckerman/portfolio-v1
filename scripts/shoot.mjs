import puppeteer from 'puppeteer-core'

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: 'new',
})
const page = await browser.newPage()
const errors = []
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`))
page.on('console', (m) => {
  if (m.type() === 'error') errors.push(`console: ${m.text()}`)
})

await page.setViewport({ width: 1440, height: 900 })
await page.goto('http://localhost:4173', { waitUntil: 'networkidle0' })
await new Promise((r) => setTimeout(r, 2200))

// Walk the page so every whileInView reveal fires, then capture sections.
const height = await page.evaluate(() => document.body.scrollHeight)
for (let y = 0; y < height; y += 700) {
  await page.evaluate((v) => window.scrollTo({ top: v, behavior: 'instant' }), y)
  await new Promise((r) => setTimeout(r, 250))
}

const stops = [
  ['stats', '#stats'],
  ['caps', '#capabilities'],
  ['work', '#work'],
  ['skills', '#skills'],
  ['journey', '#journey'],
  ['about', '#about'],
  ['contact', '#contact'],
]
for (const [name, sel] of stops) {
  await page.evaluate((s) => {
    document.querySelector(s)?.scrollIntoView({ behavior: 'instant', block: 'start' })
  }, sel)
  await new Promise((r) => setTimeout(r, 700))
  await page.screenshot({ path: `/tmp/jw-${name}.png` })
}

// Light mode pass: toggle the theme, capture hero + work + about
await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
await page.click('.theme-toggle')
await new Promise((r) => setTimeout(r, 800))
await page.screenshot({ path: '/tmp/jw-light-hero.png' })
for (const [name, sel] of [['light-work', '#work'], ['light-about', '#about']]) {
  await page.evaluate((s) => {
    document.querySelector(s)?.scrollIntoView({ behavior: 'instant', block: 'start' })
  }, sel)
  await new Promise((r) => setTimeout(r, 700))
  await page.screenshot({ path: `/tmp/jw-${name}.png` })
}
const persisted = await page.evaluate(() => localStorage.getItem('theme'))
console.log('persisted theme after toggle:', persisted)

// Mobile pass: dark again, narrow viewport, check sticky CTA + vertical timeline
await page.evaluate(() => localStorage.setItem('theme', 'dark'))
await page.setViewport({ width: 390, height: 844 })
await page.reload({ waitUntil: 'networkidle0' })
await new Promise((r) => setTimeout(r, 1500))
await page.evaluate(() => {
  document.querySelector('#journey')?.scrollIntoView({ behavior: 'instant' })
})
await new Promise((r) => setTimeout(r, 700))
await page.screenshot({ path: '/tmp/jw-mobile-journey.png' })

console.log(errors.length ? errors.join('\n') : 'NO CONSOLE/PAGE ERRORS')
await browser.close()
