const express = require('express');
const { loginStudent, registerStudent, allStudentData, individualStudentData, getEnrolledSections} = require('../controllers/studentController');

const router = express.Router();

router.route('/login').post(loginStudent);
router.route('/register').post(registerStudent);
router.route('/').get(allStudentData);
router.route('/:id').get(individualStudentData);
router.route('/sections/:id').get(getEnrolledSections);


module.exports = router;