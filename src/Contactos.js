import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaWhatsapp, FaPencilAlt, FaTrashAlt, FaSearch, FaBell, FaCommentAlt, FaUser, FaEdit, FaTrash} from 'react-icons/fa';
import "./Dashboard.css";

const Contactos = () => {
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
                  <li
                  className="menu-item"
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
                    <li className="menu-item">📞 Contactos</li>
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
                          <div class="container-xl">
                <div class="table-responsive">
                    <div class="table-wrapper">
                        <div class="table-title">
                            <div class="row">
                                <div>
                                    <div class="header">
                                        <h2><FaBell style={{ color: 'white' }}/><FaCommentAlt style={{ color: 'white' }}/><FaUser style={{ color: 'white' }}/></h2>
                                    </div>
                                </div>
                                <div class="header-container">
                                    <h6 class="contacto">Contactos (3)</h6>
                                    <div class="button-group">
                                      <button class="buscar"><i class="fas fa-search"></i> <FaSearch/>Buscar...</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Whatsapp</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Pedro Giron</th>
                  <td>123456798</td>
                  <td>Resuelto</td>
                  <td><FaEdit className="text-warning me-2" style={{ cursor: "pointer" }} />
                  <FaTrash className="text-danger" style={{ cursor: "pointer" }} /></td>
                </tr>
                <tr>
                  <th>Martin Perea</th>
                  <td>987654321</td>
                  <td>Resuelto</td>
                  <td><FaEdit className="text-warning me-2" style={{ cursor: "pointer" }} />
                  <FaTrash className="text-danger" style={{ cursor: "pointer" }} /></td>
                </tr>
                <tr>
                  <th>Gilberto Virhuez</th>
                  <td>789654123</td>
                  <td>Proceso</td>
                  <td><FaEdit className="text-warning me-2" style={{ cursor: "pointer" }} />
                  <FaTrash className="text-danger" style={{ cursor: "pointer" }} /></td>
                </tr>
              </tbody>
            </table>
                    </div> 
                </div>   
            </div>
                        </main>
                      </div>
                );
              };

export default Contactos