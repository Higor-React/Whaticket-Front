import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Js/Login";
import Conversaciones from "./Js/Conversaciones/Conversaciones";
import Conexiones from "./Js/Conexiones";
import Contactos from "./Js/Contactos";
import Usuarios from "./Js/Usuarios";


import "./Estilizacion/App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/conversaciones" element={<Conversaciones />} />
        <Route path="/Conexiones" element={<Conexiones />} />
        <Route path="/Usuarios" element={<Usuarios />} />
        <Route path="/Contactos" element={<Contactos/>} />

        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
