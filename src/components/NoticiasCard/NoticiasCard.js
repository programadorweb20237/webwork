import React from 'react';
import PropTypes from 'prop-types';
import './NoticiasCard.css';
import PencilIcon from './pencil.svg';

const NoticiasCard = (props) => (
  <div className="NoticiasCard">

    <div className="subNoticiasCard">




      <img className='imgNoticiasCard' src={props.img} />
      <div className='textosNoticiasCard'>
        <div  className='textosNoticiasCard2'>
          <h4 className='h4NoticiasCard' >{props.titulo}</h4>
          <img src={PencilIcon} className="pencilSvg" alt="Pencil Icon" />
        </div>
        <div className='contenedorDescNoticia'>
          <p className='descNoticiasCard'>{props.descripcion}</p>
        </div>

        <div className='contenedorFechaNoticia'>
          <p className='fechaNoticiasCard'><strong>{props.fecha}</strong></p>
        </div>


      </div>
    </div>

  </div>
);

NoticiasCard.propTypes = {};

NoticiasCard.defaultProps = {};

export default NoticiasCard;
