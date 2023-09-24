import React, { useEffect, useState } from 'react';
import './ItemLimpieza.css';
import { apiUrl } from "../ApiConfig";

function ItemLimpieza() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [lightboxImage, setLightboxImage] = useState(null);

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

  const openLightbox = (imageSrc) => {
    setLightboxImage(imageSrc);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const handleLightboxClick = (e) => {
    if (e.target.className === 'lightbox') {
      closeLightbox();
    }
  };

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
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Acción</th>
            <th>Aplicación</th>
            <th>Empleo</th>
            <th>Presentación</th>
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
                <td>
                  {item.imagen ? (
                    <img
                      className="img-item-limpieza"
                      src={`${apiUrl}/${item.imagen}`}
                      alt={`Imagen de ${item.nombre}`}
                      onClick={() => openLightbox(`${apiUrl}/${item.imagen}`)}
                    />
                  ) : (
                    '-'
                  )}
                </td>
                <td>{item.nombre}</td>
                <td>{item.accion}</td>
                <td>{item.aplicacion || '-'}</td>
                <td>{item.empleo || '-'}</td>
                <td>{item.presentacion}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {lightboxImage && (
        <div className="lightbox" onClick={handleLightboxClick}>
          <span className="close-button" onClick={closeLightbox}>&times;</span>
          <img className="lightbox-image" src={lightboxImage} alt="Imagen ampliada" />
        </div>
      )}
    </div>
  );
}

export default ItemLimpieza;
