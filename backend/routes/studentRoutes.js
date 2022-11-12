const express = require('express');
const { loginStudent } = require('../controllers/studentController');

const router = express.Router();

router.route('/login').post(loginStudent);


module.exports = router;