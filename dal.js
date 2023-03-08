const mongoose = require('mongoose');
const UserModel = require('./model.js');

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const database = mongoose.connection;

database.on('error', (error) => console.log(error));
database.once('open', () => console.log('Connected to database'));

async function create(name, email, password) {
  try {
    const user = new UserModel({ name, email, password, balance: 0 });
    const result = await user.save();
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function findOne(email) {
  try {
    const user = await UserModel.findOne({ email });
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function all() {
  try {
    const users = await UserModel.find({});
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function update(email, amount) {
  try {
    const user = await UserModel.findOne({ email });
    user.balance += parseInt(amount);
    const result = await user.save();
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  create,
  findOne,
  all,
  update,
};
