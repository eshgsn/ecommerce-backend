const  Cart  = require('../models/shoppingCartModel');
const User = require('../models/usermodel');

exports.addToCart = async (req, res) => {
    try {
      const { quantity, productId } = req.body; 
      console.log( quantity, productId );
      const userId = req.user.id; 
      console.log(userId);
  
      const addCart = await Cart.create({
        userId,
        quantity,
        productId,
      });
  
      res.status(201).json(addCart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to add cart', details: error.message });
    }
  };
  

exports.getCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const cartItems = await Cart.findAll({ where: { userId } });
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCart = async (req, res) => {
  try {
    const { productId } = req.params;
    const { quantity } = req.body;
    const cartItem = await Cart.findOne({ where: { productId } });

    if (!cartItem) {
      return res.status(404).json({ error: 'Item not in cart' });
    }

    cartItem.quantity = quantity;
    await cartItem.save();
    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;
    const result = await Cart.destroy({ where: { productId } });

    if (result === 0) {
      return res.status(404).json({ error: 'Item not in cart' });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};