# Generar cotización

Los comprobantes de cotización son documentos esenciales en las transacciones comerciales, proporcionando detalles sobre ofertas de precios a clientes o proveedores. Estas cotizaciones son fundamentales para la toma de decisiones y la gestión eficiente de ventas y adquisiciones en el mundo empresarial.

* **Método:** POST
* **Url:** https://demo.pro5.fastura.app/api/quotations
* **Token:** HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt

```json
{
    "description": "",
    "prefix": "COT",
    "establishment_id": 1,
    "date_of_issue": "2022-02-08",
    "time_of_issue": "11:17:26",
    "customer_id": 4,
    "currency_type_id": "PEN",
    "purchase_order": null,
    "exchange_rate_sale": 4.078,
    "total_prepayment": 0,
    "total_charge": 0,
    "total_discount": 0,
    "total_exportation": 0,
    "total_free": 0,
    "total_taxed": 29.66,
    "total_unaffected": 0,
    "total_exonerated": 0,
    "total_igv": 5.34,
    "total_igv_free": 0,
    "total_base_isc": 0,
    "total_isc": 0,
    "total_base_other_taxes": 0,
    "total_other_taxes": 0,
    "total_taxes": 5.34,
    "total_value": 29.66,
    "total": 35,
    "subtotal": 35,
    "operation_type_id": null,
    "date_of_due": null,
    "delivery_date": null,
    "items": [
        {
            "item_id": 3,
            "item": {
                "id": 3,
                "item_code": null,
                "full_description": "algo - algo - ",
                "model": null,
                "brand": "",
                "stock_by_extra": {
                    "total": -2,
                    "CatItemStatus": {
                        "detailed": [],
                        "total": null
                    },
                    "CatItemUnitBusiness": {
                        "detailed": [],
                        "total": null
                    },
                    "CatItemMoldCavity": {
                        "detailed": [],
                        "total": null
                    },
                    "CatItemPackageMeasurement": {
                        "detailed": [],
                        "total": null
                    },
                    "CatItemUnitsPerPackage": {
                        "detailed": [],
                        "total": null
                    },
                    "CatItemMoldProperty": {
                        "detailed": [],
                        "total": null
                    },
                    "CatItemProductFamily": {
                        "detailed": [],
                        "total": null
                    },
                    "colors": {
                        "detailed": [],
                        "total": null
                    },
                    "CatItemSize": {
                        "detailed": [],
                        "total": null
                    }
                },
                "warehouse_description": "Almacén Oficina Principal",
                "extra": {
                    "colors": null,
                    "CatItemUnitsPerPackage": null,
                    "CatItemMoldProperty": null,
                    "CatItemProductFamily": null,
                    "CatItemMoldCavity": null,
                    "CatItemPackageMeasurement": null,
                    "CatItemStatus": null,
                    "CatItemSize": null,
                    "CatItemUnitBusiness": null
                },
                "category": "",
                "stock": "-9.0000",
                "internal_id": "algo",
                "description": "algo",
                "currency_type_id": "PEN",
                "currency_type_symbol": "S/",
                "sale_unit_price": "35.0000",
                "purchase_unit_price": "0.000000",
                "unit_type_id": "NIU",
                "original_unit_type_id": "NIU",
                "sale_affectation_igv_type": {
                    "id": "10",
                    "active": 1,
                    "exportation": 0,
                    "free": 0,
                    "description": "Gravado - Operación Onerosa"
                },
                "sale_affectation_igv_type_id": "10",
                "purchase_affectation_igv_type_id": "10",
                "calculate_quantity": false,
                "has_igv": true,
                "has_plastic_bag_taxes": false,
                "amount_plastic_bag_taxes": "0.10",
                "colors": [],
                "CatItemUnitsPerPackage": [],
                "CatItemMoldProperty": [],
                "CatItemProductFamily": [],
                "CatItemMoldCavity": [],
                "CatItemPackageMeasurement": [],
                "CatItemStatus": [],
                "CatItemSize": [],
                "CatItemUnitBusiness": [],
                "item_unit_types": [],
                "warehouses": [
                    {
                        "warehouse_description": "Almacén Oficina Principal",
                        "stock": "-9.0000",
                        "warehouse_id": 1,
                        "checked": true
                    }
                ],
                "attributes": [],
                "lots_group": [],
                "lots": [],
                "lots_enabled": false,
                "series_enabled": false,
                "is_set": false,
                "lot_code": null,
                "date_of_due": null,
                "barcode": "000000000003",
                "change_free_affectation_igv": false,
                "original_affectation_igv_type_id": "10",
                "has_isc": false,
                "system_isc_type_id": null,
                "percentage_isc": "0.00",
                "is_for_production": false,
                "name_product_pdf": "",
                "unit_price": "35.0000",
                "extra_attr_name": "Tiempo de entrega",
                "extra_attr_value": "",
                "presentation": {}
            },
            "currency_type_id": "PEN",
            "quantity": 1,
            "unit_value": 29.661016949152543,
            "affectation_igv_type_id": "10",
            "affectation_igv_type": {
                "id": "10",
                "active": 1,
                "exportation": 0,
                "free": 0,
                "description": "Gravado - Operación Onerosa"
            },
            "total_base_igv": 29.66,
            "percentage_igv": 18,
            "total_igv": 5.34,
            "system_isc_type_id": null,
            "total_base_isc": 0,
            "percentage_isc": 0,
            "total_isc": 0,
            "total_base_other_taxes": 0,
            "percentage_other_taxes": 0,
            "total_other_taxes": 0,
            "total_plastic_bag_taxes": 0,
            "total_taxes": 5.34,
            "price_type_id": "01",
            "unit_price": 35,
            "input_unit_price_value": "35.0000",
            "total_value": 29.66,
            "total_discount": 0,
            "total_charge": 0,
            "total": 35,
            "attributes": [],
            "charges": [],
            "discounts": [],
            "warehouse_id": null,
            "name_product_pdf": "",
            "record_id": null,
            "total_value_without_rounding": 29.661016949152543,
            "total_base_igv_without_rounding": 29.661016949152543,
            "total_igv_without_rounding": 5.338983050847458,
            "total_taxes_without_rounding": 5.338983050847458,
            "total_without_rounding": 35
        }
    ],
    "charges": [],
    "discounts": [],
    "attributes": [],
    "guides": [],
    "payment_method_type_id": "10",
    "customer_address_id": null,
    "additional_information": null,
    "shipping_address": null,
    "account_number": null,
    "terms_condition": null,
    "active_terms_condition": false,
    "actions": {
        "format_pdf": "a4"
    },
    "payments": [
        {
            "id": null,
            "document_id": null,
            "date_of_payment": "2022-02-08",
            "payment_method_type_id": "01",
            "reference": null,
            "payment_destination_id": "cash",
            "payment": 35
        }
    ],
    "sale_opportunity_id": null,
    "contact": null,
    "phone": null
}
```

## 2. JSON RESPUESTA

```json
{
    "success": true,
    "data": {
        "number_full": "COT-19",
        "external_id": "ebf8804a-65cf-4e4b-965f-e1fe2b851dd8",
        "filename": "COT-19-20230921",
        "print_a4": "https://demo.pro5.fastura.app/quotations/print/ebf8804a-65cf-4e4b-965f-e1fe2b851dd8/a4",
        "print_ticket": "https://demo.pro5.fastura.app/quotations/print/ebf8804a-65cf-4e4b-965f-e1fe2b851dd8/ticket"
    }
}
```

## LISTA DE COTIZACIONES

* **Método:** GET
* **Url:** https://demo.pro5.fastura.app/api/quotations/list
* **Token:** HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt

## 1. JSON RESPUESTA
```json
{
    "data": [
        {
            "id": 20,
            "items": [],
            "order_note": {},
            "payment_method_type_id": "10",
            "soap_type_id": "01",
            "external_id": "6012ffb7-a212-4a8b-8839-0e95374a9155",
            "number_full": "COT-20",
            "date_of_issue": "2023-09-21",
            "delivery_date": null,
            "identifier": "COT-20",
            "user_name": "Administrador",
            "seller_name": "Administrador",
            "customer_id": 21,
            "customer_name": "ALVAREZ MORENO JHEYSON ALBER",
            "customer_number": "10750058197",
            "customer_telephone": null,
            "customer_email": null,
            "exchange_rate_sale": "3.718",
            "currency_type_id": "PEN",
            "total_exportation": "0.00",
            "total_free": "0.00",
            "total_unaffected": "0.00",
            "total_exonerated": "0.00",
            "total_taxed": "132.73",
            "total_igv": "13.27",
            "total": "146.00",
            "state_type_id": "01",
            "state_type_description": "Registrado",
            "documents": [],
            "sale_notes": [],
            "sale_opportunity_number_full": null,
            "contract_number_full": null,
            "sale_opportunity": null,
            "btn_generate": true,
            "btn_generate_cnt": true,
            "btn_options": true,
            "external_id_contract": null,
            "referential_information": null,
            "created_at": "2023-09-21 22:04:43",
            "updated_at": "2023-09-21 22:04:43",
            "print_ticket": "https://demo.pro5.fastura.app/quotations/print/6012ffb7-a212-4a8b-8839-0e95374a9155/ticket",
            "filename": "COT-20-20230921"
        },
        {
            "id": 19,
            "items": [],
            "order_note": {},
            "payment_method_type_id": "10",
            "soap_type_id": "01",
            "external_id": "ebf8804a-65cf-4e4b-965f-e1fe2b851dd8",
            "number_full": "COT-19",
            "date_of_issue": "2022-02-08",
            "delivery_date": null,
            "identifier": "COT-19",
            "user_name": "Administrador",
            "seller_name": "Administrador",
            "customer_id": 4,
            "customer_name": "PEREZ ALIAGA RICHARD JHONATHAN",
            "customer_number": "10706762286",
            "customer_telephone": null,
            "customer_email": null,
            "exchange_rate_sale": "4.078",
            "currency_type_id": "PEN",
            "total_exportation": "0.00",
            "total_free": "0.00",
            "total_unaffected": "0.00",
            "total_exonerated": "0.00",
            "total_taxed": "29.66",
            "total_igv": "5.34",
            "total": "35.00",
            "state_type_id": "01",
            "state_type_description": "Registrado",
            "documents": [],
            "sale_notes": [],
            "sale_opportunity_number_full": null,
            "contract_number_full": null,
            "sale_opportunity": null,
            "btn_generate": true,
            "btn_generate_cnt": true,
            "btn_options": true,
            "external_id_contract": null,
            "referential_information": null,
            "created_at": "2023-09-21 19:12:37",
            "updated_at": "2023-09-21 19:12:37",
            "print_ticket": "https://demo.pro5.fastura.app/quotations/print/ebf8804a-65cf-4e4b-965f-e1fe2b851dd8/ticket",
            "filename": "COT-19-20230921"
        }
    ]
}
```