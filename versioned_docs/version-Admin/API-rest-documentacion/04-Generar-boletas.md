# Generar boletas

## BOLETA GRAVADAS

Venta gravada de productos o servicios en cualquiera de las etapas de producción y distribución. Productos o servicios afectos al IGV (Impuesto General a la Venta).

### Ejemplo:
* **Método:** POST
* **URL:** https://demo.pro5.fastura.app/api/documents
* **TOKEN:** HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt

### 1. JSON AL ENVIAR

```json
{
  "serie_documento": "B001",
  "numero_documento": "#",
  "fecha_de_emision": "2018-10-09",
  "hora_de_emision": "10:11:11",
  "codigo_tipo_operacion": "0101",
  "codigo_tipo_documento":"03",
  "codigo_tipo_moneda": "PEN",
  "fecha_de_vencimiento": "2018-10-09",
  "numero_orden_de_compra": "0045467898", 
  "datos_del_cliente_o_receptor":{
    "codigo_tipo_documento_identidad": "6",
    "numero_documento": "10414711225",
    "apellidos_y_nombres_o_razon_social": "EMPRESA XYZ S.A.",
    "codigo_pais": "PE",
    "ubigeo": "150101",
    "direccion": "Av. 2 de Mayo",
    "correo_electronico": "demo@gmail.com",
    "telefono": "427-1148"
  },
  "totales": {
    "total_exportacion": 0.00,
    "total_operaciones_gravadas": 100.00,
    "total_operaciones_inafectas": 0.00,
    "total_operaciones_exoneradas": 0.00,
    "total_operaciones_gratuitas": 0.00,
    "total_igv": 18.00,
    "total_impuestos": 18.00,
    "total_valor": 100,
    "total_venta": 118
  },
  "items":[
    {
      "codigo_interno": "P0121",
      "descripcion":"Inca Kola 250 ml",
      "codigo_producto_sunat": "51121703", 
      "unidad_de_medida": "NIU",
      "cantidad": 2,
      "valor_unitario": 50,
      "codigo_tipo_precio": "01",
      "precio_unitario": 59,
      "codigo_tipo_afectacion_igv": "10",
      "total_base_igv": 100.00,
      "porcentaje_igv": 18,
      "total_igv": 18,
      "total_impuestos": 18,
      "total_valor_item": 100,
      "total_item": 118
    }
  ]
}
```

### 2. JSON RESPUESTA

```json
{
    "success": true,
    "data": {
        "number": "B001-1",
        "filename": "20415963255-03-B001-1",
        "external_id": "346135d8-b730-48e2-81f4-d00c9690f4ca",
        "number_to_letter": "Ciento dieciocho  con 00/100 ",
        "hash": "T3/grz45f3rK5xz7/PtlrNuhlCo=",
        "qr": "iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEaUlEQVR4nO2d23LbMAwF607//5fTt9QTswhIHMvZ8e5jJYtszwCicOvt4+Pjl5D5/eoNyBQlxKOEeJQQjxLiUUI8SohHCfEoIR4lxKOEeJQQzdfVqdTI7308Zf+c3lLMh/R5QQz8iRTpgElCdRkt3ez4MRD5Hb+miFeJQQz8sc6SOTmuvUeK8sk4bZPlohHiXEo4R4MsMs40wiO3X/0e5akx7gVFdUjVaIRwnxPHGAV+SBF5TNHzi0ZmgplWqu0QrxKCGel1VzSwqtEI8S4lFCPEqIRwnxKCEeJcSjhHiUEI8S4lFCPEqIRwnx/AV6e7I2Yyb8aQAAAABJRU5ErkJggg=="
    },
    "links": {
        "xml": "http://demo26.multifacturalonew.oo:8084/downloads/document/xml/346135d8-b730-48e2-81f4-d00c9690f4ca",
        "pdf": "http://demo26.multifacturalonew.oo:8084/downloads/document/pdf/346135d8-b730-48e2-81f4-d00c9690f4ca",
        "cdr": ""
    },
    "response": []
}
```

:::info IMPORTANTE
Para fines prácticos se corto la longitud del QR.
:::

## BOLETA GRAVADA - CONTINGENCIA

Para generar una **factura de contingencia** previamente debe registrar las series de contingencia, en el módulo U**suarios/Locales & Series** sección **Establecimientos**.

### Ejemplo:

* **Método:** POST
* **URL:** https://demo.pro5.fastura.app/api/documents
* **TOKEN:** HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt

### 1. JSON A ENVIAR

```json
{
  "serie_documento": "0004",
  "numero_documento": "#",
  "fecha_de_emision": "2019-09-03",
  "hora_de_emision": "10:11:11",
  "codigo_tipo_operacion": "0101",
  "codigo_tipo_documento":"03",
  "codigo_tipo_moneda": "PEN",
  "fecha_de_vencimiento": "2019-09-03",  
  "datos_del_cliente_o_receptor":{
    "codigo_tipo_documento_identidad": "6",
    "numero_documento": "10414711225",
    "apellidos_y_nombres_o_razon_social": "EMPRESA XYZ S.A.",
    "codigo_pais": "PE",
    "ubigeo": "150101",
    "direccion": "Av. 2 de Mayo",
    "correo_electronico": "demo@gmail.com",
    "telefono": "427-1148"
  },
  "totales": {
    "total_exportacion": 0.00,
    "total_operaciones_gravadas": 100.00,
    "total_operaciones_inafectas": 0.00,
    "total_operaciones_exoneradas": 0.00,
    "total_operaciones_gratuitas": 0.00,
    "total_igv": 18.00,
    "total_impuestos": 18.00,
    "total_valor": 100,
    "total_venta": 118
  },
  "items":[
    {
      "codigo_interno": "P0121",
      "descripcion":"Inca Kola 250 ml",
      "codigo_producto_sunat": "51121703", 
      "unidad_de_medida": "NIU",
      "cantidad": 2,
      "valor_unitario": 50,
      "codigo_tipo_precio": "01",
      "precio_unitario": 59,
      "codigo_tipo_afectacion_igv": "10",
      "total_base_igv": 100.00,
      "porcentaje_igv": 18,
      "total_igv": 18,
      "total_impuestos": 18,
      "total_valor_item": 100,
      "total_item": 118
    }
  ]
}
```

### 2. JSON RESPUESTA

```json
{
    "success": true,
    "data": {
        "number": "0004-1",
        "filename": "20415963255-03-0004-1",
        "external_id": "346135d8-b730-48e2-81f4-d00c9690f4ca",
        "number_to_letter": "Ciento dieciocho  con 00/100 ",
        "hash": "T3/grz45f3rK5xz7/PtlrNuhlCo=",
        "qr": "iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEaUlEQVR4nO2d23LbMAwF607//5fTt9QTswhIHMvZ8e5jJYtszwCicOvt4+Pjl5D5/eoNyBQlxKOEeJQQjxLiUUI8SohHCfEoIR4lxKOEeJQQzdfVqdTI7308Zf+c3lLMh/R5QQz8iRTpgElCdRkt3ez4MRD5Hb+miFeJQQz8sc6SOTmuvUeK8sk4bZPlohHiXEo4R4MsMs40wiO3X/0e5akx7gVFdUjVaIRwnxPHGAV+SBF5TNHzi0ZmgplWqu0QrxKCGel1VzSwqtEI8S4lFCPEqIRwnxKCEeJcSjhHiUEI8S4lFCPEqIRwnx/AV6e7I2Yyb8aQAAAABJRU5ErkJggg=="
    },
    "links": {
        "xml": "http://demo26.multifacturalonew.oo:8084/downloads/document/xml/346135d8-b730-48e2-81f4-d00c9690f4ca",
        "pdf": "http://demo26.multifacturalonew.oo:8084/downloads/document/pdf/346135d8-b730-48e2-81f4-d00c9690f4ca",
        "cdr": ""
    },
    "response": []
}
```

:::info IMPORTANTE
Para fines prácticos se corto la longitud del QR.
:::

## BOLETA EXPORTACIÓN

La boleta de exportación es un documento que registra la exportación de productos o servicios desde un país a otro, sin estar directamente relacionada con impuestos.

### Ejemplo:

* **Método:** POST
* **URL:** https://demo.pro5.fastura.app/api/documents
* **TOKEN:** HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt

### 1. JSON A ENVIAR

```json
{
  "serie_documento": "B001",
  "numero_documento": "#",
  "fecha_de_emision": "2019-09-03",
  "hora_de_emision": "10:11:11",
  "codigo_tipo_operacion": "0101",
  "codigo_tipo_documento":"03",
  "codigo_tipo_moneda": "PEN",
  "fecha_de_vencimiento": "2023-09-21",  
  "datos_del_cliente_o_receptor":{
    "codigo_tipo_documento_identidad": "6",
    "numero_documento": "10414711225",
    "apellidos_y_nombres_o_razon_social": "EMPRESA XYZ S.A.",
    "codigo_pais": "PE",
    "ubigeo": "150101",
    "direccion": "Av. 2 de Mayo",
    "correo_electronico": "demo@gmail.com",
    "telefono": "427-1148"
  },
  "totales": {
    "total_exportacion": 0.00,
    "total_operaciones_gravadas": 100.00,
    "total_operaciones_inafectas": 0.00,
    "total_operaciones_exoneradas": 0.00,
    "total_operaciones_gratuitas": 0.00,
    "total_igv": 18.00,
    "total_impuestos": 18.00,
    "total_valor": 100,
    "total_venta": 118
  },
  "items":[
    {
      "codigo_interno": "P0121",
      "descripcion":"Inca Kola 250 ml",
      "codigo_producto_sunat": "51121703",
      "codigo_producto_gsl": "51121703",
      "unidad_de_medida": "NIU",
      "cantidad": 2,
      "valor_unitario": 50,
      "codigo_tipo_precio": "01",
      "precio_unitario": 59,
      "codigo_tipo_afectacion_igv": "10",
      "total_base_igv": 100.00,
      "porcentaje_igv": 18,
      "total_igv": 18,
      "total_impuestos": 18,
      "total_valor_item": 100,
      "total_item": 118
    }
  ]
}
```

### 2. JSON DE RESPUESTA

```json
{
    "success": true,
    "data": {
        "number": "B001-12",
        "filename": "20302019010-03-B001-12",
        "external_id": "fa4d8a21-364b-4125-864c-506e1722007c",
        "state_type_id": "05",
        "state_type_description": "Aceptado",
        "number_to_letter": "Ciento dieciocho  con 00/100 ",
        "hash": "kp1jhEaeI8uvFE96/rH4/7v0JDM=",
        "qr": "iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAgAElEQVR4AQCbgGR/Af///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        "id": 319
    },
    "links": {
        "xml": "https://demo.pro5.fastura.app/downloads/document/xml/fa4d8a21-364b-4125-864c-506e1722007c",
        "pdf": "https://demo.pro5.fastura.app/downloads/document/pdf/fa4d8a21-364b-4125-864c-506e1722007c",
        "cdr": "https://demo.pro5.fastura.app/downloads/document/cdr/fa4d8a21-364b-4125-864c-506e1722007c"
    },
    "response": {
        "code": "0",
        "description": "La Boleta numero B001-12, ha sido aceptada",
        "notes": []
    }
}
```

:::info IMPORTANTE
Para fines prácticos se corto la longitud del QR.
:::

## Actualizar estado del documento

### Ejemplo:

* **Método:** POST
* **URL:** https://demo.pro5.fastura.app/api/documents/updatedocumentstatus
* **TOKEN:** HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt

### 1. JSON A ENVIAR

```json
{
    "externail_id": "b54e661a-1bf6-4edb-aab8-6744811d10ce",
    "state_type_id": "01"
}
```

:::danger IMPORTANTE
Para completar **state_type_id** tiene que tomar en cuenta la lista de estados de un documento:

* **05:** Aceptado
* **11:** Anulado
* **03:** Enviado
* **07:** Observado
* **13:** Por anular
* **09:** Rechazados
* **01:** Registrado
:::

### 2. JSON RESPUESTA

```json
{
    "success": true
}
```