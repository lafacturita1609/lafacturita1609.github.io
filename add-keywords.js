// add-keywords.js
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const matter = require('gray-matter');

// Configuración de palabras clave global por categoría
const globalKeywords = {
  'app-para-facturacion': ['factura', 'facturación', 'facturacion', 'invoice', 'billing'],
  'whatsapp-api': ['whatsapp', 'API', 'mensaje', 'mensajería', 'chat'],
  // Añade más categorías según necesites
};

// Encuentra todos los archivos markdown

const files = glob.sync('{./docs/**/*.md,./versioned_docs/**/*.md}');

files.forEach(file => {
  // Lee el archivo
  const content = fs.readFileSync(file, 'utf8');
  const result = matter(content);
  
  // Determina a qué categoría pertenece basado en la ruta
  let category = '';
  for (const cat in globalKeywords) {
    if (file.includes(cat)) {
      category = cat;
      break;
    }
  }
  
  // Si no hay categoría o ya tiene keywords, no hacer nada
  if (!category || result.data.keywords) return;
  
  // Añade keywords
  result.data.keywords = globalKeywords[category];
  
  // Guarda de vuelta el archivo con las keywords
  const updatedContent = matter.stringify(result.content, result.data);
  fs.writeFileSync(file, updatedContent);
  
  console.log(`Actualizadas keywords para ${file}`);
});