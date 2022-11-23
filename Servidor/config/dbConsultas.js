const mysql = require("mysql2");

const dbConsultas = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "consultas",
});

module.exports = dbConsultas;
