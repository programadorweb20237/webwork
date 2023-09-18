import React from 'react';
import PropTypes from 'prop-types';
import './Box.css';

const Box = () => (
  <div className="Box ocultar">
    <ul className='listaNavBox'>
      <li><a onClick={menuDes}href="#">Empresa</a></li>
      <li><a onClick={menuDes}href="#areaProdtheId">Productos</a></li>
      <li><a onClick={menuDes}href="#areaCaptheId">Capacitaciones</a></li>
      <li><a onClick={menuDes}href="https://boumatic.com/" target="_blank">Boumatic</a></li>
      <li><a onClick={menuDes}href="#areaNoticiastheId">Noticias</a></li>
      <li><a onClick={menuDes}href="#areaContactotheId">Contacto</a></li>
  
      <li><a onClick={abrirModalLogin}href="#">Login</a></li>
    </ul>
  </div>
);

function menuDes() {
  document.querySelector(".Box").classList.toggle("ocultar");
}
function abrirModalLogin(){
  document.querySelector(".Box").classList.toggle("ocultar");
  const botonLogin = document.querySelector(".loginn-btn-modal");
  botonLogin.click();
}

Box.propTypes = {};

Box.defaultProps = {};

export default Box;
