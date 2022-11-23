import "./cadastrarConsulta.css";
import { Formik } from "formik";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function App() {
  const [tipo, setTipo] = useState("");
  const [endereco, setEndereco] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [listaDeConsultasM, setListaDeConsultasM] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3003/cadastrarConsulta").then((response) => {
      setListaDeConsultasM(response.data);
    });
  }, []);

  const cadastrarConsulta = () => {
    Axios.post("http://localhost:3003/cadastrarConsulta", {
      tipo: tipo,
      endereco: endereco,
      data: data,
      hora: hora,
    });
    setListaDeConsultasM([
      ...listaDeConsultasM,
      { tipo: tipo, endereco: endereco, data: data, hora: hora },
    ]);
  };

  return (
    <>
      <Formik>
        <div>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
          <header className="header">
            <nav className="menubar navbar navbar-light justify-content-between">
              <h1 className="navbar-brand">-</h1>
              <div className="form-inline">
                <div>
                  <Link to="/consultasMarcadas">Consultas Marcadas</Link>
                </div>
              </div>
            </nav>
          </header>

          <div className="content">
            <div className="form-background">
              <center>
                <h3>
                  <b>CADASTRAR CONSULTA</b>
                </h3>
              </center>

              <div>
                <div className="form-style">
                  <div className="form-group">
                    <label htmlFor="tipo">TIPO DE CONSULTA: </label>
                    <input
                      className="form-control"
                      type="text"
                      name="tipo"
                      onChange={(e) => {
                        setTipo(e.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="endereco">ENDEREÇO: </label>
                    <input
                      className="form-control"
                      type="text"
                      name="endereco"
                      onChange={(e) => {
                        setEndereco(e.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="data">DATA: </label>
                    <input
                      className="form-control"
                      type="text"
                      name="data"
                      onChange={(e) => {
                        setData(e.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="hora">HORA: </label>
                    <input
                      className="form-control"
                      type="text"
                      name="hora"
                      onChange={(e) => {
                        setHora(e.target.value);
                      }}
                    />
                  </div>

                  <div className="btn-form">
                    <button
                      onClick={cadastrarConsulta}
                      type="submit"
                      className="btn btn-clin"
                      value=""
                    >
                      Cadastrar
                    </button>
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </Formik>
    </>
  );
}

export default App;
