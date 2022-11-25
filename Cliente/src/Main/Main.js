import React from "react";
import logo from "../Components/imgs/logo-Med-On192.png";
import img from "../Components/imgs/logo-Med-On512.png";

import "./Main.css";

function App() {
  return (
    <div id="root">
      <div className="capture">
        <div className="css-group">
          <main id="main">
            <nav
              className="css-bar"
              data-baseweb="header-navigation"
              role="navigation"
            >
              <div className="css-bar-group">
                <ul className="css-bar-logo">
                  <li className="css-logo">
                    <a
                      className="logo"
                      data-baseweb="main"
                      href="/"
                      target="_self"
                      aria-label="Acesse a página inicial do Med-On"
                    >
                      <img className="img-logo" src={logo} alt="logo Med-On" />
                      <h3 className="name">Med-On</h3>
                      <div></div>
                    </a>
                  </li>
                </ul>
                <ul className="css-bar-space"></ul>

                <ul className="css-bar-entrar">
                  <li className="css-entar">
                    <a
                      className="entrar"
                      data-baseweb="button"
                      href="/usuarioLogin"
                      target="_self"
                      aria-label="Fazer login"
                    >
                      Já tem uma conta?
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div
              id="animation-wrpeer"
              className="css-main"
              data-baseweb="block"
            >
              <section id="" className="css-section" data-baseweb="block">
                <div className="css-spUpDon" data-baseweb="block">
                  <div className="css-spLefRig" data-baseweb="block">
                    <div className="css-posTexImg" data-baseweb="block">
                      <div className="css-mStTxt" data-baseweb="block">
                        <div className="css-mFirtst">
                          <div className="css-firTxt">
                            <h1 className="css-txt">
                              Marque uma consulta e seja atendido em casa.
                            </h1>
                          </div>
                          <div className="css-stPara">
                            <b>Cadastre-se é marque sua consulta</b>
                          </div>
                        </div>
                        <div className="css-mStBt">
                          <div className="css-mBtReg">
                            <a
                              className="css-reg"
                              data-baseweb="button"
                              href="/usuarioCadastro"
                              target="_self"
                              aria-label="Fazer Cadastre-se"
                            >
                              Cadastre-se
                            </a>
                          </div>
                          <div className="css-mBtEnt">
                            <a
                              className="css-entrar"
                              data-baseweb="button"
                              href="/usuarioLogin"
                              target="_self"
                              aria-label="Entrar"
                            >
                              Já tem uma conta?
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="css-stImg">
                        <img className="img" src={img} alt="/" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
