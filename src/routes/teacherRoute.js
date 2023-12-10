import express from 'express';
import * as teacherController from '../controllers/teacherController.js';

const router = express.Router();

router.get('/viewInChargeStudents', teacherController.viewInChargeCourses);
router.post('/passStudent/:courseID/:studentID', teacherController.passStudent);
router.post('/failStudent/:courseID/:studentID', teacherController.failStudent);

export default router;