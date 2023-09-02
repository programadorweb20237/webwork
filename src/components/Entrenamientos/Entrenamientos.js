import React from 'react';
import PropTypes from 'prop-types';
import './Entrenamientos.css';

const Entrenamientos = () => (
  <div className="Entrenamientos" id="areaCaptheId">
    <h2 className='h2Capacitaciones'>CAPACITACIONES</h2>
    <div className='areaCapacitaciones'>
  
      <p ><strong> Preparándolo para el Éxito: Nuestros Recursos de Formación</strong>
      En Dairy Solutions, creemos en el valor de la formación y el conocimiento. 
        Estos recursos audiovisuales le guiarán en el uso adecuado de nuestras máquinas y productos,
         permitiéndole maximizar su eficiencia y obtener los mejores resultados. Explore nuestros videos 
         y descubra cómo Dairy Solutions puede ser su socio en el éxito de su negocio lechero.</p>
         <div>
    <div class="codegena"><iframe width='395px' height='232px' src='https://player.vimeo.com/video/518190238?'></iframe></div>
    <h4 className='h4Capacitaciones'>Curso de robot, en español.<br/><a href="https://vimeo.com/518190238/fff4d95910">Ver completo.</a></h4>

    </div>

    </div>
    
  </div>
);

Entrenamientos.propTypes = {};

Entrenamientos.defaultProps = {};

export default Entrenamientos;
