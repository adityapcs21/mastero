const mysql = require('mysql');
const connection = mysql.createConnection({
 host: 'localhost',
 port: '3306',
 user: 'root',
 password: 'xperiamera2',
 database: 'mastero'
});
connection.connect((err) => {
 if (err) throw err;
 console.log('Database is connected successfully!');
});

module.exports = connection;