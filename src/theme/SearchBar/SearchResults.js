import React from 'react';

function SearchResults({ results, query }) {
  // Verificar que results sea un array válido
  const validResults = Array.isArray(results) ? results : [];
  
  return (
    <div className="search-results">
      {validResults.length === 0 ? (
        <div className="no-results">
          <p>No se encontraron resultados para <em>{query}</em></p>
          <p>Sugerencias:</p>
          <ul>
            <li>Verifica que todas las palabras estén escritas correctamente</li>
            <li>Prueba con palabras clave diferentes</li>
            <li>Prueba con palabras más generales</li>
          </ul>
        </div>
      ) : (
        validResults.map((result) => (
          <div key={result.id} className="search-result-item">
            <a href={result.url} className="search-result-title">
              {result.title}
            </a>
            <p className="search-result-snippet">{result.snippet}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default SearchResults;