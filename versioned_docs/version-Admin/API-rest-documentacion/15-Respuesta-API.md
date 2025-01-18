# Respuesta API

Explicación de la respuesta de JSON.

## ESTRUCTURA JSON RESPUESTA

```json
{

    "success": true,   => Proceso ejecutado correctamente

    "data": {
        "number": "F001-4", => Serie y número del documento emitido
        "filename": "20415963255-01-F001-4",  => Nombre de documento
       "external_id": "7eff377b-de6c-4af3-ba6a-893ca5f94677",   => Código único, para comunicación con API

        "number_to_letter": "Ciento dieciocho  con 00/100 ",   => Monto en letras (Leyendas)
        "hash": "7YhwG4nbDE3TCP4AhgzE/1shijc=",  =>  Usar para modificar la representación impresa (PDF)

        "qr": "iVBORw0KGgoAAAANSUhEUgAAAJY"  => Usar para modificar la representacion impresa (PDF)
    },

    "links": {
"xml":     "http://demo26.multifacturalonew.oo:8084/downloads/document/xml/7eff377b-de6c-4af3-ba6a-893ca5f94677",  => Enlace de descarga del XML firmado

"pdf": "http://demo26.multifacturalonew.oo:8084/downloads/document/pdf/7eff377b-de6c-4af3-ba6a-893ca5f94677", => Enlace de descarga del PDF

 "cdr": "http://demo26.multifacturalonew.oo:8084/downloads/document/cdr/7eff377b-de6c-4af3-ba6a-893ca5f94677"  => Enlace de descarga del CDR

    },

    "response": {
        "code": "0",
        "description": "La Factura número F001-4, ha sido aceptada", =>  Respuesta Sunat
        "notes": []
    }

}
```
