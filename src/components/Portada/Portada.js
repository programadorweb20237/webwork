import React from 'react';
import PropTypes from 'prop-types';
import './Portada.css';
import foto1 from "./foto1.jpg";
import foto2 from "./foto2.jpg";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);



const Portada = () => (
  <div className="Portada">

    <AutoplaySlider className="sliderPortada"
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={3000}
      bullets={false}
    >
      <div className="divportada1" ><img className="foto1" src={foto1} /></div>
      <div className="divportada1" > <img className="foto1" src={foto2} /></div>
    </AutoplaySlider>

  </div>
);




Portada.propTypes = {};

Portada.defaultProps = {};

export default Portada;
