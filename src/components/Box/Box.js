import React from 'react';
import PropTypes from 'prop-types';
import './Box.css';

import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { Link } from 'react-router-dom';



const Box = ({ isLoggedIn, handleLogout, usuarioObj }) => {

  const navigate = useNavigate(); // Mueve la declaración aquí


  return (
  

  <div className="Box ocultar">
    <ul className='listaNavBox'>
      <li><a onClick={menuDes}href="#">Empresa</a></li>
      <li><a onClick={menuDes}href="#areaProdtheId">Productos</a></li>
      <li><a onClick={menuDes}href="#areaCaptheId">Capacitaciones</a></li>
  
      <li><a onClick={menuDes}href="#areaNoticiastheId">Noticias</a></li>
      <li><a onClick={menuDes}href="#areaContactotheId">Contacto</a></li>

      {isLoggedIn && usuarioObj && usuarioObj.rol === 'Jefe' && (
           <li><a onClick={irRecibos}>Recibos</a></li>

      )}


{isLoggedIn && usuarioObj && (usuarioObj.rol === 'Jefe' || usuarioObj.rol === 'Mod') && (
           <li><a onClick={() => navigate('/stockquimicos')}>Stock</a></li>

      )}





      <li><a onClick={() => abrirModalLogin(isLoggedIn, handleLogout)} href="#">
        {isLoggedIn ? "Cerrar Sesión" : "Login"}
      </a></li>
    </ul>
  </div>
  );
};

// Resto de tu componente
function menuDes() {
  document.querySelector(".Box").classList.toggle("ocultar");
}
function abrirModalLogin(isLoggedIn, handleLogout){
  document.querySelector(".Box").classList.toggle("ocultar");
  if(isLoggedIn){
    //cerrar session
    handleLogout();
  }else{
  const botonLogin = document.querySelector(".loginn-btn-modal");
  botonLogin.click();
}
}



function irRecibos(){
  document.querySelector(".Box").classList.toggle("ocultar");
  const botonRecibos = document.querySelector(".btn-recibos");
  botonRecibos.click();
}


Box.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  usuarioObj: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default Box;