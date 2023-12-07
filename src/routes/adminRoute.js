import express from 'express';
import * as adminController from '../controllers/adminController.js';

const router = express.Router();

router.post('/enableCourse/:courseID', adminController.enableCourse);
router.post('/disableCourse/:courseID', adminController.disableCourse);
router.get('/viewTeachers', adminController.viewTeachers);
router.post('/assignCourseToTeacher/:teacherID/:courseID', adminController.assignCourseToTeacher);
router.get('/viewStudents', adminController.viewStudents);

export default router;