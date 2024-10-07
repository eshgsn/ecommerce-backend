const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
//const shoppingCartRoutes = require('./routes/shoppingCartRoutes'); 


const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());
//app.use('/api', shoppingCartRoutes);

app.use('/api', userRoutes);


// Test the database connection and sync the models
sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
    return sequelize.sync();
  })
  .then(() => {
    console.log('Models synced with the database...');
    
    app.listen(3001, () => {
      console.log('Server is running on port 3001');
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });
