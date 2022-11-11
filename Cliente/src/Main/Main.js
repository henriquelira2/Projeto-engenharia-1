import React from "react";
import logo from '../Components/imgs/logo-Med-On192.png';
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Main.css";

function App() {
  return (
    <div id="root">
      <div className="capture">
        <div className="css-group">
          <a className="css-jump" herf="#main">Pular para o conteúdo principal</a>
          <main id="main">
            <nav className="css-bar" data-baseweb="header-navigation" role="navigation">
              <div className="css-bar-group">
                <ul className="css-bar-logo">
                  <li className="css-logo">
                    <a className="logo" data-baseweb="link" href="linkDoURLDoSite" target="_self" aria-label="Acesse a página inicial do Med-On">
                      <img className="img-logo" src={logo} alt="logo Med-On" />
                      <h3 className="name">Med-On</h3>
                      <div></div>
                    </a>
                  </li>
                </ul>
                <ul className="css-bar-space"></ul>
                <ul className="css-bar-help">
                  <li className="css-help">
                    <a className="help" data-baseweb="link" href="linkDoURLParaOSiteDeAjuda" target="_self" aria-label="Acesse a página de ajuda do Med-On">
                      Ajuda
                    </a>
                  </li>
                </ul>
                <ul className="css-bar-entrar">
                  <li className="css-entar">
                    <a className="entrar" data-baseweb="button" href="link" target="_self" aria-label="Fazer login">
                      Já tem uma conta?
                    </a>
                  </li>
                </ul>
              </div>
              {/* <nav className="nav">
            <img className="logo" src={logo} alt="logo Med-On" />
            <h3 className="name">Med-On</h3>
            <ul className="option">
              <li><a className="link" href="#">Ajuda</a></li>
              <li>|</li>
              <li><button type="button" className="btn-link">Já tem uma conta?</button></li>
            </ul>
          </nav> */}
            </nav>

          </main>
        </div>
      </div>
    </div>






    /*     <>
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
        </> */
  );
}

export default App;
