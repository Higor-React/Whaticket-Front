import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {FaSearch, FaBell, FaCommentAlt, FaUser, FaUserEdit, FaTrashAlt,} from 'react-icons/fa';
import "../Estilizacion/Usuarios.css";

const Usuarios = () => {
  const [Agregar, AgregarUsuario] = useState(false);
  const [Buscar, BuscarUsuario] = useState(false);
  const [Eliminar, EliminarUsuario] = useState(false);
  const [Editar, EditarUsuario] = useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  const usuarios = [
    { id: 1, nombre: "🔴Pedro", correo: "Pedro@gmail.com", perfil: "Admin", area: "Venta" },
    { id: 2, nombre: "🟢Gilberto", correo: "Gilberto@gmail.com", perfil: "Admin", area: "Venta" },
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
              <li className="menu-item">👥 Usuarios</li>
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
                      <h2>
                        <FaBell style={{ color: 'white' }}/>
                        <FaCommentAlt style={{ color: 'white' }}/>
                        <FaUser style={{ color: 'white' }}/>
                      </h2>
                    </div>
                  </div>
                  
                  <div class="header-container">
                    <h6 class="contacto">Usuarios (3)</h6>
                    <div class="button-group">
                      <button class="buscar" onClick={() => BuscarUsuario(true)}>
                        <i class="fas fa-search"></i> <FaSearch/>Buscar...
                      </button>
                      <button className="buscar2" onClick={() => AgregarUsuario(true)}>
                        Agregar Usuarios
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container mt-4">
              <table className="table table-hover table-bordered mt-3 shadow-sm">
            <thead className="table-dark">
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Correo Electronico</th>
                    <th scope="col">Perfil</th>
                    <th scope="col">Area</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                {usuarios.map((usuario) => (
                  <tr key={usuario.id}>
                  <th>{usuario.nombre}</th>
                  <td>{usuario.correo}</td>
                  <td>{usuario.perfil}</td>
                  <td>{usuario.area}</td>
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
                  <label className="form-label">Correo Electronico</label>
                  <input type="email" className="form-control" placeholder="123@gmail.com" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Numero de Whatsapp</label>
                  <input type="text" className="form-control" placeholder="+51 987655123" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Rol</label>
                  <select className="form-select">
                    <option>Admin</option>
                    <option>Usuario</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Area</label>
                  <input type="text" className="form-control" placeholder="Ventas" />
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

        {/* BUSCAR USUARIOS */}
        {Buscar && (
          <div className="custom-modal">
            <div className="modal-content">
              <h4>Buscar Usuario</h4>
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="busqueda..." />
                </div>
                <div className="d-flex justify-content-end">
                  <button 
                    type="button" 
                    className="btn0" 
                    onClick={() => BuscarUsuario(false)}
                  >
                    Cancelar
                  </button>
                  <button type="submit" className="btn3">
                    Buscar
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
          <label className="form-label">Correo Electronico</label>
          <input
            type="email"
            className="form-control"
            value={usuarioSeleccionado.correo}
            onChange={(e) => setUsuarioSeleccionado({ ...usuarioSeleccionado, correo: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Perfil</label>
          <select
            className="form-select"
            value={usuarioSeleccionado.perfil}
            onChange={(e) => setUsuarioSeleccionado({ ...usuarioSeleccionado, perfil: e.target.value })}
          >
            <option>Admin</option>
            <option>Usuario</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Area</label>
          <input
            type="text"
            className="form-control"
            value={usuarioSeleccionado.area}
            onChange={(e) => setUsuarioSeleccionado({ ...usuarioSeleccionado, area: e.target.value })}
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

export default Usuarios;