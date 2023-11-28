// adminQueries.js

const queries = {
    // Functional Requirement 1: Enable or Disable Course Availability (Admins)
    enableCourse: 'UPDATE courses SET isAvailable = 1 WHERE CourseID = ?',
    disableCourse: 'UPDATE courses SET isAvailable = 0 WHERE CourseID = ?',
    // Functional Requirement 2: Assign Courses to a Teacher (Admins)
    assignCourseToTeacher: 'UPDATE courses SET TeacherID = ? WHERE CourseID = ?',
};

module.exports = queries;
