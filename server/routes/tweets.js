var express = require('express');
var router = express.Router();
const tweetController = require('../controller/tweetController')
/* GET users listing. */
router.post('/', tweetController.addTweet)
router.delete('/:id', tweetController.deleteTweet)

module.exports = router;
