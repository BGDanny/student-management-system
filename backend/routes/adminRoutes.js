const express = require('express');
const { loginAdmin, addSection} = require('../controllers/adminController');

const router = express.Router();

router.route('/login').post(loginAdmin);
router.route('/section').post(addSection);


module.exports = router;