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


    return (

        <div className='parent-stock-quim-container'>
            <div className='stock-quim-container'>
                <h1>Stock de Químicos</h1> {/* Título general */}
                <table className='table-container'>
                    <tr className='tr-prod-stock-quim' >
                        <td>Fecha:</td>
                        <td>9/20/23</td>
                        <td colspan="9"></td>

                    </tr>
                    <tr className='tr-prod-stock-quim' >
                        <td>Producto</td>
                        <td>-</td>
                        <td colspan="2">Stock Seguridad</td>

                        <td colspan="2">Stock actual</td>

                        <td colspan="2">Pedido</td>

                        <td>Total</td>
                        <td></td>
                        <td></td>

                    </tr>
                    <tr className='tr-prod-stock-quim2'>
                        <td>PRODUCTO</td>
                        <td>PROVEEDOR</td>
                        <td>cantidad</td>
                        <td>presentacion en KG</td>
                        <td>cantidad</td>
                        <td>presentacion en Kg</td>
                        <td>cantidad</td>
                        <td>presentacion en Kg</td>
                        <td></td>
                        <td>Ubicación</td>
                        <td>FORMATO</td>

                    </tr>


                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.PRODUCTO}</td>
                            <td>{item.PROVEEDOR}</td>
                            <td>{item.cantidads}</td>
                            <td>{item.presentacions}</td>
                            <td></td>
                            <td>{item.presentaciona}</td>
                            <td>{item.cantidadp}</td>
                            <td>{item.presentacionp}</td>
                            <td>{item.total}</td>
                            <td>{item.Ubicación}</td>
                            <td>{item.FORMATO}</td>
                        </tr>
                    ))}



                </table>


                <table className='table-bidones-container'>
                    <tr className='tr-prod-stock-quim' >
                        <td>Producto</td>
                        <td colspan="2">Stock Seguridad</td>

                        <td colspan="2">Stock actual</td>

                        <td colspan="2">Pedido</td>

                        <td>Total</td>
                        <td></td>

                    </tr>
                    <tr className='tr-prod-stock-quim2'>
                        <td>Producto</td>
                        <td>cantidad</td>
                        <td>presentacion en KG</td>
                        <td>cantidad</td>
                        <td>presentacion en Kg</td>
                        <td>cantidad</td>
                        <td>presentacion en Kg</td>
                        <td>Total</td>
                        <td>Ubicación</td>

                    </tr>
               
                    {data2.map((item, index) => (
                        <tr key={index}>
                            <td>{item.producto}</td>
                            
                            <td>{item.cantidads}</td>
                            <td>{item.presentacions}</td>
                            <td></td>
                            <td>{item.presentaciona}</td>
                            <td>{item.cantidadp}</td>
                            <td>{item.presentacionp}</td>
                            <td>{item.total}</td>
                            <td>{item.ubicacion}</td>
    
                        </tr>
                    ))}

                </table>
            </div>
        </div>
    );



}

export default StockQuimicos;
