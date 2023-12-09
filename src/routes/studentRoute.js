import express from 'express';
import * as studentController from '../controllers/studentController.js';

const router = express.Router();

router.get('/browseAvailableCourses', studentController.browseAvailableCourses);
router.post('/enrollInCourse/:courseID/:userID', studentController.enrollInCourse);
router.post('/viewAppliedCourses/:userID', studentController.viewAppliedCourses);

export default router;