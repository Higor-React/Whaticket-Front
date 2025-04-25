import React, { useState } from "react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaEdit, FaTrash, FaCheckCircle } from "react-icons/fa";
import { Button, Table, Modal, Form } from "react-bootstrap";

const Conexiones = () => {
  const [conexiones, setConexiones] = useState([
    { id: 1, canal: "Instagram", icon: <FaInstagram color="#E1306C" />, nombre: "Whaticket IG", telefono: "1716536428461079", estado: "Activo", sesion: "", ultimaActualizacion: "12/05/22 12:15" },
    { id: 2, canal: "Facebook", icon: <FaFacebook color="#1877F2" />, nombre: "Whaticket FB", telefono: "1246523857313534", estado: "Activo", sesion: "", ultimaActualizacion: "12/05/22 12:15" },
    { id: 3, canal: "WhatsApp", icon: <FaWhatsapp color="#25D366" />, nombre: "Whaticket Perú", telefono: "51941318457", estado: "Inactivo", sesion: "DESCONECTAR", ultimaActualizacion: "16/05/22 18:26" },
  ]);

  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleEdit = (item) => {
    setSelected(item);
    setShowEdit(true);
  };

  const handleDelete = (item) => {
    setSelected(item);
    setShowDelete(true);
  };

  const handleClose = () => {
    setShowEdit(false);
    setShowDelete(false);
    setSelected(null);
  };
  const [showAdd, setShowAdd] = useState(false);
const [nuevaConexion, setNuevaConexion] = useState({
  canal: "",
  nombre: "",
  telefono: "",
});
const handleAddConexion = () => {
    const nueva = {
      id: conexiones.length + 1,
      canal: nuevaConexion.canal,
      icon: obtenerIcono(nuevaConexion.canal),
      nombre: nuevaConexion.nombre,
      telefono: nuevaConexion.telefono,
      estado: "Inactivo",
      sesion: "DESCONECTAR",
      ultimaActualizacion: new Date().toLocaleString(),
    };
    setConexiones([...conexiones, nueva]);
    setShowAdd(false);
    setNuevaConexion({ canal: "", nombre: "", telefono: "" });
  };
  
  const obtenerIcono = (canal) => {
    switch (canal) {
      case "Instagram": return <FaInstagram color="#E1306C" />;
      case "Facebook": return <FaFacebook color="#1877F2" />;
      case "WhatsApp": return <FaWhatsapp color="#25D366" />;
      default: return null;
    }
  };
  


  return (
    <div className="mt-4 px-4 w-100" style={{ maxWidth: "100%" }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold">Conexiones</h4>
        <Button variant="primary" onClick={() => setShowAdd(true)}>AGREGAR</Button>
      </div>
      <Table bordered hover responsive>
        <thead className="table-light">
          <tr>
            <th>Canal</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Estado</th>
            <th>Sesión</th>
            <th>Última Actualización</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {conexiones.map((c) => (
            <tr key={c.id}>
              <td>{c.icon}</td>
              <td>{c.nombre}</td>
              <td>{c.telefono}</td>
              <td className="text-center">
                {c.estado === "Activo" ? (
                  <FaCheckCircle color="green" />
                ) : (
                  <FaCheckCircle color="gray" />
                )}
              </td>
              <td>
                {c.sesion ? (
                  <Button variant="secondary" size="sm">{c.sesion}</Button>
                ) : null}
              </td>
              <td>{c.ultimaActualizacion}</td>
              <td>
                <Button variant="light" size="sm" className="me-1 border" onClick={() => handleEdit(c)}>
                  <FaEdit />
                </Button>
                <Button variant="light" size="sm" className="border" onClick={() => handleDelete(c)}>
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal Editar */}
      <Modal show={showEdit} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Conexión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selected && (
            <Form>
              <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control defaultValue={selected.nombre} />
              </Form.Group>
              <Form.Group className="mt-2">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control defaultValue={selected.telefono} />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
          <Button variant="primary" onClick={handleClose}>Guardar</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Eliminar */}
      <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar Conexión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro de que deseas eliminar la conexión "{selected?.nombre}"?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
          <Button variant="danger" onClick={handleClose}>Eliminar</Button>
        </Modal.Footer>
      </Modal>
      {/* Modal Agregar */}
<Modal show={showAdd} onHide={() => setShowAdd(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Agregar Conexión</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>
      <Form.Group>
        <Form.Label>Canal</Form.Label>
        <Form.Select
          value={nuevaConexion.canal}
          onChange={(e) => setNuevaConexion({ ...nuevaConexion, canal: e.target.value })}
        >
          <option value="">Seleccione...</option>
          <option value="Instagram">Instagram</option>
          <option value="Facebook">Facebook</option>
          <option value="WhatsApp">WhatsApp</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mt-2">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          value={nuevaConexion.nombre}
          onChange={(e) => setNuevaConexion({ ...nuevaConexion, nombre: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mt-2">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          type="text"
          value={nuevaConexion.telefono}
          onChange={(e) => setNuevaConexion({ ...nuevaConexion, telefono: e.target.value })}
        />
      </Form.Group>
    </Form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setShowAdd(false)}>Cancelar</Button>
    <Button variant="primary" onClick={handleAddConexion}>Guardar</Button>
  </Modal.Footer>
</Modal>

    </div>
  );
};

export default Conexiones;
