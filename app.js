import express from 'express';
import * as database from './src/config/database.js';
import * as admin from './src/config/adminFunctions.js';
import * as student from './src/config/studentFunctions.js'
import * as teacher from './src/config/teacherFunctions.js'

const app = express();
const PORT = process.env.PORT || 8080;


// Handle database connection check
app.get('/checkdb', async (req, res) => {
    try {
        await database.promisePool.query('SELECT 1');
        res.send('Database connection is working!');
    } catch (error) {
        console.error('Database connection error:', error);
        res.status(500).send('Internal Server Error');
    }
});

// ----- ADMIN ----- 
// Functional Requirement 1: Enable Course Availability (Admins)
app.post('/admin/enableCourse/:courseID', async (req, res) => {
    const courseID = req.params.courseID;
    try {
        const result = await admin.enableCourse(courseID);
        res.json({ success: true, result });
    } catch (error) {
        console.error('Error enabling course:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

// Functional Requirement 1: Disable Course Availability (Admins)
app.post('/admin/disableCourse/:courseID', async (req, res) => {
    const courseID = req.params.courseID;
    try {
        const result = await admin.disableCourse(courseID);
        res.json({ success: true, result });
    } catch (error) {
        console.error('Error disabling course:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

// Additional Function : View Teachers (Admins)
app.get('/admin/viewTeachers', async (req, res) => {
    try {
        const teachers = await admin.viewTeachers();
        res.json({ success: true, teachers });
    } catch (error) {
        console.error('Error viewing teachers:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});



// Functional Requirement 2: Assign Courses to a Teacher (Admins)
app.post('/admin/assignCourseToTeacher/:teacherID/:courseID', async (req, res) => {
    const teacherID = req.params.teacherID;
    const courseID = req.params.courseID;
    try {
        const result = await admin.assignCourseToTeacher(teacherID, courseID);
        res.json({ success: true, result });
    } catch (error) {
        console.error('Error assigning course to teacher:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

// Additional Function : View Students (Admins)
app.get('/admin/viewStudents', async (req, res) => {
    try {
        const students = await admin.viewStudents();
        res.json({ success: true, students });
    } catch (error) {
        console.error('Error viewing teachers:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

// ------

// ----- STUDENT -----
// Functional Requirement 3: Browse and List Available Courses for Students
app.get('/student/browseAvailableCourses', async (req, res) => {
    try {
        const availableCourses = await student.browseAvailableCourses();
        res.json({ success: true, availableCourses });
    } catch (error) {
        console.error('Error browsing available courses:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});


// Functional Requirement 4: Enroll in a Course for Students
app.post('/student/enrollInCourse/:courseID/:userID', async (req, res) => {
    const courseID = req.params.courseID;
    const userID = req.params.userID;

    try {
        // Proceed with enrollment
        const result = await student.enrollInCourse(courseID, userID);
        res.json({ success: true, result });
    } catch (error) {
        if (error.message === 'Course is not available for enrollment.') {
            res.status(400).json({ success: false, error: 'Course is not available for enrollment.' });
        } else {
            console.error('Error enrolling in a course:', error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }
});


// Additional Functionality: View applied courses for a specific student
app.get('/student/viewAppliedCourses/:userID', async (req, res) => {
    const userID = req.params.userID;
    try {
        const appliedCourses = await student.viewAppliedCourses(userID);
        res.json({ success: true, appliedCourses });
    } catch (error) {
        console.error('Error viewing applied courses:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});
// -----


// ----- TEACHER -----
// Additional Functionality: View in-charge courses with corresponding students
app.get('/teacher/viewInChargeCourses/:teacherID', async (req, res) => {
    const teacherID = req.params.teacherID;
    try {
        const inChargeCourses = await teacher.viewInChargeCourses(teacherID);
        res.json({ success: true, inChargeCourses });
    } catch (error) {
        console.error('Error viewing in-charge courses:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

// Functional Requirement 5: Teachers can Pass a Student
app.post('/teacher/passStudent/:courseID/:userID', async (req, res) => {
    const courseID = req.params.courseID;
    const userID = req.params.userID;
    try {
        const result = await teacher.passStudent(courseID, userID);
        res.json({ success: true, result });
    } catch (error) {
        console.error('Error passing a student:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

// Functional Requirement 5: Teachers can Fail a Student
app.post('/teacher/failStudent/:courseID/:userID', async (req, res) => {
    const courseID = req.params.courseID;
    const userID = req.params.userID;
    try {
        const result = await teacher.failStudent(courseID, userID);
        res.json({ success: true, result });
    } catch (error) {
        console.error('Error failing a student:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});
// ------

// Listen to PORT 

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(PORT, (error) => {
    if (!error)
        console.log(`Server is successfully running, app is listening on http://localhost:${PORT}`)
    else
        console.log("Error occurred, server cannot start", error);
});


