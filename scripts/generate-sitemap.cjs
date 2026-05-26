const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://readkingdommanga.online';

// Load actual chapter numbers from the scraped JSON file
const rawData = fs.readFileSync(path.join(__dirname, '../public/scraped_czvwfo-kingdom.json'), 'utf8');
const data = JSON.parse(rawData);
const chapters = data.chapters.map(c => c.chapter_number).sort((a, b) => a - b);


const pages = [
  '',
  '/manga',
  '/characters',
  '/privacy',
  '/dmca',
  '/disclaimer',
  '/about',
  '/terms'
];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Add static pages
pages.forEach(page => {
  sitemap += `  <url>
    <loc>${DOMAIN}${page}</loc>
    <changefreq>daily</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>
`;
});

// Add chapters
chapters.forEach(num => {
  sitemap += `  <url>
    <loc>${DOMAIN}/chapter/${num}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
`;
});

sitemap += `</urlset>`;

const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log(`Sitemap generated at ${path.join(publicDir, 'sitemap.xml')} with ${pages.length + chapters.length} URLs`);
