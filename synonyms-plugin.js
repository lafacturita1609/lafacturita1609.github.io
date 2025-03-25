// synonyms-plugin.js
const fs = require('fs');
const path = require('path');

module.exports = function(context, options) {
  return {
    name: 'docusaurus-synonyms',
    configureWebpack(config) {
      
      if (process.env.NODE_ENV !== 'production') return {};
      
      
      const synonymsPath = path.resolve(process.cwd(), 'synonyms.json');
      
      // Verificar si existe
      if (!fs.existsSync(synonymsPath)) {
        console.warn('No se encontró archivo de sinónimos');
        return {};
      }
      
      
      const synonyms = JSON.parse(fs.readFileSync(synonymsPath, 'utf8'));
      
      
      const outputDir = path.resolve(process.cwd(), '.docusaurus');
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      
      fs.writeFileSync(
        path.resolve(outputDir, 'synonyms.json'),
        JSON.stringify(synonyms),
        'utf8'
      );
      
      return {};
    }
  };
};