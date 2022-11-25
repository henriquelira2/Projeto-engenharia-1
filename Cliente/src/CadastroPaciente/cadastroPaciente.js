import "./cadastroPaciente.css";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import { Link } from "react-router-dom";

function App() {
  const handleRegisterPaciente = (values) => {
    Axios.post("https://medonback.herokuapp.com/CadastroPaciente", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
      console.log(response);
    });
  };

  const validationsRegisterPaciente = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
    confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas são diferentes")
      .required("A confirmação da senha é obrigatória"),
  });

  return (
    <>
      <Formik
        initialValues={{}}
        onSubmit={handleRegisterPaciente}
        validationSchema={validationsRegisterPaciente}
      >
        <Form>
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
                  <Link to="/loginPaciente">Login</Link>
                </div>
              </div>
            </nav>
          </header>

          <div className="content">
            <div className="form-background">
              <center>
                <h3>
                  <b>CADASTRO PACIENTE</b>
                </h3>
              </center>

              <div>
                <div className="form-style">
                  <div className="form-group">
                    <label htmlFor="nome">Email: </label>
                    <Field
                      className="form-control"
                      placeholder="123@Leuson.br"
                      name="email"
                    />

                    <ErrorMessage
                      component="span"
                      name="email"
                      className="form-error"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="senha">Senha: </label>
                    <Field
                      className="form-control"
                      placeholder="12345678"
                      name="password"
                      type="password"
                    />

                    <ErrorMessage
                      component="span"
                      name="password"
                      className="form-error"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputConfirmSenha">Confirmar Senha: </label>
                    <Field
                      className="form-control"
                      placeholder="12345678"
                      name="confirmation"
                      type="password"
                    />

                    <ErrorMessage
                      component="span"
                      name="confirmation"
                      className="form-error"
                    />
                  </div>

                  <div className="btn-form">
                    <button type="submit" className="btn btn-clin" value="">
                      Cadastrar
                    </button>
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
