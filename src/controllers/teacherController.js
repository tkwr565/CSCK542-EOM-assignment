import * as teacher from '../models/teacherModel.js';
import * as authCheck from './authController.js';

async function viewInChargeStudents(req, res) {
    const userID = req.query.userID;
    // Check if the user making the request is a teacher
    try {
        // Will throw an error if Unauthorized
        await authCheck.checkUserRoleAuthorization(userID, 2);
        // Proceed with the teacher functionality
        const inChargeCourses = await teacher.viewInChargeStudents(userID);
        res.json({ success: true, inChargeCourses });
    } catch (error) {
        if (error.message === 'Unauthorized') {
            res.status(403).json({ success: false, error: 'Unauthorized' });
        } else {
            console.error('Error viewing in-charge courses:', error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }
}

async function passStudent(req, res) {
    const courseID = req.params.courseID;
    const studentID = req.params.studentID;
    const userID = req.query.userID;
    // Check if the user making the request is a teacher
    try {
        // Will throw an error if Unauthorized
        await authCheck.checkUserRoleAuthorization(userID, 2);
        // Proceed with the teacher functionality
        const result = await teacher.passStudent(courseID, studentID);
        res.json({ success: true, result });
    } catch (error) {
        if (error.message === 'Unauthorized') {
            res.status(403).json({ success: false, error: 'Unauthorized' });
        } else {
            console.error('Error passing a student:', error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }
}

async function failStudent(req, res) {
    const courseID = req.params.courseID;
    const studentID = req.params.studentID;
    const userID = req.query.userID;
    // Check if the user making the request is a teacher
    try {
        // Will throw an error if Unauthorized
        await authCheck.checkUserRoleAuthorization(userID, 2);
        // Proceed with the teacher functionality
        const result = await teacher.failStudent(courseID, studentID);
        res.json({ success: true, result });
    } catch (error) {
        if (error.message === 'Unauthorized') {
            res.status(403).json({ success: false, error: 'Unauthorized' });
        } else {
            console.error('Error failing a student:', error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }
}

export { viewInChargeStudents as viewInChargeCourses, passStudent, failStudent };
