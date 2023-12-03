import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { apiUrl } from "../API/ApiConfig"
import './ExcelPrecios.css';

const ExcelPrecios = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [fileUploadSuccess, setFileUploadSuccess] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
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

      // Realizar la segunda solicitud
      const updateResponse = await fetch(`${apiUrl}/update-excel-fusion.php`);
      const updateData = await updateResponse.json();
      console.log('update-excel.php ejecutado:', updateData);

      // Verificar si la actualización fue exitosa
      if (updateData && updateData.message === 'Actualización exitosa') {
        setUploadSuccess(true); // Establecer el estado para mostrar la alerta de actualización exitosa
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
      alert('¡Se subió el archivo exitosamente!');
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
    </div>
  );
};

ExcelPrecios.propTypes = {};

ExcelPrecios.defaultProps = {};

export default ExcelPrecios;








