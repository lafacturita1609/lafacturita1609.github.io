# Eliminar Archivos Temporales en Linux

### Eliminar archivos temporales

#### Para borrar los archivos temporales que se crearon hace más de 10 días:
```bash
sudo find /tmp -ctime +10 -exec rm -rf {} +
sudo find /var/tmp -ctime +10 -exec rm -rf {} +
```

#### Para borrar los archivos temporales que hace más de 2 días que no han sido accedidos:
```bash
sudo find /tmp -atime +2 -exec rm -rf {} +
sudo find /var/tmp -atime +2 -exec rm -rf {} +
```

#### Para borrar los archivos temporales que hace más de 1440 minutos que no han sido modificados:
```bash
sudo find /tmp -mmin +1440 -exec rm -rf {} +
sudo find /var/tmp -mmin +1440 -exec rm -rf {} +
```
