import React from "react";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Conversaciones from "./Conversaciones";
import Conexiones from "./Conexiones";
import Contactos from "./Contactos";
import Usuarios from "./Usuarios";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
        <Route path="/conversaciones" element={<Conversaciones />} />
        <Route path="/conexiones" element={<Conexiones />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
    </Router>
  );
}

export default App;
