const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password: 'jesusme..',
    database: 'school_db',
    port: 3306
});


db.connect(err => {
    if(err) {throw err;}
    else{
    console.log("Connected to the Mysql Database")}
});

module.exports = db;


//The default port for all databases is port 3306


















