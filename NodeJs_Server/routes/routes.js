const express = require("express");
const router = express.Router();
const productController = require("../controllers/Producs.controller");

router.post("/create_product", productController.createProduct);

router.get("/get_all", productController.getAllProducts);

router.get("/get_one/:id", productController.getProductById);

router.put("/update/:id", productController.updateProduct);

router.delete("/delete/:id", productController.deleteProduct);

module.exports = router;
