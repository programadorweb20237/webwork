import React, { useEffect, useState } from 'react';
import './StockQuimicos.css';
import { apiUrl } from "../API/ApiConfig";

function StockQuimicos() {





    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);


    useEffect(() => {
        fetch(`${apiUrl}/api-stock-quimicos.php`)
            .then((response) => response.json())
            .then((data) => {

                const stockQuimicos = data.quimicoStock;
                setData(stockQuimicos);
                const stockBidones = data.bidonesStock;
                setData2(stockBidones);

            })
            .catch((error) => console.error('Error al obtener los datos:', error));
    }, []);





    const [buttonDisabled, setButtonDisabled] = useState(false);






    const [editingCell, setEditingCell] = useState({ rowIndex: null, columnName: null });
    const [editedValue, setEditedValue] = useState("");


    const handleEditCantidad = (index) => {
        setEditingCell({ rowIndex: index, columnName: "cantidads" });
        setEditedValue(data[index].cantidads);
    };

    const handleCantidadChange = (event) => {
        const newValue = event.target.value;
        setEditedValue(newValue);
    };

    const handleSaveCantidad = () => {
        if (editingCell.rowIndex !== null && editingCell.columnName === "cantidads") {
            const rowIndex = editingCell.rowIndex;
            const newData = [...data];
            const newCantidads = parseFloat(editedValue);
            newData[rowIndex].cantidads = newCantidads;
            newData[rowIndex].cantidadp = Math.max(newCantidads - newData[rowIndex].cantidada, 0);
            newData[rowIndex].total = newData[rowIndex].cantidadp * newData[rowIndex].presentacions;
            setData(newData);
        }
        setEditingCell({ rowIndex: null, columnName: null });
    };

    const [editingCantidadA, setEditingCantidadA] = useState({ rowIndex: null, columnName: null });
    const [editedValueCantidadA, setEditedValueCantidadA] = useState("");

    const handleEditCantidadA = (index) => {
        setEditingCantidadA({ rowIndex: index, columnName: "cantidada" });
        setEditedValueCantidadA(data[index].cantidada);
    };

    const handleCantidadAChange = (event) => {
        const newValue = event.target.value;
        setEditedValueCantidadA(newValue);
    };

    const handleSaveCantidadA = () => {
        if (editingCantidadA.rowIndex !== null && editingCantidadA.columnName === "cantidada") {
            const rowIndex = editingCantidadA.rowIndex;
            const newData = [...data];
            const newCantidada = parseFloat(editedValueCantidadA);
            newData[rowIndex].cantidada = newCantidada;
            newData[rowIndex].cantidadp = Math.max(newData[rowIndex].cantidads - newCantidada, 0);
            newData[rowIndex].total = newData[rowIndex].cantidadp * newData[rowIndex].presentacions;
            setData(newData);
        }
        setEditingCantidadA({ rowIndex: null, columnName: null });
    };



    {/* MISMA LOGICA PARA BIDONES  */ }

    const [editingCellB, setEditingCellB] = useState({ rowIndex: null, columnName: null });
    const [editedValueB, setEditedValueB] = useState("");


    const handleEditCantidadB = (index) => {
        setEditingCellB({ rowIndex: index, columnName: "cantidads" });
        setEditedValueB(data2[index].cantidads);
    };

    const handleCantidadChangeB = (event) => {
        const newValue = event.target.value;
        setEditedValueB(newValue);
    };

    const handleSaveCantidadB = () => {
        if (editingCellB.rowIndex !== null && editingCellB.columnName === "cantidads") {
            const rowIndex = editingCellB.rowIndex;
            const newData = [...data2];
            const newCantidads = parseFloat(editedValueB);
            newData[rowIndex].cantidads = newCantidads;
            newData[rowIndex].cantidadp = Math.max(newCantidads - newData[rowIndex].cantidada, 0);
            newData[rowIndex].total = newData[rowIndex].cantidadp * newData[rowIndex].presentacions;
            setData2(newData);
        }
        setEditingCellB({ rowIndex: null, columnName: null });
    };

    const [editingCantidadAB, setEditingCantidadAB] = useState({ rowIndex: null, columnName: null });
    const [editedValueCantidadAB, setEditedValueCantidadAB] = useState("");

    const handleEditCantidadAB = (index) => {
        setEditingCantidadAB({ rowIndex: index, columnName: "cantidada" });
        setEditedValueCantidadAB(data2[index].cantidada);
    };

    const handleCantidadAChangeB = (event) => {
        const newValue = event.target.value;
        setEditedValueCantidadAB(newValue);
    };

    const handleSaveCantidadAB = () => {
        if (editingCantidadAB.rowIndex !== null && editingCantidadAB.columnName === "cantidada") {
            const rowIndex = editingCantidadAB.rowIndex;
            const newData = [...data2];
            const newCantidada = parseFloat(editedValueCantidadAB);
            newData[rowIndex].cantidada = newCantidada;
            newData[rowIndex].cantidadp = Math.max(newData[rowIndex].cantidads - newCantidada, 0);
            newData[rowIndex].total = newData[rowIndex].cantidadp * newData[rowIndex].presentacions;
            setData2(newData);
        }
        setEditingCantidadAB({ rowIndex: null, columnName: null });
    };









    {/* MISMA LOGICA PARA presentacion KG  */ }

    // Agregar estados y funciones para editar item.presentacions
    const [editingPresentacions, setEditingPresentacions] = useState({ rowIndex: null, columnName: null });
    const [editedValuePresentacions, setEditedValuePresentacions] = useState("");

    const handleEditPresentacions = (index) => {
        setEditingPresentacions({ rowIndex: index, columnName: "presentacions" });
        setEditedValuePresentacions(data[index].presentacions);
    };

    const handlePresentacionsChange = (event) => {
        const newValue = event.target.value;
        setEditedValuePresentacions(newValue);
    };

    const handleSavePresentacions = () => {
        if (editingPresentacions.rowIndex !== null && editingPresentacions.columnName === "presentacions") {
            const rowIndex = editingPresentacions.rowIndex;
            const newData = [...data];
            const newPresentacions = parseFloat(editedValuePresentacions);
            newData[rowIndex].presentacions = newPresentacions;
            // Aquí puedes realizar las actualizaciones necesarias en otros campos si es necesario.


            newData[rowIndex].total = newData[rowIndex].cantidadp * newData[rowIndex].presentacions;

            setData(newData);
        }
        setEditingPresentacions({ rowIndex: null, columnName: null });
    };









        {/* MISMA LOGICA PARA presentacion KG  BIDONES*/ }

    // Agregar estados y funciones para editar item.presentacions
    const [editingPresentacionsB, setEditingPresentacionsB] = useState({ rowIndex: null, columnName: null });
    const [editedValuePresentacionsB, setEditedValuePresentacionsB] = useState("");

    const handleEditPresentacionsB = (index) => {
        setEditingPresentacionsB({ rowIndex: index, columnName: "presentacions" });
        setEditedValuePresentacionsB(data2[index].presentacions);
    };

    const handlePresentacionsChangeB = (event) => {
        const newValue = event.target.value;
        setEditedValuePresentacionsB(newValue);
    };

    const handleSavePresentacionsB = () => {
        if (editingPresentacionsB.rowIndex !== null && editingPresentacionsB.columnName === "presentacions") {
            const rowIndex = editingPresentacionsB.rowIndex;
            const newData = [...data2];
            const newPresentacions = parseFloat(editedValuePresentacionsB);
            newData[rowIndex].presentacions = newPresentacions;
            // Aquí puedes realizar las actualizaciones necesarias en otros campos si es necesario.


            newData[rowIndex].total = newData[rowIndex].cantidadp * newData[rowIndex].presentacions;

            setData2(newData);
        }
        setEditingPresentacionsB({ rowIndex: null, columnName: null });
    };
















    {/* GUARDAR CAMBIOS   */ }

    const handleSaveChanges = () => {
        // Deshabilita el botón al hacer clic
        setButtonDisabled(true);


        alert('Estás a punto de guardar los cambios, esto puede tardar aproximadamente 15 segundos. Por favor, espere el mensaje de confirmación.');

        // Obtener la fecha actual en el formato deseado (DD/MM/YYYY)
        const currentDate = new Date();
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Los meses comienzan desde 0
        const year = currentDate.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;

        // Preparar los datos para enviar al servidor
        const updatedData = { quimicoStock: data, bidonesStock: data2, fecha: formattedDate };

        console.log(JSON.stringify(updatedData));







        // Realizar una solicitud POST al servidor para guardar los cambios
        fetch(`${apiUrl}/api-guardar-stock.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    alert('Cambios guardados exitosamente.');
                } else {
                    alert('Error al guardar los cambios');
                }
            })
            .catch((error) => console.error('Error al guardar los cambios:', error));



        // Habilita el botón después de un período de tiempo (por ejemplo, 10 segundos)
        setTimeout(() => {
            setButtonDisabled(false);
        }, 18000); // 10000 ms = 10 segundos



    };



    return (

        <div className='parent-stock-quim-container'>
            <div className='stock-quim-container'>
                <h1>Stock de Químicos</h1> {/* Título general */}
                <button class="btn btn-primary" disabled={buttonDisabled} onClick={handleSaveChanges}>Guardar Cambios</button>

                <table className='table-container'>
                    <tr className='tr-prod-stock-quim' >
                        <td>Fecha:</td>
                        <td className="oculta-stock">{data.length > 0 ? data[0].fecha : 'Sin fecha'}</td>
                        <td colspan="9">{data.length > 0 ? data[0].fecha : 'Sin fecha'}</td>

                    </tr>
                    <tr className='tr-prod-stock-quim' >
                        <td>Producto</td>
                        <td>-</td>
                        <td className="oculta-stock" colspan="2">Stock Seguridad</td>

                        <td colspan="2">Stock actual</td>

                        <td className="oculta-stock" colspan="2">Pedido</td>

                        <td className="oculta-stock">Total</td>
                        <td className="oculta-stock"></td>
                        <td className="oculta-stock"></td>

                    </tr>
                    <tr className='tr-prod-stock-quim2'>
                        <td>PRODUCTO</td>
                        <td className="oculta-stock">PROVEEDOR</td>
                        <td className="oculta-stock" >cantidad</td>
                        <td className="oculta-stock" >presentacion en KG</td>
                        <td>cantidad</td>
                        <td>presentacion en Kg</td>
                        <td className="oculta-stock" >cantidad</td>
                        <td className="oculta-stock" >presentacion en Kg</td>
                        <td className="oculta-stock"></td>
                        <td className="oculta-stock">Ubicación</td>
                        <td className="oculta-stock">FORMATO</td>

                    </tr>


                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.PRODUCTO}</td>
                            <td className="oculta-stock">{item.PROVEEDOR}</td>
                            {editingCell.rowIndex === index && editingCell.columnName === "cantidads" ? (
                                <input
                                    type="number"
                                    value={editedValue}
                                    onChange={handleCantidadChange}
                                    onBlur={handleSaveCantidad}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleSaveCantidad();
                                        }
                                    }}
                                />
                            ) : (
                                <td onClick={() => handleEditCantidad(index)} className="editable oculta-stock">
                                    {item.cantidads}
                                </td>
                            )}
                            


                            {/* Presentaciones (nueva sección para edición) */}
                            {editingPresentacions.rowIndex === index && editingPresentacions.columnName === "presentacions" ? (
                                // Campo de edición
                                <input
                                    type="number"
                                    value={editedValuePresentacions}
                                    onChange={handlePresentacionsChange}
                                    onBlur={handleSavePresentacions}
                                    className="oculta-stock"
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleSavePresentacions();
                                        }
                                    }}
                                />
                            ) : (
                                // Valor actual (editable al hacer clic)
                                <td onClick={() => handleEditPresentacions(index)} className="editable oculta-stock">
                                    {item.presentacions}
                                </td>
                            )}
                            {/* Resto de las columnas y celdas */}
                            {/* ... */}




                            {editingCantidadA.rowIndex === index && editingCantidadA.columnName === "cantidada" ? (
                                <input
                                    type="number"
                                    value={editedValueCantidadA}
                                    onChange={handleCantidadAChange}
                                    onBlur={handleSaveCantidadA}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleSaveCantidadA();
                                        }
                                    }}
                                />
                            ) : (
                                <td onClick={() => handleEditCantidadA(index)} className="editable">
                                    {item.cantidada}
                                </td>
                            )}
                            
                            {/* Presentaciones (nueva sección para edición) */}
                            {editingPresentacions.rowIndex === index && editingPresentacions.columnName === "presentacions" ? (
                                // Campo de edición
                                <input
                                    type="number"
                                    value={editedValuePresentacions}
                                    onChange={handlePresentacionsChange}
                                    onBlur={handleSavePresentacions}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleSavePresentacions();
                                        }
                                    }}
                                />
                            ) : (
                                // Valor actual (editable al hacer clic)
                                <td onClick={() => handleEditPresentacions(index)} className="editable">
                                    {item.presentacions}
                                </td>
                            )}
                            {/* Resto de las columnas y celdas */}
                            {/* ... */}
                            <td className="oculta-stock" >{item.cantidadp}</td>
                            
                            {/* Presentaciones (nueva sección para edición) */}
                            {editingPresentacions.rowIndex === index && editingPresentacions.columnName === "presentacions" ? (
                                // Campo de edición
                                <input
                                    type="number"
                                    value={editedValuePresentacions}
                                    onChange={handlePresentacionsChange}
                                    onBlur={handleSavePresentacions}
                                    className="oculta-stock"
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleSavePresentacions();
                                        }
                                    }}
                                />
                            ) : (
                                // Valor actual (editable al hacer clic)
                                <td onClick={() => handleEditPresentacions(index)} className="editable oculta-stock">
                                    {item.presentacions}
                                </td>
                            )}
                            {/* Resto de las columnas y celdas */}
                            {/* ... */}
                            <td className="oculta-stock">{item.total}</td>
                            <td className="oculta-stock">{item.Ubicación}</td>
                            <td className="oculta-stock">{item.FORMATO}</td>
                        </tr>
                    ))}



                </table>


                <table className='table-bidones-container'>
                    <tr className='tr-prod-stock-quim' >
                        <td>Producto</td>
                        <td className="oculta-stock"colspan="2">Stock Seguridad</td>

                        <td colspan="2">Stock actual</td>

                        <td className="oculta-stock"colspan="2">Pedido</td>

                        <td className="oculta-stock">Total</td>
                        <td className="oculta-stock"></td>

                    </tr>
                    <tr className='tr-prod-stock-quim2'>
                        <td>Producto</td>
                        <td className="oculta-stock">cantidad</td>
                        <td className="oculta-stock">presentacion en KG</td>
                        <td>cantidad</td>
                        <td>presentacion en Kg</td>
                        <td className="oculta-stock">cantidad</td>
                        <td className="oculta-stock">presentacion en Kg</td>
                        <td className="oculta-stock">Total</td>
                        <td className="oculta-stock">Ubicación</td>

                    </tr>

                    {data2.map((item, index) => (
                        <tr key={index}>
                            <td>{item.producto}</td>

                            {editingCellB.rowIndex === index && editingCellB.columnName === "cantidads" ? (
                                <input
                                    type="number"
                                    value={editedValueB}
                                    onChange={handleCantidadChangeB}
                                    onBlur={handleSaveCantidadB}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleSaveCantidadB();
                                        }
                                    }}
                                />
                            ) : (
                                <td onClick={() => handleEditCantidadB(index)} className="editable oculta-stock">
                                    {item.cantidads}
                                </td>
                            )}
                            


                              {/* Presentaciones (nueva sección para edición) */}
                              {editingPresentacionsB.rowIndex === index && editingPresentacionsB.columnName === "presentacions" ? (
                                // Campo de edición
                                <input
                                    type="number"
                                    value={editedValuePresentacionsB}
                                    className="oculta-stock"
                                    onChange={handlePresentacionsChangeB}
                                    onBlur={handleSavePresentacionsB}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleSavePresentacionsB();
                                        }
                                    }}
                                />
                            ) : (
                                // Valor actual (editable al hacer clic)
                                <td onClick={() => handleEditPresentacionsB(index)} className="editable oculta-stock">
                                    {item.presentacions}
                                </td>
                            )}
                            {/* Resto de las columnas y celdas */}
                            {/* ... */}




                            {editingCantidadAB.rowIndex === index && editingCantidadAB.columnName === "cantidada" ? (
                                <input
                                    type="number"
                                    value={editedValueCantidadAB}
                                    onChange={handleCantidadAChangeB}
                                    onBlur={handleSaveCantidadAB}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleSaveCantidadAB();
                                        }
                                    }}
                                />
                            ) : (
                                <td onClick={() => handleEditCantidadAB(index)} className="editable">
                                    {item.cantidada}
                                </td>
                            )}
                            {/* Presentaciones (nueva sección para edición) */}
                            {editingPresentacionsB.rowIndex === index && editingPresentacionsB.columnName === "presentacions" ? (
                                // Campo de edición
                                <input
                                    type="number"
                                    value={editedValuePresentacionsB}
                                    onChange={handlePresentacionsChangeB}
                                    
                                    onBlur={handleSavePresentacionsB}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleSavePresentacionsB();
                                        }
                                    }}
                                />
                            ) : (
                                // Valor actual (editable al hacer clic)
                                <td onClick={() => handleEditPresentacionsB(index)} className="editable ">
                                    {item.presentacions}
                                </td>
                            )}
                            {/* Resto de las columnas y celdas */}
                            {/* ... */}
                            <td className='oculta-stock'>{item.cantidadp}</td>
                            {/* Presentaciones (nueva sección para edición) */}
                            {editingPresentacionsB.rowIndex === index && editingPresentacionsB.columnName === "presentacions" ? (
                                // Campo de edición
                                <input
                                    type="number"
                                    value={editedValuePresentacionsB}
                                    onChange={handlePresentacionsChangeB}
                                    onBlur={handleSavePresentacionsB}
                                    className="oculta-stock"
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleSavePresentacionsB();
                                        }
                                    }}
                                />
                            ) : (
                                // Valor actual (editable al hacer clic)
                                <td onClick={() => handleEditPresentacionsB(index)} className="editable oculta-stock">
                                    {item.presentacions}
                                </td>
                            )}
                            {/* Resto de las columnas y celdas */}
                            {/* ... */}
                            <td className='oculta-stock'>{item.total}</td>
                            <td className='oculta-stock'>{item.ubicacion}</td>

                        </tr>
                    ))}

                </table>
            </div>
        </div>
    );



}

export default StockQuimicos;
