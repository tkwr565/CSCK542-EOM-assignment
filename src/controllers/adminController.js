import * as admin from '../models/adminModel.js';

async function enableCourse(req, res) {
    const courseID = req.params.courseID;
    try {
        const result = await admin.enableCourse(courseID);
        res.json({ success: true, result });
    } catch (error) {
        console.error('Error enabling course:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
}

async function disableCourse(req, res) {
    const courseID = req.params.courseID;
    try {
        const result = await admin.disableCourse(courseID);
        res.json({ success: true, result });
    } catch (error) {
        console.error('Error disabling course:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
}

async function viewTeachers(req, res) {
    try {
        const teachers = await admin.viewTeachers();
        res.json({ success: true, teachers });
    } catch (error) {
        console.error('Error viewing teachers:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
}

async function assignCourseToTeacher(req, res) {
    const teacherID = req.params.teacherID;
    const courseID = req.params.courseID;
    try {
        const result = await admin.assignCourseToTeacher(teacherID, courseID);
        res.json({ success: true, result });
    } catch (error) {
        console.error('Error assigning course to teacher:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
}

async function viewStudents(req, res) {
    try {
        const students = await admin.viewStudents();
        res.json({ success: true, students });
    } catch (error) {
        console.error('Error viewing teachers:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
}

export { enableCourse, disableCourse, viewTeachers, assignCourseToTeacher, viewStudents };
