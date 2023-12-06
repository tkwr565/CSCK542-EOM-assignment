# CSCK542-EOM-assignment
# University Course Management System

## Overview

This project implements a University Course Management System, providing functionalities for administrators, teachers, and students. The system allows admins to manage courses, assign courses to teachers, view teachers and students. Teachers can view the courses they are in charge of, pass or fail students. Students can browse available courses, enroll in courses, and view their applied courses.

## Project Structure

The project is structured as follows:

- `src/config`: Configuration files for the database and queries.
  - `database.js`: Database configuration and common functions.
  - `adminQueries.js`, `teacherQueries.js`, `studentQueries.js`: SQL queries for admins, teachers, and students.
- `src/functions`: Functions for admins, teachers, and students.
  - `adminFunctions.js`: Admin-related functions.
  - `teacherFunctions.js`: Teacher-related functions.
  - `studentFunctions.js`: Student-related functions.
- `app.js`: Main application file with API endpoints.

## API Endpoints

### Admin Endpoints

- Enable Course Availability: `POST /admin/enableCourse/:courseID`
- Disable Course Availability: `POST /admin/disableCourse/:courseID`
- View Teachers: `GET /admin/viewTeachers`
- Assign Course to Teacher: `POST /admin/assignCourseToTeacher/:teacherID/:courseID`
- View Students: `GET /admin/viewStudents`

### Student Endpoints

- Browse Available Courses: `GET /student/browseAvailableCourses`
- Enroll in Course: `POST /student/enrollInCourse/:courseID/:userID`
- View Applied Courses: `GET /student/viewAppliedCourses/:userID`

### Teacher Endpoints

- View In-Charge Courses: `GET /teacher/viewInChargeCourses/:teacherID`
- Pass Student: `POST /teacher/passStudent/:courseID/:userID`
- Fail Student: `POST /teacher/failStudent/:courseID/:userID`

## Getting Started

1. Clone the repository:
   git clone https://github.com/your-username/university-course-management.git

2. Install dependencies:
    npm install

3. Setup environment variables 
    .env 
 
