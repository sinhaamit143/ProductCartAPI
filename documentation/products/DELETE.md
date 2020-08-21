# Product
## DELETE a single Product

    DELETE products/:product_id
    
Delete a single [Product]

## Parameters
None

## Example
### Request

    http://localhost:3000/products/{product_id}

### Response
``` json
{
"message": "Product deleted",
"request":{
"type": "GET",
"url": "http://localhost:3000/products/",
"body":{
"name": "String",
"address": "String"
}
}
}

```
## DELETE all Products

    DELETE /products
    
Delete all [Product]

## Parameters
None

## Example
### Request

    http://localhost:3000/products/

### Response
``` json
{
"message": "15 Products were deleted successfully!",
"request":{
"type": "POST",
"url": "http://localhost:3000/products/",
"body":{
"name": "String",
"address": "String"
}
}
}

```

[Product]: README.md
