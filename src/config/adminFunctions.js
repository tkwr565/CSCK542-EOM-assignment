import { promisePool } from './database.js';
import adminQueries from '../models/queries/adminQueries.js';

// ----- ADMIN -----

// Functional Requirement 1: Enable Course Availability (Admins)
async function enableCourse(courseID) {
    try {
        const [result] = await promisePool.query(adminQueries.enableCourse, [courseID]);
        return result;
    } catch (error) {
        console.error('Error enabling course:', error);
        throw error;
    }
}

// Functional Requirement 1: Disable Course Availability (Admins)
async function disableCourse(courseID) {
    try {
        const [result] = await promisePool.query(adminQueries.disableCourse, [courseID]);
        return result;
    } catch (error) {
        console.error('Error disabling course:', error);
        throw error;
    }
}

// Additional Function : View Teachers (Admins)
async function viewTeachers() {
    try {
        const [result] = await promisePool.query(adminQueries.viewTeachers);
        return result;
    } catch (error) {
        console.error('Error viewing teachers:', error);
        throw error;
    }
}

// Functional Requirement 2: Assign Courses to a Teacher (Admins)
async function assignCourseToTeacher(teacherID, courseID) {
    try {
        const [result] = await promisePool.query(adminQueries.assignCourseToTeacher, [teacherID, courseID]);
        return result;
    } catch (error) {
        console.error('Error assigning course to teacher:', error);
        throw error;
    }
}

// Additional Function : View Students (Admins)
async function viewStudents() {
    try {
        const [result] = await promisePool.query(adminQueries.viewStudents);
        return result;
    } catch (error) {
        console.error('Error viewing students:', error);
        throw error;
    }
}

export { enableCourse, disableCourse, assignCourseToTeacher, viewTeachers, viewStudents };

// ----- STUDENT -----

// Functional Requirement 3: Browse and List Available Courses for Students
async function browseAvailableCourses() {
    try {
        const [courses] = await promisePool.query(studentQueries.browseAvailableCourses);
        return courses;
    } catch (error) {
        console.error('Error browsing available courses:', error);
        throw error;
    }
}

// Functional Requirement 4: Enroll in a Course for Students
async function enrollInCourse(courseID, userID) {
    try {
        // Check if the course is available
        const [courseAvailability] = await promisePool.query(studentQueries.isCourseAvailable, [courseID]);

        if (courseAvailability[0]?.isAvailable === 1) {
            // If the course is available, proceed with enrollment
            const [result] = await promisePool.query(studentQueries.enrollInCourse, [courseID, userID, courseID]);
            return result;
        } else {
            throw new Error('Course is not available for enrollment.');
        }
    } catch (error) {
        console.error('Error enrolling in a course:', error);
        throw error;
    }
}

// Additional Functionality: View applied courses for a specific student
async function viewAppliedCourses(userID) {
    try {
        const [appliedCourses] = await promisePool.query(studentQueries.viewAppliedCourses, [userID]);
        return appliedCourses;
    } catch (error) {
        console.error('Error viewing applied courses:', error);
        throw error;
    }
}

export { browseAvailableCourses, enrollInCourse, viewAppliedCourses };

