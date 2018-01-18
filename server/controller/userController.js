const userModel = require('../models/user')
const tweetModel = require('../models/tweet')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 10;
let getDecode = function (token) {
  let decoded = jwt.verify(token, 'secure');
  return decoded
}

class User{
  static createUser(req, res) {
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
      if(!err) {
        let newUser = new userModel({
          name: req.body.name,
          email: req.body.email,
          password: hash
        })
        newUser.save()
        .then((response) => {
          res.status(200).json({
            newUser: response
          })
        }).catch((err) => {
          console.log(err);
        })
      } else {
        console.log(err);
      }
    })
  }

  static signIn(req, res) {
    userModel.findOne({
      email: req.body.email
    })
    .then((result) => {
      bcrypt.compare(req.body.password, result.password, function(err, response) {
        if(!err) {
          let payloads = jwt.sign({
            data: result
          }, 'secure')
          res.status(200).json({
            token: payloads
          })
        } else {
          res.send('password salah')
        }
      })
    }).catch((err) => {
      console.log(err);
    })
  }

  static getSelfUser(req, res) {
    let decoded = getDecode(req.headers.token)
    userModel.findById(decoded.data._id)
    .then((user) => {

    }).catch((err) => {
      console.log(err);
    })
  }
}

module.exports = User
