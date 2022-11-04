import React from "react";
import ReactDOM from "react-dom/client";
import Login from "../Login/login";
import Cadastro from "../Cadastro/cadastro";
import Main from "../Main/Main";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<h1> tela home</h1>} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
