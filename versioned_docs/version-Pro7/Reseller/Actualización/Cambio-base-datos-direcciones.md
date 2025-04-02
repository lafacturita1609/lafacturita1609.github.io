# Cambios en la base de datos referentes a direcciones

Hubo actualizaciones en guías de remision, por ese motivo, para ver todas sus direcciones de sus clientes, va a tener que seguir los siguientes pasos.

## Windows 

Se tiene que ingresar a la terminal integrada de Laragon y seguir el siguiente comando

 ```php
 php artisan tenancy:db:seed
 ```

## Linux

Para linux, se tiene que hacer dos pasos:

1. Entrar al contenedor fpm con el comando:
 ```bash 
 docker exec -ti [contenedor_fpm] bash
 ```

2. Cuando ya este dentro, tiene que colocar el siguiente comando:
 ```php
 php artisan tenancy:db:seed
 ```