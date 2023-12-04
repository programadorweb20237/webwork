import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { apiUrl } from "../API/ApiConfig"
import './ExcelPrecios.css';

const ExcelPrecios = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [fileUploadSuccess, setFileUploadSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Nuevo estado para controlar la pantalla de carga


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.name.endsWith('.xlsm')) {
      setSelectedFile(file);
    } else {
      // Muestra un mensaje al usuario indicando que el archivo no es válido
      alert('Por favor, selecciona un archivo con extensión .xlsm');
      // Puedes restablecer el archivo seleccionado a null aquí si lo prefieres
       setSelectedFile(null);
    }
  };

  const handleUpload = async () => {
    try {
      setIsLoading(true); // Mostrar pantalla de carga al iniciar la subida
      const formData = new FormData();
      formData.append('file', selectedFile);

      const uploadResponse = await fetch(`${apiUrl}/subir-excel.php`, {
        method: 'POST',
        body: formData
      });

      const uploadData = await uploadResponse.json();
      console.log('Archivo subido:', uploadData);

      if (uploadResponse.ok) {
        setFileUploadSuccess(true); // Establecer el estado para mostrar la alerta de subida exitosa
      }

      
    } catch (error) {
      console.error('Error al subir el archivo:', error);
    }
  };

  useEffect(() => {
    // Mostrar la alerta cuando uploadSuccess sea true
    if (uploadSuccess) {
      alert('¡Se actualizó exitosamente!');
      // Puedes hacer más acciones aquí si es necesario
      setUploadSuccess(false); // Restablecer el estado después de mostrar la alerta
    }
  }, [uploadSuccess]);

  useEffect(() => {
    // Mostrar la alerta cuando fileUploadSuccess sea true
    if (fileUploadSuccess) {
     
      window.open('https://normal.dairy.com.ar/update-excel-fusion.php', '_blank'); // Abrir Google en una nueva pestaña
      setIsLoading(false); // Mostrar pantalla de carga al iniciar la subida


      

      // Puedes hacer más acciones aquí si es necesario
      setFileUploadSuccess(false); // Restablecer el estado después de mostrar la alerta
    }
  }, [fileUploadSuccess]);

  return (
    <div className="ExcelPrecios">
      <h1>Actualizar precios desde Excel</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!selectedFile}>
        Subir Archivo
      </button>
      <h5>El proceso tarda aproximadamente 15 minutos.</h5>


      
      {/* Mostrar la pantalla de carga si isLoading es true */}
      {isLoading &&  <div className='ExcelPreciosCargando'><p>Cargando...</p></div>}



    </div>
  );
};

ExcelPrecios.propTypes = {};

ExcelPrecios.defaultProps = {};

export default ExcelPrecios;








