const fs = require('node:fs');
const Turndown = require('turndown');
const converter = new Turndown({ headingStyle: 'atx', bulletListMarker: '-', codeBlockStyle: 'fenced' });
converter.keep(['figure', 'div', 'section', 'sup', 'table']);
const posts = JSON.parse(fs.readFileSync('scripts/extracted.json','utf8'));
for (const p of posts) {
  let body = converter.turndown(p.body);
  const yaml = [
    '---',
    `title: ${JSON.stringify(p.title)}`,
    `summary: ${JSON.stringify(p.summary)}`,
    `section: ${p.section}`,
    `permalink: /${p.url}/`,
    `tags: ${JSON.stringify(p.tags)}`,
    'visibility: public',
    'layout: post.njk',
    '---', '', body, ''
  ].join('\n');
  fs.writeFileSync(`src/posts/${p.slug}.md`, yaml);
}
