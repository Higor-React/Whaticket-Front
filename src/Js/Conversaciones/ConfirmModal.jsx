// src/componentes/Conversaciones/ConfirmModal.jsx
import React from "react";
import { Modal, Button } from "react-bootstrap";

const ConfirmModal = ({ show, onHide, usuario }) => (
  <Modal show={show} onHide={onHide} centered>
    <Modal.Header closeButton>
      <Modal.Title>Confirmación</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {usuario ? (
        <p>
          ¿Deseas aceptar la conversación de <strong>{usuario.nombre}</strong>?
        </p>
      ) : (
        <p>No se ha seleccionado ningún usuario.</p>
      )}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Cancelar
      </Button>
      <Button variant="primary" onClick={onHide}>
        Aceptar
      </Button>
    </Modal.Footer>
  </Modal>
);

export default ConfirmModal;
