const fs = require('fs');
const turbopackModule = require('./.next/server/chunks/ssr/sellworth_src_data_properties_ts_0lbtke4._.js');

let properties = [];
const fakeContext = {
  s: (obj) => { properties = obj.properties(); },
  r: () => {},
  e: () => {}
};

for (let key in turbopackModule) {
  if (key.includes('properties.ts')) {
    turbopackModule[key](fakeContext);
  }
}

if (properties.length > 0) {
  properties = properties.map(p => ({...p, featured: true}));
  
  let header = 'export interface Property { id: string; slug: string; projectName: string; developer: string; microMarket: string; sector: string; location: string; configuration: string; price: string; size: string; status: string; projectType: string; heroImage: string; gallery: string[]; amenities: string[]; usp: string[]; overview: {key: string; value: string}[]; seoTitle: string; seoDescription: string; featured: boolean; newLaunch: boolean; brochure: string; resources?: {name: string, url: string}[]; priceNumeric?: number; }\n\nexport const properties: Property[] = ';
  
  let strToInsert = JSON.stringify(properties, null, 2);
  strToInsert = strToInsert.replace(/"([^(\")"]+)":/g, '$1:');
  
  fs.writeFileSync('src/data/properties.ts', header + strToInsert + ';\n', 'utf8');
  console.log('Successfully recovered ' + properties.length + ' properties!');
} else {
  console.log('Failed to extract properties');
}
