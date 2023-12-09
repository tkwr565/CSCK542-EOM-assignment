import express from 'express';
import adminRoutes from './adminRoute.js';
import teacherRoutes from './teacherRoute.js';
import studentRoutes from './studentRoute.js';

const router = express.Router();

router.use('/admin', adminRoutes);
router.use('/teacher', teacherRoutes);
router.use('/student', studentRoutes);

export default router;