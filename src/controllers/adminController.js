import * as admin from '../models/adminModel.js';
import * as authCheck from './authController.js';

async function enableCourse(req, res) {
    const courseID = req.params.courseID;
    const userID = req.query.userID;
    // Check if the user making the request is an admin
    try {
        // Will throw error if Unauthorized
        await authCheck.checkUserRoleAuthorization(userID, 1);
        // Proceed with the admin functionality
        const result = await admin.enableCourse(courseID);
        res.json({ success: true, result });
    } catch (error) {
        if (error.message === 'Unauthorized') {
            res.status(403).json({ success: false, error: 'Unauthorized' });
        } else {
            console.error('Error viewing teachers:', error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }
}

async function disableCourse(req, res) {
    const courseID = req.params.courseID;
    const userID = req.query.userID;
    // Check if the user making the request is an admin
    try {
        // Will throw error if Unauthorized
        await authCheck.checkUserRoleAuthorization(userID, 1);
        // Proceed with the admin functionality
        const result = await admin.disableCourse(courseID);
        res.json({ success: true, result });
    } catch (error) {
        if (error.message === 'Unauthorized') {
            res.status(403).json({ success: false, error: 'Unauthorized' });
        } else {
            console.error('Error viewing teachers:', error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }
}

async function viewTeachers(req, res) {
    const userID = req.query.userID;
    // Check if the user making the request is an admin
    try {
        // Will throw error if Unauthorized
        await authCheck.checkUserRoleAuthorization(userID, 1);
        // Proceed with the admin functionality
        const teachers = await admin.viewTeachers();
        res.json({ success: true, teachers });
    } catch (error) {
        if (error.message === 'Unauthorized') {
            res.status(403).json({ success: false, error: 'Unauthorized' });
        } else {
            console.error('Error viewing teachers:', error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }
}

async function assignCourseToTeacher(req, res) {
    const teacherID = req.params.teacherID;
    const courseID = req.params.courseID;
    const userID = req.query.userID;
    // Check if the user making the request is an admin
    try {
        // Will throw error if Unauthorized
        await authCheck.checkUserRoleAuthorization(userID, 1);
        // Proceed with the admin functionality
        const result = await admin.assignCourseToTeacher(teacherID, courseID);
        res.json({ success: true, result });
    } catch (error) {
        if (error.message === 'Unauthorized') {
            res.status(403).json({ success: false, error: 'Unauthorized' });
        } else {
            console.error('Error viewing teachers:', error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }
}

async function viewStudents(req, res) {
    const userID = req.query.userID;
    // Check if the user making the request is an admin
    try {
        // Will throw error if Unauthorized
        await authCheck.checkUserRoleAuthorization(userID, 1);
        // Proceed with the admin functionality
        const students = await admin.viewStudents();
        res.json({ success: true, students });
    } catch (error) {
        if (error.message === 'Unauthorized') {
            res.status(403).json({ success: false, error: 'Unauthorized' });
        } else {
            console.error('Error viewing teachers:', error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }
}

export { enableCourse, disableCourse, viewTeachers, assignCourseToTeacher, viewStudents };