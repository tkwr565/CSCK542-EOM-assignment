// teacherQueries.js

const teacherQueries = {
    // Additional Functionality: View in-charge courses with corresponding students
    viewInChargeCourses: `
        SELECT c.CourseID, c.Title, u.UserID AS StudentID, u.Name AS StudentName, e.Mark AS StudentGrade
        FROM courses c
        LEFT JOIN enrolments e ON c.CourseID = e.CourseID
        LEFT JOIN users u ON e.UserID = u.UserID
        WHERE c.TeacherID = ?
        `,
    // Functional Requirement 5: Teachers can Pass a Student
    passStudent: 'UPDATE enrolments SET Mark = 1 WHERE CourseID = ? AND UserID = ?',

    // Functional Requirement 5: Teachers can Fail a Student
    failStudent: 'UPDATE enrolments SET Mark = 0 WHERE CourseID = ? AND UserID = ?',
};

export default teacherQueries;
