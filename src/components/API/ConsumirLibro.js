import React, { useState, useEffect } from 'react';
import './ConsumirLibro.css';
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

import '@react-pdf-viewer/search/lib/styles/index.css';
import { apiUrl } from './ApiConfig';

// Import styles
import '@react-pdf-viewer/search/lib/styles/index.css';


import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const ConsumirLibro = () => {
    const word = '8507413';
    const [pdfUrl] = useState(`${apiUrl}/get-libro.php`);
    const defaultLayoutPluginInstance = defaultLayoutPlugin(
        
    );



    return (
        <div>
            <h1>Productos</h1>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer
                    fileUrl={pdfUrl}
                    plugins={[defaultLayoutPluginInstance]}
              
                />
               
            </Worker>
        </div>
    );
};

export default ConsumirLibro;
