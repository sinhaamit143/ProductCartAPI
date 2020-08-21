//----importing packages
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const router = express();
const fsExtra = require('fs-extra');


//---importing controllers --------
const ProductController = require('../controllers/products');

//----multer code ----
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },

    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

 // Accept Certain type of file validation
const fileFilter = (req, file, cb) => {
   
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } 
    else {
        cb(null, false);
    }
};

// Accept Certain size of file validation
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter:fileFilter
});


//----GET request for all Products
router.get('/', ProductController.product_get_all);

//Routing to CREATE the Product
router.post('/', upload.single('productImage'), ProductController.product_create_product);

//----GET request for individual Product----
router.get('/:productId', ProductController.product_get_product);

//----PATCH request for all Product----
router.patch("/:productId", upload.single('productImage'), ProductController.product_update_product);

//----DELETE request for individual Product----
router.delete('/:productId', ProductController.product_delete_product);

//----DELETEALL products from database----
router.delete("/", ProductController.deleteAll);


//----exporting the module----
module.exports = router;