// teacherQueries.js

const queries = {
    // Additional Functionality: View in-charge courses with corresponding students
    viewInChargeCourses: `
        SELECT c.CourseID, c.Title, u.UserID AS StudentID, u.Name AS StudentName
        FROM courses c
        JOIN enrolments e ON c.CourseID = e.CourseID
        JOIN users u ON e.UserID = u.UserID
        WHERE c.TeacherID = ?
        `,
    // Functional Requirement 5: Teachers can Pass a Student
    passStudent: 'UPDATE enrolments SET Mark = 1 WHERE CourseID = ? AND UserID = ?',

    // Functional Requirement 5: Teachers can Fail a Student
    failStudent: 'UPDATE enrolments SET Mark = 0 WHERE CourseID = ? AND UserID = ?',
};

module.exports = queries;
