import React from 'react';
import PropTypes from 'prop-types';
import './AreaProductos.css';
import ProductoCard from '../ProductoCard/ProductoCard';
import img1 from "./img1.png"
import img2 from "./img2.png"
import img3 from "./img3.png"
import img4 from "./img4.png"
import img5 from "./img5.png"
import img6 from "./img6.png"

const AreaProductos = () => (
  <div className="AreaProductos">
    <h2 className='h2Productos'>PRODUCTOS</h2>
    <div className='areaAqui'>
      <ProductoCard name="Instalaciones de Ordeñe" img={img1} />
      <ProductoCard name="Manejo de Efluentes" img={img2} />
      <ProductoCard name="Pisos de Goma" img={img3} />
      <ProductoCard name="Productos de Higiene" img={img4} />
      <ProductoCard name="Ventiladores" img={img5} />
      <ProductoCard name="VER TODOS" img={img6} />
    </div>
    <h3 className='h3verProd'><a href='#'>Ver más...</a></h3>
  </div>
);

AreaProductos.propTypes = {};

AreaProductos.defaultProps = {};

export default AreaProductos;
