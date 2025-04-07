import React from "react";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Conversaciones from "./Conversaciones";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
        <Route path="/conversaciones" element={<Conversaciones />} />
      </Routes>
    </Router>
  );
}

export default App;
