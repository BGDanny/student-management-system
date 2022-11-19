const express = require('express');
const { loginStudent, registerStudent, allStudentData, individualStudentData, getEnrolledSections, getFees, getCourses, updateFees, getGrades, searchCourse, addCourse, removeCourse, replyPost} = require('../controllers/studentController');

const router = express.Router();

router.route('/login').post(loginStudent);
router.route('/register').post(registerStudent);
router.route('/').get(allStudentData);
router.route('/:id').get(individualStudentData);
router.route('/sections/:id').get(getEnrolledSections);
router.route('/fees/:id').get(getFees);
router.route('/courses/:id').get(getCourses);
router.route('/fees/:id').put(updateFees);
router.route('/grades/:id').get(getGrades);
router.route('/searchCourses/:name').get(searchCourse);
router.route('/sections/:id').put(addCourse);
router.route('/sections/:id').delete(removeCourse);
router.route('/replyPosts/:id').put(replyPost);

//End Points needed
//getAllPosts
//Create Posts
//Edit Student Personal Information
//Add new grade to each student

module.exports = router;