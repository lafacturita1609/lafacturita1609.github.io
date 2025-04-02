# Plantilla PDF Personalizada
---
- [Nombre de carpeta](#nombre-de-carpeta)
- [Ruta de carpeta](#ruta-de-carpeta)
- [Estructura de carpeta](#estructura-de-carpeta)
- [Archivos principales](#archivos-principales)

## Nombre de carpeta
Se puede subir una cantidad N de carpetas al servidor con nombres personalizados, por ejemplo:  
* personalizada_1  
* personalizada_cliente1  
* personalizadaA  

## Ruta de carpeta
La ruta para subir la carpeta es: `app/CoreFacturalo/Templates/pdf/[nombre_de_carpeta]`.  
Debe subir la imagen referencial para la hoja A4 a: `public/templates/pdf/[nombre_de_carpeta]/image.png`.  
> **Nota:** Debe subir la imagen referencial para el ticket a: `public/templates/pdf/[nombre_de_carpeta]/ticket.png` para que, al actualizar el listado, se muestre su nuevo formato.  

## Estructura de carpeta
Los archivos que debe contener una plantilla que suba deben ser los siguientes, manteniendo los nombres de la siguiente imagen:  
![image](https://gitlab.com/carlomagno83/facturadorpro4/uploads/94fc5dd5f1ca589bfa59372bcebcec5d/image.png)  

## Archivos principales
Los archivos que debe contener una plantilla obligatoriamente son:  
* Carpeta `partials` y contenido.  
* `style.css`.  
> **Nota:** El resto de los archivos, que son dependientes de cada tipo de documento, no son obligatorios, pudiendo tener solamente, por ejemplo, `invoice_a4` o `invoice_a5`, manteniendo los formatos y los datos consultados.