#!/usr/bin/env node
import fs from 'fs'
import { exec } from 'child_process'
import kamus from './kamus.json' assert { type: 'json' }

const inputFile = process.argv[2]
if (!inputFile) return console.log("Masukin nama file, contoh: bear run ex.B")

const content = fs.readFileSync(inputFile, 'utf-8')
let output = content

for (const [bear, js] of Object.entries(kamus)) {
  output = output.split(bear).join(js)
}

fs.writeFileSync('.compiled.js', output)
exec('node .compiled.js', (err, stdout, stderr) => {
  if (err) console.error(stderr)
  else console.log(stdout)
})