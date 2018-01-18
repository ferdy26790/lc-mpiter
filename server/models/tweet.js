const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mpiter', { useMongoClient: true });
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  caption: String,
})

let Tweet = mongoose.model('tweet', tweetSchema)

module.exports = Tweet
