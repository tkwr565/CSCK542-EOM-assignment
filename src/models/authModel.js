import connection from '../config/database.js';
import commonQueries from './queries/commonQueries.js';

// ----- AUTH ----- 
// Functional Requirement 6: Access control for Admins, Teachers, and Students
// Method 1: Check if a user is authorized for a specific action
export async function checkAuthorization(userID, roleID) {
    try {
        const [result] = await connection.query(commonQueries.checkAuthorization, [userID, roleID]);
        return result[0].count > 0;
    } catch (error) {
        console.error('Error checking authorization:', error);
        throw error;
    }
}

// Method 2: Directly get user role based on user ID
export async function getUserRole(userID) {
    try {
        const [result] = await connection.query(commonQueries.getUserRole, [userID]);
        return result[0]?.RoleID;
    } catch (error) {
        console.error('Error getting user role:', error);
        throw error;
    }
}
