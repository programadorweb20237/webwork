import React, { useEffect, useState } from 'react';
import './ItemLimpieza.css';
import { apiUrl } from "../ApiConfig";

function ItemLimpieza() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(`${apiUrl}/api-item-limpieza.php`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const itemsLimpieza = data.itemsLimpieza;
        setData(itemsLimpieza);
      })
      .catch((error) => console.error('Error al obtener los datos:', error));
  }, []);

  return (
    <div className='productosDivAPI'>
      <h1>Tabla de Productos de Limpieza</h1>
      <input
        className='buscadorProd'
        type='text'
        placeholder='Buscar...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Acción</th>
            <th>Aplicación</th>
            <th>Empleo</th>
            <th>Presentación</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) =>
              item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.accion.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((item, index) => (
              <tr key={index}>
                <td>{item.nombre}</td>
                <td>{item.accion}</td>
                <td>{item.aplicacion || '-'}</td>
                <td>{item.empleo || '-'}</td>
                <td>{item.presentacion}</td>
                <td>
                  {item.imagen ? (
                    <img src={item.imagen} alt={`Imagen de ${item.nombre}`} />
                  ) : (
                    '-'
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ItemLimpieza;
