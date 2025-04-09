import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Js/Login";
import Conversaciones from "./Js/Conversaciones";
import Conexiones from "./Js/Conexiones"
import "./Estilizacion/App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Dashboard" element={<Conversaciones />} />
        <Route path="/Conexiones" element={< Conexiones />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
