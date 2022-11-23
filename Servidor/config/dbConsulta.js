const mysql = require("mysql2");

const dbConsulta = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "testando",
});

module.exports = dbConsulta;
