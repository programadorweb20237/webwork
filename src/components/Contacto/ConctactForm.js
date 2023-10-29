import React, { Component } from 'react';
import './ContactForm.css';
import { MdPlace } from 'react-icons/md';
import { apiUrl } from '../API/ApiConfig';


class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            telefono: '',
            email: '',
            consulta: '',
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para manejar el envío del formulario
        console.log(this.state);



        

// Aquí puedes enviar los datos del formulario al servidor PHP
fetch(`${apiUrl}/api-contact-email.php`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.state),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Los datos se enviaron exitosamente, muestra un mensaje de éxito
        alert('Enviado exitosamente!');

        // Restablece los campos del formulario
        this.setState({
            nombre: '', // Establece el campo nombre en blanco
            telefono: '', // Establece el campo telefono en blanco
            email: '', // Establece el campo email en blanco
            consulta: '', // Establece el campo consulta en blanco
          });


      } else {
        // Maneja el caso en el que ocurrió un error en el servidor
        alert('Error al enviar el formulario: ' + data.message);
      }
    })
    .catch((error) => {
      console.error('Error al enviar el formulario:', error);
    });
  





        // Puedes acceder a los valores en this.state.nombre, this.state.telefono, etc.
        // Por ejemplo, puedes enviarlos a un servidor o mostrarlos en la consola.
    }

    render() {
        return (
            <div className='Contacto22' id="areaContactotheId">
                <h2 className='h2Contacto'>CONTACTO</h2>
                <div className='Contacto'>
                    <div className='divJunta'>
                        <h4 className='h444Nosotros'>Dejenos su consulta. Le respoderemos a la brevedad.</h4>
                        <form className='formulario' onSubmit={this.handleSubmit}>
                            <label htmlFor="nombre">Nombre:</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                placeholder='Ingrese su nombre'
                                value={this.state.nombre}
                                onChange={this.handleChange}
                                required
                            /><br />

                            <label htmlFor="telefono">Teléfono:</label>
                            <input
                                type="tel"
                                id="telefono"
                                name="telefono"
                                placeholder='Ingrese su teléfono'
                                value={this.state.telefono}
                                onChange={this.handleChange}
                                required
                            /><br />

                            <label htmlFor="email">Correo Electrónico:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder='Ingrese su email'
                                value={this.state.email}
                                onChange={this.handleChange}
                                required
                            /><br />

                            <label htmlFor="consulta">Consulta:</label>
                            <textarea
                                id="consulta"
                                name="consulta"
                                placeholder='Ingrese su consulta'
                                value={this.state.consulta}
                                onChange={this.handleChange}
                                rows="4"
                                required
                            /><br />

                            <input id="formBtn" type="submit" value="Enviar" />
                        </form>


                    </div>

                    <div className='mapaConjunto'>
                        <iframe className="mapaGoogle" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.706956982645!2d-58.70205972342972!3d-34.45958594990197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca251cf53478d%3A0xa5af2582d378c16b!2sSadi%20Carnot%202390%20b1615%2C%20B1615%20Area%20de%20Promoci%C3%B3n%20El%20Tri%C3%A1ngulo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1693643508671!5m2!1ses!2sar" width="90%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div className='itemMapa'>
                            <MdPlace />
                            <p>Sadi Carnot 2390, Grand Bourg, Buenos Aires.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;