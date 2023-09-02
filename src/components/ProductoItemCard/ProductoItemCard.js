import React from 'react';
import "./ProductoItemCard.css"

const ProductoItemCard = ({
  nombre,
  genero,
  descripcion,
  precio,
  imagenes,
  videos,
  catalogos,
}) => {
  return (
    <div className="producto-card">
      <h2>{nombre}</h2>
      {genero && <p>Género: {genero}</p>}
      {descripcion && <p>Descripción: {descripcion}</p>}
      {precio && <p>Precio: ${precio}</p>}

      {imagenes && imagenes.length > 0 && (
        <div>
          <h3>Imágenes:</h3>
          <ul>
            {imagenes.map((imagen, index) => (
              <li key={index}>
                <img src={imagen} alt={`Imagen ${index + 1}`} />
              </li>
            ))}
          </ul>
        </div>
      )}

      {videos && videos.length > 0 && (
        <div>
          <h3>Videos:</h3>
          <ul>
            {videos.map((video, index) => (
              <li key={index}>
                <video controls>
                  <source src={video} type="video/mp4" />
                  Tu navegador no admite la reproducción de video.
                </video>
              </li>
            ))}
          </ul>
        </div>
      )}

      {catalogos && catalogos.length > 0 && (
        <div>
          <h3>Catálogos en PDF:</h3>
          <ul>
            {catalogos.map((catalogo, index) => (
              <li key={index}>
                <a href={catalogo} target="_blank" rel="noopener noreferrer">
                  Catálogo {index + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductoItemCard;



// Asi es como se importa el Componente
  /*



  import React from 'react';
import ProductoCard from './ProductoCard';

function App() {
  return (
    <div className="App">
      <ProductoCard
        nombre="Producto de ejemplo"
        genero="Electrónica"
        descripcion="Este es un producto de muestra para ilustrar el uso del componente ProductoCard en React."
        precio={99.99}
        imagenes={['imagen1.jpg', 'imagen2.jpg']}
        videos={['video1.mp4', 'video2.mp4']}
        catalogos={['catalogo1.pdf', 'catalogo2.pdf']}
      />
    </div>
  );
}

export default App;
    




  */