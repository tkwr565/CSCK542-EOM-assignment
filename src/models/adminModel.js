import connection from '../config/database.js';
import adminQueries from './queries/adminQueries.js';

// ----- ADMIN -----

// Functional Requirement 1: Enable Course Availability (Admins)
async function enableCourse(courseID) {
    try {
        const [result] = await connection.query(adminQueries.enableCourse, [courseID]);
        return result;
    } catch (error) {
        console.error('Error enabling course:', error);
        throw error;
    }
}

// Functional Requirement 1: Disable Course Availability (Admins)
async function disableCourse(courseID) {
    try {
        const [result] = await connection.query(adminQueries.disableCourse, [courseID]);
        return result;
    } catch (error) {
        console.error('Error disabling course:', error);
        throw error;
    }
}

// Additional Function : View Teachers (Admins)
async function viewTeachers() {
    try {
        const [result] = await connection.query(adminQueries.viewTeachers);
        return result;
    } catch (error) {
        console.error('Error viewing teachers:', error);
        throw error;
    }
}

// Functional Requirement 2: Assign Courses to a Teacher (Admins)
async function assignCourseToTeacher(teacherID, courseID) {
    try {
        const [result] = await connection.query(adminQueries.assignCourseToTeacher, [teacherID, courseID]);
        return result;
    } catch (error) {
        console.error('Error assigning course to teacher:', error);
        throw error;
    }
}

// Additional Function : View Students (Admins)
async function viewStudents() {
    try {
        const [result] = await connection.query(adminQueries.viewStudents);
        return result;
    } catch (error) {
        console.error('Error viewing students:', error);
        throw error;
    }
}

export { enableCourse, disableCourse, assignCourseToTeacher, viewTeachers, viewStudents };
