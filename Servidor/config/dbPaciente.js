const mysql = require("mysql2");

const dbPciente = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "paciente",
});

module.exports = dbPciente;
