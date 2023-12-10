//require('dotenv').config({path: '../../.env'});
require('dotenv').config({ path: '../.env' });
const connection = require('../config/database');

// Sample query
connection.query('SELECT * FROM courses', (err, results, fields) => {
    if (err) {
        console.error('An error occurred while executing the query: ' + err.stack);
        return;
    }

    console.log('Results: ', results);
});

// Close the connection
connection.end();
