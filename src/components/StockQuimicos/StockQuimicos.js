import React, { useState } from 'react';
import './StockQuimicos.css';

function StockQuimicos() {


    return (

        <div>
            <div>
                <h1>Stock de Químicos</h1> {/* Título general */}
                <table>
                    <tr>
                        <td>fecha</td>
                        <td>9/20/23</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Prducto</td>
                        <td>-</td>
                        <td>Stock Seguridad</td>
                        <td></td>
                        <td>Stock actual</td>
                        <td></td>
                        <td>Pedido</td>
                        <td></td>
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
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
                        <td></td>
                    </tr>
                    <tr>
                        <td>acido citrico</td>
                        <td>Indaquim</td>
                        <td>1</td>
                        <td>25</td>
                        <td></td>
                        <td>25</td>
                        <td>1</td>
                        <td>25</td>
                        <td>25</td>
                        <td>C-1-1</td>
                        <td>BOLSA</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>acido fosforico</td>
                        <td>Indaquim</td>
                        <td>1</td>
                        <td>40</td>
                        <td></td>
                        <td>40</td>
                        <td>1</td>
                        <td>40</td>
                        <td>40</td>
                        <td>C-1-1</td>
                        <td>BIDON</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>acido lactico</td>
                        <td>Indaquim</td>
                        <td>1</td>
                        <td>25</td>
                        <td></td>
                        <td>25</td>
                        <td>1</td>
                        <td>25</td>
                        <td>25</td>
                        <td>C-1-1</td>
                        <td>BIDON</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>acido metanosulfonico</td>
                        <td>Lovric</td>
                        <td>1</td>
                        <td>200</td>
                        <td></td>
                        <td>200</td>
                        <td>1</td>
                        <td>200</td>
                        <td>200</td>
                        <td>C-5-1</td>
                        <td>TAMBOR</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>acido nitrico</td>
                        <td>Indaquim</td>
                        <td>2</td>
                        <td>250</td>
                        <td></td>
                        <td>250</td>
                        <td>2</td>
                        <td>250</td>
                        <td>500</td>
                        <td>C-4-1</td>
                        <td>TAMBOR</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>acido sulfonico </td>
                        <td>Indaquim</td>
                        <td>1</td>
                        <td>240</td>
                        <td></td>
                        <td>240</td>
                        <td>1</td>
                        <td>240</td>
                        <td>240</td>
                        <td>C-5-1</td>
                        <td>TAMBOR</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>acidosulfurico 98</td>
                        <td>Indaquim</td>
                        <td>6</td>
                        <td>30</td>
                        <td></td>
                        <td>30</td>
                        <td>6</td>
                        <td>30</td>
                        <td>180</td>
                        <td>C-1-1</td>
                        <td>BIDON</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>alchol etilico</td>
                        <td>Anjo</td>
                        <td>1</td>
                        <td>50</td>
                        <td></td>
                        <td>50</td>
                        <td>1</td>
                        <td>50</td>
                        <td>50</td>
                        <td>C-6-2</td>
                        <td>TAMBOR</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>alchol laurico</td>
                        <td>Indaquim</td>
                        <td>1</td>
                        <td>250</td>
                        <td></td>
                        <td>250</td>
                        <td>1</td>
                        <td>250</td>
                        <td>250</td>
                        <td>C-3-1</td>
                        <td>TAMBOR</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>carbonato de sodio</td>
                        <td>Indaquim</td>
                        <td>10</td>
                        <td>25</td>
                        <td></td>
                        <td>25</td>
                        <td>10</td>
                        <td>25</td>
                        <td>250</td>
                        <td>C-2-1 / C-2-4</td>
                        <td>BOLSA</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>clorito de sodio</td>
                        <td>Serquim</td>
                        <td>1</td>
                        <td>25</td>
                        <td></td>
                        <td>25</td>
                        <td>1</td>
                        <td>25</td>
                        <td>25</td>
                        <td>C-1-1</td>
                        <td>BIDON</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>cloro en polvo</td>
                        <td>New Clor</td>
                        <td>5</td>
                        <td>1</td>
                        <td></td>
                        <td>1</td>
                        <td>5</td>
                        <td>1</td>
                        <td>5</td>
                        <td>C-1-1</td>
                        <td>BOLSA DE 1kG</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>cloro liquido hipoclorito de sodio</td>
                        <td>Logizar</td>
                        <td>1</td>
                        <td>1000</td>
                        <td></td>
                        <td>1000</td>
                        <td>1</td>
                        <td>1000</td>
                        <td>1000</td>
                        <td>AFUERA</td>
                        <td>TANQUE AFUERA</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>conservante NipaGuard</td>
                        <td>Lovric</td>
                        <td>1</td>
                        <td>20</td>
                        <td></td>
                        <td>20</td>
                        <td>1</td>
                        <td>20</td>
                        <td>20</td>
                        <td>C-1-1</td>
                        <td>BIDON</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>dehypon</td>
                        <td>Lovric</td>
                        <td>1</td>
                        <td>200</td>
                        <td></td>
                        <td>200</td>
                        <td>1</td>
                        <td>200</td>
                        <td>200</td>
                        <td></td>
                        <td>BIDON</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>dm13</td>
                        <td>Chaesa</td>
                        <td>1</td>
                        <td>240</td>
                        <td></td>
                        <td>240</td>
                        <td>1</td>
                        <td>240</td>
                        <td>240</td>
                        <td>C-5-1</td>
                        <td>TAMBOR</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>espumante de coco</td>
                        <td>Indaquim</td>
                        <td>1</td>
                        <td>100</td>
                        <td></td>
                        <td>100</td>
                        <td>1</td>
                        <td>100</td>
                        <td>100</td>
                        <td>C-6-2</td>
                        <td>TAMBOR</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>glicerina</td>
                        <td>Indaquim</td>
                        <td>2</td>
                        <td>200</td>
                        <td></td>
                        <td>200</td>
                        <td>2</td>
                        <td>200</td>
                        <td>400</td>
                        <td>C-4-1 / C-6-2</td>
                        <td>TAMBOR</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>goma Xantica</td>
                        <td>Serquim</td>
                        <td>4</td>
                        <td>25</td>
                        <td></td>
                        <td>25</td>
                        <td>4</td>
                        <td>25</td>
                        <td>100</td>
                        <td>C-1-1</td>
                        <td>BOLSA</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>iodo</td>
                        <td>Indaquim</td>
                        <td>3</td>
                        <td>20</td>
                        <td></td>
                        <td>20</td>
                        <td>3</td>
                        <td>20</td>
                        <td>60</td>
                        <td>C-1-2</td>
                        <td>CUÑETE</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>ioduro de potasio</td>
                        <td>Indaquim</td>
                        <td>1</td>
                        <td>25</td>
                        <td></td>
                        <td>25</td>
                        <td>1</td>
                        <td>25</td>
                        <td>25</td>
                        <td>C-1-1</td>
                        <td>CUÑETE</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>peroxido de hidrogeno</td>
                        <td>Indaquim</td>
                        <td>5</td>
                        <td>35</td>
                        <td></td>
                        <td>35</td>
                        <td>5</td>
                        <td>35</td>
                        <td>175</td>
                        <td>C-1-1</td>
                        <td>BIDON</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>pigmento azul</td>
                        <td>Calvano</td>
                        <td>1</td>
                        <td>20</td>
                        <td></td>
                        <td>20</td>
                        <td>1</td>
                        <td>20</td>
                        <td>20</td>
                        <td>C-1-1</td>
                        <td>TACHO</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Sal</td>
                        <td>Distribuidora Linch</td>
                        <td>4</td>
                        <td>25</td>
                        <td></td>
                        <td>25</td>
                        <td>4</td>
                        <td>25</td>
                        <td>100</td>
                        <td>C-1-2</td>
                        <td>BOLSA</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>soda caustica al 50</td>
                        <td>Indaquim</td>
                        <td>2</td>
                        <td>1000</td>
                        <td></td>
                        <td>1000</td>
                        <td>2</td>
                        <td>1000</td>
                        <td>2000</td>
                        <td>C-6-1/C-5-1</td>
                        <td>CONTENEDOR 1000l</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>soda caustica perlada al 99</td>
                        <td>Indaquim</td>
                        <td>10</td>
                        <td>25</td>
                        <td></td>
                        <td>25</td>
                        <td>10</td>
                        <td>25</td>
                        <td>250</td>
                        <td>C-2-1  </td>
                        <td>BOLSA</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>solan o lanolil</td>
                        <td>Lovric</td>
                        <td>1</td>
                        <td>20</td>
                        <td></td>
                        <td>20</td>
                        <td>1</td>
                        <td>20</td>
                        <td>20</td>
                        <td>C-1-1</td>
                        <td>CAJA (BOLSA ADENTRO)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>sulfetal</td>
                        <td>Zschimmer &amp; Schwarz</td>
                        <td>1</td>
                        <td>200</td>
                        <td></td>
                        <td>200</td>
                        <td>1</td>
                        <td>200</td>
                        <td>200</td>
                        <td>C-1-1</td>
                        <td>TAMBOR CHICO</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>tripolisfosfato de sodio</td>
                        <td>Indaquim</td>
                        <td>1</td>
                        <td>25</td>
                        <td></td>
                        <td>25</td>
                        <td>1</td>
                        <td>25</td>
                        <td>25</td>
                        <td>C-2-1</td>
                        <td>BOLSA</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>urea </td>
                        <td>Indaquim</td>
                        <td>2</td>
                        <td>25</td>
                        <td></td>
                        <td>25</td>
                        <td>2</td>
                        <td>25</td>
                        <td>50</td>
                        <td>C-2-2</td>
                        <td>BOLSA</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Colorante Azul</td>
                        <td>Calvano</td>
                        <td>1</td>
                        <td>5</td>
                        <td></td>
                        <td>5</td>
                        <td></td>
                        <td>5</td>
                        <td></td>
                        <td>C-1-1</td>
                        <td>BIDON CHICO</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Colorante Verde</td>
                        <td>Calvano</td>
                        <td>1</td>
                        <td>5</td>
                        <td></td>
                        <td>5</td>
                        <td></td>
                        <td>5</td>
                        <td></td>
                        <td>C-1-1</td>
                        <td>BIDON CHICO</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Colorante Rojo</td>
                        <td>Calvano</td>
                        <td>1</td>
                        <td>5</td>
                        <td></td>
                        <td>5</td>
                        <td></td>
                        <td>5</td>
                        <td></td>
                        <td>C-1-1</td>
                        <td>BIDON CHICO</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Lauril</td>
                        <td>Indaquim</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>TAMBOR</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    );



}

export default StockQuimicos;
