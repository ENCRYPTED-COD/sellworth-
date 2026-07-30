const fs = require('fs');
let data;
try {
  data = fs.readFileSync('temp.ts', 'utf16le');
} catch (e) {
  data = fs.readFileSync('temp.ts', 'utf8');
}

// Remove BOM if present
if (data.charCodeAt(0) === 0xFEFF) {
  data = data.slice(1);
}

const arrayStr = data.substring(data.indexOf('export const properties: Property[] = [') + 38);
const code = arrayStr.substring(0, arrayStr.lastIndexOf('];') + 1);

let properties = [];
try {
  properties = eval('(' + code + ')');
} catch (e) {
  console.log('Error parsing temp.ts:', e);
  process.exit(1);
}

const oldProps = properties.filter(p => p.slug !== 'emaar-india-business-centre-sector-61' && p.slug !== 'ireo-skyon-penthouse-sector-60' && p.category === 'new-launch');

const newMappedProps = oldProps.map(p => {
  let microMarket = 'new-gurgaon'; // fallback
  if (p.location.toLowerCase().includes('dwarka expressway')) microMarket = 'dwarka-expressway';
  if (p.location.toLowerCase().includes('sohna road') || p.location.toLowerCase().includes('sector 48') || p.location.toLowerCase().includes('sector 70')) microMarket = 'southern-peripheral-road';
  if (p.location.toLowerCase().includes('golf course extension')) microMarket = 'golf-course-extension-road';
  if (p.location.toLowerCase().includes('golf course road')) microMarket = 'golf-course-road';
  if (p.location.toLowerCase().includes('sector 63')) microMarket = 'golf-course-extension-road';

  let sector = '';
  const secMatch = p.location.match(/Sector \d+[A-Z]?/i);
  if (secMatch) sector = secMatch[0];

  return {
    id: p.slug,
    slug: p.slug,
    projectName: p.name,
    developer: p.developer,
    microMarket: microMarket,
    sector: sector,
    location: p.location,
    configuration: 'Various Configurations', 
    price: p.investmentRange || 'Price on Request',
    size: 'Various sizes available',
    status: 'New Launch',
    projectType: 'Luxury Apartments',
    heroImage: p.image,
    gallery: p.images || [p.image],
    amenities: p.amenities || [],
    usp: p.highlights || [],
    overview: p.overview || [],
    seoTitle: p.name + ' | Premium Residences in ' + sector,
    seoDescription: (p.description || '').substring(0, 160) + '...',
    featured: false,
    newLaunch: true,
    brochure: p.brochure || ''
  };
});

const propertiesFile = fs.readFileSync('src/data/properties.ts', 'utf8');
const beforeBracket = propertiesFile.lastIndexOf('];');
let strToInsert = ',\n' + newMappedProps.map(p => JSON.stringify(p, null, 2)).join(',\n');

// Convert string keys to unquoted keys
strToInsert = strToInsert.replace(/"([^(\")"]+)":/g, '$1:');

fs.writeFileSync('src/data/properties.ts', propertiesFile.substring(0, beforeBracket) + strToInsert + '\n];\n');
console.log('Appended ' + newMappedProps.length + ' properties to src/data/properties.ts');
