const mysql = require("mysql2");

const dbMedico = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "medon",
});

module.exports = dbMedico;
