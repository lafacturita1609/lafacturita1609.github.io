# Migración de Servidor con Docker
---
- [Propósito](#propósito)
- [Requisitos](#requisitos)
- [Servidor A](#servidor-a)
- [Servidor B](#servidor-b)
- [Envío de Data](#envío-de-data)
- [Despliegue](#despliegue)

## Propósito
Migrar todos los datos del facturador de un servidor A a un servidor B.

## Requisitos
- Acceso SSH a ambos servidores.
- Misma versión de sistemas operativos en ambos servidores.
- Si posee un archivo SSH como clave en formato .ppk, convertir a formato .pem.

## Servidor A
* Ingresar al servidor e instalar `zip`: 
  ```bash
  apt-get install zip unzip
  ```
* Crear una carpeta `scp`: 
  ```bash
  mkdir scp
  ```
* Copiar el contenido de las carpetas `proxy` y `certs`: 
  ```bash
  cp -r proxy/ scp/
  cp -r certs/ scp/
  ```
* Verificar el tamaño del directorio del facturador: 
  ```bash
  du -sh facturador/
  ```
  * Si el tamaño es inferior a 5GB, se recomienda usar:
    ```bash
    zip -r facturador.zip facturador/
    ```
  * Si es mayor, usar:
    ```bash
    tar -cvf facturador.tar facturador/
    ```
* Mover el archivo comprimido a `scp`: 
  ```bash
  mv facturador.zip scp/
  ```
* Ir a la carpeta de volúmenes de Docker: 
  ```bash
  cd /var/lib/docker/volumes/
  ```
* Verificar el tamaño del volumen de base de datos: 
  ```bash
  du -sh facturador1_mysqldata_1
  ```
  * Si el tamaño es inferior a 5GB, se recomienda usar:
    ```bash
    zip -r mysql.zip facturador1_mysqldata_1/
    ```
  * Si es mayor, usar:
    ```bash
    tar -cvf mysql.tar facturador1_mysqldata_1/
    ```
* Mover el archivo comprimido a `scp`: 
  ```bash
  mv mysql.zip /ruta/scp/
  ```

> **Advertencia:** Si la instalación es muy antigua (versión PRO3 que ha venido actualizando), verificar la versión de MySQL directamente en el contenedor de MariaDB:
> ```bash
> docker exec -ti CONTENEDOR_MYSQL mysql --version
> ```
> Dicha versión debe asignarse en el archivo `docker-compose.yml` dentro del facturador.

## Servidor B
* Ingresar al servidor e instalar `zip`: 
  ```bash
  apt-get install zip unzip
  ```
* Instalar las dependencias en el servidor:
  ```bash
  apt-get -y update
  apt-get -y install git-core
  apt-get -y install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
  add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
  apt-get -y update
  apt-get -y install docker-ce
  systemctl start docker
  systemctl enable docker
  curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
  chmod +x /usr/local/bin/docker-compose
  apt-get -y install letsencrypt
  docker network create proxynet
  ```

## Envío de Data
### Desde el Servidor A hacia el Servidor B
* Enviar la carpeta `scp` completa hacia el servidor B.
* Si el servidor B usa archivo de clave (.pem) para conectarse, debe cargarlo previamente:
  ```bash
  # Sintaxis
  # scp -r -i [clave] [carpeta_local] [USUARIO]@[IP]:[/ruta/destino]
  # Ejemplo
  scp -r -i clave.pem scp/ root@192.196.138.123:/root/
  ```
* Si el servidor B no usa archivo de clave:
  ```bash
  # Sintaxis
  # scp -r [carpeta_local] [USUARIO]@[IP]:[/ruta/destino]
  # Ejemplo
  scp -r scp/ root@192.196.138.123:/root/
  ```

## Despliegue
* Ingresar a la carpeta `scp` y descomprimir los archivos: 
  ```bash
  cd scp
  ```
* Si son archivos `.zip`, usar: 
  ```bash
  unzip facturador.zip
  unzip mysql.zip
  ```
* Si son archivos `.tar`, usar: 
  ```bash
  tar -xvf facturador.tar
  ```
* Mover las carpetas a la ruta destino (suele ser `/root` o `/home/usuario`): 
  ```bash
  mv proxy /ruta_destino/
  mv facturador /ruta_destino/
  mv certs /ruta_destino/
  ```
* Mover la carpeta de MySQL a la ruta de volúmenes de Docker: 
  ```bash
  mv facturador1_mysqldata_1/ /var/lib/docker/volumes/
  ```
* Ingresar a la carpeta del facturador y levantar los servicios: 
  ```bash
  cd /ruta_destino/facturador/
  docker-compose up -d
  ```
* Ingresar a la carpeta del proxy y levantar los servicios: 
  ```bash
  cd /ruta_destino/proxy/
  docker-compose up -d
  ```

Si todo está correcto, solo quedará cambiar la IP a la que apunta el dominio.