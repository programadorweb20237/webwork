import React, { useState, useEffect } from 'react';
import './ConsumirLibro.css';
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css'; // Importa el estilo de default-layout
import { searchPlugin } from '@react-pdf-viewer/search';
import '@react-pdf-viewer/search/lib/styles/index.css';
import { apiUrl } from './ApiConfig';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // Importa defaultLayoutPlugin


const ConsumirLibro = () => {
    const word = '8507413';
    const [pdfUrl] = useState(`${apiUrl}/get-libro.php`);
    const [pdfInstance, setPdfInstance] = useState(null);
    const [searchInstance, setSearchInstance] = useState(null);

    useEffect(() => {
        if (searchInstance && pdfInstance) {
            searchInstance.on('search', (e) => {
                const pageIndex = e.match.pageIndex;
                pdfInstance.current.scrollToPage(pageIndex + 1, SpecialZoomLevel.ActualSize);
            });
        }
    }, [searchInstance, pdfInstance]);

    const onDocumentLoadSuccess = ({ doc }) => {
        setPdfInstance(doc);
        if (searchInstance) {
            searchInstance.jumpToMatch(word, {
                callback: (match) => {
                    if (match) {
                        const pageIndex = match.pageIndex;
                        pdfInstance.current.scrollToPage(pageIndex + 1, SpecialZoomLevel.ActualSize);
                    }
                },
            });
        }
    };

    const onSearchPlugin = (instance) => {
        setSearchInstance(instance);
    };

    return (
        <div>
            <h1>Productos</h1>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer
                    fileUrl={pdfUrl}
                    plugins={[
                        searchPlugin({
                            keyword: word,
                        }),
                        defaultLayoutPlugin({   // Utiliza defaultLayoutPlugin
                            searchPlugin: {
                                keyword: word,
                            },
                        }),
                        (instance) => onSearchPlugin(instance),
                    ]}
                    onDocumentLoadSuccess={onDocumentLoadSuccess}
                    ref={(instance) => onDocumentLoadSuccess(instance)}
                />
            </Worker>
        </div>
    );
};

export default ConsumirLibro;
