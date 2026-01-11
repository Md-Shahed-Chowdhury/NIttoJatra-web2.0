const fs = require('fs');
const source = 'C:/Users/shahe/.gemini/antigravity/brain/c83611af-a5ce-4857-840e-0f4180ae9e32/uploaded_image_1768112711810.jpg';
const dest = 'c:/projects/NittoJatra-web/src/assets/hero-bg.jpg';

try {
  fs.copyFileSync(source, dest);
  console.log('Success: Copied ' + source + ' to ' + dest);
} catch (err) {
  console.error('Error:', err);
  process.exit(1);
}
