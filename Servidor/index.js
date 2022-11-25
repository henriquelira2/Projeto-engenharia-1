const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcryptjs");
const dbMedico = require("./config/dbMedico");
const dbPaciente = require("./config/dbPaciente");
const dbConsultas = require("./config/dbConsultas");

const saltRounds = 10;
/********************************************* Marca Consulta *************************************************************** */

app.use(express.json());
app.use(cors());

app.post("/cadastrarConsulta", (req, res) => {
  const tipo = req.body.tipo;
  const endereco = req.body.endereco;
  const data = req.body.data;
  const hora = req.body.hora;

  const sqlInsert =
    "INSERT INTO consultas (tipo,endereco,data,hora)VALUES (?,?,?,?)";

  dbConsultas.query(sqlInsert, [tipo, endereco, data, hora], (err, result) => {
    console.log(err);
  });
});

app.get("/cadastrarConsulta", (req, res) => {
  const sqlSelect = "SELECT * FROM consultas";

  dbConsultas.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.put("/consultasMarcadas", (req, res) => {
  const data = req.body.data;
  const hora = req.body.hora;
  const tipo = req.body.tipo;
  const endereco = req.body.endereco;

  const sqlUpdate = "UPDATE consultas SET hora = ? WHERE data= ?";

  dbConsultas.query(sqlUpdate, [tipo, endereco, hora, data], (err, result) => {
    console.log(result);
  });
});

app.delete("/cadastrarConsulta/:data", (req, res) => {
  const consulta = req.params.data;

  const sqlDelete = "DELETE FROM consultas WHERE data = ?";

  dbConsultas.query(sqlDelete, consulta, (err, result) => {
    if (err) console.log(err);
  });
});

/********************************************* Paceinte *************************************************************** */

app.use(express.json());
app.use(cors());

app.post("/CadastroPaciente", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  dbPaciente.query(
    "SELECT * FROM paciente WHERE email = ?",
    [email],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.length == 0) {
        bcrypt.hash(password, saltRounds, (err, hash) => {
          dbPaciente.query(
            "INSERT INTO paciente (email, password) VALUE (?,?)",
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
    "SELECT * FROM paciente WHERE email = ?",
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

/*******************************************Paceiente***************************************************************** */

/*******************************************Medico***************************************************************** */

app.use(express.json());
app.use(cors());

app.post("/CadastroMedico", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  dbMedico.query(
    "SELECT * FROM medico WHERE email = ?",
    [email],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.length == 0) {
        bcrypt.hash(password, saltRounds, (err, hash) => {
          dbMedico.query(
            "INSERT INTO medico (email, password) VALUE (?,?)",
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

app.post("/loginMedico", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  dbMedico.query(
    "SELECT * FROM medico WHERE email = ?",
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

app.listen(process.env.PORT || 5000 || 5001 || 5002, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});

/*******************************************Medico***************************************************************** */
