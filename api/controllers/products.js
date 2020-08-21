//----importing mongoose package----
const mongoose = require('mongoose');
const fs = require('fs');





//----importing models file -----
const Product = require('../models/product');


//----GET request for all products----
exports.product_get_all = (req, res, next) => {
    Product
        .find()
        .select("_id productImage name description price")
        .exec()
        .then(doc => {
            const response = {
                count: doc.length,
                products: doc.map(newres => {
                    return {
                        _id: newres._id,
                        productImage: newres.productImage,
                        name: newres.name,
                        description: newres.description,
                        price: newres.price,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:3000/products/' + newres._id
                        }
                    }
                })
            };
            res.status(200).json(response);
        })

        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

//----POST request to CREATE the product----
exports.product_create_product = (req, res, next) => {

    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        productImage: 'uploads/' + req.file.originalname,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });

    product
        .save()
        .then(result => {
            res.status(200).json({
                message: "Product Successfully Created",
                product: product
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });


};

//----GET request for individual product----
exports.product_get_product = (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
        .select('_id productImage name description price')
        .exec()
        .then(doc => {
            console.log("From database", doc);
            if (doc) {
                res.status(200).json({
                    product: doc,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/products'
                    }
                });
            } else {
                res.status(404).json({ message: 'No valid entry found for provided Id' });
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: err });
        });
};

//----PATCH request for all product----
exports.product_update_product = (req, res, next) => {
    const id = req.params.productId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    };
    Product.update({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: 'Product updated',
                request: {
                    type: 'GET',
                    url: 'http://localhost:3000/products/' + id
                }
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            });
        });
};

//----DELETE request for one Product----
exports.product_delete_product = (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
        .select('productImage')
        .exec()
        .then(result => {
            console.log(result.productImage);
            fs.unlinkSync(result.productImage);
            Product.deleteOne({ _id: id })
            .exec()
            .then(result => {
                res.status(200).json({
                    message: 'Product deleted',
                    request: {
                        type: "GET",
                        url: 'http://localhost:3000/products/',
                        body: { name: 'String', address: 'String' }
                    }
                });
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({
                    error: err
                });
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: err });
        });
       
            
};

// Delete all Products from the database.
exports.deleteAll = (req, res) => {
    Product.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Products were deleted successfully!`,
          request: {
            type: "POST",
            url: 'http://localhost:3000/products/',
            body: { name: 'String', address: 'String' }
        }
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Products."
        });
      });
  };
