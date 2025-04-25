import React from "react";
import Conexiones from "./Conexiones.jsx";
import Sidebar from "./Sidebar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-4" style={{ marginLeft: "250px", minHeight: "100vh" }}>
        <Conexiones />
      </div>
    </div>
  );
}

export default App;
