import React, { useState } from 'react';
import './NuevaPagina.css';


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
        handleChange(index, 'imagen', nuevaImagen);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Aquí puedes enviar los datos del formulario al servidor
        const datosFormulario = {
            cliente,
            pagos: pagos.map((pago) => ({
                precio: pago.precio,
                tipoPago: pago.tipoPago,
                imagen: pago.imagen,
            })),
        };

        console.log(datosFormulario); // Mostrar en la consola por ahora
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
