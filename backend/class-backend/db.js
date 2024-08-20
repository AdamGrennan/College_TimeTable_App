const mySQL = require('mysql2');

const connection = mySQL.createConnection({
    host: '.',
    user: '.',
    password: '.',
    database: '.'
});

connection.connect((error) =>{
    if(error){
        console.error('Failed to connect to db', error);
        return;
    }
    console.log('Connected to db');
});

module.exports = connection;