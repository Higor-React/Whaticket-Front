// src/componentes/Conversaciones/Sidebar.jsx
import React from "react";

const Sidebar = () => (
  <aside className="sidebar p-4 bg-dark text-white">
    <button
      className="btn btn-outline-secondary mb-3"
      onClick={() => (window.location.href = "/conversaciones")}
    >
      📌 Menú
    </button>

    <br></br>
    <br></br>

    <div className="menu-groups">
      <div className="menu-group">
        <ul className="list-unstyled">
          <li
            className="menu-item1"
            onClick={() => (window.location.href = "/conversaciones")}
          >
            📩 Conversaciones
          </li>
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
);

export default Sidebar;
