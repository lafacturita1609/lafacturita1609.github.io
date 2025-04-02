# Manual de Configuración APIPERU.DEV

## Docker | LAMP

### Requisitos previos

- Tener acceso a su servidor, VPS, máquina virtual o local vía SSH. En las instalaciones que realizamos para AWS o Google Cloud, hacemos entrega del usuario, la IP del servidor y la clave SSH que puede ser un archivo `.ppk` o `.pem`.
- Tener instalada una versión de SSH en su máquina para conectarse de manera remota. Puede utilizar PuTTY, FileZilla o una consola terminal.
- Tener los accesos y credenciales de los entornos creados con Docker, usuario MySQL, root, entre otros, que también son entregados una vez realizada la instalación. Aunque una vez dentro de la instancia puede encontrarlos en los archivos `.env` y `docker-compose.yml`.

### Obtener token

1. Ingrese a la página [apiperu.dev](https://apiperu.dev).
2. Regístrese pulsando el botón superior derecho y complete los datos del formulario.
3. Confirme en el correo que le llegará de APIPERU.
4. Una vez confirmado, ingrese desde el login y copie su token.

### Actualizar con Docker

1. Acceder de manera remota a su servidor.
2. Acceder como superusuario:
    ```bash
    sudo su
    ```
3. Ubicar la ruta raíz del proyecto (mayormente está en `/home/[usuario]/[nombre_del_proyecto]/`).
4. Acceder a la carpeta raíz:
    ```bash
    cd /home/usuario/proyecto/
    ```
5. Editar el archivo `.env`:
    ```bash
    nano .env
    ```
6. Se abrirá un editor, debe moverse hasta el parámetro `API_SERVICE_TOKEN` y asignarle el token obtenido en apiperu.dev.
7. Guardar el archivo.
8. Listar los contenedores de Docker:
    ```bash
    docker ps
    ```
9. Se listará una tabla similar a la siguiente:
    ```
    CONTAINER ID        IMAGE                      COMMAND                     CREATED             STATUS              PORTS                                      NAMES
    92f43f53f8e4        stenfrank/php:1.0          "php-fpm7.2"                18 hours ago        Up 18 hours         9000/tcp                                   multifacturalo_fpm2_1
    914a35c72512        redis:alpine               "docker-entrypoint.s…"      18 hours ago        Up 18 hours         0.0.0.0:6381->6379/tcp                     multifacturalo_redis2_1
    de282cbbbc15        mariadb                    "docker-entrypoint.s…"      18 hours ago        Up 18 hours         0.0.0.0:3307->3306/tcp                     multifacturalo_mariadb2_1
    eb049c8dba9c        stenfrank/nginx:1.0        "nginx"                     18 hours ago        Up 18 hours         80/tcp                                      multifacturalo_nginx2_1
    ```
10. Ubique y copie los primeros 3 caracteres del `CONTAINER ID` que en `COMMAND` menciona `php-fpm`, en el ejemplo sería `92f`.
11. Acceda al contenedor:
     ```bash
     docker exec -ti 92f bash
     ```
12. Una vez ingresado, actualice el proyecto con el siguiente comando:
     ```bash
     php artisan config:cache
     ```
13. Se mostrarán dos líneas en texto color verde, si es así ya tendrá actualizada la herramienta.
14. Salga de las consolas con `exit`.
15. Ingrese al navegador eliminando la caché y consulte documentos RUC y DNI.

### Actualizar con LAMP

1. Acceder de manera remota a su servidor.
2. Acceder como superusuario:
    ```bash
    sudo su
    ```
3. Ubicar la ruta raíz del proyecto (mayormente está en `/var/www/html/[nombre_del_proyecto]/`).
4. Acceder a la carpeta raíz:
    ```bash
    cd /var/www/html/proyecto/
    ```
5. Editar el archivo `.env`:
    ```bash
    nano .env
    ```
6. Se abrirá un editor, debe moverse hasta el parámetro `API_SERVICE_TOKEN` y asignarle el token obtenido en apiperu.dev.
7. Guardar el archivo.
8. Actualice el proyecto con el siguiente comando:
    ```bash
    php artisan config:cache
    ```
9. Se mostrarán dos líneas en texto color verde, si es así ya tendrá actualizada la herramienta.
10. Salga de las consolas con `exit`.
11. Ingrese al navegador eliminando la caché y consulte documentos RUC y DNI.

