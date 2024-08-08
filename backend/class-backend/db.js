const mySQL = require('mysql2');

const connection = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Bellyend1789',
    database: 'classes',
    port: '3000'
});

connection.connect((error) =>{
    if(error){
        console.error('Failed to connect to db', error);
        return;
    }
    console.log('Connected to db');
});

module.exports = connection;