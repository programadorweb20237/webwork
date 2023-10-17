import React from 'react';
import PropTypes from 'prop-types';
import './Noticias.css';
import NoticiasCard from '../NoticiasCard/NoticiasCard';
import imgReunion from "./reunion.jpg"


// Este es el objeto Usuario que usamos si ya esta logeado el usuario
// const storedUser = JSON.parse(localStorage.getItem('user'));



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
      La reunión fue una oportunidad para fortalecer los lazos entre 
      los miembros del equipo y motivarlos para enfrentar el futuro con entusiasmo y determinación."

      />

<NoticiasCard
        img="https://www.ceupe.com.ve/images/easyblog_articles/230/ges_proyec.png"
        titulo="Cambio de proyectos."
        descripcion="En Dairy Solutions, siempre estamos en búsqueda de nuevas oportunidades
         y desafíos. Hoy, nos complace compartir que estamos explorando nuevos proyectos que
          nos permitirán seguir brindando soluciones innovadoras en línea con nuestra dedicación
           a la industria lechera. Mantente informado para conocer más sobre nuestras próximas
            iniciativas."

      />




    </div>

    <a href='/noticias'>Ver más.</a>
  </div>
);

Noticias.propTypes = {};

Noticias.defaultProps = {};

export default Noticias;
