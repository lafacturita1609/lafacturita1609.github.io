// Si decides continuar con el código anterior, podrías comentarlo o eliminarlo si no lo necesitas.  
document.addEventListener('DOMContentLoaded', function () {  
    const dropdown = document.querySelector('.dropdown-sistema');  
  
    // Cambia el título al hacer clic en una de las opciones del dropdown  
    dropdown.querySelectorAll('.menu-item a').forEach(item => {  
      item.addEventListener('click', function () {  
        const selectedLabel = this.innerText; // Obtiene el texto del elemento seleccionado  
        dropdown.querySelector('button').innerText = selectedLabel; // Reemplaza el texto del botón del dropdown  
      });  
    });  
  });