import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';
import logo from "./logo.jpg"
import search from "./search.svg"
import login from "./login.svg"
import downflecha from "./downflecha.svg"
import menusvg from "./menu.svg"
import logopalabra from "./logopalabra.png"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate





// Este es el objeto Usuario que usamos si ya esta logeado el usuario
// const storedUser = JSON.parse(localStorage.getItem('user'));



function Navbar({ isLoggedIn, usuarioObj, handleLogin, handleLogout }) {

  const navigate = useNavigate(); // Obtiene la función de navegación


  return (


    <nav className="Navbar">

      <img src={menusvg} onClick={menuDes} id="menusvgId" />


      <img id="logopalabraId" src={logopalabra} />
      <div className='contenedor-dairy-en-nav'>
        <p className='dairy-en-nav'>Dairy Solutions</p>
      </div>

      <img id="logoId" className="logoimg" src={logo} onClick={IrInicio} />
      <nav className='NavDef' id="menu">
        <ul className="listaNav2" id='listaNavUl'>
          <li><a href="#areaNosotrostheId">Empresa</a></li>
          <li ><a href="#areaProdtheId">Productos</a></li>
          <li><a href="#areaCaptheId">Capacitaciones</a></li>
          <li id="itemBoumatic"><a href="https://boumatic.com/" target="_blank">Boumatic</a></li>
          <li>





            <a href="#areaNoticiastheId">Noticias</a></li>
          <li><a href="#areaContactotheId">Contacto</a></li>
        </ul>
      </nav>


      {/*Solo se renderiza si esta un usuario logeado y si es rol Jefe */}
      {isLoggedIn && usuarioObj && usuarioObj.rol === 'Jefe' && (
        <button className='btn btn-success btn-recibos-y-logout btn-recibos' onClick={() => navigate('/nueva-pagina')}>Recibos</button>

      )}



      <img id="searchId" className='searchimg' src={search} />

      {!isLoggedIn && (
        <img id="loginId" onClick={abrirModalLogin} className='loginimg' src={login} />
      )}

      {isLoggedIn && (
        <button onClick={handleLogout} className="btn btn-danger btn-recibos-y-logout">
          Cerrar Sesión
        </button>
      )}







    </nav>



  );
};

function menuDes() {
  document.querySelector(".Box").classList.toggle("ocultar");
}


function IrInicio() {
  window.location.href = "#";
}
function abrirModalLogin() {
  const botonLogin = document.querySelector(".loginn-btn-modal");
  botonLogin.click();
}


export default Navbar;
