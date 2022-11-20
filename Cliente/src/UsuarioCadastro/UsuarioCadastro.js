import React from "react";

import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Usuarios.css";

function App() {
  return (
    <div>
      <div className="mainMain">
        <Container>
          <Row>
            <div className="intro-text">
              <div>
                <h1 className="title">Bem Vindo ao Med-On</h1>
                <p className="subtitle"></p>
              </div>
              <div className="buttonContainer">
                <Link to="/cadastroMedico">
                  <Button size="lg" className="landingbutton">
                    Medico
                  </Button>
                </Link>
                <Link to="/cadastroPaciente">
                  <Button
                    variant="outline-primary"
                    size="lg"
                    className="landingbutton"
                  >
                    Paciente
                  </Button>
                </Link>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
