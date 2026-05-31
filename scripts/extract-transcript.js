import fs from 'fs';

const line = fs
  .readFileSync(
    'C:/Users/liush/.cursor/projects/d-APPdata-VSCodeData-rabbit-client-pc-main/agent-transcripts/c3450a0d-eb8c-4987-bfa3-5df0dfdb899e/c3450a0d-eb8c-4987-bfa3-5df0dfdb899e.jsonl',
    'utf8',
  )
  .split('\n')[3];

const assets = [...new Set(line.match(/\/[a-zA-Z0-9_\-./]+\.(mp4|png|jpg|otf|svg|webp|json)/g) || [])];
console.log('ASSETS:', assets.join('\n'));

const colors = [...new Set(line.match(/theOne[A-Za-z]+/g) || [])];
console.log('\nCOLORS:', colors.join(', '));

const classes = [...new Set(line.match(/class="[^"]{1,120}"/g) || [])].slice(0, 30);
console.log('\nSAMPLE CLASSES:', classes.join('\n'));
