import fs from 'fs'
import vm from 'vm'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const s = fs.readFileSync(path.join(__dirname, '../reference.js'), 'utf8')

const blocks = [
  { file: 'meat.json', start: 'v$2="5.9.0"', end: ',v$1="5.9.0"', export: 'meatAnimation' },
  { file: 'chicken.json', start: 'v$1="5.9.0"', end: ',v="5.9.0"', export: 'chickenAnimation' },
  { file: 'veggie.json', start: 'v="5.9.0"', end: ',BurgerSlide=', export: 'veggieAnimation' },
]

const outDir = path.join(__dirname, '../src/data/lottie')
fs.mkdirSync(outDir, { recursive: true })

for (const { file, start, end, export: exportName } of blocks) {
  const startIdx = s.indexOf(start)
  const endIdx = s.indexOf(end, startIdx)
  if (startIdx === -1 || endIdx === -1) {
    console.error('bounds not found for', file, startIdx, endIdx)
    continue
  }

  const code = `${s.slice(startIdx, endIdx)}; JSON.stringify(${exportName});`
  try {
    const json = vm.runInNewContext(code)
    fs.writeFileSync(path.join(outDir, file), json)
    console.log(`ok: ${file} (${(json.length / 1024).toFixed(1)} KB)`)
  } catch (err) {
    console.error(`fail: ${file} —`, err.message)
  }
}
