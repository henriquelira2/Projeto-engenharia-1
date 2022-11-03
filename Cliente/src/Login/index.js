import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import "./style.css";
import { useNavigate } from "react-router-dom";
import React from "react";

function App() {
  const navigate = useNavigate();

  const handleLogin = (values) => {
    Axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
      navigate("/home");
    });
  };

  const validationsLogin = yup.object().shape({
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
    <div className="container">
      <h1>Login</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleLogin}
        validationSchema={validationsLogin}
      >
        <Form className="login-form">
          <div className="login-form-group">
            <Field name="email" className="form-field" placeholder="Email" />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>
          {/*Outro campo*/}
          <div className="form-group">
            <Field name="password" className="form-field" placeholder="Senha" />

            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>

          <button className="button" type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
