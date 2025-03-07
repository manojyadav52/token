const express = require('express');
const { register, login } = require('../controller/userController');
const verfyToken = require('../middleware/tokenVerfy');
const { upload, uploadProfile } = require('../profile/profileUpload');
const router = express.Router();




router.post('/register', register);
router.post('/login', login);
router.post('/profile', verfyToken, upload.single('file'), uploadProfile);




// exports the all router
module.exports = router