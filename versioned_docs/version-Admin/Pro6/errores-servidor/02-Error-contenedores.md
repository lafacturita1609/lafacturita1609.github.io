# Errores de los contenedores

## Error en el Proxy

Este error se prseenta cuando ejecutamos **docker restart proxy_proxy_1** y el proxy quede en un estado de **REINICIANDO**, la solución rápida es ingresar dentor de la carpeta proxy (con ```cd /proxy```) y bajar el contenedor para luego volverlo a levantarlo.

1. Una vez ingresado a la carpeta, coloque los siguientes comandos en orden sucesivo: 

  ```bash
  docker-compose down
  docker-compose up -d
  ```

## Bajar por completo un sistema

Se debe ingresar directamente a tu carpeta que descargaste y ejecutar estos comando sucesivamente.

```bash
cd /proyecto
docker-compose down
```

Este comando lo que hará será detener por completo los contenedores que estan dentro
del sistema.


## Levantar por completo un sistema 

Se ingresa directamente a la carpeta del sistema:

```bash
cd /proyecto
docker-compose up -d 
```