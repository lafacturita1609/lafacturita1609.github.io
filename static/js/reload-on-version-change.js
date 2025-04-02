/**
 * Script para recargar la página cuando se cambia la versión de la documentación
 * Esto asegura que el índice de búsqueda se reconstruya para la nueva versión
 */
(function() {
  // Esperar a que el DOM esté completamente cargado
  document.addEventListener('DOMContentLoaded', function() {
    // Buscar el selector de versiones en el navbar
    const versionDropdown = document.querySelector('.navbar__item.dropdown.dropdown--hoverable.dropdown--right');
    
    if (versionDropdown) {
      // Obtener todos los enlaces de versión dentro del menú desplegable
      const versionLinks = versionDropdown.querySelectorAll('.dropdown__menu a');
      
      // Añadir event listener a cada enlace de versión
      versionLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          // Permitir que el navegador procese primero la navegación
          setTimeout(() => {
            // Recargar la página después de un breve retraso
            window.location.reload();
          }, 100);
        });
      });
    }
  });
})();