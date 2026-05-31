import fs from 'fs';

const js = fs.readFileSync('reference.js', 'utf8');

const patterns = [
  /Sazonando[^"']{0,100}/g,
  /Pelando[^"']{0,100}/g,
  /path:"[^"]+"/g,
  /path:'[^']+'/g,
  /¿[^"']{10,120}\?/g,
];

for (const p of patterns) {
  const m = [...new Set(js.match(p) || [])];
  console.log(`\n${p}:`, m.slice(0, 15).join('\n'));
}
