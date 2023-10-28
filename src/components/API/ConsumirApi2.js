import React, { useEffect, useState } from 'react';
import './ConsumirApi.css';
import { apiUrl } from './ApiConfig';

function ConsumirApi2() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [showCart, setShowCart] = useState(false); // Agrega el estado y la función para controlar el modal

  useEffect(() => {
    fetch(`${apiUrl}/api-routes.php`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const combinedData = [...data.products, ...data.quimicos];
        setData(combinedData);
      })
      .catch((error) => console.error('Error al obtener los datos:', error));
  }, []);

  const replace42 = (value) => {
    if (value === 42 || value === "42") {
      return "-";
    }
    return value;
  };

  const addToCart = (item, quantity) => {
    setSelectedItems([...selectedItems, { item, quantity }]);
  };

  return (
    <div className="productosDivAPI">
      <h1>Tabla de Productos y Químicos</h1>
      <input
        className="buscadorProd"
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={() => setShowCart(true)} className="btn-carrito">
        Pedido
      </button>

      <div
        className={`modal fade ${showCart ? 'show' : ''}`}
        tabIndex="-1"
        role="dialog"
        style={{ display: showCart ? 'block' : 'none' }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Pedido</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowCart(false)}
              ></button>
            </div>
            <div className="modal-body">
              <ul>
                {selectedItems.map((selected, index) => (
                  <li key={index}>
                    Elemento: {selected.item.description}, Cantidad: {selected.quantity}
                  </li>
                ))}
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowCart(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Presentación</th>
            <th>Precio Mayorista</th>
            <th>Precio Minorista</th>
            <th>Costo por Kilo</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) =>
              item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.description.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((item, index) => (
              <tr key={index}>
                <td>{item.code}</td>
                <td>{replace42(item.description)}</td>
                <td>{item.presentation}</td>
                <td>{replace42(item.dealerPrice)}</td>
                <td>{replace42(item.retailPrice)}</td>
                <td>{item.costoKilo === 42 ? "0" : item.costoKilo || ""}</td>
                <td>
                  <button
                    onClick={() => {
                      const quantity = prompt('Ingrese la cantidad:');
                      if (quantity !== null && quantity !== "") {
                        addToCart(item, quantity);
                      }
                    }}
                  >
                    Agregar al pedido
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ConsumirApi2;
