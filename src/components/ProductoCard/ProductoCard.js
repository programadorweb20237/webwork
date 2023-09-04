import React from 'react';
import PropTypes from 'prop-types';
import './ProductoCard.css';

const ProductoCard = (props) => (
  <div className="ProductoCard">
    <img className="imgProdCard" src={props.img}/>
    <h3 className='nameProdCard'>{props.name}</h3>
  </div>
);



ProductoCard.propTypes = {};

ProductoCard.defaultProps = {};

export default ProductoCard;
