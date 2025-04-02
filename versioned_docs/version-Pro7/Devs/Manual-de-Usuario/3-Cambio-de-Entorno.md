# Cambio de Entorno - FacturaloPeru  


## Introducción  
Los productos de Facturación, así como la Sunat, cuentan con dos tipos de entornos:  
- **Pruebas:** Apunta a servidores “Beta” de la Sunat.  
- **Producción:** Donde se emiten los documentos con validez legal.  

A continuación, se presentan los pasos y requisitos que debe seguir antes de dirigirse al Facturador PRO o API para poder cambiar de Pruebas a Producción.  

---  

## Pasos para Cambiar de Entorno  

1. **Crear un usuario secundario en la Sunat.**  
   Siga los siguientes enlaces para obtener instrucciones:  
   - [Cómo crear un usuario secundario - Video 1](https://youtu.be/PZ028aDpR3A)  
   - [Cómo crear un usuario secundario - Video 2](https://www.youtube.com/watch?v=yEUcHSW95wY)  

2. **Subir el certificado a Sunat** usando su usuario principal.  

3. **Activar la casilla ingresando con el usuario secundario.** 

![alt text](img/usu_secundario.png)

   Para más detalles, consulte este enlace:  
   - [Activar la casilla - Video](https://youtu.be/muOPbtlcDOc)  
   Para convertir su certificado, puede usar:  
   - [Convertidor de Certificado](https://llama.pe/converter_pfx_to_cer)  

4. **Subir el certificado digital** una vez convertido al formato .pfx al sistema junto con los datos del usuario secundario y en el campo **SOAP Tipo** cambiar a **Producción**.  
   **Nota:** El campo **SOAP Usuario** debe contener el RUC y el usuario, por ejemplo: `12345678987ELUSUARIO`.  

   ![alt text](img/certificado_digital.png)

---  

## Notas Importantes  

- Según el aplicativo que adquiera, podrá eliminar todos los registros de prueba y comenzar en producción con una base de datos limpia.  
- Si ha subido el certificado y los datos de usuario, puede mantenerse en periodo de Pruebas; los documentos continuarán enviándose a los servidores Beta de la Sunat.  
- Las numeraciones inician desde 1 al cambiar de Pruebas a Producción.  
- Asegúrese de comprobar el funcionamiento de cada una de las características de su producto antes de pasar a Producción.  
- Para generar una contraseña segura, puede utilizar herramientas externas como: [Clave Segura](https://www.clavesegura.org/es/).  

---  

## Recomendaciones  

- **Al crear un usuario secundario**, no utilice palabras que contengan parte del nombre de la empresa.  
   **Ejemplo:**  
   - Nombre de la Empresa: **Constructora Juan**  
   - Usuario Secundario: **CONSJUAN** (Error).  
   - Usuario Secundario: **C6NSJU4N** (Correcto).  

- **Al generar la contraseña secundaria**, asegúrese de que contenga números y letras con mayúsculas, que no utilice palabras de la empresa, que no sea similar al nombre del usuario secundario y que no supere los 12 caracteres.  
   **Ejemplo:**  
   - Nombre de la Empresa: **Constructora Juan**  
   - Contraseña Usuario Secundario: **juan12345** (Error).  
   - Contraseña Usuario Secundario: **Ju4n12C6** (Correcto).  

---