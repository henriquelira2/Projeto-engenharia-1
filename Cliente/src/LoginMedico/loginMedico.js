import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import "./loginMedico.css";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

function App() {
  const navigate = useNavigate();

  const handleLoginMedico = (values) => {
    Axios.post("http://localhost:3002/loginMedico", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      if (response.data.msg === "Usuário logado") {
        navigate("/consultasMarcadasM");
      } else {
        alert(response.data.msg);
      }
    });
  };

  const validationsLoginMedico = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
  });

  return (
    <>
      <Formik
        initialValues={{}}
        onSubmit={handleLoginMedico}
        validationSchema={validationsLoginMedico}
      >
        <Form className="login-form">
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />

          <div className="sidenav">
            <div className="login-main-text">
              <h2>
                <b>Mad-On</b>
                <br />
              </h2>
              <p></p>
              <p>Sistema de marcações de Consultas</p>
            </div>
          </div>

          <div className="main">
            <div className="col-md-6 col-sm-12">
              <div className="login-form">
                <div id="form-login" method="POST">
                  <div className="form-group">
                    <label> Usúario</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Informe seu e-mail"
                    />
                    <ErrorMessage
                      component="span"
                      name="email"
                      className="form-error"
                    />
                  </div>

                  <div className="form-group">
                    <label>Senha</label>
                    <Field
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Informe sua senha"
                    />
                    <ErrorMessage
                      component="span"
                      name="password"
                      className="form-error"
                    />
                    <br />
                    <Link to="/cadastroMedico">Criar conta</Link>
                  </div>
                  <div className="form-group">
                    <div className="col-md-15">
                      <button type="submit" className="btn2 btn-secondary">
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default App;
