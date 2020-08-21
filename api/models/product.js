//Importing req Packages
const mongoose = require('mongoose');

//Creating Schema structure 
const productSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    productImage : {type : String, required : true},
    name : {type : String, required : true},
    description : {type : String, required : true},
    price : {type : Number, required : true}
    
},
    { timestamps: true }
);

//Exporting the module
module.exports = mongoose.model('Product', productSchema);