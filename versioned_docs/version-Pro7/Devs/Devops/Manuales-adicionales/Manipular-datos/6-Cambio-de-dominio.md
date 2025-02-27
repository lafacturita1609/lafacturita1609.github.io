# Cambio de Dominio

Pasos para cambiar el dominio en una instalación activa con Docker:

1. Conectarse mediante SSH y acceder como superusuario:
    ```sh
    sudo su
    ```

2. Acceder a la carpeta del facturador:
    ```sh
    cd /ruta/facturador
    ```

3. Editar el archivo `.env`:
    ```sh
    nano .env
    ```
    Dentro del archivo, modificar el parámetro `APP_URL_BASE` y asignar el nuevo nombre de dominio, por ejemplo:
    ```env
    APP_URL_BASE=facturaloperu.com
    ```
    Guardar y salir del archivo (Ctrl+X seguido de Enter).

4. Editar el archivo `docker-compose.yml`:
    ```sh
    nano docker-compose.yml
    ```
    Dentro del archivo, editar el parámetro `VIRTUAL_HOST` y asignar el nuevo nombre de dominio, por ejemplo:
    ```yaml
    VIRTUAL_HOST: facturaloperu.com, *.facturaloperu.com
    ```
    Guardar y salir del archivo (Ctrl+X seguido de Enter).

5. Detener los servicios de Docker para el proyecto:
    ```sh
    docker-compose down
    ```

6. Reiniciar el servicio del proxy:
    ```sh
    docker restart proxy_proxy_1
    ```

7. Iniciar los servicios de Docker para el proyecto:
    ```sh
    docker-compose up -d
    ```

8. Listar los servicios de Docker y ubicar el contenedor `fpm`:
    ```sh
    docker ps
    ```

9. Ingresar al contenedor `fpm`:
    ```sh
    docker exec -ti [contenedor_fpm] bash
    ```

10. Eliminar la caché del sistema para que tome el nuevo dominio:
    ```sh
    php artisan config:cache
    ```

11. Si existen clientes registrados, ubicar la base de datos de administrador y editar en la tabla `hostnames`, campo `fqdn` cambiando los dominios allí registrados.

12. Si es una instalación con SSL, debe seguir el manual de actualizar SSL:
    [Manual de actualizar SSL](https://docs.google.com/document/d/1kcgtIDrOWnGKQbWO3sW2KEkUoNdadIB5YHBgaSb87uA/edit)

13. Salir y eliminar la caché del navegador.
s