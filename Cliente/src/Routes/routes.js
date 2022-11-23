import React from "react";
import ReactDOM from "react-dom/client";
import LoginMedico from "../LoginMedico/loginMedico";
import LoginPaciente from "../LoginPaciente/loginPaciente";
import UsuarioLogin from "../UsuarioLogin/UsuarioLogin";
import UsuarioCadastro from "../UsuarioCadastro/UsuarioCadastro";

import CadastroPaciente from "../CadastroPaciente/cadastroPaciente";
import CadastroMedico from "../CadastroMedico/cadastroMedico";
import Main from "../Main/Main";
import Agendamento from "../Agendamento/agendamentoConsultas";

import CadastrarConsulta from "../CadastrarConsulta/cadastrarConsulta";
import ConsultasMarcadas from "../ConsultasMarcadasP/consultasMarcadas";

import ConsultasMarcadasM from "../ConsultasMarcadasM/consultasMarcadasM";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/loginMedico" element={<LoginMedico />} />
        <Route path="/loginPaciente" element={<LoginPaciente />} />
        <Route path="/cadastroPaciente" element={<CadastroPaciente />} />
        <Route path="/cadastroMedico" element={<CadastroMedico />} />

        <Route path="/usuarioLogin" element={<UsuarioLogin />} />
        <Route path="/usuarioCadastro" element={<UsuarioCadastro />} />

        
        <Route path="/Agendamento" element={<Agendamento />} />

        <Route path="/cadastrarConsulta" element={<CadastrarConsulta />} />
        <Route path="/consultasMarcadas" element={<ConsultasMarcadas />} />
        <Route path="/consultasMarcadasM" element={<ConsultasMarcadasM />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
