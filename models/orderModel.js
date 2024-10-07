// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
// const User = require('../models/usermodel'); 

// const Order = sequelize.define('Order', {
//   orderId: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   userId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   products: {
//     type: DataTypes.JSON, 
//   },
//   totalPrice: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   status: {
//     type: DataTypes.ENUM('pending', 'confirmed', 'shipped'), 
//     allowNull: false,
//     defaultValue: 'pending', 
//   },
// });

// Order.sync()
//      .then(() => console.log('User table created'))
//      .catch(err => console.error('Error creating user table:', err));



// module.exports = Order;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('../models/usermodel'); 

const Order = sequelize.define('Order', {
  orderId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  products: {
    type: DataTypes.JSON, 
  },
  totalPrice: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'confirmed', 'shipped'), 
    allowNull: false,
    defaultValue: 'confirmed', 
  },
});

Order.sync()
     .then(() => console.log('User table created'))
     .catch(err => console.error('Error creating user table:', err));



module.exports = Order;