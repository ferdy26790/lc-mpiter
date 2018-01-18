const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mpiter', { useMongoClient: true });
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  tweets: [
    {
    type: Schema.Types.ObjectId,
    ref: 'tweet'
    }
  ]
})

let User = mongoose.model('user', userSchema)

module.exports = User
