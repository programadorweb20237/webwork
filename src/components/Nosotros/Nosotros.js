import React, { useState, useEffect } from 'react';
import './Nosotros.css';
import vaca1 from './vaca1.jpg';
import vaca2 from './vaca2.jpg';
import { apiUrl } from '../API/ApiConfig';



const Nosotros = ({ handleLogin, usuarioObj, isLoggedIn }) => {


  //MANEJAR LOGIN

  //FIN MANEJAR LOGIN

  const [showError, setShowError] = useState(false);




  const [registroExitoso, setRegistroExitoso] = useState(false);
  const [mensajeRegistroExitoso, setMensajeRegistroExitoso] = useState('');
  const abrirModalRegistro=()=>{
    const botonRegistro = document.querySelector(".registro-btn-modal");
    botonRegistro.click();
  }

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const requestData = {
      usernameOrEmail: formData.get('usernameOrEmail'), // Utiliza el nombre correcto del campo
      password: formData.get('password'), // Utiliza el nombre correcto del campo
    };



    console.log('Datos que se enviarán:', requestData);

    // Resto de tu código de manejo de la solicitud

    fetch(`${apiUrl}/login.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      // ...
      .then((response) => response.json())
      .then((data) => {





        // Aquí puedes manejar la respuesta del servidor, por ejemplo, mostrar un mensaje de éxito o error.
        console.log(data);
        console.log(data.user);
        if (data.success) {
          alert("Bien Logueado!");
          const btnCerrarLogin = document.querySelector(".btn-close-moddal-login");
          btnCerrarLogin.click();


          handleLogin(data.user);
          // Obtén una referencia al modal por su ID


          

        } else {
          setShowError(true);
        }

        // Guardo el objeto usuario en el local storage




      })
      .catch((error) => {

        console.error('Error al enviar la solicitud:', error);
      });
  };


  const [formData, setFormData] = useState({
    nombre_completo: '',
    username: '',
    email: '',
    nuevaContraseña: '',
    repetirContraseña: '',
  });

  const handleRegistroSubmit = (event) => {
    event.preventDefault();

    fetch(`${apiUrl}/registro.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRegistroExitoso(true);
        setMensajeRegistroExitoso("¡Registro exitoso!");
      })
      .catch((error) => {
        console.error('Error al enviar la solicitud:', error);


        console.log(formData);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  return (
    <div className="Nosotros" id="areaNosotrostheId">
      <h3 className="h2Nosotros">SOBRE NOSOTROS</h3>


      {/* Botón de inicio de sesión */}
      <button
        type="button"
        className="btn btn-primary loginn-btn-modal"

        data-bs-toggle="modal"  // Añade este atributo
        data-bs-target="#loginModal"  // Añade estte atributo con el ID de tu modal


      >
        Iniciar Sesión
      </button>


  {/* Botón de registro */}
      <button
        type="button"
        className="btn btn-primary registro-btn-modal"

        data-bs-toggle="modal"  // Añade este atributo
        data-bs-target="#registroModal"  // Añade estte atributo con el ID de tu modal


      >
        Iniciar Sesión
      </button>

      {/* Modal de inicio de sesión */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">
                Inicio de Sesión
              </h5>
              <button 
                type="button"
                className="btn-close btn-close-moddal-login"
                data-bs-dismiss="modal"
                aria-label="Close"

              ></button>
            </div>
            <div className="modal-body">

              {/* Contenido del modal de inicio de sesión */}
              <form onSubmit={handleLoginSubmit}>
                <div className="mb-3">
                  <label htmlFor="usernameOrEmail" className="form-label">
                    Nombre de Usuario o Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="usernameOrEmail"
                    name="usernameOrEmail" // Cambia el nombre del campo
                    placeholder="Ingrese su nombre de usuario o email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password1" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password1"
                    name="password" // Cambia el nombre del campo
                    placeholder="Ingrese su contraseña"
                  />
                </div>

                {showError && (
                  <div className="alert alert-danger mt-3">
                    Contraseña o datos incorrectos.
                  </div>
                )}

                <button type="submit" className="btn btn-primary">
                  Iniciar Sesión
                </button>
              </form>

              {/* Enlace para abrir el modal de registro */}
              <p className="creaCuentaParrafo">
                ¿No tienes una cuenta?{' '}
                <button
                  className="btn btn-link"
                  data-bs-dismiss="modal"
                  onClick={abrirModalRegistro}

                >
                  Regístrate aquí.
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Formulario de Registro */}
      <div className="modal fade" id="registroModal" tabIndex="-1" aria-labelledby="registroModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="registroModalLabel">
                Registro
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleRegistroSubmit}>
                <div className="mb-3">
                  <label htmlFor="nombre_completo" className="form-label">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="nombre_completo"
                    placeholder="Ingrese su nombre completo"
                    value={formData.nombre_completo}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Nombre de Usuario
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Elija un nombre de usuario"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Ingrese su correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="nuevaContraseña" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="nuevaContraseña"
                    placeholder="Ingrese su contraseña"
                    value={formData.nuevaContraseña}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="repetirContraseña" className="form-label">
                    Repetir Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="repetirContraseña"
                    placeholder="Repita su contraseña"
                    value={formData.repetirContraseña}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                  Registrarse
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>




      {/* Modal para el mensaje de registro exitoso */}
      <div className={`modal fade ${registroExitoso ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: registroExitoso ? 'block' : 'none' }}>
        <div className="modal-dialog modal-success" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-success">Registro Exitoso</h5>
              <button type="button" className="btn-close text-success" data-bs-dismiss="modal" aria-label="Close" onClick={() => setRegistroExitoso(false)}></button>
            </div>
            <div className="modal-body">
              <p className="text-success">Tu registro ha sido exitoso.</p>
            </div>
          </div>
        </div>
      </div>




      <div className='areaNosotros'>




        <div>
          {usuarioObj && (
            <h1>{usuarioObj.email}</h1>
          )}
        </div>





        <h4 className='h4Nosotros'>Dairy Solutions: Transformando el Cuidado de sus Vacas</h4>
        <div className='itemNosotros'>
          <p className='parrafoNosotros'>
            <strong>¿Por qué ha elegido ser parte de la industria lechera?</strong>




            Sabemos que el trabajo es arduo, las jornadas son extensas y que la recompensa no
            siempre se mide en los litros de leche. Sin embargo, usted lo entrega todo, día tras día.

            <br />
            <br />

            Ha elegido ser parte de la industria lechera porque el cuidado de las vacas es más que un
            simple negocio; es su forma de vida.

            <br />
            <br />

            En Dairy Solutions entendemos la pasión y dedicación que usted pone en su trabajo. Durante años,
            hemos trabajado incansablemente para mejorar la forma en que se cuidan las vacas y para ayudar a
            los productores lácteos a adaptarse a los desafíos del futuro.

            <br />
            <br />

            Hoy, en Dairy Solutions, estamos aquí para colaborar con usted en la creación de la lechería que
            necesita para alcanzar el éxito y vivir la vida que siempre ha imaginado. Lo hacemos a través de
            productos innovadores, soluciones de vanguardia y un servicio de calidad en cada paso del camino.

            <br />
            <br />

            <strong>Nuestra Gama de Productos</strong>




            En Dairy Solutions, ofrecemos una amplia gama de productos químicos y soluciones para el cuidado y
            la limpieza de sus vacas y su entorno. Nuestros productos incluyen detergentes de alta calidad y
            desinfectantes, diseñados para garantizar la salud y el bienestar de sus animales, así como la
            higiene de su instalación.
            <br />


          </p>

          <img className="imgNosotros" src={vaca1} />

        </div>

        <div className='itemNosotros'>



          <p className='parrafoNosotros'>

            <strong>La Vida de su Establo</strong>


            Entendemos que la vida de su establo comienza con el cuidado adecuado de sus vacas. Nuestros
            productos químicos están formulados para proporcionar un ambiente limpio y seguro para sus animales,
            contribuyendo así a un ordeño suave, rápido y completo.
            <br />
            <br />

            <strong> Su Tiempo</strong>



            En Dairy Solutions, sabemos que usted tiene una vida más allá del establo. Es por eso que ofrecemos
            productos y soluciones que mejoran la eficiencia de sus operaciones. Con nuestras soluciones de limpieza,
            podrá dedicar más tiempo a lo que realmente importa, logrando un mejor equilibrio entre el trabajo y su
            vida personal.
            <br />
            <br />

            <strong>Su Legado</strong>



            Al aumentar la productividad y la rentabilidad de su negocio, Dairy Solutions le brinda la oportunidad
            de enfocarse en el crecimiento de su establo para las generaciones futuras. Su legado en la industria
            lechera está en buenas manos con nuestras soluciones.
            <br />
            <br />

            <strong>Su Tierra</strong>


            Gracias a la eficiencia y calidad de nuestros productos químicos para la limpieza, podrá producir
            más leche con menos recursos, lo que beneficia tanto a su negocio como al medio ambiente.
            <br />
            <br />

            <strong>Su Responsabilidad</strong>



            En Dairy Solutions, entendemos que la responsabilidad es fundamental en la vida lechera. Nuestros
            productos químicos y soluciones están diseñados para beneficiar a sus vacas, a su explotación, a su
            tiempo y a su familia. Al final del día, es esta responsabilidad la que da sentido y gratificación a la vida en la industria lechera.

            <br />
            <br />

            Dairy Solutions está comprometido con brindarle los mejores productos químicos y soluciones para el
            cuidado de sus vacas y su establo. Somos su socio confiable en esta apasionante travesía lechera, porque
            entendemos que cuidar de sus vacas es cuidar de su vida.
            <br />


          </p>

          <img className="imgNosotros" src={vaca2} />


        </div>
      </div>
    </div >
  );
};


Nosotros.propTypes = {};

Nosotros.defaultProps = {};

export default Nosotros;





