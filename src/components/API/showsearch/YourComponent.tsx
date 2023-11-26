import * as React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { apiUrl } from "../ApiConfig";
import { useParams } from 'react-router-dom';


import { ScrollMode, SpecialZoomLevel } from '@react-pdf-viewer/core';



import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface JumpToFirstMatchExampleProps {
    fileUrl: string;
    keyword: any;
}

const JumpToFirstMatchExample: React.FC<JumpToFirstMatchExampleProps> = ({ fileUrl,keyword }) => {
    const [isDocumentLoaded, setDocumentLoaded] = React.useState(false);
    const handleDocumentLoad = () => setDocumentLoaded(true);

    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const { toolbarPluginInstance } = defaultLayoutPluginInstance;
    const { searchPluginInstance } = toolbarPluginInstance;
    const { highlight } = searchPluginInstance;

    React.useEffect(() => {
        if (isDocumentLoaded) {
            
            highlight(keyword);
        }
    }, [isDocumentLoaded]);

    return (
        <Worker  workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
            fileUrl={fileUrl}
            plugins={[defaultLayoutPluginInstance]}
            onDocumentLoad={handleDocumentLoad}

          
            scrollMode={ScrollMode.Horizontal}
            defaultScale={SpecialZoomLevel.PageFit}
        />
        </Worker>
    );
};

// Use the provided API URL to fetch the PDF file
const pdfUrl = `${apiUrl}/get-libro.php`; // Replace this with your API URL

const YourComponent = () => {
    const { kkey } = useParams();
    const decodedKeyword = kkey ? decodeURIComponent(kkey) : "null"; // Decodifica el parámetro kkey si existe, de lo contrario asigna "null"

    return <JumpToFirstMatchExample fileUrl={pdfUrl} keyword={ decodedKeyword } />;
};

export default YourComponent;
