import express from 'express';
import * as studentController from '../controllers/studentController.js';

const router = express.Router();

router.get('/browseAvailableCourses', studentController.browseAvailableCourses);
router.post('/enrollInCourse/:courseID', studentController.enrollInCourse);
router.get('/viewAppliedCourses', studentController.viewAppliedCourses);

export default router;