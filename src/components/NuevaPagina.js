import React, { useState, useEffect } from 'react';
import './NuevaPagina.css';
import { apiUrl } from './API/ApiConfig';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate


function NuevaPagina({ usuarioObj, isLoggedIn }) {
    const [cliente, setCliente] = useState('');
    const [pagos, setPagos] = useState([{ precio: '', tipoPago: 'Efectivo', imagen: null }]);
    const [clientesData, setClientesData] = useState([]);
    const [mensaje, setMensaje] = useState(null);
    const [mensajeEstilo, setMensajeEstilo] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClientModalOpen, setIsClientModalOpen] = useState(false);
    const [newClient, setNewClient] = useState({ nombre: '', email: '' });

    const [isLoading, setIsLoading] = useState(false);

    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);


    const navigate = useNavigate(); // Obtiene la función de navegación




    useEffect(() => {

        // Verificar si hay información de usuario en el almacenamiento local
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const storedUsuarioObj = JSON.parse(localStorage.getItem('usuarioObj'));


        // Si no hay un usuario autenticado, redirigir a la página de inicio
        if (!storedIsLoggedIn || !storedUsuarioObj) {
            navigate('/');
        }




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

    // Función para manejar cambios en la entrada del nuevo cliente
    const handleClientInput = (campo, valor) => {
        setNewClient({ ...newClient, [campo]: valor });
    };

    // Función para agregar un nuevo cliente y cerrar el modal
    const addNewClient = () => {
        if (!newClient.nombre || !newClient.email) {
            alert('Por favor, complete todos los campos.');
            return;
        }






        // Validar que el valor ingresado sea una dirección de correo electrónico válida
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!emailPattern.test(newClient.email)) {
            // Mostrar un mensaje de error si el formato del correo es incorrecto
            alert('Por favor, ingrese una dirección de correo electrónico válida.');
            return;

        }







        // Realizar una solicitud POST al servidor para guardar el nuevo cliente
        fetch(`${apiUrl}/api-guardar-email.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newClient),
        })
            .then(response => response.json())
            .then(result => {
                if (result.success) {


                    // Actualiza la lista de clientes con el nuevo cliente
                    setClientesData([...clientesData, newClient]);

                    // Limpia los campos del nuevo cliente
                    setNewClient({ nombre: '', email: '' });



                    // Cierra el modal de cliente
                    setIsClientModalOpen(false);

                    alert('Cliente añadido exitosamente.');
                } else {
                    alert('Error al añadir cliente.');
                }
            })
            .catch(error => console.error('Error al guardar los cambios:', error));
    }

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

    const calcularTotal = () => {
        const total = pagos.reduce((sum, pago) => sum + parseFloat(pago.precio || 0), 0);
        return total.toFixed(2);
    };

    const abrirModal = () => {
        setIsModalOpen(true);
    };

    const abrirModal2 = () => {
        setIsClientModalOpen(true);
    };

    const cerrarModal = () => {
        setIsModalOpen(false);
    };

    const enviarSolicitudPOST = async (event) => {
        event.preventDefault();
        document.getElementById("btn-confirmar-modal-cerrar").click();

        setIsLoading(true); // Inicia la pantalla de carga


        const data = {
            cliente: cliente,
            nombreCliente: clientesData.find(c => c.email === cliente)?.nombre,
            pagos: pagos,
        };

        console.log(data);

        try {
            const response = await fetch(`${apiUrl}/sendmail.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                setSuccessMessage('Correo enviado con éxito.');
                setTimeout(() => {
                    setSuccessMessage(null);
                }, 3000); // 3000 milisegundos (3 segundos)
            } else {
                setErrorMessage('Error al enviar el formulario: ' + result.message);
                setTimeout(() => {
                    setErrorMessage(null);
                }, 5000); // 3000 milisegundos (3 segundos)
            }
        } catch (error) {
            setErrorMessage('Error en la solicitud: ' + error);
            setTimeout(() => {
                setErrorMessage(null);
            }, 5000); // 3000 milisegundos (3 segundos)
        } finally {
            setIsLoading(false); // Detiene la pantalla de carga, ya sea que la solicitud haya tenido éxito o haya fallado
        }
    };



    const handleSubmit = (event) => {
        event.preventDefault();
        abrirModal();
    };

    const reiniciarCampos = () => {
        setCliente('');
        setPagos([{ precio: '', tipoPago: 'Efectivo', imagen: null }]);
    };

    const opcionesClientes = clientesData.map(cliente => (
        <option key={cliente.email} value={cliente.email}>
            {cliente.nombre}
        </option>
    ));


    return (
        <div className="form-pago-1">
            <h2 className='form-pago-h2'>Formulario de Pagos</h2>

            <button type="button" onClick={reiniciarCampos}>Reiniciar Campos</button>
            <button type="button" className="agregar-pago2" onClick={abrirModal2}>Añadir cliente</button>

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

            {isLoading && (
                <div className="loading-overlay">
                    <div className="loading-message">Enviando...</div>
                </div>
            )}

            {successMessage && (
                <div className="success-message">
                    {successMessage}
                </div>
            )}

            {errorMessage && (
                <div className="error-message">
                    {errorMessage}
                </div>
            )}


            {isModalOpen && (
                <div className="modal fade show" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: "block" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Confirmar Información</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={cerrarModal}></button>
                            </div>
                            <div className="modal-body">
                                <p>Cliente: {clientesData.find(c => c.email === cliente)?.nombre}</p>
                                <p>Email: {clientesData.find(c => c.email === cliente)?.email}</p>
                                <h4>Detalles de los Pagos:</h4>
                                {pagos.map((pago, index) => (
                                    <div key={index}>
                                        <p>Tipo de Pago: {pago.tipoPago}</p>
                                        <p>Valor: ${pago.precio}</p>
                                    </div>
                                ))}
                                <p><strong>Total: ${calcularTotal()}</strong></p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={enviarSolicitudPOST}>Confirmar</button>
                                <button type="button" id="btn-confirmar-modal-cerrar" className="btn btn-secondary" data-bs-dismiss="modal" onClick={cerrarModal}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div>
                {/* Modal para agregar un nuevo cliente con Bootstrap 5 */}
                {isClientModalOpen && (
                    <div className="modal fade show" id="clientModal" tabIndex="-1" aria-labelledby="clientModalLabel" aria-hidden="true" style={{ display: "block" }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="clientModalLabel">Añadir nuevo cliente</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setIsClientModalOpen(false)}></button>
                                </div>
                                <div className="modal-body">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nombre"
                                        value={newClient.nombre}
                                        onChange={(e) => handleClientInput('nombre', e.target.value.toUpperCase())}
                                        required
                                    />
                                    <br />
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Correo electrónico"
                                        value={newClient.email}
                                        onChange={(e) => handleClientInput('email', e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" onClick={addNewClient}>Añadir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* Fin del modal de Bootstrap 5 */}
            </div>
        </div>
    );

}

export default NuevaPagina;







