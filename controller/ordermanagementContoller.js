
const Order = require('../models/orderModel');
const User = require('../models/usermodel');

exports.placeOrder = async (req, res) => {
  try {
    const { products, totalPrice } = req.body; 
    const userId = req.user.id; 

    const newOrder = await Order.create({
      userId,
      products,
      totalPrice,
    });

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: 'Failed to place order' });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Failed to GETorder' });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'only admin can getAllOrders' });
    }
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to GET orders' });
  }
};