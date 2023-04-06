const mysql = require("mysql2");

const dbConsultas = mysql.createPool({
  host: "localhost", //porta
  user: "root", 
  password: "root", 
  database: "medon", //name schema
});

module.exports = dbConsultas;
