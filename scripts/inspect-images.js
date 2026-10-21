const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function run() {
  const publicDir = path.join(__dirname, '..', 'public');
  const files = fs.readdirSync(publicDir).filter(f => f.startsWith('work-') && f.endsWith('.png'));
  for (const f of files) {
    const meta = await sharp(path.join(publicDir, f)).metadata();
    console.log(`${f}: ${meta.width}x${meta.height}`);
  }
}
run();
