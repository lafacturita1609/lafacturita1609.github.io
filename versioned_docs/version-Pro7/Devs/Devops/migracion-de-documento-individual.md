# Migración de Documento Individual
---
- [Propósito](#propósito)
- [Herramientas](#herramientas)
- [Proceso](#proceso)
- [Tablas de Interés](#tablas-de-interés)
- [Scripts Utilizados](#scripts-utilizados)
- [Resultado](#resultado)

<a name="propósito"></a>  
## Propósito  
Crear un registro que pertenece a una versión anterior del facturador en la versión actual para gestionar otros procesos como notas de crédito/débito.  

<a name="herramientas"></a>  
## Herramientas  
Se utilizó Navicat para las pruebas.  
> **Nota:** Más adelante se indican las consultas utilizadas de manera que puedan ser usadas en otros gestores de bases de datos.  

<a name="proceso"></a>  
## Proceso  
* Los datos se enviaron desde un facturador PRO2 a un facturador PRO4.
* Ambos facturadores cuentan con los mismos datos de empresa cliente.
* Conectarse a la base de datos del cliente de ambos facturadores.
* En el PRO2, ubicar la tabla y el registro, seleccionar toda la línea y en el menú superior (3 barras) se copia a modo de inserción.
  
  ![image](https://gitlab.com/carlomagno83/facturadorpro4/uploads/7a21e76852f975c507309596104b3c67/image.png)  

* En el PRO4, en la pestaña de consultas, se crea una nueva.
  
  ![image](https://gitlab.com/carlomagno83/facturadorpro4/uploads/c9abbad826dbabcfb56de1f1751e7b5a/image.png)  

* En el editor se pega lo obtenido del PRO2 y se alteran los datos que correspondan.
  
  ![image](https://gitlab.com/carlomagno83/facturadorpro4/uploads/813769a66dab105d0751f99b96029b92/image.png)  

* Para correr el script, se pulsa el botón "Run" y se verifica en la tabla destino si el dato está correcto.  

<a name="tablas-de-interés"></a>  
## Tablas de Interés  
### Tabla `documents`  
* Ambas bases de datos deben contener los mismos usuarios; de no tenerlos, asignar el ID del usuario.  
* Eliminar el campo `ID`, ya que es autoincrementable y no se debe duplicar.  
* El `customer_id` debe coincidir con el ID de la tabla `persons`.  
* Al insertar, no se valida si el número de documento es único, por lo que puede ocasionar duplicidad.  

### Tabla `invoice`  
* Se debe importar el documento junto con `invoice` de tener relación, asignando el ID de `documents` en el `document_id` correspondiente.  
* Eliminar el campo `ID`.  

### Tabla `document_items`  
* Previamente debería haberse llenado `items`.  
* Eliminar el campo `ID`.  
* Si hay `items` ya registrados, entonces el campo `item_id` debe cambiarse al que tomó el `item` importado.  
* Campo `is_set`: agregar al campo `item(json)`: `, "is_set": 0,`  
* PDF obtenido de una migración de PRO2.  

## Clientes  
### Tabla `persons`  
* Eliminar el campo `ID`.  
* El ID obtenido es el que debe usarse en `customer_id`.  

## Productos  
### Tabla `items`  
* Agregar campos `name` y `second_name`.  
* Eliminar el campo `ID`.  

### Tabla `item_unit_types` (lista de precios)  
* Coincidir `item_id` con la tabla `items`.  
* Eliminar el campo `ID`.  

<a name="scripts-utilizados"></a>  
## Scripts Utilizados  
- [document_items.txt](https://gitlab.com/carlomagno83/facturadorpro4/uploads/1e472a356248907822f8263597a24785/document_items.txt)  
- [documents.txt](https://gitlab.com/carlomagno83/facturadorpro4/uploads/7c23b2ca6c7c9dc7994a40f15dd6e6e3/documents.txt)  
- [invoices.txt](https://gitlab.com/carlomagno83/facturadorpro4/uploads/54f19ca76a8b8c5a6065abb50ca7378e/invoices.txt)  
- [item_unit_types.txt](https://gitlab.com/carlomagno83/facturadorpro4/uploads/69cd34ee84985e2fd430bfd4a0df1d16/item_unit_types.txt)  
- [items.txt](https://gitlab.com/carlomagno83/facturadorpro4/uploads/4d5d6e1f67da8146e5cfa37e3de602b6/items.txt)  
- [persons.txt](https://gitlab.com/carlomagno83/facturadorpro4/uploads/8e7c38d054f588a333391bcdcb9a48d9/persons.txt)  

<a name="resultado"></a>  
## Resultado  
![image](https://gitlab.com/carlomagno83/facturadorpro4/-/wikis/uploads/032cf46e21785080f48c097318e67a24/image.png)  
![image](https://gitlab.com/carlomagno83/facturadorpro4/-/wikis/uploads/484e9718d0ae1e66f2fb922d4579965d/image.png)  