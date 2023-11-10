import React, { useEffect, useState } from 'react';
import './ItemEfluentes.css';
import { apiUrl } from "../ApiConfig";
import video00 from "../ItemEfluentes/img/efluentes00.mp4"
import video01 from "../ItemEfluentes/img/efluentes01.mp4"
import video02 from "../ItemEfluentes/img/efluentes02.mp4"
import video03 from "../ItemEfluentes/img/efluentes03.mp4"
import video04 from "../ItemEfluentes/img/efluentes04.mp4"
import video05 from "../ItemEfluentes/img/efluentes05.mp4"



function ItemEfluentes() {

    return (
        <div className='item-efluentes-div"'>

            <h1>Manejo de Efluentes</h1>
            <h2>Sistema ecologico de manejo de efluentes con recirculacion de agua y sin descarte 
                al medio ambiente. Gran ahorro de agua.</h2>

        

            <div className='area-video-efluentes'>

            <div className='item-video-efluentes'>
                <video width="500" height="360" controls>
                    <source src={video00} type="video/mp4" />
                    Tu navegador no soporta la reproducción de videos.
                </video>
                <p>Valvula</p>
            </div>

            <div className='item-video-efluentes'>
                <video width="500" height="360" controls>
                    <source src={video01} type="video/mp4" />
                    Tu navegador no soporta la reproducción de videos.
                </video>
                <p>Tornillo separador</p>
            </div>

            <div className='item-video-efluentes'>
                <video width="500" height="360" controls>
                    <source src={video02} type="video/mp4" />
                    Tu navegador no soporta la reproducción de videos.
                </video>
                <p>Secador de Estiercol</p>
            </div>

            <div className='item-video-efluentes'>
                <video width="500" height="360" controls>
                    <source src={video03} type="video/mp4" />
                    Tu navegador no soporta la reproducción de videos.
                </video>
                <p>Repas Etapa 1</p>
            </div>

            <div className='item-video-efluentes'>
                <video width="500" height="360" controls>
                    <source src={video04} type="video/mp4" />
                    Tu navegador no soporta la reproducción de videos.
                </video>
                <p>Repas Etapa 2</p>
            </div>

            <div className='item-video-efluentes'>
                <video width="500" height="360" controls>
                    <source src={video05} type="video/mp4" />
                    Tu navegador no soporta la reproducción de videos.
                </video>
                <p>Repas Etapa 3</p>
            </div>

            </div>

        </div>
    );
}

export default ItemEfluentes;
