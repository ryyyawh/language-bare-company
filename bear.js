import fs from 'fs'
import kamus from './kamus.json' assert { type: "json" }

function translateBearCode(code) {
  for (const [symbol, keyword] of Object.entries(kamus)) {
    const regex = new RegExp(symbol.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')
    code = code.replace(regex, keyword)
  }
  return code
}

const bearCode = fs.readFileSync(process.argv[2], 'utf-8')
const translated = translateBearCode(bearCode)

eval(translated) // atau tulis ke .js dan jalankan