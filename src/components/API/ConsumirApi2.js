import React, { useEffect, useState } from 'react';
import './ConsumirApi2.css';
import { apiUrl } from './ApiConfig';

function ConsumirApi2({ isLoggedIn, usuarioObj }) {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const updatedData = { selectedItems: selectedItems, usuariopedido: usuarioObj.nombre_completo || "?" };



  const pedidoEmail = () => {

    console.log(updatedData);


    // Realizar una solicitud POST al servidor para guardar los cambios
    fetch(`${apiUrl}/api-pedido-email.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          alert('Pedido enviado exitosamente.');
        } else {
          alert('Error al enviar al pedido.');
        }
      })
      .catch((error) => console.error('Error al guardar los cambios:', error));



  };









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
    const totalPrice = parseFloat(item.dealerPrice) * parseInt(quantity);
    setSelectedItems([...selectedItems, { item, quantity, totalPrice }]);
  };





  return (
    <div className="productosDivAPI2">
      <h1>Tabla de Productos y Químicos</h1>
      <input
        className="buscadorProd"
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={() => setShowCart(true)} className="btn-carrito">
        Ver pedido
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
                    Producto: {selected.item.description}, Cantidad: {selected.quantity}, Precio: ${selected.totalPrice}.
                  </li>
                ))}
              </ul>
              <p>Precio Total: ${selectedItems.reduce((total, item) => total + parseFloat(item.totalPrice), 0)} USD.</p>
            </div>





            <div className="modal-footer">

              <button
                type="button"
                className="btn btn-success" // Estilo de botón para Enviar pedido
                onClick={() => {
                  // Agregar lógica para enviar el pedido aquí
                  pedidoEmail();
                  setSelectedItems([]); // Limpia los elementos seleccionados
                  setShowCart(false);


                }}
              >
                Enviar pedido
              </button>

              <button
                type="button"
                className="btn btn-secondary" // Estilo de botón para Resetear
                onClick={() => setSelectedItems([])} // Limpia los elementos seleccionados
              >
                Resetear
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => setShowCart(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>

      <table className='tablaPedidosGrande'>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Presentación</th>
            <th>Precio Mayorista</th>
            <th>Precio Minorista</th>
            <th>Costo por Kilo</th>
            <th></th>
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

      <table className='tablaPedidosMobile'>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Agregar</th>
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
                <td className='table-product-mobile'>
                  <div className='table-product-mobile-div'>
                    <p><strong>Código:</strong> {item.code}</p>
                    <p><strong>Producto:</strong> {replace42(item.description)}</p>
                    <p><strong>Presentación:</strong> {item.presentation}</p>
                    <p><strong>Precio Mayorista:</strong> {replace42(item.dealerPrice)}</p>
                    <p><strong>Precio Minorista:</strong> {replace42(item.retailPrice)}</p>
                    <p><strong>Costo por Kilo:</strong> {item.costoKilo === 42 ? "0" : item.costoKilo || ""}</p>
                  </div>
                </td>
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
