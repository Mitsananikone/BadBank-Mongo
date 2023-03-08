// ./index.js

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const mime = require('mime-types');
const express = require('express');
const app = express();
const cors = require('cors');
const dal = require('./public/dal.js');

if (typeof window === 'undefined') {
  global.window = {};
}

// Serve static files from the public directory
app.use(express.static('public'));
app.use(cors());

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

app.get('/dal.js', (req, res) => {
  res.setHeader('Content-Type', mime.contentType('js'));
  res.sendFile(__dirname + '/dal.js');
});

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

var port = 3000;
app.listen(port);
console.log('Running on port: ' + port);