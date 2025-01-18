# Retención

## GENERAR COMPROBANTE DE RETENCIÓN

Es una constancia de que alguna persona moral te retuvo algún tipo de impuesto, (relativo al Impuesto Sobre la Renta), y sirve para demostrar que dicho impuesto te fue retenido, y presentarlo a la autoridad fiscal en caso que te sea requerido.

Para generar un comprobante de retención puede usar el siguiente servicio, necesitará la **url**, el **token**, y los **datos del documento**.

* **Url:** https://demo.pro5.fastura.app/api/retentions
* **Token:** HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt

### Ejemplo:

### 1. JSON A ENVIAR

```json
{
  "serie_documento": "R001",
  "numero_documento": "#",
  "fecha_de_emision": "2018-10-09",
  "hora_de_emision": "10:11:11",
  "codigo_tipo_documento": "20",
  "datos_del_emisor": {
    "codigo_pais": "PE",
    "ubigeo": "150101",
    "direccion": "Av. 2 de Mayo",
    "correo_electronico": "demo@gmail.com",
    "telefono": "427-1148",
    "codigo_del_domicilio_fiscal": "0000"
  },
  "datos_del_proveedor":{
    "codigo_tipo_documento_identidad": "6",
    "numero_documento": "10414711225",
    "apellidos_y_nombres_o_razon_social": "EMPRESA XYZ S.A.",
    "nombre_comercial": "EMPRESA XYZ",
    "codigo_pais": "PE",
    "ubigeo": "150101",
    "direccion": "Av. 2 de Mayo",
    "correo_electronico": "demo@gmail.com",
    "telefono": "427-1148"
  },
  "codigo_tipo_retencion": "01",
  "observaciones": "-",
  "totales": {
    "total_retenido": 30.00,
    "total_pagado": 1000.00
  },
  "documentos":[
    {
      "codigo_tipo_documento": "01",
      "serie_documento": "F001",
      "numero_documento": "3",
      "fecha_de_emision": "2018-10-09",
      "codigo_tipo_moneda": "PEN",
      "pagos": [
        {
          "fecha_de_pago": "2018-10-09",
          "total_pago": 200.00,
          "codigo_tipo_moneda": "PEN"
        }
      ],
      "tipo_de_cambio": {
        "codigo_tipo_moneda_referencia": "PEN",
        "codigo_tipo_moneda_objetivo": "PEN",
        "factor": 1,
        "fecha_tipo_de_cambio": "2018-10-09"
      },
      "fecha_de_retencion": "2018-10-09",
      "total_documento": 400.00,
      "total_retenido": 12.00,
      "total_a_pagar": 412.00,
      "total_pagado": 412.00
    },
    {
      "codigo_tipo_documento": "01",
      "serie_documento": "F001",
      "numero_documento": "4",
      "fecha_de_emision": "2018-10-09",
      "codigo_tipo_moneda": "USD",
      "total_documento": 200.00,
      "pagos": [
        {
          "fecha_de_pago": "2018-10-09",
          "total_pago": 200.00,
          "codigo_tipo_moneda": "USD"
        }
      ],
      "tipo_de_cambio": {
        "codigo_tipo_moneda_referencia": "USD",
        "codigo_tipo_moneda_objetivo": "PEN",
        "factor": 3.00,
        "fecha_tipo_de_cambio": "2018-10-09"
      },
      "fecha_de_retencion": "2018-10-09",
      "total_retenido": 18.00,
      "total_a_pagar": 618.00,
      "total_pagado": 618.00
    }
  ]
}
```

### 2. JSON RESPUESTA

```json
{
    "success": true,
    "data": {
        "number": "R001-1",
        "filename": "20415963255-20-R001-1",
        "external_id": "3249264a-fa7a-4c02-a7ce-37e19186dba0"
    },
    "links": {
        "xml": "http://demo26.multifacturalonew.oo:8084/downloads/retention/xml/3249264a-fa7a-4c02-a7ce-37e19186dba0",
        "pdf": "http://demo26.multifacturalonew.oo:8084/downloads/retention/pdf/3249264a-fa7a-4c02-a7ce-37e19186dba0",
        "cdr": "http://demo26.multifacturalonew.oo:8084/downloads/retention/cdr/3249264a-fa7a-4c02-a7ce-37e19186dba0"
    },
    "response": {
        "code": "0",
        "description": "El Comprobante numero R001-1 ha sido aceptado",
        "notes": []
    }
}
```
