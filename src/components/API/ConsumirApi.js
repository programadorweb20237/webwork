import React, { useEffect, useState } from 'react';
import "./ConsumirApi.css"

function ConsumirApi() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('http://localhost:80/api-routes.php')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Combina los datos de productos y químicos en una sola lista
        const combinedData = [...data.products, ...data.quimicos];
        setData(combinedData);
      })
      .catch((error) => console.error('Error al obtener los datos:', error));
  }, []);

  return (
    <div className='productosDivAPI'>
      <h1>Tabla de Productos y Químicos</h1>
      <input className='buscadorProd'
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
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
                <td>{item.description}</td>
                <td>{item.presentation}</td>
                <td>{item.dealerPrice}</td>
                <td>{item.retailPrice}</td>
                <td>{item.costoKilo || ""}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ConsumirApi;
