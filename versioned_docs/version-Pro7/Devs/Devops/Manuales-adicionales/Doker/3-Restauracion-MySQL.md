# Manual de Restauración Mysql


### Pasos para restaurar los datos del contenedor mysql en caso de problemas con Docker.

Condiciones para restablecer de manera correcta la base de datos:

   1. poseer conexión SSH
   2. poseer espacio en disco (de no poseer lo mejor será crear una copia y leerlo desde otro servidor/instancia)
   3. poseer acceso superusuario “sudo su”

### Aviso:

  • Con los siguientes pasos se eliminarán las imágenes, contenedores, volúmenes y demás creados en docker
  • De manera previa se recomienda resguardar toda la información contenida en storage dentro del proyecto

   1. Acceder mediante SSH y conectarse como super usuario

```bash
        sudo su
```


   2. Ubicar la carpeta y nombre de mysql/mariadb dentro de /var/lib/docker/volumes/

```bash
        cd /var/lib/docker/volumes
```

```bash
        ls
```

   3. copiar la carpeta de mysql/mariadb del sistema

```bash
cp -r nombre_mariadb1 /home/
```

**Sintaxis:**

**a. [comando]** 
**b. [recursivo]**
**c. [nombre de carpeta]**
**d. [ruta donde copiará]**


   4. Eliminar todo lo relacionado con docker, este proceso puede tardar un poco

 ```bash
docker system prune -a --volumes
```
   5. al finalizar el proceso ubicarse en la ruta del proyecto, por ejemplo
```bash
cd /home/facturadorpro
```

   6. iniciar el proyecto nuevamente con docker

```bash
docker-compose up -d
```

   7. con esto se crearán de nuevo los contenedores y demás, así que deberá reemplazar una vez finalizado la nueva carpeta mysql por la que se respaldo anteriormente, antes podría crear un backup en caso de tener problemas posteriores.

```bash
cd /var/liv/docker/volumes/
```

```bash
mv nombre_mariadb1 nombre_mariadb1_bk
```

   8. mueva la carpeta respaldada a la ubicación actual

```bash
mv /home/nombre_mariadb1 /var/lib/docker/volumes/
```

   9. nuevamente ubíquese en la carpeta del proyecto, detenga los servicios e inicie de nuevo para que la carpeta reemplazada sea reconocida.

```bash
docker-compose down
```

```bash
docker-compose up -d
```

   10. actualice el navegador eliminando la caché y ya podrá utilizar el sistema con la base de datos que poseía 


