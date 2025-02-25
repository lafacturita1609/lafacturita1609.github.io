# Montar proyecto en /home  -  Linux | Winscp
 

### Requisitos

- clave ssh (formato .ppk)
- ip
- usuario ssh
- putty
- winscp

### Pasos

1. Conectarse con putty, seguir el manual:

**[https://docs.google.com/document/d/1PmQejvNd_dkXVm8DPUYlQTag0wvES46tMpxX3MPhkNY/edit#](https://docs.google.com/document/d/1PmQejvNd_dkXVm8DPUYlQTag0wvES46tMpxX3MPhkNY/edit#)**


2. Ingresar como super usuario
```bash
sudo su
```

3. El usuario ssh es distinto del usuario root para servidores en google cloud por ejemplo, estará ubicado en una ruta al ingresar como la siguiente

```bash
/home/usuario_ssh/
```

4. El proyecto se instala mayormente en la carpeta root si han ejecutado el script **https://gitlab.com/snippets/1924394/raw** quedando como

```bash
/root/facturadorpro31
```

5. Conociendo las rutas anteriores, cree una carpeta dentro del usuario_ssh

```bash
mkdir facturadorpro3
```

6. Monta la carpeta del facturador dentro de root en la carpeta creada dentro del usuario

```bash
mount --bind --verbose /root/facturadorpro31 /home/usuario_ssh/facturadorpro3/
```

7. En caso de necesitar permisos (acceda con winscp y realice sus pruebas), debera darle a toda la carpeta nueva

```bash
chmod -R 777 /home/usuario_ssh/facturadorpro3
```

8. Acceda con winscp

**[https://docs.google.com/document/d/1Xpri2102N4b5C-dG-FVPXW5ZWjEz5S4iDjpvl7Zwq2E/edit#](https://docs.google.com/document/d/1Xpri2102N4b5C-dG-FVPXW5ZWjEz5S4iDjpvl7Zwq2E/edit#)**


