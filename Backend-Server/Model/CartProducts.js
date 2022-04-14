const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:{type:String, required:true},
    category:{type:String, required:true},
    brand:{type:String, required:true},
    price:{type:Number, required:true},
    available:{type:Boolean},
    image:{type:String, required:true},
});

module.exports = mongoose.model("CartProducts", productSchema);