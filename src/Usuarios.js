import React from "react";
import { Link } from "react-router-dom";
import { FaBell, FaUser, FaWhatsapp, FaCheckCircle, FaSpinner } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";

const Usuarios = () => {
  // Datos actualizados para coincidir con la imagen
  const contacts = [
    { name: "Pedro Giron", phone: "986413548", status: "Proceso" },
    { name: "Martin Perea", phone: "920613962", status: "Resuelto" },
    { name: "Gilberto Vinhuez", phone: "930745786", status: "Proceso" },
    { name: "Tomás Villarreal", phone: "956287103", status: "Resuelto" },
    { name: "Flor Huamán", phone: "927105236", status: "Proceso" },
    { name: "Luis Sanchez", phone: "973410654", status: "Resuelto" },
    { name: "Isabelle Monteirico", phone: "921103745", status: "Resuelto" },
    { name: "Estrella Oropeza", phone: "967845968", status: "Proceso" },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "Resuelto":
        return <FaCheckCircle className="text-success" />;
      case "Proceso":
        return <FaSpinner className="text-primary" />;
      default:
        return null;
    }
  };

  return (
    <div className="conversacion-container d-flex vh-100">
      <aside className="sidebar p-4 bg-dark text-white">
        <Link to="/dashboard" className="btn btn-outline-secondary mb-3">
          📌 Menú
        </Link>
        <div className="menu-groups">
          <div className="menu-group">
            <ul className="list-unstyled">
              <li className="menu-item" onClick={() => (window.location.href = "/dashboard")}>
                📩 Conversaciones
              </li>
              <li className="menu-item">
                <span className="menu-link">🔗 Conexiones</span>
              </li>
              <li className="menu-item" onClick={() => (window.location.href = "/contactos")}>
              📞 Contactos
              </li>            
            </ul>
          </div>
          <div className="menu-group">
            <ul className="list-unstyled">
              <li className="menu-item">
                <span className="menu-link">⚙️ Administración</span>
              </li>
              <li className="menu-item">
                <Link to="/usuarios" className="menu-link">👥 Usuarios</Link>
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
          <h4 className="mb-0">Contactos</h4>
          <div>
            <button className="btn btn-outline-secondary me-2">
              <FaBell />
            </button>
            <button className="btn btn-outline-secondary">
              <FaUser />
            </button>
          </div>
        </header>

        <section className="p-4 contactos-content">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Contactos (10191)</h2>
            <div>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Buscar contacto..."
              />
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-header bg-white">
              <h5 className="mb-0">
                <FaWhatsapp className="text-success me-2" />
                WhatsApp Contactos
              </h5>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Nombre</th>
                      <th>WhatsApp</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact, index) => (
                      <tr key={index}>
                        <td>{contact.name}</td>
                        <td>{contact.phone}</td>
                        <td>
                          <span className="d-flex align-items-center">
                            {getStatusIcon(contact.status)}
                            <span className="ms-2">{contact.status}</span>
                          </span>
                        </td>
                        <td>
                          <div className="btn-group" role="group">
                            <button 
                              className="btn btn-sm btn-outline-primary me-1"
                              title="Editar"
                            >
                              ✏️
                            </button>
                            <button 
                              className="btn btn-sm btn-outline-danger"
                              title="Eliminar"
                            >
                              🗑️
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Usuarios;