# Configuración servidor alterno SUNAT

### La funcionalidad aplica a Facturas, Boletas y Notas.

Algunos casos en los que aplica, debido a los siguientes errores que presenta sunat:
    • El usuario no tiene el perfil para enviar comprobantes electrónicos
    • El comprobante se genera de forma común y normal, sin embargo es rechazado sin motivo alguno
    • Resumen de boletas, el procesamiento del comprobante aún no ha terminado
    • El certificado no se encuentra vigente
    • El comprobante fue informado previamente en una comunicación de baja

Pasos:

1. Actualizar su proyecto, use la guia ubicada en el readme del repositorio
2. Elimine caché del navegador CTRL + F5
3. Diríjase al módulo Configuración, sección Avanzado
4. Active la configuración Envío de comprobantes a servidor alterno de SUNAT = SI


![alt text](img/servidor_alterno_sunat.png)
