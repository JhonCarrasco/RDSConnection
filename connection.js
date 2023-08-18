const mysql = require('mysql');

const configDB = {
    connectionLimit: 10,
    host: 'rds-curso.ciy7hw5r5b1o.us-east-1.rds.amazonaws.com',
    user: 'Adminsqldev',
    password: 'curso2023',
    port: '3306',
    database: 'RDScurso',
    debug: true
};

var  pool = mysql.createPool(configDB);

module.exports = pool;