const fs = require('fs');
const path = require('path');

console.log('🔍 Menjalankan validasi integriti projek Sistem Aduan Asrama IKM...');

const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

// 1. Semak kewujudan fail kritikal
const requiredFiles = [
  'index.html',
  'borang.html',
  'semak.html',
  'admin.html',
  'login.html',
  '404.html',
  'style.css',
  'script.js',
  'manifest.json'
];

let hasErrors = false;

for (const file of requiredFiles) {
  const filePath = path.join(publicDir, file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Fail kritikal hilang: public/${file}`);
    hasErrors = true;
  } else {
    const stats = fs.statSync(filePath);
    if (stats.size === 0) {
      console.error(`❌ Fail kosong: public/${file}`);
      hasErrors = true;
    } else {
      console.log(`✅ Sah: public/${file} (${stats.size} bait)`);
    }
  }
}

// 2. Sahkan struktur JSON manifest
const manifestPath = path.join(publicDir, 'manifest.json');
try {
  const manifestData = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  if (!manifestData.name || !manifestData.start_url) {
    console.error('❌ manifest.json tidak lengkap (tiada nama atau start_url)');
    hasErrors = true;
  } else {
    console.log(`✅ Sah manifest.json: ${manifestData.name}`);
  }
} catch (e) {
  console.error(`❌ Ralat sintaks manifest.json: ${e.message}`);
  hasErrors = true;
}

// 3. Imbasan keselamatan rahsia (Secret Scanning)
const scriptPath = path.join(publicDir, 'script.js');
const scriptContent = fs.readFileSync(scriptPath, 'utf8');
const botTokenRegex = /\b\d{8,11}:[A-Za-z0-9_-]{35}\b/;

if (botTokenRegex.test(scriptContent)) {
  console.error('❌ BAHAYA: Telegram Bot Token terdedah ditemui dalam public/script.js!');
  hasErrors = true;
} else {
  console.log('✅ Tiada rahsia terdedah (Telegram Bot Token bersih).');
}

if (hasErrors) {
  console.error('\n❌ Validasi projek GAGAL!');
  process.exit(1);
} else {
  console.log('\n🎉 Semua semakan integriti dan keselamatan BERJAYA!');
  process.exit(0);
}
