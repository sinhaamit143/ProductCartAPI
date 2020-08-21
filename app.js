//importing packages for api
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

//importing routeModels
const productRoutes = require('./api/routes/products');

//mongodb connected using mongoose package
mongoose.connect(
    `mongodb+srv://admin:admin@amit.nqwfx.mongodb.net/<dbname>?retryWrites=true&w=majority`,
    {
        useNewUrlParser : true,
        useUnifiedTopology : true
    }
);

//--------------------------------------------middleware code  for packages like morgan,bodyparser--------------------------------------------------------
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//-----------------------------------Handling CORS--------------------------
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', '*');
    return res.status(200).json({});
    }
    next();
});

//response of routes or forwader------------------------------
app.use('/products', productRoutes);

//error handling or error message-------------------------------
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;