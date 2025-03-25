const lunr = require('lunr');
require('lunr-languages/lunr.stemmer.support')(lunr);
require('lunr-languages/lunr.es')(lunr); 


lunr.Pipeline.registerFunction(function(token) {
  
  const synonyms = {
    'busqueda': ['search', 'búsqueda', 'buscador'],
    'documentacion': ['documentation', 'documentación', 'docs', 'documento'],
    'plugin': ['complemento', 'extension', 'extensión'],
    'configuracion': ['configuration', 'configuración', 'setup', 'config'],
    'voleta': ['boleta', 'factura', 'nota'],
    
  };

  
  for (const [word, synonymList] of Object.entries(synonyms)) {
    if (synonymList.includes(token) || word === token) {
      return synonymList.concat(word);
    }
  }
  
  return token;
}, 'synonyms');


function suggestSimilarTerms(term, index, maxEditDistance = 2) {
  const terms = Object.keys(index.invertedIndex);
  let suggestions = [];
  
  for (const indexTerm of terms) {
    if (levenshteinDistance(term, indexTerm) <= maxEditDistance) {
      suggestions.push(indexTerm);
    }
  }
  
  return suggestions.slice(0, 5); 
}


function levenshteinDistance(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix = [];

  // Incremento a lo largo de la primera columna de cada fila
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  // Incremento a lo largo de la primera fila de cada columna
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  // Rellenar el resto de la matriz
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // sustitución
          Math.min(
            matrix[i][j - 1] + 1,   // inserción
            matrix[i - 1][j] + 1    // eliminación
          )
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

module.exports = {
  extendLunr: function(builder) {
    // Añadir el procesador de sinónimos al pipeline
    builder.pipeline.before(lunr.stemmer, lunr.Pipeline.getRegisteredFunction('synonyms'));
    
    // Configurar campos con mayor relevancia para palabras clave en español
    builder.field('title', { boost: 200 });
    builder.field('content', { boost: 2 });
    builder.field('keywords', { boost: 100 });
    
    return builder;
  },
  suggestSimilarTerms: suggestSimilarTerms
};