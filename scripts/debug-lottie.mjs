import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const s = fs.readFileSync(path.join(__dirname, '../reference.js'), 'utf8')

function findBlock(compositeName) {
  const marker = `${compositeName}={`
  const idx = s.indexOf(marker)
  console.log(compositeName, 'at', idx)
  console.log(s.slice(idx - 120, idx + 80))
}

findBlock('meatAnimation')
findBlock('chickenAnimation')
findBlock('veggieAnimation')

// find all v$2 occurrences near meat
const meatIdx = s.indexOf('meatAnimation=')
console.log('\nsearch v$2 near meat:')
let pos = meatIdx - 500000
while (pos < meatIdx) {
  const i = s.indexOf('v$2=', pos)
  if (i === -1 || i > meatIdx) break
  console.log(i, s.slice(i, i + 80))
  pos = i + 4
}
