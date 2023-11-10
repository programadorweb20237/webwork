import React, { useEffect, useState } from 'react';
import './ItemOrdeñe.css';
import { apiUrl } from "../ApiConfig";
import pdf01 from "../ItemOrdeñe/img/01.pdf";
import pdf02 from "../ItemOrdeñe/img/02.pdf";
import pdf03 from "../ItemOrdeñe/img/03.pdf";


function ItemOrdeñe() {

    return (
        <div className='item-ordeñe-div"'>

            <h1>Instalaciones de Ordeñe</h1>


            <div>
                <h3>Videos</h3>
                <div className='area-video-ordeñe'>

                    <div className="codegena">
                        <iframe width='395px' height='232px' src='https://player.vimeo.com/video/221569938?'></iframe>
                        <p>Xcalibur 360 EX - External Rotary Parlour</p>
                    </div>

                    <div className="codegena">
                        <iframe width='395px' height='232px' src='https://player.vimeo.com/video/218184536?'></iframe>
                        <p>Xcalibur 90LX - Parallel Stall System</p>
                    </div>

                    <div className="codegena">
                        <iframe width='395px' height='232px' src='https://player.vimeo.com/video/221572834?'></iframe>
                        <p>GT2 - Testimonial</p>
                    </div>

                </div>
            </div>


            <div>
                <h3>Catálogos</h3>
                <div className='area-pdf-ordeñe'>
                    <a href={pdf01} target="_blank">Casilla paralela de rendimiento superior.pdf</a>
                    <a href={pdf02} target="_blank">Catalogo DualFlo.pdf</a>
                    <a href={pdf03} target="_blank">Salas rotativas exteriores.pdf</a>
                </div>
            </div>

        </div>
    );
}

export default ItemOrdeñe;
