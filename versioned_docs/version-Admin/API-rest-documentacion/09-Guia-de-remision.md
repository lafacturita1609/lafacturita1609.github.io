# Guía de remisión

## GENERAR GUIA DE REMISIÓN

Las Guías de Remisión son documentos que sustentan el traslado de bienes entre distintas direcciones, existen distintas modalidades y aspectos relevantes.

Para generar una guia de remision puede usar el siguiente servicio, necesitará la **url**, **el token**, y **los datos del documento**.

- **Método:** POST
- **Url:** http://demo.fastura.app/api/dispatches
- **Token:** oZoKGFDzqGJfJilCHowJlZrTadQRBtuJ2fr3PkJz02aU46WPPg

### Ejemplo

### 1. JSON A ENVIAR

```json
{
  "serie_documento": "T001",
  "numero_documento": "#",
  "fecha_de_emision": "2018-10-09",
  "hora_de_emision": "10:11:11",
  "codigo_tipo_documento": "09",
  "datos_del_emisor": {
    "codigo_pais": "PE",
    "ubigeo": "150101",
    "direccion": "Av. 2 de Mayo",
    "correo_electronico": "demo@gmail.com",
    "telefono": "427-1148",
    "codigo_del_domicilio_fiscal": "0000"
  },
  "datos_del_cliente_o_receptor":{
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
  "observaciones": "aaaaaaaaaaaaaaa",
  "codigo_modo_transporte": "01",
  "codigo_motivo_traslado": "01",
  "descripcion_motivo_traslado": "El cliente solicito envia a su trabajo en ...",
  "fecha_de_traslado": "2019-01-16",
  "codigo_de_puerto": "",
  "indicador_de_transbordo": false,
  "unidad_peso_total": "KGM",
  "peso_total": 30.00,
  "numero_de_bultos": 1,
  "numero_de_contenedor": "",
  "direccion_partida": {
    "ubigeo": "150101",
    "direccion": "PUNTO A"
  },
  "direccion_llegada": {
    "ubigeo": "150101",
    "direccion": "PUNTO 2"
  },
  "transportista": {
    "codigo_tipo_documento_identidad": "6",
    "numero_documento": "10417844398",
    "apellidos_y_nombres_o_razon_social": "aaaaaaaaa"
  },
  "chofer": {
    "codigo_tipo_documento_identidad": "1",
    "numero_documento": "4177874"
  },
  "numero_de_placa": "A01-1254",
  "items":[
    {
      "codigo_interno": "P0121",
      "cantidad": 2
    }
  ]
}
```

### 2. JSON RESPUESTA

```json
{
    "success": true,
    "data": {
        "number": "T001-1",
        "filename": "20415963255-09-T001-1",
        "external_id": "89f6931f-9be0-4f92-80ad-8a7fbfce9160"
    },
    "links": {
        "xml": "http://demo26.multifacturalonew.oo:8084/downloads/dispatch/xml/89f6931f-9be0-4f92-80ad-8a7fbfce9160",
        "pdf": "http://demo26.multifacturalonew.oo:8084/downloads/dispatch/pdf/89f6931f-9be0-4f92-80ad-8a7fbfce9160",
        "cdr": "http://demo26.multifacturalonew.oo:8084/downloads/dispatch/cdr/89f6931f-9be0-4f92-80ad-8a7fbfce9160"
    },
    "response": {
        "code": "0",
        "description": "El Comprobante numero T001-1 ha sido aceptado",
        "notes": []
    }
}
```
