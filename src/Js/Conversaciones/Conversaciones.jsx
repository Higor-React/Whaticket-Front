// src/componentes/Conversaciones/Conversaciones.jsx
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";
import ConfirmModal from "./ConfirmModal";
import DatePickerModal from "./CalendarioModal";
import TimePickerModal from "./HoraModal";

import { TareasTrabajando, TareasPendiente } from "./datos";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Estilizacion/Conversaciones.css";

const Conversaciones = () => {
  const [vista, setVista] = useState("trabajando");
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const tareas = vista === "trabajando" ? TareasTrabajando : TareasPendiente;

  const handleAceptarClick = (tarea) => {
    setUsuarioSeleccionado(tarea);
    setShowModal(true);
  };

  const handleConfirm = () => {
    setShowModal(false);
  };

  return (
    <div className="dashboard-container d-flex vh-100">
      <Sidebar />
      <main className="main-content flex-grow-1 d-flex flex-column bg-light">
        <header className="header d-flex justify-content-between align-items-center p-3 border-bottom bg-white shadow-sm">
          <h4 className="mb-0"> </h4>
          <div>
            <button className="btn btn-outline-secondary me-2">🔔</button>
            <button className="btn btn-outline-secondary">👤</button>
            <button
              className="btn btn-outline-secondary"
              onClick={() => (window.location.href = "/")}
            >
              Cerrar Sesión
            </button>
          </div>
        </header>

        <section className="chat-section d-flex flex-grow-1">
          <ChatList
            vista={vista}
            setVista={setVista}
            tareas={tareas}
            onSeleccionar={setUsuarioSeleccionado}
            onAceptar={handleAceptarClick}
          />
          <div className="chat-window">
            <ChatWindow
              usuario={usuarioSeleccionado}
              setShowDatePicker={setShowDatePicker}
              setShowTimePicker={setShowTimePicker}
            />
          </div>
        </section>
      </main>

      {/* Confirmación */}
      <ConfirmModal
        show={showModal}
        onHide={() => setShowModal(false)}
        usuario={usuarioSeleccionado}
        onConfirm={handleConfirm}
      />

      {/* Modal de Fecha */}
      <DatePickerModal
        show={showDatePicker}
        onHide={() => setShowDatePicker(false)}
        selectedDate={selectedDate}
        onChange={setSelectedDate}
      />

      {/* Modal de Hora */}
      <TimePickerModal
        show={showTimePicker}
        onHide={() => setShowTimePicker(false)}
        selectedTime={selectedTime}
        onChange={setSelectedTime}
      />
    </div>
  );
};

export default Conversaciones;
