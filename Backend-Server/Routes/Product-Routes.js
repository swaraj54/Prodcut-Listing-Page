const express = require('express');
const router = express.Router();
const productsController = require('../Controller/Prodcuts-Controller')


router.get("/", productsController.getAllProduct);
router.post("/", productsController.addProduct);
router.get("/:id", productsController.getById)
router.patch("/:id", productsController.addValue)

module.exports = router; 