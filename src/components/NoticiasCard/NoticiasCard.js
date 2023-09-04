import React from 'react';
import PropTypes from 'prop-types';
import './NoticiasCard.css';

const NoticiasCard = (props) => (
  <div className="NoticiasCard">
    <div className="subNoticiasCard">
    <img className='imgNoticiasCard' src={props.img} />
    <div className='textosNoticiasCard'>
      <h4 className='h4NoticiasCard' >{props.titulo}</h4>
      <div className='contenedorDescNoticia'>
        <p className='descNoticiasCard'>{props.descripcion}</p>
      </div>
    </div>
    

    </div>

  </div>
);

NoticiasCard.propTypes = {};

NoticiasCard.defaultProps = {};

export default NoticiasCard;
