// studentQueries.js

const studentQueries = {
    // Functional Requirement 3: Browse and List Available Courses for Students
    // use JOIN to show Teacher Name, 
    browseAvailableCourses: `
        SELECT c.CourseID, c.Title, u.Name AS TeacherName
        FROM courses c
        LEFT JOIN users u ON c.TeacherID = u.UserID
        WHERE c.isAvailable = 1
        `,
    // Functional Requirement 4: Enroll in a Course for Students
    // Double check course is available 
    isCourseAvailable: 'SELECT isAvailable FROM courses WHERE CourseID = ?',
    // Restrict students from submitting duplicate records
    enrollInCourse: 'INSERT IGNORE INTO enrolments (Mark, CourseID, UserID) VALUES (NULL, ?, ?)',

    // Additional Functionality: View applied courses for a specific student
    viewAppliedCourses: `
        SELECT c.CourseID, c.Title AS CourseTitle, u.Name AS TeacherName, e.Mark
        FROM courses c
        LEFT JOIN enrolments e ON c.CourseID = e.CourseID
        LEFT JOIN users u ON c.TeacherID = u.UserID
        WHERE e.UserID = ?
    `,
    isEnrolmentExist: `
        SELECT COUNT(*) AS count
        FROM enrolments
        WHERE CourseID = ? AND UserID = ?
    `
};

export default studentQueries;
