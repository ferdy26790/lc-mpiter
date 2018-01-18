const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mpiter');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  caption: String,
  userTweet: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
})

let Tweet = mongoose.model('tweet', tweetSchema)

module.exports = Tweet
