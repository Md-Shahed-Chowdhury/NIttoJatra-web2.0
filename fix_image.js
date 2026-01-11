const fs = require('fs');
const path = require('path');

const sourcePath = 'C:\\Users\\shahe\\.gemini\\antigravity\\brain\\c83611af-a5ce-4857-840e-0f4180ae9e32\\uploaded_image_1768112711810.jpg';
const destDir = 'c:\\projects\\NittoJatra-web\\src\\assets';
const destPath = path.join(destDir, 'hero-bg.jpg');
const logPath = 'c:\\projects\\NittoJatra-web\\copy_log.txt';

function log(msg) {
  fs.appendFileSync(logPath, msg + '\n');
  console.log(msg);
}

try {
  log('Starting copy process...');
  
  if (!fs.existsSync(sourcePath)) {
    log('ERROR: Source file does not exist: ' + sourcePath);
    process.exit(1);
  } else {
    log('Source file found.');
  }

  if (!fs.existsSync(destDir)) {
    log('Creating directory: ' + destDir);
    fs.mkdirSync(destDir, { recursive: true });
  }

  log('Copying file...');
  fs.copyFileSync(sourcePath, destPath);
  log('SUCCESS: File copied to ' + destPath);
  
  // Verify size
  const stat = fs.statSync(destPath);
  log('Destination file size: ' + stat.size + ' bytes');

} catch (err) {
  log('CRITICAL ERROR: ' + err.message);
  process.exit(1);
}
