
# Empresa - Empresa

En este artículo te enseñaremos los pasos para configurar tu plataforma de facturación, conectarte a SUNAT y empezar a facturar:

Ingresa al módulo de **Configuración** y luego en la subcategoría **Empresa**, selecciona **Empresa**.

![Alt text](img/empresaa1.jpg)

Aparecerá lo siguiente:

![Alt text](img/download.png)

## 1.  Datos de la Empresa

Completa los siguientes campos:

![Alt text](img/datosempresaa2.jpg)

* **Logo:** Puede subir su logo para que se visualice en la plataforma, seleccionando el botón azul.
* **N° Cuenta de detracción:** Inserta su número de cuenta de detracción si lo desea.
* **Rúbrica (Firma digital):** Puede subir su firma digital, seleccionando el botón azul.
Favicon: Puede subir su favicon, es la imagen que aparece en la pestaña de navegación, seleccionando el botón azul.
* **Título (nombre web):**  Permite definir el nombre que aparecerá en la pestaña del navegador al acceder a la plataforma.
* **Logo APP:** Puede subir su logo para que se visualice en su app, seleccionando el botón azul.
  
**Entorno del sistema**

* **Código de observación DIGEMID:**  Ingrese el código proporcionado por DIGEMID para garantizar el cumplimiento normativo en la comercialización de productos farmacéuticos.
* **SOAP TIPO:** Para habilitar tu sistema, deberá cambiarlo de Demo a Producción.
* **SOAP Envio:** Seleccionar el SOAP de envío a Sunat.
* Colocar **SOAP** usuario y contraseña del **usuario secundario** creado previamente(Sigue los pasos en este **[video](https://www.youtube.com/watch?v=PZ028aDpR3A&ab_channel=DigitalBuho)**), tener en cuenta que al colocar el usuario debe agregar el RUC previamente, como la imagen indicada.

![Alt text](img/datosempresaa3.jpg)

:::danger importante

* Al crear un usuario secundario no utilizar palabras que contengan parte de nombre
de la empresa.

  * Ejemplo:
    * Nombre de la Empresa: Constructora Juan.
    * Usuario Secundario: CONSJUAN (Error).
    * **Usuario Secundario: C6NSJU4N (Correcto)**.
* Al generar la contraseña secundario asegúrese de usar contraseñas que
contengan números y letras con mayúsculas, y que no usen palabras de la
empresa. Para generarla puede utilizar herramientas externas como: **[https://www.clavesegura.org/es/](https://www.clavesegura.org/es/)**
:::

## 2.  Certificado

![Alt text](img/reportecertificado.jpg)

* Para completar la conexión con SUNAT es necesario subir el certificado digital. En esta sección adjuntamos el archivo **.pfx** que nos brinda SUNAT.
* Para descargarlos sigue los pasos en este  **[video](https://www.youtube.com/watch?v=N8fse05yda8&ab_channel=DigitalBuho)**.

## 3.  Certificado QZ-Tray

![Alt text](img/Certificado_QZ.PNG)

* Para realizar impresiónes directamente desde aplicaciones web hacia impresoras conectadas localmente.
* Esta funcionalidad elimina la necesidad de cuadros de diálogo y configuraciones adicionales, facilitando la impresión automatizada de tickets, etiquetas y otros documentos.
* Como realizar la configuracion **[Aquí](https://fastura.github.io/documentacion/guias-adicionales/Generar-Certificado-QZ-Tray)**.

## 4.  Firma digital PSE

En caso de migrar a nuestro facturador y usar un proveedor **PSE**, coloca los accesos **aquí**.

![Alt text](img/datosempresaa5.jpg)

## 5.  Consulta integrada de CPE- Validador de documentos

Se requiere configurar el validador de documentos para que ante cualquier eventualidad con SUNAT se puedan regularizar el estado de sus comprobantes. Sigue los pasos en este **[video](https://www.youtube.com/watch?v=6YqtOrIjaDY&t=3s&ab_channel=DigitalBuho)**. Agrega los token como en la imagen mostrada.

![Alt text](img/datosempresaa4.jpg)

## 6. Configuración de pagos

Configuración para generar el link de pago para Yape y Mercado Pago.

**Yape:** Podrá habilitar yape, seleccionando el interruptor, al activar le aparecerán los siguientes campos:

![Alt text](img/datosempresaa66.jpg)

* **Número de teléfono:** Inserta el número de teléfono que tiene registrado en yape.
* **Nombres y Apellidos:** Inserta los nombres y apellidos que están registrados en yape.
* **Adjuntar código QR (Imagen):** Inserta la imagen del código QR que te registra en yape.

Seguido, selecciona el botón **Guardar**.

* **Mercado de Pago:** Podrá habilitar Mercado Pago, seleccionando el interruptor, al activar le aparecerán los siguientes campos:

![Alt text](img/mercadolibre.jpg)

Los tokens se copiaran en su cuenta de mercado pago

Seguido, selecciona el botón **Guardar**.

## 7.  Envío de mensajes WhatsApp Cloud Api

Se necesita hacer una configuración previa para enviar los pdf por whatsapp api sin usar el link de whatsapp

![Alt text](img/datosempresaa22.jpg)

Para activarlo puede seguir la siguiente documentación: **[https://docs.google.com/document/d1BW6EQBPH-JQNwoUEQQaFndRteTpNLLVM7w9YIqhKzdM/edit](https://docs.google.com/document/d/1BW6EQBPH-JQNwoUEQQaFndRteTpNLLVM7w9YIqhKzdM/edit)**

## 8.  Envio de mensajes a través de QR Api

Esta opción permite enviar los comprobantes generados en formato PDF utilizando un servicio de mensajería que integra QR API. Para activar esta funcionalidad, es necesario:

  Habilitar la opción seleccionando "Sí".

* **A continuación, te mostramos los pasos necesarios para activar y configurar correctamente el envío de mensajes a través de QR API:**
    * 1. Inicia sesión en QR API: Ingrese su correo electrónico y su contraseña en la pantalla de inicio de sesión.

    * 2. Dashboard: Una vez dentro, podrás ver todos tus dispositivos registrados y el estado de cada uno.

    * 3. Agregar Dispositivo: Haz clic en "Nuevo" e ingresa el nombre del dispositivo y el número de teléfono móvil que deseas vincular.

    * 4. Escanea el Código QR: Sigue las instrucciones en la pantalla para escanear el código QR con la aplicación de WhatsApp en tu móvil.

    * 5. Ver detalles del dispositivo: Luego de escanear el código QR, tendrás que redirigirte a la página de detalles del dispositivo, donde podrás ver la información del número registrado, su estado, y el API Token necesario para integrarlo, esto se hace dándole clik a tu numero.

    * 6. Utiliza el API Token: Copia el API Token mostrado en la pantalla. Este será necesario para realizar las integraciones de mensajería con tu sistema.

    * 7. Ingresa la URL de la página del servicio, que será proporcionada por QR API al registrarte. La URL es la dirección web específica donde se llevará a cabo la integración.

* **Posterior a los pasos antes mencionados**

  Ingresar la URL del Cliente y el API Key proporcionados por el servicio QR API.

![Alt text](img/datosempresaa33.jpg)

Para más detalles sobre cómo hacer la configuración, puedes consultar el video tutorial para tener mayor información:
**[https://www.youtube.com/live/37rW8jwIEkU?si=g6-5-De-IKufPFwb](https://www.youtube.com/live/37rW8jwIEkU?si=g6-5-De-IKufPFwb)**

:::danger importante

Recuerde que debe registrarse en el servicio antes de usar esta opción para obtener las credenciales necesarias.
:::



