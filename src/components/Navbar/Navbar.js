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

    <nav className="Navbar">





      <img src={menusvg} onClick={menuDes} id="menusvgId"></img>


      <img id="logopalabraId" src={logopalabra} />
      <img id="logoId" className="logoimg" src={logo} />
      <nav className='NavDef' id="menu">
        <ul className="listaNav2" id='listaNavUl'>
          <li id='itemHome' ><a href="#">Home</a></li>
          <li><a href="#">Empresa</a></li>
          <li><a href="#">Productos <img className="downflecha" src={downflecha} />
          </a>


            <ul id='listaprodlist'>
              <li><a href="#">Enlace 2.1</a></li>
              <li><a href="#">Bombas de Vacio lobulares y a paleta</a></li>
              <li><a href="#">Enlace 2.3</a></li>
            </ul>


          </li>
          <li><a href="#">Capacitaciones</a></li>
          <li id="itemBoumatic"><a href="#">Boumatic</a></li>
          <li><a href="#">Noticias</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
        </nav>
    
        <img id="searchId" className='searchimg' src={search} />
        <img id="loginId" className='loginimg' src={login} />
        </nav>
  );
};

function menuDes() {
  document.querySelector(".Box").classList.toggle("ocultar");
}



export default Navbar;
