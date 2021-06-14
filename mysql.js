const mysql = require('mysql');


var pool = mysql.createPool({
    "user" : process.env.MYSQL_USER, //usando variaveis de ambiente que sao definidas no arquivo nodemon.json
    "password" : process.env.MYSQL_PASSWORD,
    "database" : process.env.MYSQL_DATABASE,
    "host" : process.env.MYSQL_HOST,
    "port" : process.env.MYSQL_PORT
});

exports.pool = pool;