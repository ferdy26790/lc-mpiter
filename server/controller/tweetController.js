const tweetModel = require('../models/tweet')
const jwt = require('jsonwebtoken')
let getDecode = function (token) {
  let decoded = jwt.verify(token, 'secure');
  console.log(decoded);
  return decoded
}

class Tweet{
  static addTweet(req, res) {
    let decoded = getDecode(req.headers.token)
    let newTweet = new tweetModel({
      caption: req.body.caption,
      userTweet: decoded.data._id
    })
    newTweet.save()
    .then((response) => {
      res.status(200).json({
        newTweet: response
      })
    }).catch((err) => {
      console.log(err);
    })
  }

  static deleteTweet(req, res) {
    let decoded = getDecode(req.headers.token)
    tweetModel.findById(req.params.id)
    .then((tweet) => {
      if(tweet.userTweet == decoded.data._id) {
        console.log('masuk if');
        tweetModel.findByIdAndRemove(req.params.id)
        .then((result) => {
          res.status(200).json({
            msg: "tweet deleted",
            tweetDeleted: result
          })
        }).catch((err) => {
          console.log(err);
        })
      } else {
        console.log('masuk else');
      }
    }).catch((err) => {
      console.log(err);
    })
  }
}

module.exports = Tweet
