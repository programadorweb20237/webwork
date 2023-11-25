import React, { useState } from 'react';
import './ConsumirLibro.css';
import { apiUrl } from './ApiConfig';

import { Viewer, Worker } from '@react-pdf-viewer/core';
import { ScrollMode, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { searchPlugin } from '@react-pdf-viewer/search';

// Import styles
import '@react-pdf-viewer/search/lib/styles/index.css';
import { NextIcon, PreviousIcon, SearchIcon } from '@react-pdf-viewer/search';





const ConsumirLibro = () => {
    const word = 'BGM 5/BGM 5+ PUMPS';
    const [pdfUrl] = useState(`${apiUrl}/get-libro.php`);

    

    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const searchPluginInstance = searchPlugin({
        keyword: 'BGM 5/BGM 5+ PUMPS',
    });
   





    return (
        <div>
            <h1 >Productos</h1>
            <Worker  workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer
                    fileUrl={pdfUrl}
                    plugins={[defaultLayoutPluginInstance,searchPluginInstance]}
                    scrollMode={ScrollMode.Horizontal}
                    defaultScale={SpecialZoomLevel.PageFit}
               
              
                />
               
            </Worker>
        </div>
    );
};

export default ConsumirLibro;



