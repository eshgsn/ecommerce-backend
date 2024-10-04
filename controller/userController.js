const User = require('../models/usermodel');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');

const jwtSecret = 'jwt_secret_key';

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);  

    // // Create a new user
    // const newUser = await User.create({ name, email, password });

    const newUser = await User.create({ name, email, password: hashedPassword });

   // Send the new user data as a response
   res.status(201).json(newUser);
   console.log('New User Created:', newUser);
 } catch (error) {
   console.error('Error creating user:', error);
   res.status(500).json({ error: 'Failed to create user' });
 }
};


const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the given password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Generate a JWT token on successful login
    const token = jwt.sign({ userId: user.id, email: user.email }, jwtSecret, { expiresIn: '1h' });

    // Send the token to the client
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ error: 'Login failed' });
  }
};


const getUsers = async(req,res)=>{
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] },  
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }

};

module.exports = {
  createUser,
  loginUser,
  getUsers ,
};
