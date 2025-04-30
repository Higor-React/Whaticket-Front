import { FaCheck, FaPhone, FaVideo, FaEllipsisV } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import React, { useState } from "react";
import "../../Estilizacion/ChatWindow.css";

const ChatWindow = ({ usuario, setShowDatePicker, setShowTimePicker }) => {
  const [mostrarInfoUsuario, setMostrarInfoUsuario] = useState(false);

  if (!usuario) {
    return (
      <p className="empty-message">
        📨 Selecciona un contacto para ver la conversación
      </p>
    );
  }

  return (
    <div className="chat-window-container">
      {/* Header */}
      <div className="chat-header d-flex align-items-center">
        <div className="d-flex align-items-center flex-grow-1">
          <button className="icon-button me-2 d-md-none">
            <BsArrowLeft />
          </button>
          <div
            className="avatar-container me-2"
            onClick={() => setMostrarInfoUsuario(true)}
            style={{ cursor: "pointer" }}
          >
            {usuario.avatar ? (
              <img src={usuario.avatar} alt={usuario.nombre} className="avatar-img" />
            ) : (
              <div className="avatar-placeholder">
                {usuario.nombre.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <div className="user-info">
            <div className="user-name">{usuario.nombre}</div>
            <div className="user-status small">En línea</div>
          </div>
        </div>
        <div className="header-actions">
          <button className="icon-button mx-2">
            <FaPhone />
          </button>
          <button className="icon-button mx-2">
            <FaVideo />
          </button>
          <button className="icon-button mx-2">
            <FaEllipsisV />
          </button>
        </div>
      </div>

      {/* Chat Body */}
      <div className="chat-body">
        <div className="mensaje-usuario">Hola, ¿sigue disponible?</div>
        <div className="mensaje-sistema">
          Sí, estoy disponible. ¿En qué puedo ayudarte?
        </div>
      </div>

      {/* Footer */}
      <div className="chat-footer d-flex align-items-center gap-2">
        <button className="icon-button" onClick={() => setShowDatePicker(true)}>
          📅
        </button>
        <input
          type="text"
          className="chat-input flex-grow-1"
          placeholder="Escribe un mensaje..."
        />
        <button className="icon-button" onClick={() => setShowTimePicker(true)}>
          🕒
        </button>
        <button className="send-button btn btn-success">
          <FaCheck style={{ verticalAlign: "middle", fontSize: "0.9rem", marginBottom:"100px"}}/>
        </button>
      </div>

      {/* Panel lateral derecho */}
      {mostrarInfoUsuario && (
        <div className="info-panel animate-slide-in">
          <div className="text-end">
            <button
              className="btn-close m-2"
              onClick={() => setMostrarInfoUsuario(false)}
            ></button>
          </div>
          <div className="p-3 text-center">
            {usuario.avatar ? (
              <img
                src={usuario.avatar}
                alt={usuario.nombre}
                className="avatar-img mb-3"
                style={{ width: "80px", borderRadius: "50%" }}
              />
            ) : (
              <div className="avatar-placeholder mb-3">{usuario.nombre.charAt(0)}</div>
            )}
            <p><strong>Nombre:</strong> {usuario.nombre}</p>
            <p><strong>Número:</strong> {usuario.numero || "No registrado"}</p>
            <button className="btn btn-primary mt-3">Aceptar usuario</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
