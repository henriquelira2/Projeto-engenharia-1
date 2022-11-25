const mysql = require("mysql2");

const dbPciente = mysql.createPool({
  host: "us-cdbr-east-06.cleardb.net",
  user: "b8cb12b2b477b6",
  password: "da0fa92b",
  database: "heroku_42fefdd42ae4f46",
});

module.exports = dbPciente;
