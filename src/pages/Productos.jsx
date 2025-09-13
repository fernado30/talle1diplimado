import { useEffect, useState } from "react";

function Productos({ descuento }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products") // o tu API real
      .then((res) => res.json())
      .then((data) => setProductos(data));
  }, []);

  const aplicarDescuento = (precio) => {
    if (descuento === 0) return precio;
    return precio - (precio * descuento) / 100;
  };

  return (
    <div>
      <h2>Lista de productos</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {productos.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <h3>{p.title}</h3>
            <p>
              Precio:{" "}
              <strong style={{ color: "green" }}>
                ${aplicarDescuento(p.price).toFixed(2)}
              </strong>
            </p>
            {descuento > 0 && (
              <p style={{ textDecoration: "line-through", color: "red" }}>
                ${p.price.toFixed(2)}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;
