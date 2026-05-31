import fs from 'fs';

const html = fs.readFileSync('reference-user.html', 'utf8');
const rootStart = html.indexOf('<div id="root">');
const content = html.slice(rootStart);

// Find major section markers
const markers = [
  'fixed top-0 left-0', // loading
  '<header class="fixed',
  'id="theOne"',
  'id="scroll-text"',
  'id="aboutBurger"',
  'HAY UNA THE ONE',
  'SENCILLA, DIRECTA',
  'ESPECIFICACIONES',
  '9.99',
  'faqs',
  'footer',
  'min</',
];

for (const m of markers) {
  const idx = content.indexOf(m);
  console.log(`${m.slice(0, 40).padEnd(40)} @ ${idx}`);
}

// Extract FAQ questions
const faqQs = [...content.matchAll(/faq-question[^>]*>([^<]+)</g)].map((m) => m[1].trim());
console.log('\nFAQ questions:', faqQs);

// Extract loading texts
const loadingTexts = [...content.matchAll(/Pelando|Sazonando|Calentando|Preparando/g)];
console.log('\nLoading keywords found');
