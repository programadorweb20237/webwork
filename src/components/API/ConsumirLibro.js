import React, { useState, useEffect } from 'react';
import './ConsumirLibro.css';
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css'; // Importa el estilo de default-layout
import '@react-pdf-viewer/page-navigation/lib/styles/index.css'; // Importa el estilo de page-navigation
import { searchPlugin } from '@react-pdf-viewer/search';
import '@react-pdf-viewer/search/lib/styles/index.css';
import { apiUrl } from './ApiConfig';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // Importa defaultLayoutPlugin

import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import { DownArrowIcon, NextIcon, PreviousIcon, UpArrowIcon } from '@react-pdf-viewer/page-navigation';
import { BookmarkIcon, FileIcon, ThumbnailIcon } from '@react-pdf-viewer/default-layout';

import { Icon } from '@react-pdf-viewer/core';



// Import styles
import '@react-pdf-viewer/search/lib/styles/index.css';


// Import styles
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';

import { ScrollMode } from '@react-pdf-viewer/core';



const ConsumirLibro = () => {
    const word = '8507413';
    const [pdfUrl] = useState(`${apiUrl}/get-libro.php`);
    const searchPluginInstance = searchPlugin();


    const defaultLayoutPluginInstance = defaultLayoutPlugin({
       
        sidebarTabs: (defaultTabs) =>
            defaultTabs.concat({
                content: <div style={{ textAlign: 'center', width: '100%' }}>Notes are listed here</div>,
                icon: (
                    <Icon size={16}>
                        <path d="M23.5,17a1,1,0,0,1-1,1h-11l-4,4V18h-6a1,1,0,0,1-1-1V3a1,1,0,0,1,1-1h21a1,1,0,0,1,1,1Z" />
                        <path d="M5.5 12L18.5 12" />
                        <path d="M5.5 7L18.5 7" />
                    </Icon>
                ),
                title: 'Notes',
            }),
    });
 


    return (
        <div>
            <h1>Productos</h1>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer
                    fileUrl={pdfUrl}
                    plugins={[defaultLayoutPluginInstance,searchPluginInstance]}
                />
               
            </Worker>
        </div>
    );
};

export default ConsumirLibro;
