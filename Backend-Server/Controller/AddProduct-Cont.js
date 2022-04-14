
const cartProduct = require('../Model/CartProducts');

const getAllProduct = async (req,res,next) => {
    let product ;
    try {
        product = await cartProduct.find();
    } catch(err){
        console.error(err);
    }
    if(!product){
        return res.status(404).json({message:"Prodcuts Not Found"});
    }
    return res.status(200).json({product});
}

const addcartProduct = async (req, res, next) => {
    const{name, brand, category, price, available, image} = req.body;
    let product;
    try{
        product = new cartProduct({
            name, brand, category, price, available, image
        })
        await product.save();
    } catch(err){
        console.log(err);
    }
    if(!product){
        return res.status(500).json({message:"Prodcut Not Added"});
    }
    return res.status(201).json({product});
}


exports.addcartProduct = addcartProduct;
exports.getAllProduct= getAllProduct;