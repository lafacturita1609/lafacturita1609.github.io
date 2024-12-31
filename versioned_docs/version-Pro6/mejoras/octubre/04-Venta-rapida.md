# Venta Rápida: Acumulación Automática de Productos

## Descripción
Se ha implementado una nueva funcionalidad en el formulario de Factura Electrónica para la venta rápida que permite **acumular automáticamente** la cantidad de productos idénticos cuando se utiliza la búsqueda por código de barras. Esta mejora optimiza el flujo de trabajo al evitar la duplicación de líneas en la lista de venta.

## Beneficios
* **Agilidad en el proceso de venta:** Los productos se suman automáticamente, eliminando pasos manuales.
* **Reducción de errores:** Evita la duplicación innecesaria de productos en la lista.
* **Cálculos automáticos:** El sistema actualiza los totales y los impuestos en tiempo real.

## ¿Cómo funciona?
1. **Activación de la búsqueda por código de barras:**
   * Permite escanear los productos y verificar automáticamente si ya están registrados en la lista de venta.
2. **Acumulación de productos:**
   * **Producto existente:** Si el producto ya está en la lista, se incrementa su cantidad.
   * **Producto nuevo:** Si el producto no está en la lista, se agrega como una nueva línea.
3. **Actualización automática de totales:**
   * Los totales de venta y los impuestos se calculan al instante, asegurando datos precisos y actualizados.