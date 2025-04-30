// src/componentes/Conversaciones/ChatList.jsx
import React from "react";
import { FaWhatsapp, FaEye, FaCheckSquare, FaSearch } from "react-icons/fa";

const ChatList = ({ vista, setVista, tareas, onSeleccionar, onAceptar }) => (
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
        className={`tab-button ${vista === "trabajando" ? "active" : ""}`}
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
      {tareas.map((tarea) => (
        <div className="fila-tarea" key={tarea.id} onClick={() => onSeleccionar(tarea)} style={{ cursor: "pointer" }} >
          <div className="avatar"></div>
          <div className="detalle-tarea">
            <h6>{tarea.nombre}</h6>
            <p>Hola, sigue disponible</p>
          </div>
          {vista === "espera" && (
            <div className="contenedor-boton">
              <button
                className="btn btn-primary"
                onClick={(e) => {
                  e.stopPropagation();
                  onAceptar(tarea);
                }}
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
            <FaEye size="16px" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ChatList;
