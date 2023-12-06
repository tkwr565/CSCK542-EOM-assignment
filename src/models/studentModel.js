import connection from '../config/database.js';
import studentQueries from './queries/studentQueries.js';


// ----- STUDENT -----

// Functional Requirement 3: Browse and List Available Courses for Students
async function browseAvailableCourses() {
    try {
        const [courses] = await connection.query(studentQueries.browseAvailableCourses);
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
        const [courseAvailability] = await connection.query(studentQueries.isCourseAvailable, [courseID]);

        if (courseAvailability[0]?.isAvailable === 1) {
            // If the course is available, proceed with enrollment
            const [result] = await connection.query(studentQueries.enrollInCourse, [courseID, userID, courseID]);
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
        const [appliedCourses] = await connection.query(studentQueries.viewAppliedCourses, [userID]);
        return appliedCourses;
    } catch (error) {
        console.error('Error viewing applied courses:', error);
        throw error;
    }
}

export { browseAvailableCourses, enrollInCourse, viewAppliedCourses };
