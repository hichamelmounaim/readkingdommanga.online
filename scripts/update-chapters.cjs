const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function printUsage() {
  console.log('Usage: node scripts/update-chapters.cjs --file <path-to-json>');
  process.exit(1);
}

// Parse arguments manually to avoid extra dependencies
const args = process.argv.slice(2);
let filePath = null;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--file' && i + 1 < args.length) {
    filePath = args[i + 1];
    break;
  }
}

if (!filePath) {
  printUsage();
}

const absolutePath = path.isAbsolute(filePath) ? filePath : path.join(process.cwd(), filePath);

console.log(`\n=== Starting Manga Chapter Update Automation ===`);
console.log(`Input JSON file: ${absolutePath}`);

// 1. Validate File Existence
if (!fs.existsSync(absolutePath)) {
  console.error(`[Error] File does not exist at: ${absolutePath}`);
  process.exit(1);
}

// 2. Validate JSON Content
let data;
try {
  const content = fs.readFileSync(absolutePath, 'utf8');
  data = JSON.parse(content);
} catch (e) {
  console.error(`[Error] Failed to parse input file as JSON: ${e.message}`);
  process.exit(1);
}

if (!data || !Array.isArray(data.chapters)) {
  console.error(`[Error] Invalid JSON schema. Missing "chapters" array.`);
  process.exit(1);
}

console.log(`[Success] Verified JSON format. Found ${data.chapters.length} chapters.`);

// 3. Copy JSON to public directory
const destinationPath = path.join(__dirname, '../public/scraped_czvwfo-kingdom.json');
try {
  console.log(`Copying JSON file to: ${destinationPath}`);
  fs.copyFileSync(absolutePath, destinationPath);
  console.log(`[Success] Copied JSON file successfully.`);
} catch (e) {
  console.error(`[Error] Failed to copy JSON file: ${e.message}`);
  process.exit(1);
}

// 4. Regenerate sitemap programmatically
try {
  console.log(`\nRebuilding sitemap...`);
  const sitemapScript = path.join(__dirname, 'generate-sitemap.cjs');
  execSync(`node "${sitemapScript}"`, { stdio: 'inherit' });
  console.log(`[Success] Rebuilt sitemap successfully.`);
} catch (e) {
  console.error(`[Error] Failed to rebuild sitemap: ${e.message}`);
  process.exit(1);
}

// 5. Run build validation
try {
  console.log(`\nRunning production build check...`);
  execSync(`npm run build`, { stdio: 'inherit', cwd: path.join(__dirname, '..') });
  console.log(`\n[Success] Production build completed with zero errors.`);
} catch (e) {
  console.error(`\n[Error] Production build validation failed!`);
  console.error(`Please fix any TypeScript or compilation errors before deploying.`);
  process.exit(1);
}

console.log(`\n=== Manga Chapter Update Completed Successfully! ===\n`);
