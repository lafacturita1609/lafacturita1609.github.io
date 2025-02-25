### Restaurar Archivos del Cliente:

Copia las carpetas descargadas en la carpeta correspondiente del cliente.

```bash

cp [path_del_zip]/signed storage/app/tenancy/tenants/tenancy_[subdominio del cliente]
cp [path_del_zip]/unsigned storage/app/tenancy/tenants/tenancy_[subdominio del cliente]
cp [path_del_zip]/cdr storage/app/tenancy/tenants/tenancy_[subdominio del cliente]
cp [path_del_zip]/pdf storage/app/tenancy/tenants/tenancy_[subdominio del cliente]


Nota: Repite este proceso para todas las carpetas que estén dentro del archivo .zip.