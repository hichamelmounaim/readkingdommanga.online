const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://readkingdommanga.online';
const TODAY = new Date().toISOString().split('T')[0];

const rawData = fs.readFileSync(path.join(__dirname, '../public/scraped_czvwfo-kingdom.json'), 'utf8');
const data = JSON.parse(rawData);
const scrapedDate = data.scraped_at ? data.scraped_at.split('T')[0] : TODAY;
const chapters = data.chapters.map(c => c.chapter_number).sort((a, b) => a - b);
const maxChapter = Math.max(...chapters);

const staticPages = [
  { path: '',          changefreq: 'daily',   priority: '1.0', lastmod: scrapedDate },
  { path: '/manga',    changefreq: 'daily',   priority: '0.9', lastmod: scrapedDate },
  { path: '/characters', changefreq: 'monthly', priority: '0.7', lastmod: TODAY },
  { path: '/about',    changefreq: 'monthly', priority: '0.5', lastmod: TODAY },
  { path: '/privacy',  changefreq: 'yearly',  priority: '0.3', lastmod: TODAY },
  { path: '/dmca',     changefreq: 'yearly',  priority: '0.3', lastmod: TODAY },
  { path: '/disclaimer', changefreq: 'yearly', priority: '0.3', lastmod: TODAY },
  { path: '/terms',    changefreq: 'yearly',  priority: '0.3', lastmod: TODAY },
];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

staticPages.forEach(({ path: pagePath, changefreq, priority, lastmod }) => {
  sitemap += `  <url>
    <loc>${DOMAIN}${pagePath || '/'}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
});

chapters.forEach(num => {
  const isRecent = num >= maxChapter - 50;
  const changefreq = isRecent ? 'weekly' : 'monthly';
  const priority = isRecent ? '0.8' : '0.6';
  sitemap += `  <url>
    <loc>${DOMAIN}/chapter/${num}</loc>
    <lastmod>${scrapedDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
});

sitemap += `</urlset>`;

const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log(`Sitemap generated with ${staticPages.length + chapters.length} URLs (${chapters.length} chapters, latest: ${maxChapter})`);
