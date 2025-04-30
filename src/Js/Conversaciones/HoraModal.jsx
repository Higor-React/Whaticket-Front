import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Clock from "react-clock";
import TimePicker from "react-time-picker";
import "react-clock/dist/Clock.css";
import "react-time-picker/dist/TimePicker.css";

const HoraModal = ({ show, onHide, selectedTime, onChange }) => {
  const [value, setValue] = useState(selectedTime || new Date());

  const handleTimeChange = (timeStr) => {
    // TimePicker devuelve un string en formato "HH:MM"
    if (timeStr) {
      const [hours, minutes] = timeStr.split(':');
      const timeDate = new Date();
      timeDate.setHours(parseInt(hours, 10));
      timeDate.setMinutes(parseInt(minutes, 10));
      setValue(timeDate);
      
      if (onChange) {
        onChange(timeDate);
      }
    }
  };

  const handleClose = () => {
    onChange(value);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Seleccionar Hora</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column align-items-center">
        {/* Reloj analógico */}
        <Clock value={value} size={200} className="mb-3" />
        
        {/* Control para seleccionar la hora exacta */}
        <TimePicker 
          onChange={handleTimeChange}
          value={`${value.getHours()}:${value.getMinutes()}`}
          format="h:mm a"
          disableClock={true}
          clearIcon={null}
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

export default HoraModal;