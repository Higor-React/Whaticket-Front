import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBell, FaUser } from "react-icons/fa";
import "./Dashboard.css";

const Conversaciones = () => {
  return (
    <div className="conversacion-container d-flex vh-100">
      <aside className="sidebar p-4 bg-dark text-white">
        <button
          className="btn btn-outline-secondary mb-3"
          onClick={() => (window.location.href = "/dashboard")}
        >
          📌 Menú
        </button>
        
        <div className="menu-groups">
          <div className="menu-group">
            <ul className="list-unstyled">
              <li className="menu-item">📩 Conversaciones</li>
              <li
                className="menu-item"
                onClick={() => (window.location.href = "/Conexiones")}
              >
                🔗 Conexiones
              </li>
              <li
                className="menu-item"
                onClick={() => (window.location.href = "/Contactos")}
              >
                📞 Contactos
              </li>
            </ul>
          </div>
          <div className="menu-group">
            <ul className="list-unstyled">
              <li className="menu-item">⚙️ Administración</li>
              <li
                className="menu-item"
                onClick={() => (window.location.href = "/Usuarios")}
              >
                👥 Usuarios
              </li>
              <li className="menu-item">🤖 Líneas & ChatBots</li>
            </ul>
          </div>
          <div className="menu-group">
            <ul className="list-unstyled">
              <li className="menu-item">📡 API</li>
              <li className="menu-item">🔑 Tokens</li>
              <li className="menu-item">📚 Documentación</li>
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
