import fs from 'fs';

const line = fs
  .readFileSync(
    'C:/Users/liush/.cursor/projects/d-APPdata-VSCodeData-rabbit-client-pc-main/agent-transcripts/c3450a0d-eb8c-4987-bfa3-5df0dfdb899e/c3450a0d-eb8c-4987-bfa3-5df0dfdb899e.jsonl',
    'utf8',
  )
  .split('\n')[3];

// Extract HTML portion after "网页源代码"
const idx = line.indexOf('<!DOCTYPE') !== -1 ? line.indexOf('<!DOCTYPE') : line.indexOf('<html');
const html = line.slice(idx).replace(/\\n/g, '\n').replace(/\\"/g, '"');

fs.writeFileSync('reference-user.html', html.slice(0, 500000));
console.log('HTML length:', html.length);

// Extract id attributes
const ids = [...new Set(html.match(/id="[^"]+"/g) || [])];
console.log('IDS:', ids.join('\n'));

// Extract section-like structures
const sections = [...new Set(html.match(/class="[^"]{5,200}"/g) || [])].slice(0, 80);
console.log('\nCLASSES sample:', sections.slice(0, 40).join('\n'));
