import React, { useState } from 'react';
import './NuevoNoticiaForm.css';
import { apiUrl } from '../ApiConfig';

import { useNavigate } from 'react-router-dom'; // Importa useNavigate en lugar de useHistory


const NuevoNoticiaForm = () => {
    const [state, setState] = useState({
        titulo: '',
        imagen: null,
        contenido: '',
        fecha: getCurrentDate() // Inicializa la fecha actual al cargar el formulario
    });

    const navigate = useNavigate(); // Utiliza useNavigate en lugar de useHistory

    const handleCancel = () => {
        // Redirige a la página "/noticias" cuando se hace clic en Cancelar
        navigate('/noticias');
    }


    function getCurrentDate() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // Enero es 0!
        const yyyy = today.getFullYear();
        return `${dd}/${mm}/${yyyy}`;
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    }

    const handleImageChange = (event) => {
        setState({ ...state, imagen: event.target.files[0] });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes enviar los datos del formulario al servidor para procesarlos
        // Puedes usar fetch, axios u otra librería para realizar la solicitud HTTP
        // Asegúrate de manejar la carga de archivos (imagen) adecuadamente en el servidor

        // Formatea la fecha al formato aaaa/mm/dd para que sea fácil de almacenar en la base de datos
        const fechaParts = state.fecha.split('/');
        const formattedDate = `${fechaParts[0]}/${fechaParts[1]}/${fechaParts[2]}`;

        const formData = new FormData();
        formData.append('titulo', state.titulo);
        formData.append('imagen', state.imagen);
        formData.append('contenido', state.contenido);
        formData.append('fecha', formattedDate);

        console.log(formData);

        // Realiza la solicitud POST al backend
        fetch(`${apiUrl}/api-item-noticias.php`, {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                // Maneja la respuesta del servidor, por ejemplo, muestra un mensaje de éxito
                navigate('/noticias');
            })
            .catch(error => {
                // Maneja errores, por ejemplo, muestra un mensaje de error
            });
    }

    return (
        <div className="nuevo-noticia-form-container">
            <h1 className="nuevo-noticia-form-title">Noticia</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data" className="nuevo-noticia-form">
                <label htmlFor="titulo" className="nuevo-noticia-form-label">Título:</label>
                <input
                    type="text"
                    name="titulo"
                    id="titulo"
                    value={state.titulo}
                    onChange={handleInputChange}
                    required
                    className="nuevo-noticia-form-input"
                />
                <br />

                <label htmlFor="imagen" className="nuevo-noticia-form-label">Imagen:</label>
                <input
                    type="file"
                    name="imagen"
                    id="imagen"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="nuevo-noticia-form-input"
                />
                <br />

                <label htmlFor="contenido" className="nuevo-noticia-form-label">Contenido:</label>
                <textarea
                    name="contenido"
                    id="contenido"
                    rows="5"
                    value={state.contenido}
                    onChange={handleInputChange}
                    required
                    className="nuevo-noticia-form-textarea"
                ></textarea>
                <br />

                <label htmlFor="fecha" className="nuevo-noticia-form-label">Fecha (dd/mm/aaaa):</label>
                <input
                    type="text"
                    name="fecha"
                    id="fecha"
                    value={state.fecha}
                    onChange={handleInputChange}
                    required
                    className="nuevo-noticia-form-input"
                />
                <br />

                <input type="submit" value="Enviar" className="nuevo-noticia-form-submit" />
                <input type="button" value="Cancelar" className="nuevo-noticia-form-cancel" onClick={handleCancel} />
    
            </form>
        </div>
    );
}

export default NuevoNoticiaForm;
