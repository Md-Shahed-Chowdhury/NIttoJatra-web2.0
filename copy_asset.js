const fs = require('fs');
const path = require('path');

const sourcePath = String.raw`C:\Users\shahe\.gemini\antigravity\brain\c83611af-a5ce-4857-840e-0f4180ae9e32\nitto_jatra_logo_1768116648090.png`;
const destPath = path.join(__dirname, 'src', 'assets', 'logo.png');

try {
  // Ensure directory exists
  const destDir = path.dirname(destPath);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
    console.log(`Created directory: ${destDir}`);
  }

  // Copy file
  fs.copyFileSync(sourcePath, destPath);
  console.log(`Successfully copied logo to: ${destPath}`);
  
  // Verify
  if (fs.existsSync(destPath)) {
      const stats = fs.statSync(destPath);
      console.log(`File size: ${stats.size} bytes`);
  } else {
      console.error('File missing after copy operation');
  }

} catch (err) {
  console.error('Error copying file:', err);
  process.exit(1);
}
