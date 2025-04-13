import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaWhatsapp, FaPencilAlt, FaTrashAlt, FaSearch, FaBell, FaCommentAlt, FaUser, FaEdit, FaTrash} from 'react-icons/fa';
import "./Conexiones.css";

const Conexiones = () => {
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
                  <li className="menu-item">🔗 Conexiones</li>
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
                                              <h6 class="contacto">Conexiones</h6>
                                              <div class="button-group">
                                                <button class="buscar2">Agregar</button>
                                          </div>
                                          </div>
                                      </div>
                                  </div>
                                  <table class="table">
                        <thead class="thead-dark">
                          <tr>
                            <th scope="col">Canal</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Sesion</th>
                            <th scope="col">Ultima Actualizacion</th>
                            <th scope="col">Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th><img src="img/instagram.png" alt="Logo de Facebook" style={{ width: '60px', height: '60px', verticalAlign: 'middle' }}/></th>
                            <td>Whaticket IG</td>
                            <td>123456789</td>
                            <td>🟢</td>
                            <td><button className="con">Desconectar</button></td>
                            <td>12/04/25 19:41</td>
                            <td><FaEdit className="text-warning me-2" style={{ cursor: "pointer" }} />
                            <FaTrash className="text-danger" style={{ cursor: "pointer" }} /></td>
                          </tr>
                          <tr>
                            <th><img src="img/face.png" alt="Logo de Facebook" style={{ width: '50px', height: '45px', verticalAlign: 'middle' }}/></th>
                            <td>Whaticket FB</td>
                            <td>987654321</td>
                            <td>🟢</td>
                            <td><button className="con">Desconectar</button></td>
                            <td>12/04/25 19:42</td>
                            <td><FaEdit className="text-warning me-2" style={{ cursor: "pointer" }} />
                            <FaTrash className="text-danger" style={{ cursor: "pointer" }} /></td>
                          </tr>
                          <tr>
                            <th><img src="img/whatsapp.webp" alt="Logo de Facebook" style={{ width: '60px', height: '60px', verticalAlign: 'middle' }}/></th>
                            <td>Whaticket WSP</td>
                            <td>321456987</td>
                            <td>🟢</td>
                            <td><button className="con">Desconectar</button></td>
                            <td>12/04/25 19:43</td>
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

export default Conexiones;