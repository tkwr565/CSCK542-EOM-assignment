import connection from '../config/database.js';
import teacherQueries from './queries/teacherQueries.js';


// ----- TEACHER -----

// Additional Functionality: View in-charge courses with corresponding students

async function viewInChargeStudents(teacherID) {
    try {
        const [result] = await connection.query(teacherQueries.viewInChargeStudents, [teacherID]);
        return result;
    } catch (error) {
        console.error('Error viewing in-charge courses:', error);
        throw error;
    }
}

// Functional Requirement 5: Teachers can Pass a Student
async function passStudent(courseID, userID) {
    try {
        const [result] = await connection.query(teacherQueries.passStudent, [courseID, userID]);
        return result;
    } catch (error) {
        console.error('Error passing a student:', error);
        throw error;
    }
}

// Functional Requirement 5: Teachers can Fail a Student
async function failStudent(courseID, userID) {
    try {
        const [result] = await connection.query(teacherQueries.failStudent, [courseID, userID]);
        return result;
    } catch (error) {
        console.error('Error failing a student:', error);
        throw error;
    }
}

export { viewInChargeStudents as viewInChargeStudents, passStudent, failStudent };