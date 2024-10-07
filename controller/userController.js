const User = require('../models/usermodel');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');


const jwtSecret = 'jwt_secret_key';

exports.createUser = async (req, res) => {
  const{name,email,password,role} = req.body;
    try{
        
        const hashedPassword = await bcrypt.hash(password,10);

        const newUser= await User.create({name,email,password:hashedPassword,role});

        res.status(201).json(newUser);
        console.log('New User Create:',newUser);
    }catch(error){
        console.log('error in creating new user:',error);
        res.status(500).json({error:'Failed to create new user'});
    }
};




exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ userId: user.id, email: user.email,role:user.role }, jwtSecret, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ error: 'Login failed' });
  }
};


exports.getUsers = async(req,res)=>{
//   try {
//     const role = req.user.role;

//     if (role === 'admin') {
//         const users = await User.findAll({ attributes: ['name', 'email', 'password', 'role'] });
//         res.json(users);
//     } else if (role === 'user') {
//         const users = await User.findAll({ attributes: ['name', 'email', 'role'] });
//         res.json(users);
//     } else {
//         res.status(403).json({ error: 'Access denied' });
//     }
// } catch (error) {
//     res.status(500).json({ error: 'Failed to get users' });
// }

try {
        const users = await User.findAll({
            attributes:{exclude:['password']}
        });
        res.status(200).json(users )
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "error" })

    }

};


exports.logoutUser = (req, res) => {
    try {
      res.status(200).json({ message: 'Logout successful, token cleared' });
    } catch (error) {
      console.error('Error during logout:', error);
      res.status(500).json({ error: 'Logout failed' });
    }
  };
  
  

// module.exports = {
//   createUser,
//   loginUser,
//   getUsers ,
//   logoutUser, 
// };
