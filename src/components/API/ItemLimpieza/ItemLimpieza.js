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

  return (
    <div className='productosDivAPI2"'>
      <h1 className='tituloh1-item-limpieza'>Productos de Higiene</h1>
      <input
        className='buscadorProd2'
        type='text'
        placeholder='Buscar...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="item-list">
        {data
          .filter((item) =>
            item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.accion.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item, index) => (
            <div key={index} className="item">
              {item.imagen && (
                <div className='div-imagen-item-limpieza'>
                <img
                  className="img-item-limpieza"
                  src={`${apiUrl}/${item.imagen}`}
                  alt={`Imagen de ${item.nombre}`}
                  onClick={() => openLightbox(`${apiUrl}/${item.imagen}`)}
                />
                </div>
              )}
              <div className="item-details">
                <div><strong>Nombre:</strong> {item.nombre}</div>
                <div><strong>Acción:</strong> {item.accion}</div>
                <div><strong>Aplicación:</strong> {item.aplicacion || '-'}</div>
                <div><strong>Empleo:</strong> {item.empleo || '-'}</div>
                <div><strong>Presentación:</strong> {item.presentacion}</div>
              </div>
            </div>
          ))}
      </div>
      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close-button" onClick={closeLightbox}>&times;</span>
          <img className="lightbox-image" src={lightboxImage} alt="Imagen ampliada" />
        </div>
      )}
    </div>
  );
}

export default ItemLimpieza;
