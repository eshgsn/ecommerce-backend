// const sequelize = require('../config/database');
// const User = require('./usermodel')(sequelize);
// const Product = require('./productModel')(sequelize);
// const Cart = require('./shoppingCartModel')(sequelize);
// const Order = require('./orderModel')(sequelize);

// // Define relationships
// User.hasMany(Cart, { foreignKey: 'userId' });
// Cart.belongsTo(User, { foreignKey: 'userId' });
// Product.hasMany(Cart, { foreignKey: 'productId' });
// Cart.belongsTo(Product, { foreignKey: 'productId' });
// User.hasMany(Order, { foreignKey: 'userId' });
// Order.belongsTo(User, { foreignKey: 'userId' });

// sequelize.sync({alter:true}).then(() => {
//     console.log("Database & tables created!");
// });

// module.exports = { User,Product,Cart,Order,sequelize };