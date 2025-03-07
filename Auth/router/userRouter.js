const express = require('express');
const { register, login } = require('../controller/userController');
const verfyToken = require('../middleware/tokenVerfy');
const { upload, uploadProfile } = require('../profile/profileUpload');
const imgpost = require('../controller/postController');
const router = express.Router();




router.post('/register', register);
router.post('/login', login);
router.post('/profile', verfyToken, upload.single('file'), uploadProfile);
router.post('/post', verfyToken, upload.single('file'),imgpost);




// exports the all router
module.exports = router