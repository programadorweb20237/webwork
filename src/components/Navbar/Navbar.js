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






function Navbar() {

  return (
   

    <nav className="Navbar">

      <img src={menusvg} onClick={menuDes} id="menusvgId" />


      <img id="logopalabraId" src={logopalabra} />
      <img id="logoId" className="logoimg" src={logo} onClick={IrInicio}/>
      <nav className='NavDef' id="menu">
        <ul className="listaNav2" id='listaNavUl'>
          <li><a href="#areaNosotrostheId">Empresa</a></li>
          <li ><a href="#areaProdtheId">Productos <img className="downflecha" src={downflecha} />
          </a>


            <ul className="classlistaprodlist" id='listaprodlist'>
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
          <li><a href="#areaCaptheId">Capacitaciones</a></li>
          <li id="itemBoumatic"><a href="https://boumatic.com/" target="_blank">Boumatic</a></li>
          <li>


          


<a href="#areaNoticiastheId">Noticias</a></li>
          <li><a href="#areaContactotheId">Contacto</a></li>
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


function IrInicio() {
  window.location.href ="#";
}


export default Navbar;
