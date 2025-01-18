# Logs : Error de Timeout

En esta sección se administran y visualizan los registros de errores y eventos del sistema. El visor de logs permite monitorear el funcionamiento del sistema, identificar errores críticos y solucionarlos rápidamente para asegurar la estabilidad del entorno.

---

## Ejemplos de Logs

### Error de Timeout

```plaintext
The process ""du -sh C:\\laragon\\www\\pro-x\\storage | cut -f1"" exceeded the timeout of 60 seconds {"userId":1,"exception":"[object] (Symfony\\Component\\Process\\Exception\\ProcessTimedOutException(code: 0): The process exceeded the timeout at C:\\laragon\\www\\pro-x\\vendor\\symfony\\process\\Process.php:1154)"}


SQLSTATE[HY000] [2002] No se puede establecer una conexión ya que el equipo de destino denegó expresamente dicha conexión {"exception":"[object] (Illuminate\\Database\\QueryException(code: 2002): SQLSTATE[HY000] [2002] No se puede establecer conexión at C:\\laragon\\www\\pro-x\\vendor\\laravel\\framework\\src\\Illuminate\\Database\\Connection.php:692)"}
