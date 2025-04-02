# Regenerar documentos

La funcionalidad aplica a Facturas, Boletas y Notas.

## Algunos casos en los que aplica:

- Documento con fecha vencida
- Por error generaron documentos en modo demo, y estos debieron ser generados en modo producción
- Firmaron el xml con un certificado vencido o inválido
- Cliente con un tipo de documento inválido

## Pasos:

1. Modificar el valor de la siguiente variable en el `.env`:
    ```
    RECREATE_DOCUMENT=true
    ```

2. Limpiar cache:
    ```
    php artisan config:clear
    php artisan config:cache
    php artisan cache:clear
    ```

3. Conectarse a su base de datos, ya sea por la terminal o por alguna herramienta como Navicat, Heidi, etc.

4. Ubicar el documento en la tabla `documents`.

5. Modificar los datos de la tabla de acuerdo a su necesidad (las columnas hacen referencia a lo que significa cada dato, están en inglés).

6. Dirigirse al listado de comprobantes y seleccionar el botón **Volver a recrear** ubicado en la columna acciones.

7. Después de ello se habrá regenerado el xml y pdf, consignado los datos modificados, para que pueda informar su documento.

8. Modificar el valor de la siguiente variable en el `.env`:
    ```
    RECREATE_DOCUMENT=false
    ```

9. Limpiar cache:
    ```
    php artisan config:clear
    php artisan config:cache
    php artisan cache:clear
    ```

## Nota:
Informar a su cliente que habilitará dicha funcionalidad y no seleccione por error el botón.
