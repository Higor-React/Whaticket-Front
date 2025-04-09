import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaBell,
  FaUser,
  FaCheckSquare,
  FaSearch,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Estilizacion/Dashboard.css";

const Conversaciones = () => {
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
                className="menu-item1" 
                onClick={() => (window.location.href = "/Dashboard")}
              >
                📩 Conversaciones
              </li>

              <li className="menu-item" onClick={()=> (window.location.href = "/Conexiones")}>🔗 Conexiones</li>
              <li className="menu-item">📞 Contactos</li>
            </ul>
          </div>
          <div className="menu-group">
            <ul className="list-unstyled">
              <li className="menu-item">⚙️ Administración</li>
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
            <button className="btn btn-outline-secondary">
              <FaUser />
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={() => (window.location.href = "/")}
            >
              {" "}
              Cerrar Sesion
            </button>
          </div>
        </header>
        <section className="chat-section d-flex flex-grow-1">
          <div
            className="chat-list bg-white p-3 border-end shadow-sm"
            style={{ width: "380px" }}
          >
            <div className="nav nav-tabs mb-3">
              <button className="nav-link active">
                {" "}
                <FaCheckSquare /> Abierto
              </button>
              <button className="nav-link">
                {" "}
                <FaCheckSquare /> Resueltos
              </button>
              <button className="nav-link">
                {" "}
                <FaSearch /> Buscar
              </button>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="fw-bold">Todos</span>
              <select className="form-select form-select-sm w-auto">
                <option> Líneas: 9 </option>
              </select>
            </div>
            <div className="list-group">
              <div className="list-group-item d-flex align-items-center border-0 shadow-sm">
                <div
                  className="rounded-circle bg-success me-3"
                  style={{ width: "40px", height: "40px" }}
                ></div>
                <div className="flex-grow-1">
                  <p className="mb-0 fw-bold">María López</p>
                  <small className="text-muted">10:30 AM</small>
                </div>
                <FaWhatsapp className="text-success" />
              </div>

              <div className="list-group-item d-flex align-items-center border-0 shadow-sm">
                <div
                  className="rounded-circle bg-danger me-3"
                  style={{ width: "40px", height: "40px" }}
                ></div>
                <div className="flex-grow-1">
                  <p className="mb-0 fw-bold">Carlos Gómez</p>
                  <small className="text-muted">9:15 AM</small>
                </div>
                <FaInstagram className="text-danger" />
              </div>

              <div className="list-group-item d-flex align-items-center border-0 shadow-sm">
                <div
                  className="rounded-circle bg-primary me-3"
                  style={{ width: "40px", height: "40px" }}
                ></div>
                <div className="flex-grow-1">
                  <p className="mb-0 fw-bold">Elena Ramírez</p>
                  <small className="text-muted">12:45 PM</small>
                </div>
                <FaFacebook className="text-primary" />
              </div>

              <div className="list-group-item d-flex align-items-center border-0 shadow-sm">
                <div
                  className="rounded-circle bg-info me-3"
                  style={{ width: "40px", height: "40px" }}
                ></div>
                <div className="flex-grow-1">
                  <p className="mb-0 fw-bold">Fernando Díaz</p>
                  <small className="text-muted">8:20 AM</small>
                </div>
                <FaFacebook className="text-info" />
              </div>

              <div className="list-group-item d-flex align-items-center border-0 shadow-sm">
                <div
                  className="rounded-circle bg-dark me-3"
                  style={{ width: "40px", height: "40px" }}
                ></div>
                <div className="flex-grow-1">
                  <p className="mb-0 fw-bold">Javier Méndez</p>
                  <small className="text-muted">7:50 AM</small>
                </div>
                <FaFacebook className="text-info" />
              </div>

              <div className="list-group-item d-flex align-items-center border-0 shadow-sm">
                <div
                  className="rounded-circle bg-danger me-3"
                  style={{ width: "40px", height: "40px" }}
                ></div>
                <div className="flex-grow-1">
                  <p className="mb-0 fw-bold">Ana Torres</p>
                  <small className="text-muted">6:30 PM</small>
                </div>
                <FaInstagram className="text-danger" />
              </div>

              <div className="list-group-item d-flex align-items-center border-0 shadow-sm">
                <div
                  className="rounded-circle bg-primary me-3"
                  style={{ width: "40px", height: "40px" }}
                ></div>
                <div className="flex-grow-1">
                  <p className="mb-0 fw-bold">Miguel Ángel</p>
                  <small className="text-muted">3:25 PM</small>
                </div>
                <FaFacebook className="text-primary" />
              </div>

              <div className="list-group-item d-flex align-items-center border-0 shadow-sm">
                <div
                  className="rounded-circle bg-success me-3"
                  style={{ width: "40px", height: "40px" }}
                ></div>
                <div className="flex-grow-1">
                  <p className="mb-0 fw-bold">Rosa Fernández</p>
                  <small className="text-muted">4:40 PM</small>
                </div>
                <FaWhatsapp className="text-success" />
              </div>
            </div>
          </div>
          <div className="chat-window d-flex align-items-center justify-content-center flex-grow-1 bg-white shadow-sm">
            <p className="text-muted">
              📨 Seleccione un ticket para empezar a chatear
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Conversaciones;
