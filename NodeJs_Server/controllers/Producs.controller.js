const Product = require("../models/Product.module");

module.exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, category, image } = req.body;
    const product = await Product.create({
      name,
      description,
      price,
      category,
      image,
    });
    return res.status(201).json(product);
  } catch (error) {
    return res.status(500).json({ error: "Failed to create a product." });
  }
};

module.exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ error: "Failed to retrieve products." });
  }
};

module.exports.getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found." });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: "Failed to retrieve the product." });
  }
};

// Update a product by ID
module.exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, description, price, category, image } = req.body;
    const updatedProduct = await Product.update(
      { name, description, price, category, image },
      { where: { id: productId } }
    );
    if (updatedProduct[0] === 0) {
      return res.status(404).json({ error: "Product not found." });
    }
    return res.status(200).json({ message: "Product updated successfully." });
  } catch (error) {
    return res.status(500).json({ error: "Failed to update the product." });
  }
};

// Delete a product by ID
module.exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedRows = await Product.destroy({ where: { id: productId } });
    if (deletedRows === 0) {
      return res.status(404).json({ error: "Product not found." });
    }
    return res.status(200).json({ message: "Product deleted successfully." });
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete the product." });
  }
};
