# Eliminar los usuarios en multiempresa

### Descripción del problema:

Al crear un **usuario multiempresa**, se presenta un inconveniente al intentar eliminar al usuario de las empresas en las que está asignado. Específicamente:

- Si un **usuario** se crea en **la empresa A** y se le asigna también a **la empresa B**, **no se puede eliminar** de ninguna de las dos empresas, incluso si no se han generado registros o comprobantes.
- El sistema muestra el siguiente mensaje en los logs cuando se intenta eliminar al usuario:


## Cambios

Hemos añadido una nueva funcionalidad que te permitirá eliminar usuarios de forma más sencilla. Ahora podrás despedirte de aquellos usuarios que ya no son necesarios en tu sistema.

## Beneficios

- **Mayor limpieza**: Mantén tu lista de usuarios ordenada y actualizada.
- **Mejor rendimiento**: Un menor número de usuarios puede mejorar la velocidad de tu sistema.
- **Mayor seguridad**: Elimina a los usuarios que ya no necesitan acceso a tus datos.

## Funcionalidad

Ahora, cuando un usuario ya no es necesario, puedes eliminarlo directamente de tu sistema. Sin embargo, antes de eliminarlo, el sistema verificará si ese usuario ha creado algún registro importante (como facturas, pedidos, etc.).

- **Si no hay registros**: El usuario será eliminado de forma segura y rápida.
- **Si hay registros**: El sistema te avisará para que puedas decidir qué hacer con esos registros antes de eliminar al usuario.



