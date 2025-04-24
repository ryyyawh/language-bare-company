#!/usr/bin/env node
import fs from 'fs'
const kamus = JSON.parse(fs.readFileSync('./kamus.json'))

const filename = process.argv[2]
if (!filename) {
  console.error('Usage: bear index.js namafile.B')
  process.exit(1)
}

const raw = fs.readFileSync(filename, 'utf8').trim()
const tokens = raw.split(' ')
for (let t of tokens) {
  if (kamus[t]) {
    console.log(`[RUN]: ${kamus[t]}`)
    // Di sini bisa kamu sambung ke action real kayak:
    // if (kamus[t] === "get_ip") { ... }
  } else {
    console.warn(`[UNKNOWN TOKEN]: ${t}`)
  }
}