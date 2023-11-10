import React from 'react';
import PropTypes from 'prop-types';
import './ProductoCard.css';
import { Link } from 'react-router-dom';


const ProductoCard = (props) => (
  <Link className='ProductoCardLink' to={props.linki}>
  <div className="ProductoCard">
    <img className="imgProdCard" src={props.img}/>
    <h3 className='nameProdCard'>{props.name}</h3>
  </div>
  </Link>
);



ProductoCard.propTypes = {};

ProductoCard.defaultProps = {};

export default ProductoCard;
