# Generar facturas

## FACTURA GRAVADA

La Factura Electrónica es un comprobante de pago emitido a través del sistema de emisión electrónica desarrollado desde los sistemas del contribuyente y que permite la sustentación del costo-gasto para efectos del Impuesto a la Renta, así como la utilización del crédito fiscal del Impuesto General a las Ventas.

### Ejemplo:

* **Método:** POST
* **URL:** https://demo.pro5.fastura.app/api/documents
* **TOKEN:** HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt

### 1. JSON A ENVIAR

```json
{
  "serie_documento": "F001",
  "numero_documento": "#",
  "fecha_de_emision": "2023-09-21",
  "hora_de_emision": "10:11:11",
  "codigo_tipo_operacion": "0101",
  "codigo_tipo_documento":"01",
  "codigo_tipo_moneda": "PEN",
  "fecha_de_vencimiento":"2023-09-21",
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
  ],
  "informacion_adicional": "Forma de pago:Efectivo|Caja: 1"
}
```

### 2. JSON RESPUESTA

```json
{
    "success": true,
    "data": {
        "number": "F001-26",
        "filename": "20302019010-01-F001-26",
        "external_id": "46c6ce9d-aaae-4b8d-8e94-a6f94c964b47",
        "state_type_id": "05",
        "state_type_description": "Aceptado",
        "number_to_letter": "Ciento dieciocho  con 00/100 ",
        "hash": "jFDgOlcAShjMeA1TJzT08v+PPTw=",
        "qr": "iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAgAElEQVRDXEFRWtOsnuAAAAAElFTkSuQmCC",
        "id": 322
    },
    "links": {
        "xml": "https://demo.pro5.fastura.app/downloads/document/xml/46c6ce9d-aaae-4b8d-8e94-a6f94c964b47",
        "pdf": "https://demo.pro5.fastura.app/downloads/document/pdf/46c6ce9d-aaae-4b8d-8e94-a6f94c964b47",
        "cdr": "https://demo.pro5.fastura.app/downloads/document/cdr/46c6ce9d-aaae-4b8d-8e94-a6f94c964b47"
    },
    "response": {
        "code": "0",
        "description": "La Factura numero F001-26, ha sido aceptada",
        "notes": []
    }
}
```

:::info IMPORTANTE
Para fines prácticos se corto la longitud del QR.
:::

## FACTURA INAFECTA

La inafectación contenida en las normas del impuesto establece que operaciones y servicios no están gravadas con el IGV.

### Ejemplo:
* **Método:** POST
* **URL:** https://demo.pro5.fastura.app/api/documents
* **TOKEN:** HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt

### 1. JSON A ENVIAR

```json
{
  "serie_documento": "F001",
  "numero_documento": "#",
  "fecha_de_emision": "2018-10-09",
  "hora_de_emision": "10:11:11",
  "codigo_tipo_operacion": "0101",
  "codigo_tipo_documento":"01",
  "codigo_tipo_moneda": "PEN",
  "fecha_de_vencimiento":"2018-08-30",
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
    "total_operaciones_gravadas": 0.00,
    "total_operaciones_inafectas": 118.00,
    "total_operaciones_exoneradas": 0.00,
    "total_operaciones_gratuitas": 0.00,
    "total_igv": 0.00,
    "total_impuestos": 0.00,
    "total_valor": 118,
    "total_venta": 118
  },
  "items":[
    {
      "codigo_interno": "P0121",
      "descripcion":"Inca Kola 250 ml",
      "codigo_producto_sunat": "", 
      "unidad_de_medida": "NIU",
      "cantidad": 2,
      "valor_unitario": 59,
      "codigo_tipo_precio": "01",
      "precio_unitario": 59,
      "codigo_tipo_afectacion_igv": "30",
      "total_base_igv": 0.00,
      "porcentaje_igv": 18,
      "total_igv": 0.00,
      "total_impuestos": 0.00,
      "total_valor_item": 118,
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
        "number": "F001-27",
        "filename": "20302019010-01-F001-27",
        "external_id": "4c7a4555-8f80-4b1f-8919-94ac564ee98b",
        "state_type_id": "09",
        "state_type_description": "Rechazado",
        "number_to_letter": "Ciento dieciocho  con 00/100 ",
        "hash": "oUIhzWmeJUgEoZwy1ElmE8cY43Q=",
        "qr": "iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAgAElEQVR4AQCbgGR/Af///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        "id": 323
    },
    "links": {
        "xml": "https://demo.pro5.fastura.app/downloads/document/xml/4c7a4555-8f80-4b1f-8919-94ac564ee98b",
        "pdf": "https://demo.pro5.fastura.app/downloads/document/pdf/4c7a4555-8f80-4b1f-8919-94ac564ee98b",
        "cdr": "https://demo.pro5.fastura.app/downloads/document/cdr/4c7a4555-8f80-4b1f-8919-94ac564ee98b"
    },
    "response": {
        "code": "3105",
        "description": "El XML debe contener al menos un tributo por linea de afectacion por IGV"
    }
}
```

:::info IMPORTANTE
Para fines prácticos se corto la longitud del QR.
:::

## FACTURA GRAVADA - GRATUITA

Generar una factura con item gravado y gratuito.

### Ejemplo:
* **Método**: POST
* **URL:** https://demo.pro5.fastura.app/api/documents
* **TOKEN:** HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt

### 1. JSON A ENVIAR

```json
{
  "serie_documento": "F001",
  "numero_documento": "#",
  "fecha_de_emision": "2018-10-09",
  "hora_de_emision": "10:11:11",
  "codigo_tipo_operacion": "0101",
  "codigo_tipo_documento":"01",
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
    "total_operaciones_gratuitas": 100.00,
    "total_igv": 18.00,
    "total_impuestos": 18.00,
    "total_valor": 100,
    "total_venta": 118
  },
  "items":[
    {
      "codigo_interno": "P0121",
      "descripcion":"Inca Kola 250 ml",
      "codigo_producto_sunat": "", 
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
    },
    {
      "codigo_interno": "P0122",
      "descripcion":"Pepsi 250 ml",
      "codigo_producto_sunat": "", 
      "unidad_de_medida": "NIU",
      "cantidad": 2,
      "valor_unitario": 0.00,
      "codigo_tipo_precio": "02",
      "precio_unitario": 0.00,
      "codigo_tipo_afectacion_igv": "16",
      "total_base_igv": 100.00,
      "porcentaje_igv": 18.00,
      "total_igv": 18.00,
      "total_impuestos": 0.00,
      "total_valor_item": 0.00,
      "total_item": 0.00
    }    
  ]
}
```

### 2. JSON A RESPUESTA

```json
{
    "success": true,
    "data": {
        "number": "F001-28",
        "filename": "20302019010-01-F001-28",
        "external_id": "3eefb33e-2045-4bdd-b661-1462b889f7a9",
        "state_type_id": "09",
        "state_type_description": "Rechazado",
        "number_to_letter": "Ciento dieciocho  con 00/100 ",
        "hash": "dU/4QSox0DKpsGz/yaD8D+nUGqY=",
        "qr": "iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAgAElEQVR4AQCbgGR/Af///wAAAMPNxEJsyosTAAAAAElFTkSuQmCC",
        "id": 324
    },
    "links": {
        "xml": "https://demo.pro5.fastura.app/downloads/document/xml/3eefb33e-2045-4bdd-b661-1462b889f7a9",
        "pdf": "https://demo.pro5.fastura.app/downloads/document/pdf/3eefb33e-2045-4bdd-b661-1462b889f7a9",
        "cdr": "https://demo.pro5.fastura.app/downloads/document/cdr/3eefb33e-2045-4bdd-b661-1462b889f7a9"
    },
    "response": {
        "code": "3272",
        "description": "La base imponible a nivel de línea difiere de la información consignada en el comprobante - Detalle: xxx.xxx.xxx value='ticket: 1695423268586 error: Error en la linea: 2: 3272 (nodo: \"cac:TaxSubtotal/cbc:TaxableAmount\" valor: \"100.00\")'"
    }
}
```

:::info IMPORTANTE
Para fines prácticos se corto la longitud del QR.
:::

## FACTURA GRAVADA EN DÓLARES

### Ejemplo:

* ** Método:** POST
* **URL:** https://demo.pro5.fastura.app/api/documents
* **TOKEN:** HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt

### 1. JSON A ENVIAR

```json
{
  "serie_documento": "F001",
  "numero_documento": "#",
  "fecha_de_emision": "2018-10-09",
  "hora_de_emision": "10:11:11",
  "codigo_tipo_operacion": "0101",
  "codigo_tipo_documento":"01",
  "codigo_tipo_moneda": "USD",
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
      "codigo_producto_sunat": "", 
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
        "number": "F001-29",
        "filename": "20302019010-01-F001-29",
        "external_id": "2bb69425-77e0-4566-8150-08f7828ea189",
        "state_type_id": "05",
        "state_type_description": "Aceptado",
        "number_to_letter": "Ciento dieciocho  con 00/100 ",
        "hash": "L4SMnLskkHwi02oy6a4tqcRMv0Y=",
        "qr": "iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAgAElEQVR4AQCbgGR/Af///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALZZrzNrOjhXAAAAAElFTkSuQmCC",
        "id": 325
    },
    "links": {
        "xml": "https://demo.pro5.fastura.app/downloads/document/xml/2bb69425-77e0-4566-8150-08f7828ea189",
        "pdf": "https://demo.pro5.fastura.app/downloads/document/pdf/2bb69425-77e0-4566-8150-08f7828ea189",
        "cdr": "https://demo.pro5.fastura.app/downloads/document/cdr/2bb69425-77e0-4566-8150-08f7828ea189"
    },
    "response": {
        "code": "0",
        "description": "La Factura numero F001-29, ha sido aceptada",
        "notes": []
    }
}
```

:::info IMPORTANTE
Para fines prácticos se corto la longitud del QR.
:::


## FACTURA EXONERADA

Entendemos por exoneradas a aquellas operaciones que, no obstante encontrarse afectas en principio al impuesto, por mandato de la misma ley quedan liberadas del pago del tributo.

### Ejemplo:

* **Método:** POST
* **URL:** https://demo.pro5.fastura.app/api/documents
* **TOKEN:** HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt

### 1. JSON A ENVIAR

```json
{
   "serie_documento": "F001",
   "numero_documento": "#",
   "fecha_de_emision": "2018-10-09",
   "hora_de_emision": "10:11:11",
   "codigo_tipo_operacion": "0101",
   "codigo_tipo_documento":"01",
   "codigo_tipo_moneda": "PEN",
   "fecha_de_vencimiento":"2018-08-30",
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
    "total_operaciones_gravadas": 0.00,
    "total_operaciones_inafectas": 0.00,
    "total_operaciones_exoneradas": 118.00,
    "total_operaciones_gratuitas": 0.00,
    "total_igv": 0.00,
    "total_impuestos": 0.00,
    "total_valor": 118,
    "total_venta": 118
  },
  "items":[
    {
      "codigo_interno": "P0121",
      "descripcion":"Inca Kola 250 ml",
      "codigo_producto_sunat": "",
      "codigo_producto_gsl": "",
      "unidad_de_medida": "NIU",
      "cantidad": 2,
      "valor_unitario": 59,
      "codigo_tipo_precio": "01",
      "precio_unitario": 59,
      "codigo_tipo_afectacion_igv": "20",
      "total_base_igv": 118.00,
      "porcentaje_igv": 18,
      "total_igv": 0.00,
      "total_impuestos": 0.00,
      "total_valor_item": 118,
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
        "number": "F001-30",
        "filename": "20302019010-01-F001-30",
        "external_id": "a40c1742-af1b-499e-aa4b-cd9638c97bd1",
        "state_type_id": "05",
        "state_type_description": "Aceptado",
        "number_to_letter": "Ciento dieciocho  con 00/100 ",
        "hash": "CK+I8wCYZ5QG1VqwJzdYxCEPUIs=",
        "qr": "iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAgAElEQVR4AQCbgGR/Af///wAAAAAAAAAAAAAAAAAAAPO2pjwkM6EdAAAAAElFTkSuQmCC",
        "id": 326
    },
    "links": {
        "xml": "https://demo.pro5.fastura.app/downloads/document/xml/a40c1742-af1b-499e-aa4b-cd9638c97bd1",
        "pdf": "https://demo.pro5.fastura.app/downloads/document/pdf/a40c1742-af1b-499e-aa4b-cd9638c97bd1",
        "cdr": "https://demo.pro5.fastura.app/downloads/document/cdr/a40c1742-af1b-499e-aa4b-cd9638c97bd1"
    },
    "response": {
        "code": "0",
        "description": "La Factura numero F001-30, ha sido aceptada",
        "notes": []
    }
}
```

## FACTURA GRAVADA SIN ENVIAR

Puede generar una factura sin enviarla a **sunat** (offline), en caso no cuente con internet, puede generar el xml y pdf normalmente. Y en un momento posterior enviarla a sunat, y obtener el CDR respectivo.

### Ejemplo:

* **Método:** POST
* **URL:** https://demo.pro5.fastura.app/api/documents
* **TOKEN:** HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt

### 1. JSON A ENVIAR

```json
{
  "serie_documento": "F001",
  "numero_documento": "#",
  "fecha_de_emision": "2018-10-09",
  "hora_de_emision": "10:11:11",
  "codigo_tipo_operacion": "0101",
  "codigo_tipo_documento":"01",
  "codigo_tipo_moneda": "PEN",
  "fecha_de_vencimiento":"2018-08-30",
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
  ],
  "acciones": {
    "enviar_xml_firmado": false
  }
}
```

### 2. JSON RESPUESTA

```json
{
    "success": true,
    "data": {
        "number": "F001-31",
        "filename": "20302019010-01-F001-31",
        "external_id": "1eceeacc-7297-4e28-85e0-ff82413ef5c0",
        "state_type_id": "01",
        "state_type_description": "Registrado",
        "number_to_letter": "Ciento dieciocho  con 00/100 ",
        "hash": "grDLpVyvjmR7X1WJzrMFsZTNMUA=",
        "qr": "iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAgAElEQVR4AQCbgGR/Af///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAElFTkSuQmCC",
        "id": 327
    },
    "links": {
        "xml": "https://demo.pro5.fastura.app/downloads/document/xml/1eceeacc-7297-4e28-85e0-ff82413ef5c0",
        "pdf": "https://demo.pro5.fastura.app/downloads/document/pdf/1eceeacc-7297-4e28-85e0-ff82413ef5c0",
        "cdr": ""
    },
    "response": []
}
```

:::info IMPORTANTE
Para fines prácticos se corto la longitud del QR.
:::

## ENVIAR FACTURA GENERADA OFFLINE

Para enviar a **Sunat** la factura generada en modo offline, puede usar el siguiente servicio, necesitará la url, el **token** y el **external_id** del documento generado.

* **Método:** POST
* **Url:** http://demo.fastura.app/api/documents/send
* **Token:** HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt

### Ejemplo:

### 1. JSON A ENVIAR

```json
{
  "external_id": "4812b6e7-352d-4926-8409-3a8a6b02bb94"
}
```

### 2. JSON RESPUESTA

```json
{
    "success": true,
    "data": {
        "number": "F001-15",
        "filename": "20415963255-01-F001-15",
        "external_id": "7d9feb66-16e9-47a9-86fd-ebccdb662678"
    },
    "links": {
        "cdr": "http://demo26.multifacturalonew.oo:8084/downloads/document/cdr/7d9feb66-16e9-47a9-86fd-ebccdb662678"
    },
    "response": {
        "code": "0",
        "description": "La Factura numero F001-15, ha sido aceptada",
        "notes": []
    }
}
```

## FACTURA - DATOS ADICIONALES - GUÍAS

* **Método:** POST
* **Url:** http://demo.fastura.app/api/documents/send
* **Token:** HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt


### 1. ARREGLO

Para añadir guías a la factura necesita agregar el siguiente arreglo al json principal.Los arreglos se refieren a los datos adicionales de un comprobante.

```json
"guias":[
	    {
	      "numero": "T001",
	      "codigo_tipo_documento": "09"
	    },
	    {
	      "numero": "T002",
	      "codigo_tipo_documento": "09"
	    }
  ]
```

### Ejemplo:

### 2. JSON A ENVIAR

```json
{
  "serie_documento": "F001",
  "numero_documento": "#",
  "fecha_de_emision": "2019-02-21",
  "hora_de_emision": "10:11:11",
  "codigo_tipo_operacion": "0101",
  "codigo_tipo_documento":"01",
  "codigo_tipo_moneda": "PEN",
  "fecha_de_vencimiento":"2019-02-21",
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
  "guias":[
	    {
	      "numero": "T001",
	      "codigo_tipo_documento": "09"
	    },
	    {
	      "numero": "T002",
	      "codigo_tipo_documento": "09"
	    }
  ],
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
  ],
  "informacion_adicional": "Forma de pago:Efectivo|Caja: 1"
}
```

## FACTURA - D. ADICIONALES - DOC. RELACIONADOS

* **Método:** POST
* **Url:** http://demo.fastura.app/api/documents/send
* **Token:** HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt

Para añadir documentos relacionados a la factura necesita agregar el siguiente arreglo al json principal.Los arreglos se refieren a los datos adicionales de un comprobante.

### 1. ARREGLO

```json
"relacionados":[
    {
      "numero": "12",
      "codigo_tipo_documento": "01",
      "monto": 150.00
    } ,
    {
      "numero": "15",
      "codigo_tipo_documento": "01",
      "monto": 150.00
    } 
  ] 
```
 * **Método:** POST
 * **URL:** https://demo.pro5.fastura.app/api/documents
 * **TOKEN:** HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt

### 2. JSON A ENVIAR

```json
{
  "serie_documento": "F001",
  "numero_documento": "#",
  "fecha_de_emision": "2018-10-09",
  "hora_de_emision": "10:11:11",
  "codigo_tipo_operacion": "0101",
   "codigo_tipo_documento":"01",
   "codigo_tipo_moneda": "PEN",
   "fecha_de_vencimiento":"2018-08-30",
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
  "relacionados":[
    {
      "numero": "12",
      "codigo_tipo_documento": "01",
      "monto": 150.00
    } ,
 {
      "numero": "15",
      "codigo_tipo_documento": "01",
      "monto": 150.00
    } 
  ] ,
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
  ],
  "informacion_adicional": "Forma de pago:Efectivo|Caja: 1"
}
```

## FACTURA - D. ADICIONALES A NIVEL DE ITEM

* **Método:** POST
* **URL:** https://demo.pro5.fastura.app/api/documents
* **TOKEN:** HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt

Para añadir datos adicionales a nivel de item en la factura, necesita agregar el siguiente arreglo al item.Los arreglos se refieren a los datos adicionales de un comprobante.

### 1. ARREGLO

```json
  "datos_adicionales":[
  	{
  		"codigo": "5010",
  		"descripcion": "Numero de Placa",
  		"valor": "A7Q-986"
  	}
   ] 
```

Puede añadir estos datos cuando necesita agregar atributos a los items de su factura, en este caso el número de placa. Tenga en cuenta que el código debe ser el correspondiente al catalogo de atributos brindado por sunat.

### Ejemplo:

### 2. JSON A ENVIAR

```json
{
   "serie_documento": "F001",
   "numero_documento": "#",
   "fecha_de_emision": "2018-10-09",
   "hora_de_emision": "10:11:11",
   "codigo_tipo_operacion": "0101",
   "codigo_tipo_documento":"01",
   "codigo_tipo_moneda": "PEN",
   "fecha_de_vencimiento":"2018-08-30",
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
      "total_item": 118,
      "datos_adicionales":[
  			{
  				"codigo": "5010",
  				"descripcion": "Numero de Placa",
  				"valor": "A7Q-986"
  			}
  	  ] 
    }
  ],
  "informacion_adicional": "Forma de pago:Efectivo|Caja: 1"
}
```

## FACTURA CONTINGENCIA

Para generar una factura de contingencia previamente debe registrar las series de contingencia, en el módulo Usuarios/Locales & Series sección Establecimientos.

### Ejemplo:

* **Método:** POST
* **URL:** https://demo.pro5.fastura.app/api/documents
* **TOKEN:** HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt

### 1. JSON A ENVIAR

```json
{
   "serie_documento": "0001",
   "numero_documento": "#",
   "fecha_de_emision": "2019-09-03",
   "hora_de_emision": "10:11:11",
   "fecha_de_vencimiento":"2019-09-03",
   "codigo_tipo_operacion": "0101",
   "codigo_tipo_documento":"01",
   "codigo_tipo_moneda": "PEN",  
   "datos_del_cliente_o_receptor":{
    "codigo_tipo_documento_identidad": "6",
    "numero_documento": "20501973522",
    "apellidos_y_nombres_o_razon_social": "EMBOTELLADORA DON JORGE S.A.C. EN LIQUIDACION",
    "codigo_pais": "PE",
    "ubigeo": "150101",
    "direccion": "Av. Argentina 2458",
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
  ],
  "informacion_adicional": "Forma de pago:Efectivo|Caja: 1"
}
```

### 2. JSON RESPUESTA

```json
{
    "success": true,
    "data": {
        "number": "F001-32",
        "filename": "20302019010-01-F001-32",
        "external_id": "9c6e8cfe-f10d-407c-a3c9-eb836de7da28",
        "state_type_id": "05",
        "state_type_description": "Aceptado",
        "number_to_letter": "Ciento dieciocho  con 00/100 ",
        "hash": "1aNb76S0yfwBuKDvDJ701H9Mies=",
        "qr": "iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAgAElEQVR4AQCbgGR/Af///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGmVAzwftRDIAAAAAElFTkSuQmCC",
        "id": 328
    },
    "links": {
        "xml": "https://demo.pro5.fastura.app/downloads/document/xml/9c6e8cfe-f10d-407c-a3c9-eb836de7da28",
        "pdf": "https://demo.pro5.fastura.app/downloads/document/pdf/9c6e8cfe-f10d-407c-a3c9-eb836de7da28",
        "cdr": "https://demo.pro5.fastura.app/downloads/document/cdr/9c6e8cfe-f10d-407c-a3c9-eb836de7da28"
    },
    "response": {
        "code": "0",
        "description": "La Factura numero F001-32, ha sido aceptada",
        "notes": []
    }
}
```

:::info IMPORTANTE
Para fines prácticos se corto la longitud del QR.
:::

## FACTURA GRAVADA - IMPUESTO BOLSA PLÁSTICA

### Ejemplo:

* **Método:** POST
* **URL:** https://demo.pro5.fastura.app/api/documents
* **TOKEN:** HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt

### 1. JSON A ENVIAR

```json
{
  "serie_documento": "F001",
  "numero_documento": "#",
  "fecha_de_emision": "2021-08-27",
  "hora_de_emision": "10:11:11",
  "codigo_tipo_operacion": "0101",
  "codigo_tipo_documento":"01",
  "codigo_tipo_moneda": "PEN",
  "fecha_de_vencimiento":"2021-08-27", 
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
    "total_impuestos_bolsa_plastica": 0.6,
    "total_igv": 18.00,
    "total_impuestos": 18.00,
    "total_valor": 100,
    "total_venta": 118.6
  },
  "items":[
    {
      "codigo_interno": "P0015",
      "descripcion":"Pepsi 3 lt",
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
      "total_impuestos_bolsa_plastica": 0.6,
      "total_impuestos": 18,
      "total_valor_item": 100,
      "total_item": 118
    }
  ],
  "informacion_adicional": "Forma de pago:Efectivo|Caja: 1"
}
```

### 2. JSON RESPUESTA

```json
{
    "success": true,
    "data": {
        "number": "F001-24",
        "filename": "20302019010-01-F001-24",
        "external_id": "b48d699f-8be1-4fef-9871-3cea83badc45",
        "state_type_id": "05",
        "state_type_description": "Aceptado",
        "number_to_letter": "Ciento dieciocho  con 60/100 ",
        "hash": "u7Y6uERK3Lwt8CcACbEVCR5Qo/0=",
        "qr": "iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAgAElEQVR4AQCbgGR/Af///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        "id": 318
    },
    "links": {
        "xml": "https://demo.pro5.fastura.app/downloads/document/xml/b48d699f-8be1-4fef-9871-3cea83badc45",
        "pdf": "https://demo.pro5.fastura.app/downloads/document/pdf/b48d699f-8be1-4fef-9871-3cea83badc45",
        "cdr": "https://demo.pro5.fastura.app/downloads/document/cdr/b48d699f-8be1-4fef-9871-3cea83badc45"
    },
    "response": {
        "code": "0",
        "description": "La Factura numero F001-24, ha sido aceptada",
        "notes": [
            "4318 - El dato ingresado en el campo cac:TaxSubtotal/cbc:TaxAmount del ítem no coincide con el valor calculado - Error en la linea: 1 Tributo: 7152: 4318 (nodo: \"cac:TaxSubtotal/cbc:TaxAmount\" valor: \"0.60\")"
        ]
    }
}
```

:::info IMPORTANTE
Para fines prácticos se corto la longitud del QR.
:::

## Actualizar estado del documento

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