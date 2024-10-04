const Sequelize = require('sequelize');

const sequelize = new Sequelize('E_commerce','root','smart@2099',{
    host:'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;