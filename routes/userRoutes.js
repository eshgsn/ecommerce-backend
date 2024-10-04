const express = require('express');
const { createUser,loginUser, getUsers,} = require('../controller/userController');
const verifytoken = require('../middleware/verifytoken');


const router = express.Router();

router.post('/users', createUser);

router.post('/users/login', loginUser);

router.get('/getUsers',verifytoken ,getUsers);


module.exports = router;
