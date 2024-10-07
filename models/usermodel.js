// const {DataTypes, Model}= require('sequelize');
// const sequelize = require('../config/database');
// const ShoppingCart = require('../models/shoppingCartModel'); 
 

// const User = sequelize.define('User',{
//     name:{
//         type:DataTypes.STRING,
//         allowNull:false,
//     },
//     email:{
//         type:DataTypes.STRING,
//         allowNull:false,
//         unique:true,
//     },
//     password:{
//         type:DataTypes.STRING,
//         allowNull:false,
//     },
//     role:{
//         type:DataTypes.STRING,
//         allowNull:false
//     }

// },{
//     tableName:'usercredentials',
//     timestamp:false,
// });

// // join association 
// User.hasMany(ShoppingCart, { foreignKey: 'userId' });

// module.exports = User;

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const usercredentials = sequelize.define('usercredential', {
    
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, 
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
   
});

usercredentials.sync()
    .then(() => console.log('User table created'))
    .catch(err => console.error('Error creating user table:', err));

module.exports = usercredentials;