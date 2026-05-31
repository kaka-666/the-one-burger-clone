import fs from 'fs'

const html = fs.readFileSync('reference-user.html', 'utf8')

for (const id of ['Capa_1_bagIcon', 'Capa_1_uber', 'Capa_1_justEat', 'Capa_1_glovo']) {
  const start = html.indexOf(`id="${id}"`)
  if (start < 0) {
    console.log(id, 'NOT FOUND')
    continue
  }
  const svgStart = html.lastIndexOf('<svg', start)
  const svgEnd = html.indexOf('</svg>', start) + 6
  const svg = html.slice(svgStart, svgEnd)
  fs.writeFileSync(`public/icons/${id}.svg`, svg)
  console.log(id, 'length', svg.length)
}
