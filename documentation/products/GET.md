# Product
## GET a single Product

    GET products/:product_id
    
Returns a single [Product]

## Parameters
None

## Example
### Request

    http://localhost:3000/products/{product_id}

### Response
``` json
{
"product":{
"_id": "5f3fc2b1a9339013a8dc4ac8",
"productImage": "uploads/amit.jpg",
"name": "New",
"description": "this is a new",
"price": 10000
},
"request":{
"type": "GET",
"url": "http://localhost:3000/products"
}
}

```
## GET all Products

    GET /products
    
Returns all [Product]

## Parameters
None

## Example
### Request

    http://localhost:3000/products/

### Response
``` json
{
"count": 2,
"products":[
{
"_id": "5f3fc2b1a9339013a8dc4ac8",
"productImage": "uploads/amit.jpg",
"name": "New",
"description": "this is a new",
"price": 10000,
"request":{"type": "GET", "url": "http://localhost:3000/products/5f3fc2b1a9339013a8dc4ac8"…}
},
{
"_id": "5f3fcbd412b51d02901429db",
"productImage": "uploads/amii.jpg",
"name": "New",
"description": "this is a new",
"price": 10000,
"request":{"type": "GET", "url": "http://localhost:3000/products/5f3fcbd412b51d02901429db"…}
}
]
}

```

[Product]: README.md
