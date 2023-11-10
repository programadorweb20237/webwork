import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Entrenamientos.css';

const Entrenamientos = ({ isLoggedIn }) => {
  // Remove the shouldRenderIframe state, we don't need it

  // Instead, create a key state that changes whenever isLoggedIn changes
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Increment the key whenever isLoggedIn changes
    setKey(key + 1);
  }, [isLoggedIn]);

  return (
    <div className="Entrenamientos" id="areaCaptheId">
      <h2 className='h2Capacitaciones'>CAPACITACIONES</h2>
      <div className='areaCapacitaciones'>
        <p>
          <strong>Preparándolo para el Éxito: Nuestros Recursos de Formación</strong>
          En Dairy Solutions, creemos en el valor de la formación y el conocimiento.
          Estos recursos audiovisuales le guiarán en el uso adecuado de nuestras máquinas y productos,
          permitiéndole maximizar su eficiencia y obtener los mejores resultados. Explore nuestros videos
          y descubra cómo Dairy Solutions puede ser su socio en el éxito de su negocio lechero.
        </p>
        <div className='codegenasup' key={key}> {/* Use the key to force a re-render */}
          <div className="codegena">
            <iframe width='395px' height='232px' src='https://player.vimeo.com/video/518190238?'></iframe>
          </div>
          <h4 className='h4Capacitaciones'>Curso de robot, en español.<br /><a href="https://vimeo.com/518190238/fff4d95910">Ver completo.</a></h4>
        </div>
      </div>
    </div>
  );
};

Entrenamientos.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Entrenamientos;