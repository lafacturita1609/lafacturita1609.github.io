# Validador de Documentos

Se realiza una consulta de estado de los comprobantes registrados en el facturador con Sunat, de esta forma validar el estado del comprobante en la entidad. Aplica a Facturas, Boletas y Notas.

## Instalación de Tesseract OCR

### En Linux

1. Conectarse al servidor vía SSH, puede usar la guía.
2. Ejecutar `docker ps` y verificar que estén al menos las siguientes líneas que equivalen a los contenedores de cada servicio iniciado por Docker.

    ```plaintext
    CONTAINER ID        IMAGE                      COMMAND                     CREATED             STATUS              PORTS                                      NAMES
    92f43f53f8e4        stenfrank/php:1.0          "php-fpm7.2"                18 hours ago        Up 18 hours         9000/tcp                                   multifacturalo_fpm2_1
    914a35c72512        redis:alpine               "docker-entrypoint.s…"      18 hours ago        Up 18 hours         0.0.0.0:6381->6379/tcp                     multifacturalo_redis2_1
    de282cbbbc15        mariadb                    "docker-entrypoint.s…"      18 hours ago        Up 18 hours         0.0.0.0:3307->3306/tcp                     multifacturalo_mariadb2_1
    eb049c8dba9c        stenfrank/nginx:1.0        "nginx"                     18 hours ago        Up 18 hours         80/tcp                                     multifacturalo_nginx2_1
    ```

3. En la lista deberá fijarse en los `NAMES` que contengan `fpm`.

    `multifacturalo_fpm2_1` equivale al nombre del proyecto donde una vez accedido se encontrará justo en la ruta donde se ha alojado el repositorio y podrá ejecutar comandos `artisan`, `git` o `composer`. Este nombre puede variar un poco, puede llamarse `multifacturalonew_fpm1_1`, `facturadorpro3_fpm1_1`, etc.

4. Una vez ubicado el contenedor a acceder, ejecute el siguiente comando:

    ```bash
    docker exec -ti multifacturalo_fpm1_1 /bin/bash
    ```

    De esta manera se conectará al contenedor, observará un cambio en el inicio de la terminal.

5. Si ha accedido a `fpm` entonces se debe encontrar en la ruta `/var/www/html/` donde podrá ejecutar comandos.

6. Ejecute los siguientes comandos para instalar las bibliotecas necesarias para `tesseract-ocr`:

    ```bash
    apt-get update
    apt install libtesseract-dev libleptonica-dev liblept5
    ```

7. Instale `tesseract`:

    ```bash
    apt install tesseract-ocr -y
    ```

    Si toda la instalación fue satisfactoria, continúe al siguiente punto.

### En Windows

Para la instalación en Windows, siga las instrucciones en el siguiente enlace:

[Instalación de Tesseract en Windows](https://github.com/UB-Mannheim/tesseract/wiki)

En caso de no instalar en disco C, cambiar en la línea 158 la ruta en el archivo `app/CoreFacturalo/Services/Extras/ValidateCpe2.php`.

## Validar Documentos

Estos comandos deben ejecutarse dentro del contenedor PHP. Puede usar los puntos anteriores para acceder si es que se encuentra fuera del contenedor mencionado.

### Comando

Este comando recibe 2 parámetros opcionales, el establecimiento y estado del documento `establishment_id` y `state_type_id`.

- Sin parámetros: 

    ```bash
    php artisan tenancy:run validate:documents
    ```

- Con parámetros:

    ```bash
    php artisan tenancy:run validate:documents --argument=establishment_id=1 --argument=state_type_id=05
    ```

Al ejecutar el comando, visualizará el estado de los documentos en Sunat.

### Interfaz del Facturador

También puede usar la interfaz del facturador.
