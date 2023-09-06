// Ejemplo de código en React con el componente renombrado a 'ConsumirApi'
import React, { useEffect, useState } from 'react';
import "./ConsumirApi.css"

function ConsumirApi() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6170/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error al obtener los datos:', error));
  }, []);

  return (
    <div className='productosDivAPI'>
      <h1>Tabla de Productos</h1>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Presentación</th>
            <th>Precio Mayorista</th>
            <th>Precio Minorista</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.productId}>
              <td>{product.code}</td>
              <td>{product.description}</td>
              <td>{product.presentation}</td>
              <td>{product.dealerPrice}</td>
              <td>{product.retailPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ConsumirApi;