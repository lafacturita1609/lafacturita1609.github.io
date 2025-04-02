# Incrementar Recursos - Servidor

## Incrementar recursos AWS

1. Acceder a la consola de AWS, con su usuario y contraseña.
2. Dirigirse al listado de instancias - Instances.

![alt text](img/recursos_servidor_1.png)

3. Ubique la instancia a aumentar recursos.
4. Detenga la instancia para que pueda realizar la modificación.
    - Instance State -> Stop

![alt text](img/recursos_servidor_2.png)

5. Cambie el tipo de instancia.
    - Instance Settings -> Change Instance Type

![alt text](img/recursos_servidor_3.png)

6. Visualizará la siguiente ventana donde deberá elegir un tipo de instancia, cada tipo cuenta con diferentes recursos hardware.
    - [Tipos de instancia AWS](https://aws.amazon.com/es/ec2/instance-types/)

![alt text](img/recursos_servidor_4.png)

7. Si el cambio fue exitoso, debe iniciar la instancia.
    - Instance State -> Start

![alt text](img/recursos_servidor_5.png)

## Incrementar recursos GOOGLE CLOUD

1. Acceder a la consola de Google Cloud, con su usuario y contraseña.
2. Dirigirse al listado de instancias - Compute Engine - Instancias de VM.

![alt text](img/recursos_servidor_6.png)

3. Ubique la instancia a aumentar recursos.
4. Detenga la instancia para que pueda realizar la modificación.
    - Detener

![alt text](img/recursos_servidor_7.png)

5. Seleccione la instancia - clic en “facturadorpro3”.
6. Clic en editar.

![alt text](img/recursos_servidor_8.png)

7. Modifique los recursos de acuerdo a su necesidad, el costo aumentará a medida que los incremente.

![alt text](img/recursos_servidor_9.png)

8. Guarde los cambios.

![alt text](img/recursos_servidor_10.png)

9. Si el cambio fue exitoso, debe iniciar la instancia.
    - Iniciar

![alt text](img/recursos_servidor_11.png)

## Referencias

- [AWS: Cambiar tipo de instancia](https://docs.aws.amazon.com/es_es/AWSEC2/latest/UserGuide/ec2-instance-resize.html)
- [Google Cloud: Cambiar tipo de máquina](https://cloud.google.com/compute/docs/instances/changing-machine-type-of-stopped-instance)

## Recomendaciones

- Realizar backup de su base de datos y archivos.
