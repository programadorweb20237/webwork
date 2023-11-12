import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './NoticiaIndividual.css';
import { useNavigate, useParams } from 'react-router-dom';
import { apiUrl } from '../../ApiConfig';

const NoticiaIndividual = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Obtiene el ID de la URL
  const [noticia, setNoticia] = useState(null);

  useEffect(() => {
    const fetchNoticia = async () => {
      try {
        const response = await fetch(`${apiUrl}/api-item-noticias.php?id=${id}`);
        const data = await response.json();
        setNoticia(data.noticia);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchNoticia();
  }, [id]);

  if (!noticia) {
    return null;
  }

  return (
    <div className="NoticiaIndividual">
      <div className="subNoticiaIndividual">
        <img className="imgNoticiaIndividual" src={noticia.imagen} alt={noticia.titulo} />
        <div className="textosNoticiaIndividual">
          <div className="textosNoticiaIndividual2">
            <h4 className="h4NoticiaIndividual">{noticia.titulo}</h4>
          </div>
          <div className="contenedorDescNoticiaIndividual">
            <p className="descNoticiaIndividual">{noticia.contenido}</p>
          </div>
          <div className="contenedorFechaNoticiaIndividual">
            <p className="fechaNoticiaIndividual">
              <strong>Fecha: {noticia.fecha}.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

NoticiaIndividual.propTypes = {
  idd: PropTypes.number.isRequired,
};

export default NoticiaIndividual;
