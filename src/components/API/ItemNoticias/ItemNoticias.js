import React, { useEffect, useState } from 'react';
import './ItemNoticias.css';
import { apiUrl } from "../ApiConfig";
import NoticiasCard from '../../NoticiasCard/NoticiasCard';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate



function ItemNoticias() {

    const [noticias, setNoticias] = useState([]);

    const navigate = useNavigate(); // Obtiene la función de navegación

   
  
    useEffect(() => {
      // Realiza una solicitud GET a la API de noticias
      fetch(`${apiUrl}/api-item-noticias.php`)
        .then((response) => response.json())
        .then((data) => {
          console.log('Datos de noticias recibidos:', data); // Agrega este console.log
          setNoticias(data.noticiasItems);
        })
        .catch((error) => console.error('Error al obtener noticias:', error));
    }, []);

    return (
        <div className='item-noticias-div"'>

            <h1>Noticas</h1>

            <button onClick={() => navigate('/noticiasform')}>Agregar Noticia</button>

            

                <div className="areaNoticias">


                    {noticias.map((noticia) => (
                        <NoticiasCard
                            key={noticia.id}
                            img={noticia.imagen}
                            titulo={noticia.titulo}
                            descripcion={noticia.contenido}
                            fecha={noticia.fecha}
                        />
                    ))}
                </div>


            

        </div>
    );
}

export default ItemNoticias;
