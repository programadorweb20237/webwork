import React from 'react';
import PropTypes from 'prop-types';
import './Noticias.css';
import NoticiasCard from '../NoticiasCard/NoticiasCard';
import imgReunion from "./reunion.jpg"

const Noticias = () => (
  <div className="Noticias" id="areaNoticiastheId">
    <h2 className='h2Noticias'>NOTICIAS</h2>
    <div className='areaNoticias'>
      <NoticiasCard
        img={imgReunion}
        titulo="Reunion de fin de año."
        descripcion="A finales de año, el equipo de Dairy Solutions se reunió en un ambiente 
      cordial y festivo para celebrar los logros del año y planificar el futuro. Durante la 
      reunión, se compartieron reflexiones sobre los desafíos y éxitos del período, se reconoció 
      el arduo trabajo de todos los empleados y se reafirmaron los valores de la empresa. 
      Se presentaron las metas y proyectos para el próximo año, enfocándose en la innovación y 
      el crecimiento sostenible. La reunión fue una oportunidad para fortalecer los lazos entre 
      los miembros del equipo y motivarlos para enfrentar el futuro con entusiasmo y determinación."

      />




    </div>
  </div>
);

Noticias.propTypes = {};

Noticias.defaultProps = {};

export default Noticias;
