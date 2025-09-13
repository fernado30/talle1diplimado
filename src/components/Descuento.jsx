import { useState } from "react";

function Descuento({ onDescuentoChange }) {
  const [descuento, setDescuento] = useState(0);

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    setDescuento(value);
    onDescuentoChange(value); // avisamos al padre (App.js)
  };

  return (
    <div style={{ margin: "20px 0", textAlign: "center" }}>
      <label style={{ marginRight: "10px" }}>Selecciona descuento: </label>
      <select value={descuento} onChange={handleChange}>
        <option value={0}>Sin descuento</option>
        <option value={10}>10%</option>
        <option value={20}>20%</option>
        <option value={30}>30%</option>
        <option value={50}>50%</option>
      </select>
    </div>
  );
}

export default Descuento;
