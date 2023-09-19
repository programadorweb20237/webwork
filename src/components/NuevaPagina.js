import React, { useState } from 'react';
import './NuevaPagina.css';
import { apiUrl } from './API/ApiConfig'; // Asegúrate de importar apiUrl correctamente

function NuevaPagina() {
    const [cliente, setCliente] = useState('');
    const [pagos, setPagos] = useState([{ precio: '', tipoPago: 'efectivo', imagen: null }]);

    const agregarPago = () => {
        setPagos([...pagos, { precio: '', tipoPago: 'efectivo', imagen: null }]);
    };

    const handleChange = (index, field, value) => {
        const nuevosPagos = [...pagos];
        nuevosPagos[index][field] = value;
        setPagos(nuevosPagos);
    };

    const handleImagenChange = (index, event) => {
        const nuevaImagen = event.target.files[0];
        
        // Usar FileReader para convertirr la imagen a base64
        const reader = new FileReader();
        reader.onload = (e) => {
            const base64Image = e.target.result;
            handleChange(index, 'imagen', base64Image);
        };
        reader.readAsDataURL(nuevaImagen);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Crear un objeto con los datoss a enviar en formato JSON
        const data = {
            cliente: cliente,
            pagos: pagos,
        };


        alert("Se ha ejecutado handleSubmit()");
        console.log( JSON.stringify(data));
    
        // Enviar la solicitud POST
        fetch(`${apiUrl}/sendmail.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Indicar que los datos son JSON
            },
            body: JSON.stringify(data), // Convertir el objeto a JSON
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // El correo se envió con éxito
                    console.log('Correo enviado con éxito frontend', data.message);
                } else {
                    // Hubo un error en el servidor PHP, muestra el mensaje de error
                    console.error('Error al enviar el formulario:', data.message);
                }
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
            });
    };

    return (
        <div className="form-pago-1">
            <h2 className='form-pago-h2'>Formulario de Pagos</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="cliente">Elige un cliente:</label>
                <select
                    id="cliente"
                    name="cliente"
                    value={cliente}
                    onChange={(event) => setCliente(event.target.value)}
                >
                    <option value="trossero">Trossero</option>
                    <option value="supp">Supp Cereales</option>
                    <option value="ferrer">La Ferrer</option>
                    <option value="nicoben1x@gmail.com">nicoben1x@gmail.com</option>
                </select>

                <div id="pagos-container">
                    {pagos.map((pago, index) => (
                        <div key={index} className="pago">
                            <label htmlFor={`tipo-pago-${index}`}>Tipo de Pago:</label>
                            <select
                                id={`tipo-pago-${index}`}
                                name={`tipo-pago-${index}`}
                                value={pago.tipoPago}
                                onChange={(event) => handleChange(index, 'tipoPago', event.target.value)}
                            >
                                <option value="efectivo">Efectivo</option>
                                <option value="cheque">Cheque</option>
                            </select>

                            <label htmlFor={`precio-${index}`}>Precio:</label>
                            <input
                                type="number"
                                step="0.01"
                                id={`precio-${index}`}
                                name={`precio-${index}`}
                                value={pago.precio}
                                onChange={(event) => handleChange(index, 'precio', event.target.value)}
                                placeholder="Ingrese el precio"
                                required
                            />

                            <label htmlFor={`imagen-${index}`}>Subir una Imagen (opcional):</label>
                            <input
                                type="file"
                                id={`imagen-${index}`}
                                name={`imagen-${index}`}
                                accept="image/*"
                                onChange={(event) => handleImagenChange(index, event)}
                            />
                        </div>
                    ))}
                </div>

                <button className="agregar-pago1" type="button" onClick={agregarPago}>Agregar Pago</button>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default NuevaPagina;
