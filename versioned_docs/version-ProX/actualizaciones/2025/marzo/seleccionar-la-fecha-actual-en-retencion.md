# 🛠️ Corrección de Error: Selección de Fecha de Emisión en Comprobante de Retención

Se corrigió un error que impedía seleccionar la **fecha actual** como fecha de emisión al registrar un **comprobante de retención**. El sistema forzaba la fecha del día anterior de forma incorrecta.

### 🔧 Detalles de la corrección:
- 📅 Ahora es posible seleccionar correctamente la **fecha del día actual** como fecha de emisión.
- ✅ Se eliminó la lógica errónea que preestablecía automáticamente la fecha anterior.
- 🗓️ Aplica tanto a la creación manual como a la edición de documentos de retención.

📌 Módulo afectado:  
`Comprobantes Avanzados > Retenciones`

![Seleccionar Fecha en Comprobante de Retencion](img/seleccion-fecha-en-retencion.png)

---

> ⚠️ Antes: No era posible seleccionar la fecha real del día en curso.  
> ✅ Ahora: La fecha actual puede seleccionarse sin restricciones, conforme a la operación real del usuario.
