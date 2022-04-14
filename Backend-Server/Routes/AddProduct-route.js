const express = require('express');
const bouter = express.Router();

const addproductController = require('../Controller/AddProduct-Cont.js')

bouter.get("/", addproductController.getAllProduct);
bouter.post("/", addproductController.addcartProduct);



module.exports = bouter; 