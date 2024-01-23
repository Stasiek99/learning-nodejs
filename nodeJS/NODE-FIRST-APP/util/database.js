const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "node-first-app",
    password: "somePassword"
});

module.exports = pool.promise();