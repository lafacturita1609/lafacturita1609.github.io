# Productos

## REGISTRAR PRODUCTOS

Para registrar productos debe enviar hacia:

* **Url:** https://demo.pro5.fastura.app/api/item
* **Token:** HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt

### Ejemplo:

### 1. JSON A ENVIAR

```json
{
    "id": null,
    "item_type_id": "01",
    "internal_id": "rrr",
    "item_code": null,
    "item_code_gs1": null,
    "description": "apk",
    "name": "apk",
    "second_name": null,
    "unit_type_id": "NIU",
    "currency_type_id": "PEN",
    "sale_unit_price": "500",
    "purchase_unit_price": 0,
    "has_isc": false,
    "system_isc_type_id": null,
    "percentage_isc": 0,
    "suggested_price": 0,
    "sale_affectation_igv_type_id": "10",
    "purchase_affectation_igv_type_id": "10",
    "calculate_quantity": false,
    "stock": 0,
    "stock_min": 0,
    "has_igv": true,
    "has_perception": false,
    "item_unit_types": [],
    "percentage_of_profit": 0,
    "percentage_perception": 0,
    "image": null,
    "image_url": null,
    "temp_path": null,
    "is_set": false,
    "account_id": null,
    "category_id": null,
    "brand_id": null,
    "date_of_due": null,
    "lot_code": null,
    "lots_enabled": false,
    "lots": []
}
```

### 2. JSON RESPUESTA

```json
{
    "success": true,
    "msg": "Producto registrado con éxito",
    "data": {
        "id": 2,
        "item_id": 2,
        "name": "la descripción",
        "full_description": "123456 - el nombre",
        "description": "el nombre",
        "currency_type_id": "PEN",
        "internal_id": "123456",
        "item_code": null,
        "currency_type_symbol": "S/",
        "sale_unit_price": "5.00",
        "purchase_unit_price": 0,
        "unit_type_id": "NIU",
        "sale_affectation_igv_type_id": "10",
        "purchase_affectation_igv_type_id": "10",
        "calculate_quantity": false,
        "has_igv": true,
        "is_set": false,
        "aux_quantity": 1
    }
}
```

## LISTAR PRODUCTOS

Para listar productos debe enviar por **método get**:

* **Url:** https://demo.pro5.fastura.app/api/document/search-items
* **Token:** HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt

### 1. JSON RESPUESTA

```json
{
    "success": true,
    "data": {
        "items": [
            {
                "id": 3908,
                "item_id": 3908,
                "name": null,
                "full_description": "1006 - CHEESE TRIS X 16 Grs",
                "description": "CHEESE TRIS X 16 Grs",
                "currency_type_id": "PEN",
                "internal_id": "1006",
                "item_code": null,
                "currency_type_symbol": "S/",
                "sale_unit_price": "0.42",
                "purchase_unit_price": "0.000000",
                "unit_type_id": "NIU",
                "sale_affectation_igv_type_id": "10",
                "purchase_affectation_igv_type_id": "10",
                "calculate_quantity": false,
                "has_igv": true,
                "is_set": false,
                "aux_quantity": 1,
                "brand": "",
                "category": "",
                "stock": -12,
                "image": "https://demo.fastura.app/logo/imagen-no-disponible.jpg",
                "warehouses": [
                    {
                        "warehouse_description": "Almacén Oficina Principal",
                        "stock": "7995.0000",
                        "warehouse_id": 1
                    },
                    {
                        "warehouse_description": "Almacén - Oficina Arequipa",
                        "stock": "-12.0000",
                        "warehouse_id": 4
                    }
                ]
            },
            {
                "id": 3912,
                "item_id": 3912,
                "name": null,
                "full_description": "2003 - DORITOS X 40 Grs",
                "description": "DORITOS X 40 Grs",
                "currency_type_id": "PEN",
                "internal_id": "2003",
                "item_code": null,
                "currency_type_symbol": "S/",
                "sale_unit_price": "1.00",
                "purchase_unit_price": "0.000000",
                "unit_type_id": "NIU",
                "sale_affectation_igv_type_id": "10",
                "purchase_affectation_igv_type_id": "10",
                "calculate_quantity": false,
                "has_igv": true,
                "is_set": false,
                "aux_quantity": 1,
                "brand": "",
                "category": "",
                "stock": -6,
                "image": "https://demo.fastura.app/logo/imagen-no-disponible.jpg",
                "warehouses": [
                    {
                        "warehouse_description": "Almacén Oficina Principal",
                        "stock": "3060.0000",
                        "warehouse_id": 1
                    },
                    {
                        "warehouse_description": "Almacén - Oficina Arequipa",
                        "stock": "-6.0000",
                        "warehouse_id": 4
                    }
                ]
            }
        ]
    }
}
```

## BUSCAR PRODUCTOS

Para buscar productos debe enviar por método get:

* **Url:** https://demo.pro5.fastura.app/api/document/search-items?input=cod_interno_o_descripcion
* **Token:** HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt


### 1. JSON RESPUESTA

```json
{
    "success": true,
    "data": {
        "items": [
            {
                "id": 3946,
                "item_id": 3946,
                "name": "apk",
                "full_description": "rrr - apk",
                "description": "apk",
                "currency_type_id": "PEN",
                "internal_id": "rrr",
                "item_code": null,
                "currency_type_symbol": "S/",
                "sale_unit_price": "500.00",
                "purchase_unit_price": "0.000000",
                "unit_type_id": "NIU",
                "sale_affectation_igv_type_id": "10",
                "purchase_affectation_igv_type_id": "10",
                "calculate_quantity": false,
                "has_igv": true,
                "is_set": false,
                "aux_quantity": 1,
                "brand": "",
                "category": "",
                "stock": 0,
                "image": "https://demo.fastura.app/logo/imagen-no-disponible.jpg",
                "warehouses": [
                    {
                        "warehouse_description": "Almacén - Oficina Arequipa",
                        "stock": "0.0000",
                        "warehouse_id": 4
                    }
                ]
        }
        ]
    }
}
```

## EDITAR PRODUCTOS

Para editar productos debe enviar a:

- **Url**: https://demo.pro5.fastura.app/api/items/[id_del_producto]/update

### 1. JSON A ENVIAR

```json
{
    "id": 3946,
    "item_type_id": "01",
    "internal_id": "rrr",
    "item_code": "new_code",
    "item_code_gs1": null,
    "description": "apk",
    "name": "apk",
    "second_name": null,
    "unit_type_id": "NIU",
    "currency_type_id": "PEN",
    "sale_unit_price": "500",
    "purchase_unit_price": 0,
    "has_isc": false,
    "system_isc_type_id": null,
    "percentage_isc": 0,
    "suggested_price": 0,
    "sale_affectation_igv_type_id": "10",
    "purchase_affectation_igv_type_id": "10",
    "calculate_quantity": false,
    "stock": 0,
    "stock_min": 0,
    "has_igv": true,
    "has_perception": false,
    "item_unit_types": [],
    "percentage_of_profit": 0,
    "percentage_perception": 0,
    "image": null,
    "image_url": null,
    "temp_path": null,
    "is_set": false,
    "account_id": null,
    "category_id": null,
    "brand_id": null,
    "date_of_due": null,
    "lot_code": null,
    "lots_enabled": false,
    "lots": []
}
```

### 2. JSON RESPUESTA

```json
{
    "success": true,
    "msg": "Producto editado con éxito",
    "data": {
        "id": 3946,
        "item_id": 3946,
        "name": "apk",
        "full_description": "rrr - apk",
        "description": "apk",
        "currency_type_id": "PEN",
        "internal_id": "rrr",
        "item_code": "new_code",
        "currency_type_symbol": "S/",
        "sale_unit_price": "500.00",
        "purchase_unit_price": "0.000000",
        "unit_type_id": "NIU",
        "sale_affectation_igv_type_id": "10",
        "purchase_affectation_igv_type_id": "10",
        "calculate_quantity": false,
        "has_igv": true,
        "is_set": false,
        "aux_quantity": 1
    }
}
```
