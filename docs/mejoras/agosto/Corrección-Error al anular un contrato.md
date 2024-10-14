# Corrección: Proceso de Anulación de Contratos  

## **Descripción de la Corrección**  

Se corrigió el proceso de anulación de contratos para evitar errores anteriores:  

1. **Error en la actualización del estado:** El cambio a **"Anulado"** no se procesaba correctamente.  
2. **Lógica incompleta:** Falta de validación para verificar si un contrato podía ser anulado.  

### **Mejoras Realizadas**  
- **Validación del flujo de estado:** Solo los contratos en estado **"Registrado"** pueden ser anulados.  
- **Actualización en la base de datos:** El estado **"Anulado"** se refleja inmediatamente.  

---  

## **Pasos para Anular un Contrato Correctamente**  

### **Paso 1:** Seleccionar el Contrato  
1. Ve a **Contratos** → **Listado** y elige el contrato a anular.  

![image](img/Correccion_anular_contrato_1.jpg)  

### **Paso 2:** Iniciar la Anulación  
1. Haz clic en el botón **Anular** en la columna **Acciones**.  

![image](img/Correccion_anular_contrato_4.jpg)  

### **Paso 3:** Confirmar la Anulación  
1. Aparecerá un cuadro de diálogo de confirmación.  
2. Haz clic en **Anular** para continuar.  

![image](img/Correccion_anular_contrato_2.jpg)  

### **Paso 4:** Verificar el Estado  
1. El estado del contrato cambiará a **"Anulado"**.  
2. Verifica que la actualización se haya realizado correctamente.  

![image](img/Correccion_anular_contrato_3.jpg)  

---  

## **Resultado Esperado**  
- El contrato mostrará el estado **"Anulado"**.  
- El botón **Anular** no estará disponible para contratos anulados.  

Estas mejoras aseguran un proceso de anulación correcto y sin errores.