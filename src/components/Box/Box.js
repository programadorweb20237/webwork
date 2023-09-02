import React from 'react';
import PropTypes from 'prop-types';
import './Box.css';

const Box = () => (
  <div className="Box ocultar">
    <ul className='listaNavBox'>
      <li  ><a  href="#">Home</a></li>
      <li><a href="#">Sobre Nosotros</a></li>
      <li><a href="#">Productos</a></li>
      <li><a href="#">Capacitaciones</a></li>
      <li><a href="#">Boumatic</a></li>
      <li><a href="#">Noticias</a></li>
      <li><a href="#">Contacto</a></li>
      <li><a href="#">Buscar</a></li>
      <li><a href="#">Loguearse</a></li>
    </ul>
  </div>
);

Box.propTypes = {};

Box.defaultProps = {};

export default Box;
