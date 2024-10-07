// // models/shoppingCartModel.js
// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
// const Product = require('./productModel');
// const User = require('./usermodel');

// const ShoppingCart = sequelize.define('ShoppingCart', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//     },
//     quantity: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//     },
//     totalPrice: {
//         type: DataTypes.FLOAT,
//         allowNull: false,
//     }
// }, {
//     tableName: 'shopping_cart',
//     timestamps: false,
// });

// // Associations
// ShoppingCart.belongsTo(Product, { foreignKey: 'productId' });
// ShoppingCart.belongsTo(User, { foreignKey: 'userId' });

// module.exports = ShoppingCart;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('../models/productModel');

const ShoppingCart = sequelize.define('Cart', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
});
ShoppingCart.sync()
     .then(() => console.log('User table created'))
     .catch(err => console.error('Error creating user table:', err));
module.exports = ShoppingCart;