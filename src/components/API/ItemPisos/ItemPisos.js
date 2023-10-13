import React, { useEffect, useState } from 'react';
import './ItemPisos.css';
import { apiUrl } from "../ApiConfig";
import img0 from "../ItemPisos/img/folleto0.jpg"
import img01 from "../ItemPisos/img/folleto01.jpg"
import img02 from "../ItemPisos/img/folleto02.jpg"
import img03 from "../ItemPisos/img/folleto03.jpg"

function ItemPisos() {

    return (
        <div className='item-pisos-div"'>

            <h1>Pisos de Goma</h1>

            <div className='area-img-pisos'>
                <img src={img0} />
                <img src={img01} />
                <img src={img02} />
                <img src={img03} />

            </div>

        </div>
    );
}

export default ItemPisos;
