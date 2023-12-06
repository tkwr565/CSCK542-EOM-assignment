import express from 'express';
import adminRoutes from './adminRoutes.js';


const router = express.Router();

router.use('/admin', adminRoutes);
// missing teacher
// missing admin

export default router;