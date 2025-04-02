# Tareas Programadas del Facturador Electrónico - Core II  

**Website:** [facturaloperu.com](http://facturaloperu.com)  

## Descripción  
A continuación se describen cada una de las tareas programadas soportadas por el facturador electrónico.  

### Tareas Programadas  

- **QueryAllServerCommand**  
- **SendAllServerCommand**  
- **SendAllSunatCommand (Activo)**  
- **SummaryQueryCommand (Activo)**  
- **SummarySendCommand (Activo)**  
- **ValidateDocumentsCommand**  

---  

## Detalles de las Tareas  

### QueryAllServerCommand  

**Descripción:**  
Consulta todos los documentos en el servidor en línea.  

**Condiciones:**  
- Servicio offline activo.  
- Estado de documento distinto de Aceptado (05).  
- Condición técnica: `send_server` igual a 1.  
- Condición técnica: `query_status` distinto de null.  

**Acción:**  
Se consultan todos los documentos de la BD obteniendo los que cumplan las condiciones, se obtiene el CDR si el documento se encuentra en estado Aceptado y se actualiza la información de cada documento, estableciendo el campo `send_server` como null.  

**Comando Previo:**  
`SendAllServerCommand`  

**Comando Posterior:**  
Ninguno.  

---  

### SendAllServerCommand  

**Descripción:**  
Procesar todos los documentos pendientes en el servidor en línea.  

**Condiciones:**  
- Servicio offline activo.  
- Estado de condición de resumen igual a Adicionar (1).  
- Condición técnica: `send_server` es igual a 0.  
- Condición técnica: `shipping_status` no está vacío.  

**Acción:**  
Recorre los documentos obtenidos, valida el `external_id`, valida que pertenezca al grupo de facturas, envía el documento a Sunat y actualiza `send_server` a 1 del documento.  

**Comando Previo:**  
Ninguno.  

**Comando Posterior:**  
`QueryAllServerCommand`  

---  

### SendAllSunatCommand  

**Descripción:**  
Procesa todos los documentos pendientes que se enviarán al Sunat.  

**Condiciones:**  
- Servicio offline activo.  
- Estado de documento distinto de Aceptado (05).  
- Pertenece al grupo de Facturas (01).  
- Condición técnica: `send_server` es igual a 0.  
- Condición técnica: `shipping_status` no está vacío.  

**Acción:**  
Envía todos los documentos que cumplan las condiciones anteriores a Sunat y actualiza su estado e información.  

---  

### SummaryQueryCommand  

**Descripción:**  
Consulta automática de resúmenes.  

**Condiciones:**  
- Estado de documento igual a Registrado (01).  
- Estado de condición de resumen igual a Adicionar (1).  
- Condición técnica: `soap_type_id` activo.  

**Acción:**  
Obtiene los resúmenes que cumplan las condiciones, utilizando el ticket para consultarlo en Sunat y obtener CDR, actualiza el estado de los documentos implicados y de los resúmenes.  

**Comando Previo:**  
`SummarySendCommand`  

**Comando Posterior:**  
Ninguno.  

---  

### SummarySendCommand  

**Descripción:**  
Envío automático de resúmenes.  

**Condiciones:**  
- Estado de documento igual a Registrado (01).  
- Pertenece al grupo de Boletas (02).  
- Condición técnica: `soap_type_id` activo.  

**Acción:**  
Obtiene los documentos que cumplan las condiciones, los agrupa por su fecha de creación y genera un resumen que es enviado a Sunat, el cual devuelve un código único por cada resumen (ticket) que debe ser consultado posteriormente.  

**Comando Previo:**  
Ninguno.  

**Comando Posterior:**  
`SummaryQueryCommand`  

---  

### ValidateDocumentsCommand  

**Descripción:**  
(Debes añadir una descripción para esta tarea).  

---