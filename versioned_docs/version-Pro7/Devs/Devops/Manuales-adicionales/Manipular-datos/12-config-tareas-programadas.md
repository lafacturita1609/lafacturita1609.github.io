# Configuracion tareas programadass

## LAMP | Linux


#### Activar Crontab en Linux

1. Ingresar como usuario root al sistema.
2. Instalar cron:

```sh
    apt-get -y install cron
 ```
3. Activar cron:

```sh
    systemctl enable cron
```
4. Copie la ruta de su facturador, suele ser `/var/www/html/facturadorpro3/`.

5. Editar el archivo de configuración de cron ejecutando el siguiente comando:
```sh
    crontab -e
```

6. Agregue la siguiente línea en el editor y reemplace la ruta por la de su facturador:

```sh
    * * * * * php /var/www/html/facturadorpro3/artisan schedule:run >> /dev/null 2>&1
```
7. Guarde y salga del editor con `ctrl+x` y posteriormente con `Y`.
8. Reinicie el servicio de http, si es apache use:

```sh
    service apache2 restart
```
9. Acceda a la ruta de su facturador y ejecute:

```sh
    php artisan optimize:clear
```
