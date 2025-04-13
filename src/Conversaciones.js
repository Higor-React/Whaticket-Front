import React from "react";
import { Link } from "react-router-dom"; // Importa Link
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBell, FaUser } from "react-icons/fa";
import "./Dashboard.css";

const Conversaciones = () => {
  return (
    <div className="conversacion-container d-flex vh-100">
      <aside className="sidebar p-4 bg-dark text-white">
        <Link to="/dashboard" className="btn btn-outline-secondary mb-3">
          📌 Menú
        </Link>
        <div className="menu-groups">
          <div className="menu-group">
            <ul className="list-unstyled">
              <li className="menu-item">
                <Link to="/conversaciones" className="menu-link">📩 Conversaciones</Link>
              </li>
              <li className="menu-item">
                <span className="menu-link">🔗 Conexiones</span>
              </li>
              <li className="menu-item"> 📞 Contactos 
              </li>
            </ul>
          </div>
          <div className="menu-group">
            <ul className="list-unstyled">
              <li className="menu-item">
                <span className="menu-link">⚙️ Administración</span>
              </li>
              <li className="menu-item">
                <span className="menu-link">👥 Usuarios</span>
              </li>
              <li className="menu-item">
                <span className="menu-link">🤖 Líneas & ChatBots</span>
              </li>
            </ul>
          </div>
          <div className="menu-group">
            <ul className="list-unstyled">
              <li className="menu-item">
                <span className="menu-link">📡 API</span>
              </li>
              <li className="menu-item">
                <span className="menu-link">🔑 Tokens</span>
              </li>
              <li className="menu-item">
                <span className="menu-link">📚 Documentación</span>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <main className="main-content flex-grow-1 d-flex flex-column bg-light">
        <header className="header d-flex justify-content-between align-items-center p-3 border-bottom bg-white shadow-sm">
          <h4 className="mb-0">Conversaciones</h4>
          <div>
            <button className="btn btn-outline-secondary me-2">
              <FaBell />
            </button>
            <button className="btn btn-outline-secondary">
              <FaUser />
            </button>
          </div>
        </header>
      </main>
    </div>
  );
};

export default Conversaciones;