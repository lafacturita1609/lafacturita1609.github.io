# Anulación boletas

## REGISTRAR Y ENVIAR ANULACIÓN

Cuando se genera una anulación de boleta, esta no se envía inmediatamente a Sunat. Este documento se envía mediante un resúmen, este puede contener 1 o más boletas, para registrar y enviar el resúmen de anulación puede usar el siguiente servicio, necesitará la url, el token, la fecha de emisión de las boletas que conformarán el resumen, y la data de los documentos.

Cuando haya culminado este procedimiento, deberá consultar el ticket del resumen de anulación generado, se explicará en el siguiente punto.

- **Método:** POST
- **Url:** https://demo.pro5.fastura.app/api/summaries
- **Token:** HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt

### Ejemplo:

### 1. JSON A ENVIAR

```json
{
  "fecha_de_emision_de_documentos": "2019-01-20",
  "codigo_tipo_proceso": "3",
  "documentos": [
    {
      "external_id": "470cd665-c7bf-4b7d-9e0c-8631bf444c9c",
      "motivo_anulacion": "Se duplicó documento"
    }
  ]
}
```

### 2. JSON RESPUESTA

```json
{
    "success": true,
    "data": {
        "external_id": "8f6568f5-e478-4ae2-8d21-0b91c0112e57",
        "ticket": "1548517805048"
    }
}
```

## CONSULTAR TICKET ANULACIÓN

Para consultar el ticket del resumen de anulación generado puede usar el siguiente servicio, necesitará la **url**, el **token**, el **external_id** (resumen) y el **numero de ticket**.

- **Método:** POST
- **Url:**  https://demo.pro5.fastura.app/api/summaries/status
- **Token:** HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt

Cuando haya culminado este procedimiento, el resumen de anulación con la boletas que lo conforman han sido aceptadas exitosamente por Sunat, es decir el (los) documento(s) han sido anulados.

### Ejemplo:

### 1. JSON A ENVIAR

```json

{
        "external_id": "8f6568f5-e478-4ae2-8d21-0b91c0112e57",
        "ticket": "1548517805048"
}

```

### 2. JSON RESPUESTA

```json
{
    "success": true,
    "data": {
        "filename": "20415963255-RC-20190126-6",
        "external_id": "8f6568f5-e478-4ae2-8d21-0b91c0112e57"
    },
    "links": {
        "xml": "http://demo26.multifacturalonew.oo:8084/downloads/summary/xml/8f6568f5-e478-4ae2-8d21-0b91c0112e57",
        "cdr": "http://demo26.multifacturalonew.oo:8084/downloads/summary/cdr/8f6568f5-e478-4ae2-8d21-0b91c0112e57"
    },
    "response": {
        "code": "0",
        "description": "El Resumen diario RC-20190126-6, ha sido aceptado",
        "notes": []
    }
}

```
