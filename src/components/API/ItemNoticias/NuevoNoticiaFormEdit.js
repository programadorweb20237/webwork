import React, { Component } from 'react';
import './NuevoNoticiaForm.css';
import { apiUrl } from '../ApiConfig';

class NuevoNoticiaFormEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            imagen: null,
            contenido: '',
            fecha: this.getCurrentDate() // Inicializa la fecha actual al cargar el formulario
        };
    }

    getCurrentDate() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // Enero es 0!
        const yyyy = today.getFullYear();
        return `${dd}/${mm}/${yyyy}`;
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleImageChange = (event) => {
        this.setState({ imagen: event.target.files[0] });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes enviar los datos del formulario al servidor para procesarlos
        // Puedes usar fetch, axios u otra librería para realizar la solicitud HTTP
        // Asegúrate de manejar la carga de archivos (imagen) adecuadamente en el servidor

        // Formatea la fecha al formato aaaa/mm/dd para que sea fácil de almacenar en la base de datos
        const fechaParts = this.state.fecha.split('/');
        const formattedDate = `${fechaParts[2]}/${fechaParts[1]}/${fechaParts[0]}`;

        const formData = new FormData();
        formData.append('titulo', this.state.titulo);
        formData.append('imagen', this.state.imagen);
        formData.append('contenido', this.state.contenido);
        formData.append('fecha', formattedDate);

        // Realiza la solicitud POST al backend
        fetch(`${apiUrl}/api-item-noticias.php`, {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                // Maneja la respuesta del servidor, por ejemplo, muestra un mensaje de éxito
            })
            .catch(error => {
                // Maneja errores, por ejemplo, muestra un mensaje de error
            });
    }

    render() {
        return (
            <div className="nuevo-noticia-form-container">
                <h1 className="nuevo-noticia-form-title">Noticia</h1>
                <form onSubmit={this.handleSubmit} encType="multipart/form-data" className="nuevo-noticia-form">
                    <label htmlFor="titulo" className="nuevo-noticia-form-label">Título:</label>
                    <input
                        type="text"
                        name="titulo"
                        id="titulo"
                        value={this.state.titulo}
                        onChange={this.handleInputChange}
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
                        onChange={this.handleImageChange}
                        className="nuevo-noticia-form-input"
                    />
                    <br />

                    <label htmlFor="contenido" className="nuevo-noticia-form-label">Contenido:</label>
                    <textarea
                        name="contenido"
                        id="contenido"
                        rows="5"
                        value={this.state.contenido}
                        onChange={this.handleInputChange}
                        required
                        className="nuevo-noticia-form-textarea"
                    ></textarea>
                    <br />

                    <label htmlFor="fecha" className="nuevo-noticia-form-label">Fecha (dd/mm/aaaa):</label>
                    <input
                        type="text"
                        name="fecha"
                        id="fecha"
                        value={this.state.fecha}
                        onChange={this.handleInputChange}
                        required
                        className="nuevo-noticia-form-input"
                    />
                    <br />

                    <input type="submit" value="Enviar" className="nuevo-noticia-form-submit" />
                    <input type="button" value="Cancelar" onClick={() => this.props.history.push('/index')} className="nuevo-noticia-form-cancel" />
                </form>
            </div>
        );
    }
}

export default NuevoNoticiaFormEdit;
