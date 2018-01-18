const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mpiter');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  photo: String
})

let User = mongoose.model('user', userSchema)

module.exports = User
