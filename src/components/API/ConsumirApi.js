import React, { useState, useEffect } from 'react';

function ConsumirApi() {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Realiza una solicitud GET al backend en https://dairy-api-p1w5.onrender.com/api/employees
    fetch('http://localhost:6170/api/employees')
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudo obtener la lista de empleados');
        }
        return response.json();
      })
      .then((data) => {
        // Actualiza el estado con los datos recibidos del backend
        setEmployees(data);
      })
      .catch((error) => {
        console.error('Error al obtener datos del backend:', error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Lista de Empleados</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ConsumirApi;