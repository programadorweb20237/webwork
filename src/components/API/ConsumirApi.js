import React, { useEffect, useState } from 'react';
import "./ConsumirApi.css"

function ConsumirApi() {
  const [products, setProducts] = useState([]);
  const [quimicos, setQuimicos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:80/api-routes.php')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
        setQuimicos(data.quimicos);
      })
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

      <h1>Tabla de Químicos</h1>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Presentación</th>
            <th>Precio Mayorista</th>
            <th>Precio Minorista</th>
            <th>Costo por Kilo </th>
          </tr>
        </thead>
        <tbody>
          {quimicos.map((quimico) => (
            <tr key={quimico.quimicoId}>
              <td>{quimico.code}</td>
              <td>{quimico.description}</td>
              <td>{quimico.presentation}</td>
              <td>{quimico.dealerPrice}</td>
              <td>{quimico.retailPrice}</td>
              <td>{quimico.costoKilo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ConsumirApi;
