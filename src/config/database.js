require('dotenv').config({path: '../../.env'});
const mysql2 = require('mysql2')

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'mydb'
};

const connection = mysql2.createConnection(dbConfig)

connection.connect(err=> {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as ID ' + connection.threadId);
});

module.exports = connection;
