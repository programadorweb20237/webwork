import React from 'react';
import PropTypes from 'prop-types';
import './NoticiasCard.css';
import PencilIcon from './pencil.svg';
import { useState } from 'react';
import {apiUrl2} from "../API/ApiConfig"

import { useNavigate } from 'react-router-dom'; // Importa useNavigate




const NoticiasCard = (props) => {

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = useState(false);

  const navigate = useNavigate();
 


  const handlePencilIconClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleEditModal = () => {
    setShowModal(false);
    const idDeLaNoticia  = props.idd;

    // No duplicar el prefijo de la API, asumiendo que apiUrl ya contiene la parte inicial de la URL
    window.location.href = `${apiUrl2}/noticiasformedit/${idDeLaNoticia}`;
  };


  const handleDeleteIconClick = () => {
    setShowModal(false);
    setShowDeleteConfirmationModal(true);
  };

  const handleCloseDeleteConfirmationModal = () => {
    setShowDeleteConfirmationModal(false);
  };

  const handleDeleteConfirm = () => {
    // Agrega lógica aquí para manejar la eliminación de la noticia
    // Una vez que se confirma la eliminación, puedes cerrar el modal de confirmación de eliminación
    handleCloseDeleteConfirmationModal();
  };

  return (
    <div className="NoticiasCard">

      <div className="subNoticiasCard">




        <img className='imgNoticiasCard' src={props.img} />
        <div className='textosNoticiasCard'>
          <div className='textosNoticiasCard2'>
            <h4 className='h4NoticiasCard' >{props.titulo}</h4>
            <img src={PencilIcon} className="pencilSvg" alt="Pencil Icon" onClick={handlePencilIconClick} // Manejador de clic para abrir el modal
            />
          </div>
          <div className='contenedorDescNoticia'>
            <p className='descNoticiasCard'>{props.descripcion}</p>
          </div>

          <div className='contenedorFechaNoticia'>
            <p className='fechaNoticiasCard'><strong>{props.fecha}</strong></p>
          </div>


        </div>
      </div>

      {/* Modal de Bootstrap */}
      <div
        className={`modal fade ${showModal ? 'show' : ''}`}
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden={!showModal}
        style={{ display: showModal ? 'block' : 'none' }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">
                ¿Qué quieres hacer con la noticia?
              </h5>
              <button
                type="button"
                className="btn-close btn-close-moddal-login"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleCloseModal}
              ></button>
            </div>
            <div className="modal-body">
              {/* Contenido del cuerpo del modal */}
              <button className="btn btn-primary" onClick={handleEditModal}>Editar</button>
              <button className="btn btn-danger" onClick={handleDeleteIconClick}>Eliminar</button>
              <button className="btn btn-secondary" onClick={handleCloseModal}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Confirmación de Eliminación */}
      <div
        className={`modal fade ${showDeleteConfirmationModal ? 'show' : ''}`}
        id="deleteConfirmationModal"
        tabIndex="-1"
        aria-labelledby="deleteConfirmationModalLabel"
        aria-hidden={!showDeleteConfirmationModal}
        style={{ display: showDeleteConfirmationModal ? 'block' : 'none' }}
      >
        {/* ... (Tu contenido existente para el modal de confirmación de eliminación) */}
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">
                ¿Estás seguro de que deseas eliminar esta noticia?
              </h5>
            </div>

            <button className="btn btn-danger" onClick={handleDeleteConfirm}>
              Confirmar
            </button>
            <button className="btn btn-secondary" onClick={handleCloseDeleteConfirmationModal}>
              Cancelar
            </button>
          </div>
        </div>

      </div>



    </div>
  );
};


NoticiasCard.propTypes = {};

NoticiasCard.defaultProps = {};

export default NoticiasCard;
