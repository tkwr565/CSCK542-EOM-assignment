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
    // Functional Requirement 5: Teachers can Fail or Pass a Student
    gradeStudent: 'UPDATE enrolments SET Mark = ? WHERE CourseID = ? AND UserID = ?',
};

module.exports = queries;
