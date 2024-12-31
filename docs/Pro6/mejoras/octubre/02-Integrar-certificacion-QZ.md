# Incorporación de Certificados para Qz Tray

## Descripción
Se ha implementado una nueva funcionalidad en el sistema que permite gestionar los **certificados de Qz Tray**. Esto incluye la carga, visualización y eliminación de los archivos requeridos (Certificado Digital y Clave Privada) para la integración con Qz Tray, un software utilizado para impresiones directas en impresoras conectadas.

## Beneficios
* **Automatización de procesos:** Facilita la configuración de impresoras con certificados necesarios para Qz Tray.
* **Mayor flexibilidad:** Permite cargar y gestionar certificados personalizados por empresa.
* **Seguridad mejorada:** Incluye soporte para claves privadas y certificados digitales.

## Cómo funciona

### 1. Carga de Archivos
* Se habilitó la funcionalidad para subir dos tipos de certificados:
  * **Certificado Digital**
  * **Clave Privada**
* Los archivos se almacenan de forma segura en el servidor.

### 2. Visualización
* En el sistema, se puede consultar si hay certificados cargados y cuáles son sus nombres.

### 3. Eliminación
* Es posible eliminar los certificados si ya no son necesarios, lo que permite una gestión más limpia y segura.

### 4. Integración en la Interfaz de Usuario
* Se agregó un componente visual que facilita la interacción para la carga y eliminación de certificados desde el panel de administración.