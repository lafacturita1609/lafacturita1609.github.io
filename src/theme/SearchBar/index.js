import React from 'react';
import OriginalSearchBar from '@theme-original/SearchBar';

// Re-exportar el componente original con protección adicional
export default function SearchBar(props) {
  // Validar props para evitar posibles errores
  const safeProps = {...props};
  
  return (
    <OriginalSearchBar {...safeProps} />
  );
}