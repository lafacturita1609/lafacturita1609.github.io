# 🛠️ Corrección de Error: Asignación de Almacén al Crear Producto con Series

Se resolvió un inconveniente que impedía registrar correctamente el **almacén seleccionado** al crear un producto con número de serie, ignorando la selección manual del usuario.

### 🔧 Detalles de la corrección:
- 🏷️ Ahora, al crear un producto con series, se respeta el **almacén seleccionado** en el formulario, incluso si difiere del almacén asignado por defecto al usuario.
- 🧭 Se actualizó la lógica para permitir la creación de productos en cualquier almacén disponible, sin forzar el almacén del establecimiento predeterminado.
- 🔐 Mejora especialmente útil en entornos con múltiples almacenes y flujos de ingreso centralizado.

📌 Módulo afectado:  
`Productos/Servicios > Productos`

---

> ⚠️ Antes: El sistema asignaba automáticamente el producto al almacén del establecimiento del usuario, sin respetar la selección del usuario.  
> ✅ Ahora: Se respeta la asignación manual del almacén al momento de crear el producto, garantizando control y trazabilidad adecuados.
