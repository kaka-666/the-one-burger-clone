import fs from 'fs'
const s = fs.readFileSync('reference.js', 'utf8')
const idx = s.indexOf('TicketAnimationMobile')
console.log(s.substring(idx, idx + 2000))
