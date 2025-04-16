import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaBell,
  FaUser,
} from "react-icons/fa";
import "../Estilizacion/Conexiones.css";
import { FaMessage } from "react-icons/fa6";
import { FaTrash, FaEdit, FaDesktop, FaMobile } from "react-icons/fa";

const Conexiones = () => {
  return (
    <div className="dashboard-container d-flex vh-100">
      <aside className="sidebar p-4 bg-dark text-white">
        <h2 className="menu-title text-center mb-4">📌 Menú</h2>
        <br />
        <br />
        <br />
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
                className="menu-item1"
                onClick={() => (window.location.href = "/Conexiones")}
              >
                🔗 Conexiones
              </li>
              <li className="menu-item">📞 Contactos</li>
            </ul>
          </div>
          <div className="menu-group">
            <ul className="list-unstyled">
              <li>⚙️ Administración</li>
              <li className="menu-item">👥 Usuarios</li>
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
          <h4 className="mb-0">Dashboard</h4>
          <div>
            <button className="btn btn-outline-secondary me-2">
              <FaBell />
            </button>

            <button className="btn btn-outline-secondary me-2">
              <FaMessage />
            </button>

            <button className="btn btn-outline-secondary">
              <FaUser />
            </button>
          </div>
        </header>
        <div className="container mt-4">
          <h5 className="TConexiones"> 🗒️ Conexiones </h5>
          <table className="table table-hover table-bordered mt-3 shadow-sm">
            <thead className="table-dark">
              <br></br>
              <tr>
                <th>Canal</th>
                <th>Nombre</th>
                <th>Télefono</th>
                <th>Estado</th>
                <th>Sesión</th>
                <th>Ultima Actualizacion</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody className="tablaConexiones">
              <tr>
                <td>
                  <FaWhatsapp />{" "}
                </td>
                <td>Whaticket PERU </td>
                <td>
                  <FaDesktop
                    className="Desktop me-2"
                    style={{ cursor: "pointer" }}
                  />
                  17879456548
                </td>
                <td>
                  <span className="badge bg-success">Conectado</span>
                </td>
                <td>
                  <button className="btn btn-sm btn-danger">Desconectar</button>
                </td>
                <td>08/04/2025 14:30</td>
                <td>
                  <FaEdit
                    className="text-warning me-2"
                    style={{ cursor: "pointer" }}
                  />
                  <FaTrash
                    className="text-danger"
                    style={{ cursor: "pointer" }}
                  />
                </td>
              </tr>

              {/* Se genera una 2da nueva columna  */}
              <tr>
                <td>
                  <FaWhatsapp />{" "}
                </td>
                <td>Whaticket LIMA </td>
                <td>
                  <FaDesktop
                    className="Desktop me-2"
                    style={{ cursor: "pointer" }}
                  />
                  179854568979
                </td>
                <td>
                  <span className="badge bg-success">Conectado</span>
                </td>
                <td>
                  <button className="btn btn-sm btn-danger">Desconectar</button>
                </td>
                <td>09/05/2025 15:30</td>
                <td>
                  <FaEdit
                    className="text-warning me-2"
                    style={{ cursor: "pointer" }}
                  />
                  <FaTrash
                    className="text-danger"
                    style={{ cursor: "pointer" }}
                  />
                </td>
              </tr>

              {/* Se genera 3era tabla Instagram */}
              <tr>
                <td>
                  <FaFacebook />{" "}
                </td>
                <td>Whaticket FB </td>
                <td>
                  <FaMobile
                    className="Desktop me-2"
                    style={{ cursor: "pointer" }}
                  />
                  1569878546
                </td>
                <td>
                  <span className="badge bg-success">Conectado</span>
                </td>
                <td>
                  <button className="btn btn-sm btn-danger">Desconectar</button>
                </td>
                <td>08/04/2025 14:30</td>
                <td>
                  <FaEdit
                    className="text-warning me-2"
                    style={{ cursor: "pointer" }}
                  />
                  <FaTrash
                    className="text-danger"
                    style={{ cursor: "pointer" }}
                  />
                </td>
              </tr>

              {/* Se genera 3era tabla Instagram */}
              <tr>
                <td>
                  <FaFacebook />{" "}
                </td>
                <td>Whaticket FB </td>
                <td>
                  <FaMobile
                    className="Desktop me-2"
                    style={{ cursor: "pointer" }}
                  />
                  1569878546
                </td>
                <td>
                  <span className="badge bg-success">Conectado</span>
                </td>
                <td>
                  <button className="btn btn-sm btn-danger">Desconectar</button>
                </td>
                <td>08/04/2025 14:30</td>
                <td>
                  <FaEdit
                    className="text-warning me-2"
                    style={{ cursor: "pointer" }}
                  />
                  <FaTrash
                    className="text-danger"
                    style={{ cursor: "pointer" }}
                  />
                </td>
              </tr>

              {/* Se genera 3era tabla Instagram */}
              <tr>
                <td>
                  <FaInstagram />{" "}
                </td>
                <td>Whaticket IG </td>
                <td>
                  <FaMobile
                    className="Desktop me-2"
                    style={{ cursor: "pointer" }}
                  />
                  1569878546
                </td>
                <td>
                  <span className="badge bg-success">Conectado</span>
                </td>
                <td>
                  <button className="btn btn-sm btn-danger">Desconectar</button>
                </td>
                <td>08/04/2025 14:30</td>
                <td>
                  <FaEdit
                    className="text-warning me-2"
                    style={{ cursor: "pointer" }}
                  />
                  <FaTrash
                    className="text-danger"
                    style={{ cursor: "pointer" }}
                  />
                </td>
              </tr>

              {/* Se genera 3era tabla Instagram */}
              <tr>
                <td>
                  <FaInstagram />{" "}
                </td>
                <td>Whaticket IG </td>
                <td>
                  <FaMobile
                    className="Desktop me-2"
                    style={{ cursor: "pointer" }}
                  />
                  1569878546
                </td>
                <td>
                  <span className="badge bg-success">Conectado</span>
                </td>
                <td>
                  <button className="btn btn-sm btn-danger">Desconectar</button>
                </td>
                <td>08/04/2025 14:30</td>
                <td>
                  <FaEdit
                    className="text-warning me-2"
                    style={{ cursor: "pointer" }}
                  />
                  <FaTrash
                    className="text-danger"
                    style={{ cursor: "pointer" }}
                  />
                </td>
              </tr>

              {/* Se genera 3era tabla Instagram */}
              <tr>
                <td>
                  <FaInstagram />{" "}
                </td>
                <td>Whaticket IG </td>
                <td>
                  <FaMobile
                    className="Desktop me-2"
                    style={{ cursor: "pointer" }}
                  />
                  1569878546
                </td>
                <td>
                  <span className="badge bg-success">Conectado</span>
                </td>
                <td>
                  <button className="btn btn-sm btn-danger">Desconectar</button>
                </td>
                <td>08/04/2025 14:30</td>
                <td>
                  <FaEdit
                    className="text-warning me-2"
                    style={{ cursor: "pointer" }}
                  />
                  <FaTrash
                    className="text-danger"
                    style={{ cursor: "pointer" }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Conexiones;
