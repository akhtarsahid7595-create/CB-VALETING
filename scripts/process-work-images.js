const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processImages() {
  const publicDir = path.join(__dirname, '..', 'public');

  // 1. Jaguar: 467 x 752. Capcut is in top ~60px.
  // Crop from top=60, width=467, height=600 -> upscale 2x to 934x1200 with lanczos3
  await sharp(path.join(publicDir, 'work-jaguar-vd-detailing.png'))
    .extract({ left: 0, top: 65, width: 467, height: 580 })
    .resize(800, 600, { fit: 'cover', position: 'center' })
    .toFile(path.join(publicDir, 'work-jaguar-clean.png'));
  console.log('Processed Jaguar');

  // 2. Mercedes: 482 x 785. CapCut top ~60px, text 'Dirty to Flawless in Killarney' is at bottom y ~ 560 to 650.
  // Let's crop the car body cleanly between top=60 and height=500
  await sharp(path.join(publicDir, 'work-mercedes-killarney.png'))
    .extract({ left: 0, top: 65, width: 482, height: 490 })
    .resize(800, 600, { fit: 'cover', position: 'center' })
    .toFile(path.join(publicDir, 'work-mercedes-clean.png'));
  console.log('Processed Mercedes');

  // 3. Interior mold rescue: 472 x 645. Text box 'Rescuing this car from severe mold' is in top ~130px.
  // Crop from top=135, width=472, height=500
  await sharp(path.join(publicDir, 'work-interior-mold-rescue.png'))
    .extract({ left: 0, top: 135, width: 472, height: 500 })
    .resize(800, 600, { fit: 'cover', position: 'center' })
    .toFile(path.join(publicDir, 'work-interior-clean.png'));
  console.log('Processed Interior');

  // 4. Hyundai Tucson: 475 x 792. Clean.
  await sharp(path.join(publicDir, 'work-hyundai-tucson.png'))
    .extract({ left: 0, top: 100, width: 475, height: 600 })
    .resize(800, 600, { fit: 'cover', position: 'center' })
    .toFile(path.join(publicDir, 'work-hyundai-clean.png'));
  console.log('Processed Hyundai');

  // 5. Snow foam: 473 x 777. CapCut top ~60px.
  await sharp(path.join(publicDir, 'work-snow-foam.png'))
    .extract({ left: 0, top: 65, width: 473, height: 600 })
    .resize(800, 600, { fit: 'cover', position: 'center' })
    .toFile(path.join(publicDir, 'work-snow-foam-clean.png'));
  console.log('Processed Snow Foam');

  // 6. Alloy wheel: 473 x 756. Clean.
  await sharp(path.join(publicDir, 'work-alloy-wheel.png'))
    .extract({ left: 0, top: 100, width: 473, height: 600 })
    .resize(800, 600, { fit: 'cover', position: 'center' })
    .toFile(path.join(publicDir, 'work-alloy-clean.png'));
  console.log('Processed Alloy Wheel');
}

processImages().catch(err => console.error(err));
