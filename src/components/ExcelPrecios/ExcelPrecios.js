import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { apiUrl } from "../API/ApiConfig"
import './ExcelPrecios.css';

const ExcelPrecios = () => {
  const [selectedFile, setSelectedFile] = useState(null);

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

      {
        /* Comentario multilinea en JSX
        const updateResponse = await fetch(`${apiUrl}/update-excel-fusion.php`);
        const updateData = await updateResponse.json();
        console.log('update-excel.php ejecutado:', updateData);
        */
      }
      
    } catch (error) {
      console.error('Error al subir el archivo:', error);
    }
  };

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

