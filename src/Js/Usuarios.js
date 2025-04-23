import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {FaSearch, FaBell, FaCommentAlt, FaUser, FaEdit, FaTrash } from 'react-icons/fa';
import "../Estilizacion/Usuarios.css"; // Asegúrate de que la ruta sea correcta

const Usuarios = () => {
  const [Agregar, AgregarUsuario] = useState(false);
  const [Buscar, BuscarUsuario] = useState(false);
  const [Eliminar, EliminarUsuario] = useState(false);
  const [Editar, EditarUsuario] = useState(false);

  return (
    <div className="conversacion-container d-flex vh-100">
      {/* SIDEBAR DUPLICADO DEL COMPONENTE CONVERSACIONES */}
      <aside className="sidebar p-4 bg-dark text-white">
        <h2 className="menu-title text-center mb-4">📌 Menú</h2> {/* Título h2 */}
        <br /> {/* Saltos de línea exactos */}
        <br />
        <br />

        <div className="menu-groups">
          <div className="menu-group">
            <ul className="list-unstyled">
              {/* Primer item con className="menu-item1" */}
              <li
                className="menu-item1"
                onClick={() => (window.location.href = "/conversaciones")} // Navegación exacta
              >
                📩 Conversaciones
              </li>
              <li
                className="menu-item"
                onClick={() => (window.location.href = "/Conexiones")} // Navegación exacta
              >
                🔗 Conexiones
              </li>
              <li
                className="menu-item"
                onClick={() => (window.location.href = "/Contactos")} // Navegación exacta
              >
                📞 Contactos
              </li>
            </ul>
          </div>

          <div className="menu-group">
            <ul className="list-unstyled">
              <li className="menu-item">⚙️ Administración</li> {/* Sin onClick en el original */}
              <li
                className="menu-item"
                onClick={() => (window.location.href = "/Usuarios")} // Navegación exacta
              >
                👥 Usuarios
              </li>
              <li className="menu-item">🤖 Líneas & ChatBots</li> {/* Sin onClick en el original */}
            </ul>
          </div>

          <div className="menu-group">
            <ul className="list-unstyled">
              <li className="menu-item">📡 API</li> {/* Sin onClick en el original */}
              <li className="menu-item">🔑 Tokens</li> {/* Sin onClick en el original */}
              <li className="menu-item">📚 Documentación</li> {/* Sin onClick en el original */}
            </ul>
          </div>
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL EXISTENTE DE USUARIOS */}
      <main className="main-content flex-grow-1 d-flex flex-column bg-light">
        {/* Header replicado del componente Conversaciones */}
         <header className="header d-flex justify-content-between align-items-center p-3 border-bottom bg-white shadow-sm">
          <h4 className="mb-0">Usuarios</h4> {/* Título específico de Usuarios */}
          <div>
            <button className="btn btn-outline-secondary me-2">
              <FaBell />
            </button>
            <button className="btn btn-outline-secondary">
              <FaUser />
            </button>
             {/* Botón Cerrar Sesión como en el header de Conversaciones */}
            <button
              className="btn btn-outline-secondary"
              onClick={() => (window.location.href = "/")} // Navegación exacta
            >
              Cerrar Sesión
            </button>
          </div>
        </header>


        <div class="container-xl">
          <div class="table-responsive">
            <div class="table-wrapper">
              <div class="table-title">
                <div class="row">
                  <div>
                    <div class="header">
                      {/* Replicando el header del Usuarios original, pero con los íconos movidos al header principal arriba */}
                       <h2 className="mb-0">Gestión de Usuarios</h2> {/* Título principal de la sección */}
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

              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Correo Electronico</th>
                    <th scope="col">Perfil</th>
                    <th scope="col">Area</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>🔴Pedro</th>
                    <td>Pedro@gmail.com</td>
                    <td>Admin</td>
                    <td>Venta</td>
                    <td>
                      <FaEdit className="text-warning me-2" style={{ cursor: "pointer" }} onClick={() => EditarUsuario(true)} />
                      <FaTrash className="text-danger" style={{ cursor: "pointer" }} onClick={() => EliminarUsuario(true)} />
                    </td>
                  </tr>
                  <tr>
                    <th>🔴Pedro</th>
                    <td>Pedro@gmail.com</td>
                    <td>Pedro@gmail.com</td>
                    <td>Admin</td>
                    <td>Venta</td>
                    <td>
                      <FaEdit className="text-warning me-2" style={{ cursor: "pointer" }} onClick={() => EditarUsuario(true)} />
                      <FaTrash className="text-danger" style={{ cursor: "pointer" }} onClick={() => EliminarUsuario(true)} />
                    </td>
                  </tr>
                  <tr>
                    <th>🟢Gilberto</th>
                    <td>Gilberto@gmail.com</td>
                    <td>Admin</td>
                    <td>Venta</td>
                    <td>
                      <FaEdit className="text-warning me-2" style={{ cursor: "pointer" }} onClick={() => EditarUsuario(true)} />
                      <FaTrash className="text-danger" style={{ cursor: "pointer" }} onClick={() => EliminarUsuario(true)} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* AGREGAR USUARIOS (Modal existente) */}
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
                    className="btn btn-secondary me-2"
                    onClick={() => AgregarUsuario(false)}
                  >
                    Cancelar
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* BUSCAR USUARIOS (Modal existente) */}
        {Buscar && (
          <div className="custom-modal">
            <div className="modal-content">
              <h4>Buscar Usuario</h4>
              <form>
                <div className="mb-3">
                  <label className="form-label">Buscar por:</label>
                  <select className="form-select">
                    <option>Nombre del usuario</option>
                    <option>Correo Electronico</option>
                    <option>Numero</option>
                  </select>
                  <input type="text" className="form-control" placeholder="busqueda..." />
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    onClick={() => BuscarUsuario(false)}
                  >
                    Cancelar
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Buscar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ELIMINAR USUARIOS (Modal existente) */}
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
                    className="btn0" // Clase btn0 y btn1 parecen ser personalizadas
                    onClick={() => EliminarUsuario(false)} // Cerrar modal
                  >
                    Cancelar
                  </button>
                  <button type="btn1" className="btn1"> {/* type="btn1" no es un tipo válido, debería ser "button" o "submit" */}
                    Aceptar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* EDITAR USUARIOS (Modal existente) */}
        {Editar && (
          <div className="custom-modal">
          <div className="modal-content">
            <h4>Editar Usuario</h4>
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
                  className="btn btn-secondary me-2"
                  onClick={() => EditarUsuario(false)} // Cerrar modal
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
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