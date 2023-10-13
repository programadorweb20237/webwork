import React, { useEffect, useState } from 'react';
import './ItemVentiladores.css';
import { apiUrl } from "../ApiConfig";
import img00 from "../ItemVentiladores/img/ventiladores00.jpg"
import img01 from "../ItemVentiladores/img/ventiladores01.jpg"
import img02 from "../ItemVentiladores/img/ventiladores02.jpg"
import img03 from "../ItemVentiladores/img/ventiladores03.jpg"
import img04 from "../ItemVentiladores/img/ventiladores04.jpg"
import img05 from "../ItemVentiladores/img/ventiladores05.jpg"
import img06 from "../ItemVentiladores/img/ventiladores06.jpg"

import video01 from "../ItemVentiladores/img/ventiladores.mp4"

function ItemVentiladores() {

    return (
        <div className='item-ventiladores-div"'>

            <h1>Ventiladores</h1>

            <video width="500" height="360" controls>
                <source src={video01} type="video/mp4" />
                Tu navegador no soporta la reproducción de videos.
            </video>

            <div className='area-img-ventiladores'>
                <img src={img00} />
                <img src={img01} />
                <img src={img02} />
                <img src={img03} />
                <img src={img04} />
                <img src={img05} />
                <img src={img06} />


            </div>

        </div>
    );
}

export default ItemVentiladores;
