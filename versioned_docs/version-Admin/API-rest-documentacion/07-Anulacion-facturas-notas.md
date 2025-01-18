# Anulación facturas - notas

## REGISTRAR Y ENVIAR ANULACIÓN

Cuando se genera una anulación de facturas o notas (generadas a partir de facturas), esta no se envía inmediatamente a **Sunat**. Este documento se envía mediante un grupo o de forma individual, para registrar y enviar la anulación, puede usar el siguiente servicio, necesitará la **url**, el **token**, **la fecha de emisión de documentos** que conformarán la anulación, y la **data de los documentos**.

Cuando haya culminado este procedimiento, deberá consultar el ticket de la anulación generada, se explicará en el siguiente punto.

- **Método:** POST
- **Url:** https://demo.pro5.fastura.app/api/voided
- **Token:** HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt

### Ejemplo

### 1. JSON A ENVIAR

```json
{
  "fecha_de_emision_de_documentos": "2019-01-26",
  "documentos": [
    {
      "external_id": "c6057c05-6ec8-44d0-9fb9-23159498ce8e",
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
        "external_id": "0a1382c6-e639-46fc-a8ae-d4659b63c4bd",
        "ticket": "1548518223324"
    }
}
```

## CONSULTAR TICKET ANULACIÓN

Para consultar el ticket de la anulación generada puede usar el siguiente servicio, necesitará la **url**, el **token**, el **external_id** (resumen) y el **número de ticket**.

- **Método:** POST
- **Url:** https://demo.pro5.fastura.app/api/voided
- **Token:** HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt

Cuando haya culminado este procedimiento, la anulación con las facturas o notas que lo conforman han sido aceptadas exitosamente por Sunat, es decir el (los) documento(s) han sido anulados.

### Ejemplo:

### 1. JSON  ENVIAR

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
        "filename": "20415963255-RA-20190126-1",
        "external_id": "0a1382c6-e639-46fc-a8ae-d4659b63c4bd"
    },
    "links": {
        "xml": "http://demo26.multifacturalonew.oo:8084/downloads/voided/xml/0a1382c6-e639-46fc-a8ae-d4659b63c4bd",
        "cdr": "http://demo26.multifacturalonew.oo:8084/downloads/voided/cdr/0a1382c6-e639-46fc-a8ae-d4659b63c4bd"
    },
    "response": {
        "code": "0",
        "description": "La Comunicación de baja RA-20190126-1, ha sido aceptada",
        "notes": []
    }
}
```
