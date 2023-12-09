import express from 'express';
import * as teacherController from '../controllers/teacherController.js';

const router = express.Router();

router.get('/viewInChargeCourses/:teacherID', teacherController.viewInChargeCourses);
router.post('/passStudent/:courseID/:userID', teacherController.passStudent);
router.post('/failStudent/:courseID/:userID', teacherController.failStudent);

export default router;