# Completar pedido

En este artículo, aprenderás cómo completar pedidos de manera eficiente, ya sea de forma individual o en lotes. Te guiaremos a través de los pasos necesarios para cambiar el estado de los pedidos y realizar envíos a través de la API, garantizando una gestión eficaz de tu proceso de venta. Sigue estos pasos para realizarlo:

## Flujo individual

Ingresa a la categoría **Pedidos**, se observara el pedido en el panel de administración, se observara el estado del pedido.

![Alt text](img/plugin26.jpg)

Selecciona el pedido para cambiar el estado:

Seleccionando el estado de **En proceso** a **Completado**, seguido selecciona el botón **Actualizar**.

![Alt text](img/plugin27.jpg)

Al cambiar el estado a **Completado**, se generará un json y será enviado a la API, obteniendo y guardando la información de respuesta:

![Alt text](img/plugin28.jpg)

Podrá comprobar el documento en su Facturador o API.

![Alt text](img/plugin29.jpg)

## Flujo Masivo

Si tiene varias ventas sin enviar, puede seleccionarlas en las casillas de selección y seguido cambiar el estado a completado y selecciona el botón **Aplicar**.

![Alt text](img/plugin31.jpg)

Luego de cambiar el estado a aceptado, usa la opción masiva de envío al **API** y selecciona el botón **Aceptar**.

![Alt text](img/plugin32.jpg)

Si el envío es correcto se mostrarán automaticámente los datos del **API**.

![Alt text](img/plugin33.jpg)
