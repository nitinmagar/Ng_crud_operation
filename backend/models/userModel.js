const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: String,
  firstName: String,
  lastName: String,
  email: String,
  address: String
});

const user = mongoose.model('user', userSchema, 'tbl_users');

module.exports = user;
