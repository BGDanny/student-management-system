const express = require('express');
const { loginStudent, registerStudent, allStudentData, individualStudentData, getEnrolledSections, getFees, getCourses, updateFees} = require('../controllers/studentController');

const router = express.Router();

router.route('/login').post(loginStudent);
router.route('/register').post(registerStudent);
router.route('/').get(allStudentData);
router.route('/:id').get(individualStudentData);
router.route('/sections/:id').get(getEnrolledSections);
router.route('/fees/:id').get(getFees);
router.route('/courses/:id').get(getCourses);
router.route('/fees/:id').put(updateFees);


module.exports = router;