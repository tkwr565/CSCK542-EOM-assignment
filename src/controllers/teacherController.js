import * as teacher from '../models/teacherModel.js';

async function viewInChargeCourses(req, res) {
    const teacherID = req.params.teacherID;
    try {
        const inChargeCourses = await teacher.viewInChargeCourses(teacherID);
        res.json({ success: true, inChargeCourses });
    } catch (error) {
        console.error('Error viewing in-charge courses:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
}

async function passStudent(req, res) {
    const courseID = req.params.courseID;
    const userID = req.params.userID;
    try {
        const result = await teacher.passStudent(courseID, userID);
        res.json({ success: true, result });
    } catch (error) {
        console.error('Error passing a student:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
}

async function failStudent(req, res) {
    const courseID = req.params.courseID;
    const userID = req.params.userID;
    try {
        const result = await teacher.failStudent(courseID, userID);
        res.json({ success: true, result });
    } catch (error) {
        console.error('Error failing a student:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
}

export { viewInChargeCourses, passStudent, failStudent };
