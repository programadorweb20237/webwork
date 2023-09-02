import React from 'react';
import PropTypes from 'prop-types';
import './Navegacion.css';

const Navegacion = () => (
  <div className="Navegacion">
    <nav >
      <ul className='menu-horizontal'>
        <li><a href="#">Empresa</a></li>
        <li><a href="#">Productos</a>
          <ul className='menu-vertical'>
            <li><a href="#">Automatizacion</a></li>
            <li><a href="#">Bombas de vacio lobulares y a paleta</a></li>
            <li><a href="#">Confort Animal</a></li>
            <li><a href="#">Enfriamiento</a></li>
            <li><a href="#">Equipo de ordeño</a></li>
            <li><a href="#">Feed Pusher, robot empuja comida</a></li>
            <li><a href="#">Instalaciones de ordeño</a></li>
            <li><a href="#">Manejo de Efluentes</a></li>
            <li><a href="#">Pisos de Goma</a></li>
            <li><a href="#">Productos de higiene</a></li>
            <li><a href="#">Real Time, sistema de deteccion de celo y vacas</a></li>
            <li><a href="#">Robot Sellador</a></li>
            <li><a href="#">Sistema de Pulsado</a></li>
            <li><a href="#">Robots de ordeño</a></li>
            <li><a href="#">Ventiladores</a></li>
          </ul>


        </li>
        <li><a href="#">Capacitaciones</a></li>
        <li><a href="https://boumatic.com/" target="_blank">Boumatic</a></li>
        <li><a href="#">Noticias</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>


  </div>
);

Navegacion.propTypes = {};

Navegacion.defaultProps = {};

export default Navegacion;
