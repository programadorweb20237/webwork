import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';
import logo from "./logo.jpg"
import search from "./search.svg"
import login from "./login.svg"
import downflecha from "./downflecha.svg"
import menusvg from "./menu.svg"
import logopalabra from "./logopalabra.png"




function Navbar() {

  return (

  <div className="Navbar">





    <img src={menusvg} onClick={menuDes} id="menusvgId"></img>


    <img id="logopalabraId" src={logopalabra} />
    <img id="logoId" className="logoimg" src={logo} />
    <ul id='listaNavUl'>
      <li id='itemHome' ><a href="#">Home</a></li>
      <li><a href="#">Sobre Nosotros</a></li>
      <li><a href="#">Productos <img className="downflecha" src={downflecha} />
      </a></li>
      <li><a href="#">Capacitaciones</a></li>
      <li id="itemBoumatic"><a href="#">Boumatic</a></li>
      <li><a href="#">Noticias</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
    <img id="searchId" className='searchimg' src={search} />
    <img id="loginId" className='loginimg' src={login} />
  </div>
);
};

function menuDes() {
  document.querySelector(".Box").classList.toggle("ocultar");
}



export default Navbar;
