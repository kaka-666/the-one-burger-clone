import fs from 'fs';

const js = fs.readFileSync('reference.js', 'utf8');
const texts = [...new Set(js.match(/[A-ZÁÉÍÓÚÑ][a-záéíóúñ\s]+(?:\.\.\.)?/g) || [])]
  .filter((t) => t.includes('...') || t.length > 15)
  .filter((t) => /carne|patata|pan|salsa|burger|horno|fuego|prepar/i.test(t))
  .slice(0, 20);
console.log(texts.join('\n'));
