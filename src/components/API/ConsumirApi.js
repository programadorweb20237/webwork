import React, { useEffect, useState, useRef } from 'react';
import './ConsumirApi.css';
import { apiUrl,apiUrl2 } from './ApiConfig';


function ConsumirApi() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [pdfInstance, setPdfInstance] = useState(null);
  const searchForCodeRef = useRef(null);

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
    if (value === 42 || value === '42') {
      return '-';
    }
    return value;
  };

  const handleCodeClick = (code) => {
    window.open(`${apiUrl2}/libro/${code}`, '_blank');
  };

  return (
    <div className='productosDivAPI'>
      <h1>Tabla de Productos y Químicos</h1>

      <input
        className='buscadorProd'
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
            <th className="ocultar">Precio Mayorista</th>
            <th className="ocultar">Precio Minorista</th>
            <th className="ocultar">Costo por Kilo</th>
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
                <td
                  ref={searchForCodeRef}
                  onClick={() => handleCodeClick(item.code)}
                  style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                >
                  {item.code}
                </td>
                <td>{replace42(item.description)}</td>
                <td>{item.presentation}</td>
                <td className="ocultar">{replace42(item.dealerPrice)}</td>
                <td className="ocultar">{replace42(item.retailPrice)}</td>
                <td className="ocultar">{item.costoKilo === 42 ? "0" : item.costoKilo || ""}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ConsumirApi;
