# Guía de Migración del Proyecto Facturador

> **Nota**: En esta guía, "facturador" se refiere al nombre del proyecto, usado para nombre de carpeta, base de datos y demás referencias.

## Preparación en Servidor A

### 1. Preparación Inicial
```bash
# Detener el proxy del servidor
docker stop proxy_proxy_1

# Instalar herramientas necesarias
apt-get install zip unzip

# Comprimir el proyecto
zip -r facturador.zip /ruta/del/facturador
```

### 2. Preparación de Base de Datos
```bash
# Obtener el ID del contenedor MySQL
docker ps | grep mysql

# Ingresar al contenedor MySQL
docker exec -ti CONTENEDOR mysql -u root -p

# Listar bases de datos (dentro de MySQL)
show databases;
```

### 3. Extracción de Datos de Clientes
```sql
-- Ejecutar dentro de MySQL
use facturador;
select clients.number, clients.name, hostnames.fqdn, clients.email 
from clients 
join hostnames 
where clients.hostname_id = hostnames.id;
```

### 4. Creación de Backups
```bash
# Crear backup de cada base de datos
docker exec CONTENEDOR /usr/bin/mysqldump -u root --password=ROOT_PASSWORD DATABASE > DATABASE.sql
```

### 5. Transferencia al Servidor B
```bash
# Enviar archivos al servidor destino
scp -r /CARPETA/CON/RESPALDOS USUARIO@IP:/DESTINO/SERVIDOR/B
# Ejemplo:
scp -r /backups/ root@191.162.0.2:/root/backups/
```

## Configuración en Servidor B

### 1. Instalación Inicial
- Instalar el facturador mediante el script de instalación
- Registrar los clientes con los datos extraídos del Servidor A

### 2. Restauración de Archivos
```bash
# Copiar contenido de storage
cd /root/backups/facturador/storage/
cp -r app/certificates /root/FACTURADOR/storage/app/
cd app/public
cp -r /uploads /root/FACTURADOR/storage/app/public/
cd ..
cd tenancy/tenants
cp -r tenancy_* /root/FACTURADOR/storage/app/tenancy/tenants/
```

### 3. Configuración de Permisos
```bash
# Entrar al contenedor PHP
docker exec -ti CONTENEDOR_PHP bash

# Asignar permisos
chmod -R 777 storage
```

### 4. Restauración de Bases de Datos
```bash
# Restaurar cada base de datos
cat DATABASE.sql | docker exec -i CONTENEDOR /usr/bin/mysql -u root --password=ROOT_PASSWORD DATABASE
```

## Notas Importantes
- Asegúrese de tener las contraseñas root de MySQL antes de comenzar
- Mantenga un registro de los datos de los clientes extraídos
- Verifique que todos los archivos se hayan transferido correctamente
- Realice pruebas después de la migración para asegurar el funcionamiento correcto