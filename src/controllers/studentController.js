import * as student from '../models/studentModel.js';
import * as authCheck from './authController.js';

async function browseAvailableCourses(req, res) {
    const userID = req.query.userID;

    // Check if the user making the request is a student

    try {
        // Will throw error if Unauthorized
        await authCheck.checkUserRoleAuthorization(userID, 3);
        // Proceed with the student functionality
        const availableCourses = await student.browseAvailableCourses();
        res.json({ success: true, availableCourses });
    } catch (error) {
        if (error.message === 'Unauthorized') {
            res.status(403).json({ success: false, error: 'Unauthorized' });
        } else {
            console.error('Error browsing available courses:', error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }
}

async function enrollInCourse(req, res) {
    const courseID = req.params.courseID;
    const userID = req.query.userID;

    // Check if the user making the request is a student
    try {
        // Will throw error if Unauthorized
        await authCheck.checkUserRoleAuthorization(userID, 3);
        // Proceed with the student functionality
        const result = await student.enrollInCourse(courseID, userID);
        res.json({ success: true, result });
    } catch (error) {
        if (error.message === 'Unauthorized') {
            res.status(403).json({ success: false, error: 'Unauthorized' });
        } else if (error.message === 'Course is not available for enrollment.') {
            res.status(400).json({ success: false, error: 'Course is not available for enrollment.' });
        } else if (error.message === 'Enrolment already exists for the specified course and user.') {
            res.status(400).json({ success: false, error: 'Enrolment already exists for the specified course and user.' });
        } else {
            console.error('Error enrolling in a course:', error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }
}

async function viewAppliedCourses(req, res) {
    const userID = req.query.userID;
    // Check if the user making the request is a student
    try {
        // Will throw error if Unauthorized
        await authCheck.checkUserRoleAuthorization(userID, 3);
        // Proceed with the student functionality
        const appliedCourses = await student.viewAppliedCourses(userID);
        res.json({ success: true, appliedCourses });
    } catch (error) {
        if (error.message === 'Unauthorized') {
            res.status(403).json({ success: false, error: 'Unauthorized' });
        } else {
            console.error('Error viewing applied courses:', error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }
}

export { browseAvailableCourses, enrollInCourse, viewAppliedCourses };
