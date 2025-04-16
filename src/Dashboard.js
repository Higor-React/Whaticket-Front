import React, { useState } from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaBell,
  FaUser,
  FaCheckSquare,
  FaSearch,
  FaEye, // Importar el icono de ojo
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";

// Datos de ejemplo para chats (reemplazar con tu obtención de datos real)
const chatsIniciales = [
  { id: 1, name: "María López", time: "10:30 AM", platform: "whatsapp", status: "abierto", lastMessage: "Hola, ¿cómo estás?" },
  { id: 2, name: "Carlos Gómez", time: "9:15 AM", platform: "instagram", status: "resuelto", lastMessage: "Gracias por tu ayuda." },
  { id: 3, name: "Elena Ramírez", time: "12:45 PM", platform: "facebook", status: "abierto", lastMessage: "Necesito información sobre..." },
  { id: 4, name: "Fernando Díaz", time: "8:20 AM", platform: "facebook", status: "abierto", lastMessage: "Consulta urgente." },
  { id: 5, name: "Javier Méndez", time: "7:50 AM", platform: "facebook", status: "resuelto", lastMessage: "Todo solucionado." },
  { id: 6, name: "Ana Torres", time: "6:30 PM", platform: "instagram", status: "abierto", isNewRequest: true, lastMessage: "Hola, vi tu publicación y..." },
  { id: 7, name: "Miguel Ángel", time: "3:25 PM", platform: "facebook", status: "abierto", lastMessage: "Tengo una pregunta." },
  { id: 8, name: "Rosa Fernández", time: "4:40 PM", platform: "whatsapp", status: "resuelto", lastMessage: "Excelente servicio." },
  { id: 9, name: "Pedro Vargas", time: "11:00 AM", platform: "whatsapp", status: "abierto", isNewRequest: true, lastMessage: "Me gustaría saber más." },
];

const Dashboard = () => {
  const [chatSeleccionado, setChatSeleccionado] = useState(null);
  const [chatsFiltrados, setChatsFiltrados] = useState(chatsIniciales);
  const [filtroActivo, setFiltroActivo] = useState("abierto"); // Filtro predeterminado
  const [mensajePrevisualizado, setMensajePrevisualizado] = useState(null);

  const handleClickChat = (chat) => {
    setChatSeleccionado(chat);
    setMensajePrevisualizado(null); // Limpiar la previsualización al abrir un chat
  };

  const handleFiltrar = (estado) => {
    setFiltroActivo(estado);
    if (estado === "todos") {
      setChatsFiltrados(chatsIniciales);
    } else if (estado === "nuevas") {
      setChatsFiltrados(chatsIniciales.filter((chat) => chat.isNewRequest));
    } else {
      setChatsFiltrados(chatsIniciales.filter((chat) => chat.status === estado));
    }
  };

  const handleClickPrevisualizar = (evento, chat) => {
    evento.stopPropagation(); // Evitar que se abra el chat
    setMensajePrevisualizado(chat.lastMessage);
    setChatSeleccionado(null); // Opcionalmente limpiar el chat seleccionado
  };
  

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

              <li className="menu-item">🔗 Conexiones</li>
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
              <button
                className={`nav-link ${filtroActivo === "abierto" ? "active" : ""}`}
                onClick={() => handleFiltrar("abierto")}
              >
                <FaCheckSquare /> Abierto
              </button>
              <button
                className={`nav-link ${filtroActivo === "resuelto" ? "active" : ""}`}
                onClick={() => handleFiltrar("resuelto")}
              >
                <FaCheckSquare /> Resueltos
              </button>
              <button
                className={`nav-link ${filtroActivo === "nuevas" ? "active" : ""}`}
                onClick={() => handleFiltrar("nuevas")}
              >
                <FaEye /> Nuevas
              </button>
              <button
                className={`nav-link ${filtroActivo === "todos" ? "active" : ""}`}
                onClick={() => handleFiltrar("todos")}
              >
                <FaSearch /> Todos
              </button>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="fw-bold">Todos</span>
              <select className="form-select form-select-sm w-auto">
                <option> Líneas: 9 </option>
              </select>
            </div>
            <div className="list-group">
              {chatsFiltrados.map((chat) => (
                <div
                  key={chat.id}
                  className="list-group-item d-flex align-items-center border-0 shadow-sm"
                  onClick={() => handleClickChat(chat)}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    className={`rounded-circle me-3 bg-${
                      chat.platform === "whatsapp" ? "success" :
                      chat.platform === "instagram" ? "danger" :
                      chat.platform === "facebook" ? "primary" :
                      "info"
                    }`}
                    style={{ width: "40px", height: "40px" }}
                  ></div>
                  <div className="flex-grow-1">
                    <p className="mb-0 fw-bold">{chat.name}</p>
                    <small className="text-muted">{chat.time}</small>
                  </div>
                  {chat.isNewRequest && (
                    <FaEye
                      className="me-2 text-info"
                      style={{ cursor: "pointer" }}
                      onClick={(evento) => handleClickPrevisualizar(evento, chat)}
                    />
                  )}
                  {chat.platform === "whatsapp" && <FaWhatsapp className="text-success" />}
                  {chat.platform === "instagram" && <FaInstagram className="text-danger" />}
                  {chat.platform === "facebook" && <FaFacebook className={`text-${chat.platform === "facebook" ? "primary" : "info"}`} />}
                </div>
              ))}
            </div>
          </div>
          <div className="chat-window d-flex align-items-center justify-content-center flex-grow-1 bg-white shadow-sm">
            {chatSeleccionado ? (
              <div>
                <h3>Chat con {chatSeleccionado.name}</h3>
                <p>Mensaje: {chatSeleccionado.lastMessage}</p>
                {/* Implementa tu ventana de chat real aquí */}
              </div>
            ) : mensajePrevisualizado ? (
              <div className="text-center">
                <p className="text-muted">Mensaje sin aceptar:</p>
                <div className="border p-3 rounded shadow-sm">
                  <p>{mensajePrevisualizado}</p>
                  <button className="btn btn-sm btn-primary" onClick={() => setChatSeleccionado({ name: "Usuario Desconocido", lastMessage: mensajePrevisualizado })}> {/* Reemplaza con la lógica real */}
                    Aceptar Chat
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-muted">
                📨 Seleccione un ticket para empezar a chatear
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;