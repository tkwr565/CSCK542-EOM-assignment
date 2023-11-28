// commonQueries.js

const queries = {
    // Functional Requirement 6: Access control for Admins, Teachers, and Students
    // Method 1: Check if a user is authorized for a specific action
    // return > 0 if Authorized/Matched for certain RoleID; 
    checkAuthorization: 'SELECT COUNT(*) AS count FROM users WHERE UserID = ? AND RoleID = ?',

    // Method 2: Directly get user role based on user ID
    getUserRole: 'SELECT RoleID FROM users WHERE UserID = ?',
};

module.exports = queries;
