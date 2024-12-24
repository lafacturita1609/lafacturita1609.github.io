# Compras - Nuevo

Esta sección permite registrar una nueva compra en el sistema, donde se especifican detalles del producto o servicio adquirido, el proveedor y otros datos de facturación y almacenamiento.

## Acceso al Módulo
Ingresa al módulo de **Compras** y selecciona la subcategoría **Nuevo** para registrar una nueva compra.

![Formulario Nueva Compra](img/nueva_compra.png)

## 1. Nueva Compra

### Formulario de Registro de Compra

![Formulario Nueva Compra](img/nueva_compra.jpg)

1. **Fecha de registro y Período**: Seleccione la fecha de registro de la compra y el período contable correspondiente.
2. **Tipo Comprobante**: Seleccione el tipo de comprobante (e.g., Factura Electrónica).
3. **Serie y Número**: Ingrese la serie y el número del comprobante.
4. **Fecha de Emisión y Fecha de Vencimiento**: Indique la fecha de emisión y la fecha de vencimiento de la compra.
5. **Proveedor**: Seleccione el proveedor desde la lista o añada uno nuevo.
6. **Moneda y Tipo de Cambio**: Seleccione la moneda de la compra y, si aplica, ingrese el tipo de cambio.
7. **Orden de compra**: Introduzca el número de la orden de compra, si corresponde.
8. **Indicador de afectación**: Seleccione el número de documento que indica cómo afecta la compra.
9. **Observaciones**: Agregue notas adicionales sobre la compra, si es necesario.
10. **Agregar cliente**: Active esta opción si desea asignar la compra a un cliente.

### Agregar Productos a la Compra

* **Agregar Productos**: Utilice esta sección para añadir los productos a la compra, incluyendo detalles como el almacén, lote, serie, unidad, cantidad, valor unitario, precio unitario, descuento, cargo y total.

![Agregar Productos a la Compra](img/productos_compra.jpg)

1. **Código**: Código del producto.
2. **Descripción**: Nombre del producto o servicio.
3. **Almacén**: Especifique el almacén de destino.
4. **Lote**: Indique el número de lote, si aplica.
5. **Serie**: Introduzca la serie del producto, si corresponde.
6. **Unidad**: Seleccione la unidad de medida.
7. **Cantidad**: Introduzca la cantidad del producto.
8. **Valor Unitario**: Ingrese el valor unitario del producto.
9. **Precio Unitario**: Ingrese el precio unitario.
10. **Descuento**: Introduzca cualquier descuento aplicado.
11. **Cargo**: Agregue cargos adicionales, si aplica.
12. **Total**: El sistema calcula automáticamente el total.

### Acciones Disponibles

1. **Cancelar**: Cancela el registro de la compra.
2. **Generar**: Guarda y finaliza el registro de la compra en el sistema.

## 2. Agregar Producto o Servicio

![Agregar Producto o Servicio](img/agregar_producto_servicio.png)

1. **Producto/Servicio**: Seleccione o ingrese el nombre del producto o servicio a añadir.
2. **Buscar con escáner de código de barras**: Active esta opción para buscar el producto mediante un lector de códigos de barras.
3. **Datos Generales**: Configure opciones como el precio de venta, fecha de vencimiento, cantidad, precio unitario, almacén de destino y nombre del producto en el PDF.
4. **Lista de Precios y Precios por Almacén**: Estas pestañas permiten configurar listas de precios y precios específicos para cada almacén.
5. **Campos adicionales**: Opcionalmente, puede incluir atributos específicos según el estándar UBL 2.1.

## 3. Confirmación de Compra Registrada

![Compra Registrada](img/compra_registrada.jpg)

Una vez registrada la compra, se mostrará un mensaje de confirmación con opciones adicionales:

1. **Imprimir A4**: Permite imprimir un comprobante en formato A4.
2. **Ir al listado**: Redirige al listado de todas las compras registradas.
3. **Nueva compra**: Permite registrar otra compra.

## 4. Agregar Nuevo Producto

### Formulario de Registro de Producto

![Nuevo Producto](img/nuevo_producto.jpg)

1. **Datos Generales**: Complete campos como nombre, descripción, modelo, unidad, precio unitario y tipo de afectación.
2. **Configuraciones Adicionales**: Configure atributos como percepción, manejo de lotes y series, impuestos específicos, y si el producto puede canjearse por puntos.

:::danger importante
Para más detalles sobre cómo generar una guía de remisión, consulta el artículo: [Crear nuevo producto](https://fastura.github.io/documentacion/Pro-X/Productos-Servicios/Lista%20de%20Productos).
:::


---

