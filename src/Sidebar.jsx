import React from "react";
import { FaComments, FaPlug, FaUsers, FaCogs, FaRobot, FaKey, FaBook } from "react-icons/fa";

const Sidebar = () => {
  const menuItems = [
    { label: "Conversaciones", icon: <FaComments />, active: false },
    { label: "Conexiones", icon: <FaPlug />, active: true },
    { label: "Contactos", icon: <FaUsers />, active: false },
    { label: "Administración", icon: <FaCogs />, active: false },
    { label: "Usuarios", icon: <FaUsers />, active: false },
    { label: "Líneas & ChatBots", icon: <FaRobot />, active: false },
    { label: "API", icon: <FaKey />, active: false },
    { label: "Documentación", icon: <FaBook />, active: false },
  ];

  return (
    <div className="bg-light border-end vh-100 p-3" style={{ width: "250px", position: "fixed", top: 0, left: 0 }}>
      <h5 className="text-primary fw-bold mb-4">Menú</h5>
      <ul className="list-unstyled">
        {menuItems.map((item, index) => (
          <li key={index} className={`mb-2 p-2 rounded ${item.active ? "bg-primary text-white" : "text-dark"}`} style={{ cursor: "pointer" }}>
            <span className="me-2">{item.icon}</span>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
