import "./consultasMarcadas.css";
import { Formik } from "formik";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [listaDeConsultasM, setListaDeConsultasM] = useState([]);

  useEffect(() => {
    Axios.get("https://medonback.herokuapp.com/cadastrarConsulta/").then(
      (response) => {
        setListaDeConsultasM(response.data);
      }
    );
  }, []);

  const deletarConsulta = (data) => {
    Axios.delete(`https://medonback.herokuapp.com/cadastrarConsulta/${data}`);
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
              <h1 className="navbar-brand">
                <Link to="/">-</Link>
              </h1>
              <div className="form-inline">
                <div>
                  <Link to="/cadastrarConsulta">Marca Consulta</Link>
                </div>
              </div>
            </nav>
          </header>

          <div className="content2">
            <div className="form-background2">
              <center>
                <h3>
                  <b>Consultas Marcadas</b>
                </h3>
              </center>
              {listaDeConsultasM.map((val) => {
                return (
                  <div className="map2">
                    <div className="map">
                      <div className="form-group">
                        <b id="map">TIPO: {val.tipo} </b>
                      </div>
                      <div className="form-group">
                        <b id="map">ENDERECO: {val.endereco}</b>
                      </div>
                      <div className="form-group">
                        <b id="map">Data: {val.data}</b>
                      </div>
                      <div className="form-group">
                        <b id="map">Hora: {val.hora}</b>
                      </div>
                      <div className="buton">
                        <button
                          onClick={() => {
                            deletarConsulta(val.data);
                          }}
                        >
                          <Link to="/consultasMarcadas/">Delete</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Formik>
    </>
  );
}

export default App;
