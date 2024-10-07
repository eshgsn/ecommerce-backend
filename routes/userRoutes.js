const express = require('express');

const router = express.Router();
const { createUser,loginUser, getUsers,logoutUser} = require('../controller/userController');
const {verifytoken} = require('../middleware/verifytoken');

const {placeOrder,getAllOrders,getOrder} = require('../controller/ordermanagementContoller');
const {createProduct,getAllProducts,getProductById,updateProduct,deleteProduct,} = require('../controller/productmanagementController');
const {addToCart,getCart,updateCart,removeFromCart} = require('../controller/shoppingCartController');


// user routes
router.post('/users', createUser);
router.post('/users/login', loginUser);
router.get('/getUsers',verifytoken ,getUsers);
router.post('/logout', verifytoken, logoutUser);


// product routes
router.post('/createProduct',verifytoken, createProduct);
router.get('/getAllProducts', getAllProducts);
router.get('/getProductById/:id', getProductById);
router.put('/updateProduct/:id', verifytoken, updateProduct);
router.delete('/deleteProduct/:id', verifytoken, deleteProduct);

//shoppingCart Routes...........
router.post('/addToCart',verifytoken, addToCart);
router.get('/getCart/:userId', getCart);
router.put('/updateCart/:productId',verifytoken, updateCart);
router.delete('/removeFromCart/:productId',verifytoken, removeFromCart);



//order Routes............
router.use((req, res, next) => {
  req.user = { id: 1 }; 
  next();
});

router.post('/placeOrder', placeOrder);
router.get('/getOrder/:id',getOrder);
router.get('/getAllOrders', verifytoken,getAllOrders);

module.exports = router;

