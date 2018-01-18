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
      userTweet: decoded.id
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
}
