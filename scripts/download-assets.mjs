import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const baseUrl = 'https://www.theoneburgerbcn.com'

const assets = [
  'fonts/Kunst-20-Bold.otf',
  'fonts/Kunst-72-Regular.otf',
  'fonts/Kunst-96-Medium.otf',
  'fonts/Kunst-144-Heavy.otf',
  'videos/TheOne_Web_Hero_006.mp4',
  'videos/TheOne_Web_Etiqueta_MOVIL60fps_002.mp4',
  'videos/TheOne_Web_Etiqueta_Desktop_002_Converted.mp4',
  'videos/TheOne_Web_SeparatedBurger_MOVIL_v02.mp4',
  'videos/TheOne_Web_SeparatedBurger_v03.mp4',
  'videos/TheOne_Web_Caja_MOVIL60_004.mp4',
  'videos/TheOne_Web_Caja_DESKTOP_006_Converted.mp4',
  'images/dotIcon.png',
  'images/The_Burgers_EFWhiteBG__Ternera_1.png',
  'images/The_Burgers_EFWhiteBG__Pollo_1.png',
  'images/The_Burgers_EFWhiteBG__Veggie_1.png',
  'images/TheOne_LuminosoLED_v01.jpg',
  'images/Clothing_TheOne.Crafter_v10_2.png',
  'images/Logo_TheOne_Footer.svg',
]

async function download(relativePath) {
  const dest = path.join(root, 'public', relativePath)
  fs.mkdirSync(path.dirname(dest), { recursive: true })

  if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
    console.log(`skip (exists): ${relativePath}`)
    return
  }

  const url = `${baseUrl}/${relativePath}`
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`${url} -> HTTP ${res.status}`)
  }

  const buffer = Buffer.from(await res.arrayBuffer())
  fs.writeFileSync(dest, buffer)
  console.log(`ok: ${relativePath} (${(buffer.length / 1024).toFixed(1)} KB)`)
}

console.log('Downloading assets from theoneburgerbcn.com...\n')

for (const asset of assets) {
  try {
    await download(asset)
  } catch (err) {
    console.error(`fail: ${asset} — ${err.message}`)
  }
}

console.log('\nDone.')
