import { promisePool } from './database.js';
import teacherQueries from '../models/queries/teacherQueries.js';


// ----- TEACHER -----

// Additional Functionality: View in-charge courses with corresponding students

async function viewInChargeCourses(teacherID) {
    try {
        const [result] = await promisePool.query(teacherQueries.viewInChargeCourses, [teacherID]);
        return result;
    } catch (error) {
        console.error('Error viewing in-charge courses:', error);
        throw error;
    }
}

// Functional Requirement 5: Teachers can Pass a Student
async function passStudent(courseID, userID) {
    try {
        const [result] = await promisePool.query(teacherQueries.passStudent, [courseID, userID]);
        return result;
    } catch (error) {
        console.error('Error passing a student:', error);
        throw error;
    }
}

// Functional Requirement 5: Teachers can Fail a Student
async function failStudent(courseID, userID) {
    try {
        const [result] = await promisePool.query(teacherQueries.failStudent, [courseID, userID]);
        return result;
    } catch (error) {
        console.error('Error failing a student:', error);
        throw error;
    }
}

export { viewInChargeCourses, passStudent, failStudent };