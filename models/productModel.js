// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

// const Product = sequelize.define('product', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   price: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//   },
//   description: {
//     type: DataTypes.TEXT,
//     allowNull: true,
//   },
//   quantity: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },

// });
// Product.sync()
//      .then(() => console.log('User table created'))
//      .catch(err => console.error('Error creating user table:', err));

// // Associations
// Product.hasMany(ShoppingCart, { foreignKey: 'productId' });
// module.exports = Product;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

});
Product.sync()
     .then(() => console.log('User table created'))
     .catch(err => console.error('Error creating user table:', err));
module.exports = Product;