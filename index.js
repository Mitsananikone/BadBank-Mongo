// ./index.js
const dotenv = {
  parsed: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
};
  const dotenvResult = require('dotenv').config();
  if (dotenvResult.error) {
    console.error(dotenvResult.error);
  } else {
    dotenv.parsed = dotenvResult.parsed;
  }

  const express = require('express');
  const bodyParser = require('body-parser');
  const cors = require('cors');
  const dal = require('./dal.js');
  const { MongoClient } = require('mongodb');
  const mongoose = require('mongoose');
  const UserModel = require('./model.js');
  const { JSDOM } = require('jsdom');
  
  
  const app = express();
  
  // Serve static files from the public directory
  app.use(express.static('public', {
    setHeaders: (res, path) => {
      if (path.endsWith('.js')) {
        res.setHeader('Content-Type', 'application/javascript');
      }
    },
  }));
  app.use(cors());
  app.use(bodyParser.json());
  app.use(express.json());
  
  // Mongodb Atlas connect
  const mongoString = process.env.DATABASE_URL;
  mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });
  
  // Create user account
  app.get('/account/create/:name/:email/:password', function (req, res) {
    dal.create(req.params.name, req.params.email, req.params.password).
      then((user) => {
          console.log(user);
          res.send(user);
      })
  });
  
  // Login user
  app.get('/account/login/:email/:password', function (req, res) {
      res.send({
          email:      req.params.email,
          password:   req.params.password 
      });   
  });
  
  // All accounts
  app.get('/account/all', function (req, res) {
    dal.all().
      then((docs) => {
          console.log(docs);
          res.send(docs);
      })
  });
  
  // Update user account balance
  app.post('/account/update/:email/:amount', async (req, res) => {
    try {
      const { email, amount } = req.params;
      const updatedUser = await dal.update(email, amount);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // Set up server
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });