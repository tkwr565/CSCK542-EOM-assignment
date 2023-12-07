import * as authModel from '../models/authModel.js';

async function checkUserRoleAuthorization(userID, requiredRoleID) {
    try {
        const isAuthorized = await authModel.checkAuthorization(userID, requiredRoleID);

        if (!isAuthorized) {
            throw new Error('Unauthorized');
        }

        return true;
    } catch (error) {
        console.error('Error checking user role authorization:', error);
        throw error;
    }
}

export { checkUserRoleAuthorization };
