# CSCK542-EOM-assignment
# University Course Management System

## Overview

This project implements a University Course Management System, providing functionalities for administrators, teachers, and students. The system allows admins to manage courses, assign courses to teachers, view teachers and students. Teachers can view the courses they are in charge of, pass or fail students. Students can browse available courses, enroll in courses, and view their applied courses.

## Project Structure

The project is structured as follows:

- `src/config`: Configuration files for the database and queries.
  - `database.js`: Database configuration and common functions.
- `src/models`: Model / Query files for SQL Queries.
  - `queries/adminQueries.js`, `queries/teacherQueries.js`, `queries/studentQueries.js`: SQL queries for admins, teachers, and students.
  - `adminModel.js`, `teacherModel.js`, `studentModel.js`: Model for admins, teachers, and students.
- `src/controllers`: Controllers for handling API requests.
  - `adminController.js`: Admin-related controllers.
  - `teacherController.js`: Teacher-related controllers.
  - `studentController.js`: Student-related controllers.
- `src/routes`: API route definitions.
  - `adminRoute.js`, `teacherRoute.js`, `studentRoute.js`: Route definitions for admins, teachers, and students.
- `src/index.js`: Main application file with API endpoints.

## API Endpoints

### Admin Endpoints

- Enable Course Availability: `POST /admin/enableCourse/:courseID?userID={adminUserID}`
- Disable Course Availability: `POST /admin/disableCourse/:courseID?userID={adminUserID}`
- View Teachers: `GET /admin/viewTeachers?userID={adminUserID}`
- Assign Course to Teacher: `POST /admin/assignCourseToTeacher/:teacherID/:courseID?userID={adminUserID}`
- View Students: `GET /admin/viewStudents?userID={adminUserID}`

### Student Endpoints

- Browse Available Courses: `GET /student/browseAvailableCourses?userID={studentUserID}`
- Enroll in Course: `POST /student/enrollInCourse/:courseID?userID={studentUserID}`
- View Applied Courses: `GET /student/viewAppliedCourses?userID={studentUserID}`

### Teacher Endpoints

- View In-Charge Students: `GET /teacher/viewInChargeStudents?userID={teacherUserID}`
- Pass Student: `POST /teacher/passStudent/:courseID/:studentID?userID={teacherUserID}`
- Fail Student: `POST /teacher/failStudent/:courseID/:studentID?userID={teacherUserID}`

## Authentication Check

For each endpoint that requires authentication, an `?userID=` query parameter must be provided. The system checks if the user making the request has the required role for that operation.

- Admin: `checkUserRoleAuthorization(userID, 1)`
- Teacher: `checkUserRoleAuthorization(userID, 2)`
- Student: `checkUserRoleAuthorization(userID, 3)`

## Getting Started

1. **Clone the repository:**
   git clone https://github.com/tkwr565/CSCK542-EOM-assignment.git

2. **Install dependencies:**
    npm install

3. **Setup environment variables:**
   Create a `.env` file in the root directory of the project with the following content:

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=mydb

4. **Start the application:**
   ```bash
   npm start

  This will run the application on the specified port (default is 3000). You can access the API at http://localhost:3000/api.

5. **Test the Endpoints:**
Use tools like Postman or curl to test the API endpoints as described in the API section of the README.
