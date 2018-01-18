const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')
const images = require('../middleware/image')
/* GET users listing. */
router.get('/', userController.getSelfUser)
router.put('/', images.multer.single('image'), images.sendUploadToGCS, userController.editUser )

module.exports = router;
