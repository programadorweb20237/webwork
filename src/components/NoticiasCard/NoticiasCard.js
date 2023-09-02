import React from 'react';
import PropTypes from 'prop-types';
import './NoticiasCard.css';

const NoticiasCard = (props) => (
  <div className="NoticiasCard">
    <img className='imgNoticiasCard' src={props.img}/>
    <h4 className='h4NoticiasCard' >{props.titulo}</h4>
    <p className='descNoticiasCard'>{props.descripcion}</p>
  </div>
);

NoticiasCard.propTypes = {};

NoticiasCard.defaultProps = {};

export default NoticiasCard;
