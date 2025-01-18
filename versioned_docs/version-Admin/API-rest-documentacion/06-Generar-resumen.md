# Generar resúmenes

## REGISTRAR Y ENVIAR RESÚMEN

Cuando se genera una boleta, esta no se envía inmediatamente a Sunat. Este documento se envía mediante un resúmen, este puede contener 1 o más boletas, para registrar y enviar el resúmen puede usar el siguiente servicio, necesitará la url, el token y la fecha de emisión de las boletas que conformarán el resumen, es decir mediante la fecha se consultará todas las boletas generadas.

Cuando haya culminado este procedimiento, deberá consultar el ticket del resumen generado, se explicará en el siguiente punto.

* **Método:** POST
* **Url:** http://demo.fastura.app/api/summaries
* **Token:** oZoKGFDzqGJfJilCHowJlZrTadQRBtuJ2fr3PkJz02aU46WPPg

### Ejemplo:

### 1. **JSON A ENVIAR**

```json
{
  "fecha_de_emision_de_documentos": "2019-01-20",
  "codigo_tipo_proceso": "1"
}
```

### 2. **JSON RESPUESTA**

```json
{
    "success": true,
    "data": {
        "external_id": "3832e508-fd01-4c8f-99dc-2ab83e9fd53e",
        "ticket": "1548516520467"
    }
}
```

### RESUMEN DIARIO TICKET

Con este json puede enviar su resumen diario ticket.

```json
        "external_id": "9a03b745-78c3-403d-afed-b9cef82be746",
        "ticket": "1550260529157"
```
