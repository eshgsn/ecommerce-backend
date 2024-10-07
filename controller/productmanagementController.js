const Product = require('../models/productModel');

// to check if the user is an admin
exports.isAdmin =(user)=>{
    return user && user.role==='admin';
}

// Create a new product
exports.createProduct = async (req, res) => {
    if(!exports.isAdmin(req.user)){
        return res.status(401).json({message:"only admin creates product"})
    }
  try {
    const product = await Product.create(req.body);
    return res.status(201).json(product);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Get a specific product
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not exist' });
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Update a product
exports.updateProduct = async (req, res) => {
    if(!exports.isAdmin(req.user)){
        return res.json({message:"access denied"})
    }
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not exist' });
    
    await product.update(req.body);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
    if(!isAdmin(req.user)){
        return res.json({message:"access denied"})
    }
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not exist' });

    await product.destroy();
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// module.exports = {
//   isAdmin,
//   createProduct,
//   getAllProducts,
//   getProductById,
//   updateProduct,
//   deleteProduct,
// };