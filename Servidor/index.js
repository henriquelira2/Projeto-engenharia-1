const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");


const saltRounds = 10;

/********************************************* Paceinte *************************************************************** */


const dbPaciente = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "paciente",
});

app.use(express.json());
app.use(cors());

app.post("/CadastroPaciente", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  dbPaciente.query(
    "SELECT * FROM pacientes WHERE email = ?",
    [email],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.length == 0) {
        bcrypt.hash(password, saltRounds, (err, hash) => {
          dbPaciente.query(
            "INSERT INTO pacientes (email, password) VALUE (?,?)",
            [email, hash],
            (error, response) => {
              if (err) {
                res.send(err);
              }

              res.send({ msg: "Usuário cadastrado com sucesso" });
            }
          );
        });
      } else {
        res.send({ msg: "Email já cadastrado" });
      }
    }
  );
});

app.post("/loginPaciente", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  dbPaciente.query(
    "SELECT * FROM pacientes WHERE email = ?",
    [email],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (error) {
            res.send(error);
          }
          if (response) {
            res.send({ msg: "Usuário logado" });
          } else {
            res.send({ msg: "Senha incorreta" });
          }
        });
      } else {
        res.send({ msg: "Usuário não registrado!" });
      }
    }
  );
});

app.listen(3003, () => {
  console.log("rodando na porta 3003");
});
/*******************************************Paceiente***************************************************************** */


/*******************************************Medico***************************************************************** */
const dbMedico = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "medico",
});

app.use(express.json());
app.use(cors());

app.post("/CadastroMedico", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  dbMedico.query("SELECT * FROM medicos WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length == 0) {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        dbMedico.query(
          "INSERT INTO medicos (email, password) VALUE (?,?)",
          [email, hash],
          (error, response) => {
            if (err) {
              res.send(err);
            }

            res.send({ msg: "Usuário cadastrado com sucesso" });
          }
        );
      });
    } else {
      res.send({ msg: "Email já cadastrado" });
    }
  });
});

app.post("/loginMedico", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  dbMedico.query("SELECT * FROM medicos WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (error) {
          res.send(error);
        }
        if (response) {
          res.send({ msg: "Usuário logado" });
        } else {
          res.send({ msg: "Senha incorreta" });
        }
      });
    } else {
      res.send({ msg: "Usuário não registrado!" });
    }
  });
});

app.listen(3002, () => {
  console.log("rodando na porta 3002");
});


/*******************************************Medico***************************************************************** */