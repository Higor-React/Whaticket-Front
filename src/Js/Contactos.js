import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBell, FaUser, FaWhatsapp, FaCheckCircle, FaSpinner } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Estilizacion/Contactos.css";

const Contactos = () => {
  // TUS DATOS EXISTENTES (NO MODIFICADOS)
  const contacts = [
    { name: "Pedro Giron",dni:"75488756",phone:"986413548",gmail:"Pedrogiron12@gmail.com",departamento:"Lima",distrito:"Breña",direccion:"calle1",status: "Proceso" },
    { name: "Martin Perea",dni:"69588754",phone:"920613962",gmail:"Martinperea54@gmail.com",departamento:"Lima",distrito:"Breña",direccion:"calle2",status: "Resuelto" },
    { name: "Gilberto Vinhuez",dni:"77544875",phone:"930745786",gmail:"Gilbertovinhuez@gmail.com",departamento:"Lima",distrito:"Breña",direccion:"calle3",status: "Proceso" },
    { name: "Tomás Villarreal",dni:"63225477",phone:"956287103",gmail:"Tomasvillarreal85@gmail.com",departamento:"Lima",distrito:"Breña",direccion:"calle4",status: "Resuelto" },
    { name: "Flor Huamán",dni:"77885522",phone:"927105236",gmail:"Florhuaman2@gmail.com",departamento:"Lima",distrito:"Breña",direccion:"calle5",status: "Proceso" },
    { name: "Luis Sanchez",dni:"15548789",phone:"973410654",gmail:"Luissanchez@gmail.com",departamento:"Lima",distrito:"Breña",direccion:"calle6",status: "Resuelto" },
    { name: "Isabelle Monteirico",dni:"77885544",phone:"921103745",gmail:"Isabellemonteirico@gmail.com",departamento:"Lima",distrito:"Breña",direccion:"calle7",status: "Resuelto" },
    { name: "Estrella Oropeza",dni:"11478554",phone:"967845968",gmail:"Estrellaoropeza78@gmail.com",departamento:"Lima",distrito:"Breña",direccion:"calle8",status: "Proceso" },
  ];

  // ESTADOS NUEVOS PARA LOS MODALES
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);

  // FUNCIÓN PARA MOSTRAR ICONOS (EXISTENTE)
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

  // FUNCIONES NUEVAS PARA MANEJAR LOS MODALES
  const handleEditClick = (contact) => {
    setCurrentContact(contact);
    setShowEditModal(true);
  };

  const handleDeleteClick = (contact) => {
    setCurrentContact(contact);
    setShowDeleteModal(true);
  };

  return (
    <div className="conversacion-container d-flex vh-100">
      <aside className="sidebar p-4 bg-dark text-white">
        <Link to="/dashboard" className="btn btn-outline-secondary mb-3">📌 Menú</Link>
        <br />
        <br />
        <br />
        <div className="menu-groups">
          <div className="menu-group">
            <ul className="list-unstyled">
              <li 
                className="menu-item" 
                onClick={() => (window.location.href = "/dashboard")}
              >
                📩 Conversaciones
              </li>

              <li className="menu-item"><span className="menu-link">🔗 Conexiones</span></li>
              <li className="menu-item"><Link to="/contactos" className="menu-link">📞 Contactos</Link></li>
            </ul>
          </div>
          <div className="menu-group">
            <ul className="list-unstyled">
              <li className="menu-item">
                <span className="menu-link">⚙️ Administración</span></li>
              <li className="menu-item">
                <span className="menu-link">👥 Usuarios</span>
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
      
      {/* TÚ CONTENIDO PRINCIPAL EXISTENTE */}
      <main className="main-content flex-grow-1 d-flex flex-column bg-light">
        <header className="header d-flex justify-content-between align-items-center p-3 border-bottom bg-white shadow-sm">
          <h4 className="mb-0">Contactos</h4>
          <div>
            <button className="btn btn-outline-secondary me-2">
              <FaBell />
            </button>
            <button className="modal-delete-btn"
              onClick={() => (window.location.href = "/")}>
              <FaUser />{" "}
              Cerrar Sesion
            </button>
          </div>
        </header>

        <section className="p-4 contactos-content">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2> </h2>
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
                WhatsApp Contacts
              </h5>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="table-light">
                    <tr>
                      <th>Nombre</th>
                      <th>DNI</th>
                      <th>WhatsApp</th>
                      <th>Gmail</th>
                      <th>Departamento</th>
                      <th>Distrito</th>
                      <th>Dirección</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact, index) => (
                      <tr key={index}>
                        <td>{contact.name}</td>
                        <td>{contact.dni}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.gmail}</td>
                        <td>{contact.departamento}</td>
                        <td>{contact.distrito}</td>
                        <td>{contact.direccion}</td>
                        <td>
                          <span className="d-flex align-items-center">
                            {getStatusIcon(contact.status)}
                            <span className="ms-2">{contact.status}</span>
                          </span>
                        </td>
                        <td>
                          <div className="btn-group" role="group">
                            <button 
                              className="btn btn-sm btn-outline-success me-1"
                              title="WhatsApp"
                            >
                              <FaWhatsapp className="text-success me-8" />
                            </button>
                            <button 
                              className="btn btn-sm btn-outline-primary me-1"
                              title="Editar"
                              onClick={() => handleEditClick(contact)}
                            >
                              ✏️
                            </button>
                            <button 
                              className="btn btn-sm btn-outline-danger"
                              title="Eliminar"
                              onClick={() => handleDeleteClick(contact)}
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

                        
        {showEditModal && currentContact && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h4>Editar contacto</h4>
              
              <div className="modal-section">
                <h5>Detalles del contacto</h5>
                <div className="form-group">
                  <label>Nombre</label>
                  <input type="text" className="form-control" value={currentContact.name} readOnly />
                </div>
                <div className="form-group">
                  <label>DNI</label>
                  <input type="text" className="form-control" value={currentContact.dni} placeholder="DNI" />
                </div>
              </div>

              <div className="modal-section">
                <h5>WhatsApp</h5>
                <div className="form-group">
                  <label>Número de WhatsApp</label>
                  <input type="text" className="form-control" value={currentContact.phone} readOnly />
                </div>
                <div className="form-group">
                  <label>Correo Electrónico</label>
                  <input type="text" className="form-control" value={currentContact.gmail}    placeholder="Correo electrónico" />
                </div>
              </div>

              <div className="modal-section">
                <h5>Información adicional</h5>
                <div className="form-group">
                  <label>Departamento</label>
                  <input type="text" className="form-control" value={currentContact.departamento} placeholder="Departamento" />
                </div>
                <div className="form-group">
                  <label>Distrito</label>
                  <input type="text" className="form-control" value={currentContact.distrito} placeholder="Distrito" />
                </div>
                <div className="form-group">
                  <label>Dirección</label>
                  <input type="text" className="form-control" value={currentContact.direccion} placeholder="Dirección" />
                </div>
              </div>

              <div className="modal-actions">
                <button 
                  className="btn btn-secondary" 
                  onClick={() => setShowEditModal(false)}
                >
                  CANCELAR
                </button>
                <button className="btn btn-primary">
                  GUARDAR CAMBIOS
                </button>
              </div>
            </div>
          </div>
        )}

        {showDeleteModal && currentContact && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h4 className="modal-delete-title">Eliminar Contacto</h4>
              <p className="modal-delete-text">¿Estas seguro que deseas eliminar a este Contacto?</p>
              <div className="modal-delete-actions">
                <button className="modal-cancel-btn"onClick={() => setShowDeleteModal(false)}>CANCELAR</button>
                <button className="modal-delete-btn">ELIMINAR</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>  
  );
};

export default Contactos;