import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarioModal = ({ show, onHide, selectedDate, onChange }) => {
  const [value, setValue] = useState(selectedDate || new Date());

  const handleDateChange = (date) => {
    setValue(date);
    if (onChange) {
      onChange(date);
    }
  };

  const handleClose = () => {
    onChange(value);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Seleccionar Fecha</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column align-items-center">
        {/* Calendario */}
        <Calendar
          onChange={handleDateChange}
          value={value}
          className="mb-3"
          locale="es-ES"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CalendarioModal;
