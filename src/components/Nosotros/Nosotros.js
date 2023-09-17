import React from 'react';
import PropTypes from 'prop-types';
import './Nosotros.css';
import vaca1 from "./vaca1.jpg"
import vaca2 from "./vaca2.jpg"

import Typewriter from "typewriter-effect";

const Nosotros = () => (
  <div className="Nosotros" id="areaNosotrostheId">

    <h3 className='h2Nosotros'>SOBRE NOSOTROS</h3>



    

    <button type="button" class="btn btn-primary loginn-btn-modal" data-bs-toggle="modal" data-bs-target="#loginModal">
  Iniciar Sesión
</button>



<div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="loginModalLabel">Inicio de Sesión</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
     
        <form>
          <div class="mb-3">
            <label for="username" class="form-label">Nombre de Usuario</label>
            <input type="text" class="form-control" id="username" placeholder="Ingrese su nombre de usuario"/>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="password" placeholder="Ingrese su contraseña"/>
          </div>
          <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
        </form>

       
        <p className='creaCuentaParrafo'>¿No tienes una cuenta? <a href="/registro">Regístrate aquí</a>.</p>
      </div>
    </div>
  </div>
</div>







    <div className='areaNosotros'>

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
  </div>
);

Nosotros.propTypes = {};

Nosotros.defaultProps = {};

export default Nosotros;
