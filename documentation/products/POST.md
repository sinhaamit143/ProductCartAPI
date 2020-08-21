# Product
## Create a single Product

    POST /products
    
Create a [Product]

## Body Parameters
#### Content Type : multipart/form-data
#### Form Data :
productImage : File,<br>
name : string,<br>
decription : string,<br>
price : number


## Example
### Request

    http://localhost:3000/products/

### Response
``` json
{
"message": "Product Successfully Created",
"product":{
"_id": "5f3fcda312b51d02901429dc",
"productImage": "uploads/amii.jpg",
"name": "New",
"description": "this is a new",
"price": 10000,
"createdAt": "2020-08-21T13:35:31.174Z",
"updatedAt": "2020-08-21T13:35:31.174Z",
"__v": 0
}
}
```

```

[Product]: README.md
