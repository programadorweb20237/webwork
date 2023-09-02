import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
import logofacebook from "./logo-facebook.svg"
import logotwitter from "./logo-twitter.svg"
import logoinstagram from "./logo-instagram.svg" 
import { MdPlace } from 'react-icons/md';
import { BsFillTelephoneFill, BsFillClockFill } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';





const Footer = () => (
  <div className="Footer">
    <div className='footerContact'>
      <h3 className='h3footer totalContacto'>DATOS DE CONTACTO</h3>
      <div className='areaContactos'>

        <div className='itemContacto'>
        <MdPlace/>
          <p>Sadi Carnot 2390, Grand Bourg, Buenos Aires.</p>
        </div>

        <div className='itemContacto'>
        
          <BsFillTelephoneFill/>
          <p><a className="tel-a" href="tel:+5491169074492" target='_blank'>(011) 6907.4492 / 6907.3337</a></p>
        </div>

        <div className='itemContacto'>
          <IoLogoWhatsapp/>


         



          <p><a className="tel-a" href="https://api.whatsapp.com/send?phone=5491169074492" target='_blank'>+54 9 11 6907-4492</a></p>
        </div>

        <div className='itemContacto'>
          <MdEmail/>
          <p><a className="email-a"href="mailto:dairy@dairy.com.ar" target='_blank'>dairy@dairy.com.ar</a></p>
        </div>

        <div className='itemContacto'>
          <BsFillClockFill/>
          <p>8 a 17 hs.</p>
        </div>

      </div>

    </div>
    <div className='footerRedes'>
      <h3 className='h3footer totalRedes'>SEGUINOS EN</h3>
      <div className='areaLogos'>
        <img className="redesIcon" src={logofacebook}/>
        <img className="redesIcon" src={logotwitter}/>
        <img className="redesIcon" src={logoinstagram}/>
        
      </div>


    </div>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
