import * as student from '../models/studentModel.js';

async function browseAvailableCourses(req, res) {
    try {
        const availableCourses = await student.browseAvailableCourses();
        res.json({ success: true, availableCourses });
    } catch (error) {
        console.error('Error browsing available courses:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
}

async function enrollInCourse(req, res) {
    const courseID = req.params.courseID;
    const userID = req.params.userID;

    try {
        const result = await student.enrollInCourse(courseID, userID);
        res.json({ success: true, result });
    } catch (error) {
        if (error.message === 'Course is not available for enrollment.') {
            res.status(400).json({ success: false, error: 'Course is not available for enrollment.' });
        } else {
            console.error('Error enrolling in a course:', error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }
}

async function viewAppliedCourses(req, res) {
    const userID = req.params.userID;
    try {
        const appliedCourses = await student.viewAppliedCourses(userID);
        res.json({ success: true, appliedCourses });
    } catch (error) {
        console.error('Error viewing applied courses:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
}

export { browseAvailableCourses, enrollInCourse, viewAppliedCourses };
