// studentQueries.js

const queries = {
    // Functional Requirement 3: Browse and List Available Courses for Students
    // use JOIN to show Teacher Name, 
    browseAvailableCourses: `
        SELECT c.CourseID, c.Title, u.Name AS TeacherName
        FROM courses c
        JOIN users u ON c.TeacherID = u.UserID
        WHERE c.isAvailable = 1
        `,
    // Functional Requirement 4: Enroll in a Course for Students
    // Restrict students from submitting duplicate records
    enrollInCourse: 'INSERT IGNORE INTO enrolments (Mark, CourseID, UserID) VALUES (NULL, ?, ?)',


    // Additional Functionality: View applied courses for a specific student
    viewAppliedCourses: `
        SELECT c.CourseID, c.Title AS CourseTitle, u.Name AS TeacherName, e.Mark
        FROM courses c
        JOIN enrolments e ON c.CourseID = e.CourseID
        JOIN users u ON c.TeacherID = u.UserID
        WHERE e.UserID = ?
    `,
};

module.exports = queries;
