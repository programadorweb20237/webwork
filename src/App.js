
import './App.css';
import { useState } from 'react';

import AreaProductos from './components/AreaProductos/AreaProductos';
import Box from './components/Box/Box';
import ContactForm from './components/Contacto/ConctactForm';

import Entrenamientos from './components/Entrenamientos/Entrenamientos';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Nosotros from './components/Nosotros/Nosotros';
import Noticias from './components/Noticias/Noticias';
import Portada from './components/Portada/Portada';
import { ReactComponent as MiSVG } from "./components/Navbar/whatsapp.svg"
import { BrowserRouter as HashRouter, Route, Routes } from 'react-router-dom';
import Typewriter from "typewriter-effect";
import React from 'react';
import { useEffect } from 'react';



import NuevaPagina from "./components/NuevaPagina"
import StockQuimicos from './components/StockQuimicos/StockQuimicos';
import ConsumirApi from './components/API/ConsumirApi';
import ItemLimpieza from './components/API/ItemLimpieza/ItemLimpieza';
import ItemPisos from './components/API/ItemPisos/ItemPisos';
import ItemVentiladores from './components/API/ItemVentiladores/ItemVentiladores';
import ItemEfluentes from './components/API/ItemEfluentes/ItemEfluentes';
import ItemOrdeñe from './components/API/ItemOrdeñe/ItemOrdeñe';

import ItemNoticias from './components/API/ItemNoticias/ItemNoticias';

import ConsumirApi2 from './components/API/ConsumirApi2';

import NuevoNoticiaForm from './components/API/ItemNoticias/NuevoNoticiaForm';
import NuevoNoticiaFormEdit from './components/API/ItemNoticias/NuevoNoticiaFormEdit';

import NoticiasCard from './components/NoticiasCard/NoticiasCard';
import NoticiaIndividual from './components/API/ItemNoticias/NoticiaIndividual/NoticiaIndividual';

import ConsumirLibro from './components/API/ConsumirLibro';
import JumpToFirstMatchExample from './components/API/showsearch/YourComponent.tsx';


const App = () => {


  useEffect(() => {
    // Check local storage for previously logged-in user
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const storedUsuarioObj = JSON.parse(localStorage.getItem('usuarioObj'));

    if (storedIsLoggedIn && storedUsuarioObj) {
      setIsLoggedIn(true);
      setUsuarioObj(storedUsuarioObj);
    }
  }, []); // Run only once on component mount



  // Estado para guardar el objeto Usuario
  const [usuarioObj, setUsuarioObj] = useState({});

  // Estado para guardar la sesión de inicio de sesión
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Estado para saber si estoy en noticias
    const [isNoticias, setIsNoticias] = useState(false);

  
  // Función para cambiar el estado de autenticación
  const handleLogin = (usuario) => {
    console.log("Se ha ejecutado handleLogin");
    setIsLoggedIn(true);
    setUsuarioObj(usuario);
    
    // Save login state to local storage
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('usuarioObj', JSON.stringify(usuario));
  };

  // Función para cerrar la sesión
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsuarioObj({});

    // Remove login state from local storage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('usuarioObj');
  };


  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home usuarioObj={usuarioObj}
        isLoggedIn={isLoggedIn}
        isNoticias={isNoticias}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
         />} />
        <Route path="/nueva-pagina" element={<NuevaPagina usuarioObj={usuarioObj} isLoggedIn={isLoggedIn} />} />
        <Route path="/stockquimicos" element={<StockQuimicos isLoggedIn={isLoggedIn} usuarioObj={usuarioObj} />} />
        <Route path="/products" element={<ConsumirApi />} />
        <Route path="/pedido" element={<ConsumirApi2 isLoggedIn={isLoggedIn} usuarioObj={usuarioObj}/>} />
        <Route path="/limpieza" element={<ItemLimpieza />} />
        <Route path="/pisos" element={<ItemPisos />} />
        <Route path="/ventiladores" element={<ItemVentiladores />} />
        <Route path="/efluentes" element={<ItemEfluentes />} />
        <Route path="/ordeñe" element={<ItemOrdeñe />} />

        <Route path="/noticias" element={<ItemNoticias isLoggedIn={isLoggedIn} usuarioObj={usuarioObj} isNoticias={isNoticias} setIsNoticias={setIsNoticias} />} />
        <Route path="/noticiasform" element={<NuevoNoticiaForm />} />
        <Route path="/noticia/:id" element={<NoticiaIndividual />} />
        <Route path="/noticiasformedit/:id"  element={<NuevoNoticiaFormEdit />} />

        <Route path="/libro" element={<JumpToFirstMatchExample />} />
      </Routes>
    </HashRouter>
  );
};

// Define tus componentes separadamente

function Home({ usuarioObj,isLoggedIn,handleLogin,handleLogout, isNoticias }) {

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} usuarioObj={usuarioObj} handleLogin={handleLogin} handleLogout={handleLogout} />
      <Box isLoggedIn={isLoggedIn} handleLogout={handleLogout} usuarioObj={usuarioObj} />
      <Portada isLoggedIn={isLoggedIn} usuarioObj={usuarioObj} handleLogin={handleLogin} handleLogout={handleLogout}  />
      <Nosotros handleLogin={handleLogin} usuarioObj={usuarioObj} isLoggedIn={isLoggedIn} />
      <AreaProductos isLoggedIn={isLoggedIn} usuarioObj={usuarioObj} handleLogin={handleLogin} handleLogout={handleLogout}  />
      

      <Entrenamientos isLoggedIn={isLoggedIn} usuarioObj={usuarioObj} handleLogin={handleLogin} handleLogout={handleLogout} />
      <Noticias  isNoticias={isNoticias} isLoggedIn={isLoggedIn} usuarioObj={usuarioObj} handleLogin={handleLogin} handleLogout={handleLogout} />
      <ContactForm isLoggedIn={isLoggedIn} usuarioObj={usuarioObj} handleLogin={handleLogin} handleLogout={handleLogout} />
      <Footer isLoggedIn={isLoggedIn} usuarioObj={usuarioObj} handleLogin={handleLogin} handleLogout={handleLogout} />

      <a href="https://api.whatsapp.com/send?phone=5491169074492" className="btn-wsp" target="_blank">
        <MiSVG class="icon-whats-fijo" />

      </a>
    </div>

  );
};


export default App;