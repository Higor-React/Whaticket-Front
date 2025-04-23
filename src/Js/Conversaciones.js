import React, { useState } from "react";
import {
  FaWhatsapp,
  FaBell,
  FaUser,
  FaCheckSquare,
  FaSearch,
  FaEye,
} from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Estilizacion/Conversaciones.css";
import { Modal, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";

const Conversaciones = () => {
  const TareasTrabajando = [
    { id: 1, nombre: "Anais", estado: "Trabajando", hora: "12:00" },
    { id: 2, nombre: "Pedro", estado: "Trabajando", hora: "11:00" },
    { id: 3, nombre: "Ismael", estado: "Trabajando", hora: "01:00" },
    { id: 4, nombre: "Lucía", estado: "Trabajando", hora: "09:30" },
    { id: 5, nombre: "Martín", estado: "Trabajando", hora: "10:15" },
    { id: 6, nombre: "Camila", estado: "Trabajando", hora: "14:45" },
    { id: 7, nombre: "Diego", estado: "Trabajando", hora: "08:20" },
    { id: 8, nombre: "Sofía", estado: "Trabajando", hora: "13:05" },
    { id: 9, nombre: "Andrés", estado: "Trabajando", hora: "15:10" },
    { id: 10, nombre: "Valentina", estado: "Trabajando", hora: "16:00" },
    { id: 11, nombre: "Tomás", estado: "Trabajando", hora: "17:30" },
    { id: 12, nombre: "Renata", estado: "Trabajando", hora: "18:45" },
  ];

  const TareasPendiente = [
    { id: 13, nombre: "Carlos", estado: "Pendiente", hora: "01:00" },
    { id: 14, nombre: "Juan", estado: "Pendiente", hora: "01:00" },
    { id: 15, nombre: "Luisa", estado: "Pendiente", hora: "02:30" },
    { id: 16, nombre: "Diego", estado: "Pendiente", hora: "03:15" },
    { id: 17, nombre: "Valeria", estado: "Pendiente", hora: "04:45" },
    { id: 18, nombre: "Andrés", estado: "Pendiente", hora: "05:00" },
    { id: 19, nombre: "Fernanda", estado: "Pendiente", hora: "06:10" },
    { id: 20, nombre: "Gabriel", estado: "Pendiente", hora: "07:25" },
    { id: 21, nombre: "Lorena", estado: "Pendiente", hora: "08:55" },
    { id: 22, nombre: "Tomás", estado: "Pendiente", hora: "09:40" },
    { id: 23, nombre: "Paola", estado: "Pendiente", hora: "10:20" },
    { id: 24, nombre: "Nicolás", estado: "Pendiente", hora: "11:50" },
  ];

  const [vista, setVista] = useState("trabajando");
  const [showModal, setShowModal] = useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

  const TareasMostrada =
    vista === "trabajando" ? TareasTrabajando : TareasPendiente;

  const handleAceptarClick = (tarea) => {
    setUsuarioSeleccionado(tarea);
    setShowModal(true);
  };

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

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
              <li className="menu-item" onClick={() => (window.location.href = "/Contactos")}>📞 Contactos</li>
            </ul>
          </div>
          <div className="menu-group">
            <ul className="list-unstyled">
            <li  className="menu-item">⚙️ Administración</li>
              <li  className="menu-item"
                onClick={() => (window.location.href = "/Usuarios")}>👥 Usuarios</li>
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
              Cerrar Sesión
            </button>
          </div>
        </header>
        <section className="chat-section d-flex flex-grow-1">
          <div
            className="chat-list bg-white p-3 border-end shadow-sm"
            style={{ width: "400px" }}
          >
            <div className="nav nav-tabs mb-3">
              <button className="nav-link active">
                <FaCheckSquare /> Abierto
              </button>
              <button className="nav-link">
                <FaCheckSquare /> Resueltos
              </button>
              <button className="nav-link">
                <FaSearch /> Buscar
              </button>
            </div>

            <div className="tab-buttons">
              <button
                className={`tab-button ${
                  vista === "trabajando" ? "active" : ""
                }`}
                onClick={() => setVista("trabajando")}
              >
                Trabajando en
              </button>
              <button
                className={`tab-button ${vista === "espera" ? "active" : ""}`}
                onClick={() => setVista("espera")}
              >
                En espera
              </button>
            </div>

            <div className="contenedor-tabla">
              {TareasMostrada.map((tarea) => (
                <div
                  className="fila-tarea"
                  key={tarea.id}
                  onClick={() => setUsuarioSeleccionado(tarea)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="avatar"></div>
                  <div className="detalle-tarea">
                    <h6>{tarea.nombre}</h6>
                    <p>Hola, sigue disponible</p>
                  </div>
                  {vista === "espera" && (
                    <div className="contenedor-boton">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleAceptarClick(tarea)}
                      >
                        Aceptar
                      </button>
                    </div>
                  )}
                  <div className="red-social">
                    <FaWhatsapp />
                  </div>
                  <div className="hora-ojo">
                    <div>{tarea.hora}</div>
                    <FaEye size={"16px"} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="chat-window">
            {usuarioSeleccionado ? (
              <>
                <div className="chat-header">
                  💬 Chat con {usuarioSeleccionado.nombre}
                </div>

                <div className="chat-body">
                  <div className="mensaje-usuario">
                    Hola, ¿sigue disponible?
                  </div>
                  <div className="mensaje-sistema">
                    Sí, estoy disponible. ¿En qué puedo ayudarte?
                  </div>
                </div>

                <div className="chat-footer d-flex align-items-center gap-2">
                  <button
                    className="icon-button"
                    title="Calendario"
                    onClick={() => setShowDatePicker(true)}
                  >
                    📅
                  </button>
                  <input
                    type="text"
                    className="chat-input flex-grow-1"
                    placeholder="Escribe un mensaje..."
                  />
                  <button
                    className="icon-button"
                    title="Hora"
                    onClick={() => setShowTimePicker(true)}
                  >
                    🕒
                  </button>

                  <button className="send-button btn btn-success">
                    Enviar
                  </button>
                </div>
              </>
            ) : (
              <p className="empty-message">
                📨 Selecciona un contacto para ver la conversación
              </p>
            )}
          </div>
        </section>
      </main>

      {/* Modal */}
      {/* Modal de Confirmación */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {usuarioSeleccionado ? (
            <p>
              ¿Deseas aceptar la conversación de{" "}
              <strong>{usuarioSeleccionado.nombre}</strong>?
            </p>
          ) : (
            <p>No se ha seleccionado ningún usuario.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal para seleccionar Fecha */}
      <Modal
        show={showDatePicker}
        onHide={() => setShowDatePicker(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Seleccionar Fecha</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            inline
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDatePicker(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal para seleccionar Hora */}
      <Modal
        show={showTimePicker}
        onHide={() => setShowTimePicker(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Seleccionar Hora</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DatePicker
            selected={selectedTime}
            onChange={(time) => setSelectedTime(time)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Hora"
            dateFormat="h:mm aa"
            inline
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowTimePicker(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Conversaciones;
