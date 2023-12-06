// adminQueries.js

const adminQueries = {
    // Functional Requirement 1: Enable or Disable Course Availability (Admins)
    enableCourse: 'UPDATE courses SET isAvailable = 1 WHERE CourseID = ?',
    disableCourse: 'UPDATE courses SET isAvailable = 0 WHERE CourseID = ?',
    // Additional Function : View Teachers (Admins)
    viewTeachers: 'SELECT * FROM users WHERE RoleID = 2',
    // Functional Requirement 2: Assign Courses to a Teacher (Admins)
    assignCourseToTeacher: 'UPDATE courses SET TeacherID = ? WHERE CourseID = ?',
    // Additional Function : View Students (Admins)
    viewStudents: 'SELECT * FROM users WHERE RoleID = 3',
};

export default adminQueries;
