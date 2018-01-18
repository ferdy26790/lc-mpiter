const tweetModel = require('../models/tweet')
const userModel = require('../models/user')
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
    })
    newTweet.save()
    .then((response) => {
      userModel.findById(decoded.data._id)
      .then((user) => {
        console.log('masuuuukk');
        user.tweets.push(response._id)
        user.save()
        .then((result) => {
          res.status(200).json({
            user: result,
            newtweet: response
          })
        }).catch((err) => {
          console.log(err);
        })
      }).catch((err) => {
        console.log(err);
      })
    }).catch((err) => {
      console.log(err);
    })
  }

  static deleteTweet(req, res) {
    let decoded = getDecode(req.headers.token)
    tweetModel.findById(req.params.id)
    .then((tweet) => {
      userModel.findById(decoded.data._id)
      .then((user) => {
        user.tweets.forEach((userTweet, idx) => {
          if(userTweet == tweet._id) {
            user.tweets.splice(idx, 1)
            user.save()
            .then((userUpdate) => {
              tweetModel.findByIdAndRemove(req.params.id)
              .then((tweetDeleted) => {
                res.status(200).json({
                  user: userUpdate,
                  tweet: tweetDeleted
                })
              }).catch((err) => {
                console.log(err);
              })
            }).catch((err) => {
              console.log(err);
            })
          } else {
            res.status(404)
          }
        })
      }).catch((err) => {
        console.log(err);
      })
    }).catch((err) => {
      console.log(err);
    })
  }

}

module.exports = Tweet
