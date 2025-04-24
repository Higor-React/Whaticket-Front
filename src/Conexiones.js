import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTrashAlt, FaBell, FaCommentAlt, FaUserEdit, FaCheckCircle} from 'react-icons/fa';
import "./Conexiones.css";

const Conexiones = () => {
    const [Agregar, AgregarUsuario] = useState(false);
    const [Eliminar, EliminarUsuario] = useState(false);
    const [Editar, EditarUsuario] = useState(false);
      const [Desconectar, DesconectarUsuario] = useState(false);
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
    const usuarios = [
      { id: 1, canal: <FaInstagram size = '50' style={{ color: '#C13584' }}/>, nombre: "Whaticket IG", telefono: "987654321", estado: <FaCheckCircle size = '30' style={{color :"#00ff04", }} />, ultima_actualizacion: "23/04/2025"},
      { id: 2, canal: <FaFacebook size = '50' style={{color: "#0062ff",}} />, nombre: "Whaticket FB", telefono: "123456789", estado: <FaCheckCircle size = '30' style={{color :"#00ff04", }} />, ultima_actualizacion: "23/04/2025"},
      { id: 3, canal: <FaWhatsapp size = '50' style={{color: "#00ff62",}} />, nombre: "Whaticket WSP", telefono: "123654789", estado: <FaCheckCircle size = '30' style={{color :"#00ff04", }} />, ultima_actualizacion: "23/04/2025"}
    ];

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
                                                  <h2><FaBell style={{ color: 'white' }}/><FaCommentAlt style={{ color: 'white' }}/><FaUserEdit style={{ color: 'white' }}/></h2>
                                              </div>
                                          </div>
                                          <div class="header-container">
                                              <h6 class="contacto">Conexiones</h6>
                                              <button className="buscar2" onClick={() => AgregarUsuario(true)}>Agregar</button>
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
                                        {usuarios.map((usuario) => (
                                          <tr key={usuario.id}>
                                          <th>{usuario.canal}</th>
                                          <td>{usuario.nombre}</td>
                                          <td>{usuario.telefono}</td>
                                          <td>{usuario.estado}</td>
                                          <td><button type="submit" className="btn4" onClick={() => DesconectarUsuario(true)} >Desconectar</button></td>
                                          <td>{usuario.ultima_actualizacion}</td>
                                          <td>
                                        <FaUserEdit size = '30'
                                          className="text-edit me-3"
                                          style={{color: "#0d172a", cursor: "pointer" }}
                                          onClick={() => {
                                          setUsuarioSeleccionado(usuario);
                                          EditarUsuario(true);
                                        }}/>
                                        <FaTrashAlt size = '30' className="text-danger" style={{ cursor: "pointer" }} onClick={() => EliminarUsuario(true)} />
                                          </td>
                                          </tr>
                                        ))}
                                        </tbody>
                      </table>
                              </div> 
                          </div>   
                      </div>

                      {/* AGREGAR USUARIOS */}
        {Agregar && (
          <div className="custom-modal">
            <div className="modal-content">
              <h4>Agregar Usuario</h4>
              <form>
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input type="text" className="form-control" placeholder="Nombre" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Telefono</label>
                  <input type="email" className="form-control" placeholder="987-564-123" />
                </div>
                <div className="d-flex justify-content-end">
                  <button 
                    type="button" 
                    className="btn0" 
                    onClick={() => AgregarUsuario(false)}
                  >
                    Cancelar
                  </button>
                  <button type="submit" className="btn3">
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* DESCONECTAR USUARIO */}
        {Desconectar && (
          <div className="custom-modal">
            <div className="modal-content">
              <h4>¿Estas seguro que deseas desconectar al usuario?</h4>
              <form>

                <div className="d-flex justify-content-end">
                  <button 
                    type="button" 
                    className="btn0" 
                    onClick={() => DesconectarUsuario(false)}
                  >
                    Cancelar
                  </button>
                  <button type="btn1" className="btn1">
                    Desconectar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ELIMINAR USUARIOS */}
        {Eliminar && (
          <div className="custom-modal">
            <div className="modal-content">
              <h4>¿Estas seguro que quieres eliminar al usuario?</h4>
              <form>
                <div className="mb-3">
                  <label className="form-label">Esta accion no se podra revertir</label>
                </div>
                <div className="d-flex justify-content-end">
                  <button 
                    type="button" 
                    className="btn0" 
                    onClick={() => EliminarUsuario(false)}
                  >
                    Cancelar
                  </button>
                  <button type="btn1" className="btn1">
                    Eliminar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* EDITAR USUARIOS */}
        {Editar && usuarioSeleccionado && (
  <div className="custom-modal">
    <div className="modal-content">
      <h4>Editar Usuario</h4>
      <form>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={usuarioSeleccionado.nombre}
            onChange={(e) => setUsuarioSeleccionado({ ...usuarioSeleccionado, nombre: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Telefono</label>
          <input
            type="email"
            className="form-control"
            value={usuarioSeleccionado.telefono}
            onChange={(e) => setUsuarioSeleccionado({ ...usuarioSeleccionado, telefono: e.target.value })}
          />
        </div>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn0"
            onClick={() => {
              EditarUsuario(false);
              setUsuarioSeleccionado(null);
            }}
          >
            Cancelar
          </button>
          <button type="submit" className="btn3">
            Guardar
          </button>
        </div>
      </form>
    </div>
  </div>
        )}
      </main>
    </div>
  );
};

export default Conexiones;