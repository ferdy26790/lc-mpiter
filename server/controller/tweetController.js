const tweetModel = require('../models/tweet')
const userModel = require('../models/user')
const jwt = require('jsonwebtoken')
let getDecode = function (token) {
  let decoded = jwt.verify(token, 'secure');
  return decoded
}

class Tweet{
  static addTweet(req, res) {
    let decoded = getDecode(req.headers.token)
    let newTweet = new tweetModel({
      caption: req.body.caption,
      creator: decoded.data._id
    })
    newTweet.save()
    .then((response) => {
      res.status(200).json({
        data: response
      })
    }).catch((err) => {
      console.log(err);
    })
  }

  static deleteTweet(req, res) {
    let decoded = getDecode(req.headers.token)
    tweetModel.findByIdAndRemove(req.params.id)
    .then((deletedTweet) => {
      res.status(200).json({
        data: deletedTweet
      })
    }).catch((err) => {
      console.log(err);
    })
  }
  static getAllTweet(req, res) {
    tweetModel.find()
    .then((tweets) => {
      res.status(200).json({
        tweets: tweets
      })
    }).catch((err) => {
      console.log(err);
    })
  }
  static getSelfTweet(req, res) {
    let decoded = getDecode(req.headers.token)
    tweetModel.find({
      creator: decoded.data._id
    })
    .then((myTweets) => {
      res.status(200).json({
        data: myTweets
      })
    }).catch((err) => {
      console.error(err);
    })
  }
}

module.exports = Tweet
