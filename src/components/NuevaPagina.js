import React, { useState, useEffect } from 'react';
import './NuevaPagina.css';
import { apiUrl } from './API/ApiConfig';
import { Navigate } from 'react-router-dom';

function NuevaPagina({ usuarioObj }) {
    const [cliente, setCliente] = useState('');
    const [pagos, setPagos] = useState([{ precio: '', tipoPago: 'Efectivo', imagen: null }]);
    const [clientesData, setClientesData] = useState([]);
    const [mensaje, setMensaje] = useState(null); // Estado para el mensaje
    const [mensajeEstilo, setMensajeEstilo] = useState(null); // Estilo del mensaje

    useEffect(() => {
        // Realizar la solicitud a la API cuando el componente se monte
        fetch(`${apiUrl}/api-email-clientes.php`)
            .then(response => response.json())
            .then(data => {
                if (data.EmailClientes) {
                    setClientesData(data.EmailClientes);
                } else {
                    console.error('Error al obtener datos de clientes desde la API');
                }
            })
            .catch(error => {
                console.error('Error en la solicitud a la API:', error);
            });
    }, []);

    const agregarPago = () => {
        setPagos([...pagos, { precio: '', tipoPago: 'Efectivo', imagen: null }]);
    };

    const handleChange = (index, field, value) => {
        const nuevosPagos = [...pagos];
        nuevosPagos[index][field] = value;
        setPagos(nuevosPagos);
    };

    const handleImagenChange = (index, event) => {
        const nuevaImagen = event.target.files[0];

        const reader = new FileReader();
        reader.onload = (e) => {
            const base64Image = e.target.result;
            handleChange(index, 'imagen', base64Image);
        };
        reader.readAsDataURL(nuevaImagen);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Enviando correo...");

        const data = {
            cliente: cliente,
            nombreCliente: clientesData.find(c => c.email === cliente)?.nombre,
            pagos: pagos,
        };

        console.log(data);

        // Enviar la solicitud POST
        fetch(`${apiUrl}/sendmail.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Éxito: Configura el mensaje de éxito
                
                    setMensaje('Correo enviado con éxito');
                    setMensajeEstilo('alert alert-success');
                    console.log('Correo enviado con éxito frontend', data.message);


                    // Después de 5 segundos, borra el mensaje de éxito
                setTimeout(() => {
                    setMensaje(null);
                    setMensajeEstilo(null);
                }, 5000); // 5000 milisegundos (5 segundos)

                } else {
                    // Fallo: Configura el mensaje de fallo
                    setMensaje('Error al enviar el formulario: ' + data.message);
                    setMensajeEstilo('alert alert-danger');
                    console.error('Error al enviar el formulario:', data.message);
                }
            })
            .catch(error => {
                // Fallo en la solicitud: Configura el mensaje de fallo
                setMensaje('Error en la solicitud: ' + error);
                setMensajeEstilo('alert alert-danger');
                console.error('Error en la solicitud:', error);
            });
    };

    // Renderizar las opciones del select
    const opcionesClientes = clientesData.map(cliente => (
        <option key={cliente.email} value={cliente.email}>
            {cliente.nombre}
        </option>
    ));

    // Verificar si el usuario está autenticado y si su nombre es "Nico"
    if (usuarioObj.username === 'Nico') {
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
                        {opcionesClientes}
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
                                    <option value="Efectivo">Efectivo</option>
                                    <option value="Cheque">Cheque</option>
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

                    {mensaje && <div className={mensajeEstilo}>{mensaje}</div>}
                </form>
            </div>
        );
    } else {
        return <Navigate to="/" />;
    }
}

export default NuevaPagina;
