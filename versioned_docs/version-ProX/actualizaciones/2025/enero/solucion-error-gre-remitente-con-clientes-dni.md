# 🛠️ Corrección de Error: Emisión de Guía de Remisión con Clientes DNI

Se ha solucionado un problema que impedía emitir **Guías de Remisión - Remitente (GRE)** cuando el cliente tenía como tipo de documento **DNI**.

### 🔧 Detalles de la corrección:
- 🧾 Ahora se puede generar la GRE sin errores para clientes con **Tipo de Documento: DNI**.
- ✅ Compatibilidad asegurada con todos los tipos de documentos válidos según SUNAT.

📌 Módulo afectado:  
`Comprobantes Avanzados > Guías de Remisión`

---

> ⚠️ Antes: El sistema arrojaba un error al intentar emitir la guía para clientes con DNI.  
> ✅ Ahora: La emisión se realiza correctamente para **personas naturales** con DNI.
