
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



import NuevaPagina from "./components/NuevaPagina"
import StockQuimicos from './components/StockQuimicos/StockQuimicos';
import ConsumirApi from './components/API/ConsumirApi';
import ItemLimpieza from './components/API/ItemLimpieza/ItemLimpieza';



const App = () => {
  // Estado para guardar el objeto Usuario
  const [usuarioObj, setUsuarioObj] = useState({});

  // Estado para guardar la sesión de inicio de sesión
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Función para cambiar el estado de autenticación
  const handleLogin = (usuario) => {
    console.log("Se ha ejecutado handleLogin");
    setIsLoggedIn(true);
    setUsuarioObj(usuario);
  };

  // Función para cerrar la sesión
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsuarioObj({});
  };

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home usuarioObj={usuarioObj}
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
         />} />
        <Route path="/nueva-pagina" element={<NuevaPagina usuarioObj={usuarioObj} />} />
        <Route path="/stockquimicos" element={<StockQuimicos />} />
        <Route path="/products" element={<ConsumirApi />} />
        <Route path="/limpieza" element={<ItemLimpieza />} />
      </Routes>
    </HashRouter>
  );
};

// Define tus componentes separadamente

function Home({ usuarioObj,isLoggedIn,handleLogin,handleLogout }) {

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} usuarioObj={usuarioObj} handleLogin={handleLogin} handleLogout={handleLogout} />
      <Box isLoggedIn={isLoggedIn} handleLogout={handleLogout} usuarioObj={usuarioObj} />
      <Portada isLoggedIn={isLoggedIn} usuarioObj={usuarioObj} handleLogin={handleLogin} handleLogout={handleLogout}  />
      <Nosotros handleLogin={handleLogin} usuarioObj={usuarioObj} isLoggedIn={isLoggedIn} />
      <AreaProductos isLoggedIn={isLoggedIn} usuarioObj={usuarioObj} handleLogin={handleLogin} handleLogout={handleLogout}  />

      <Entrenamientos isLoggedIn={isLoggedIn} usuarioObj={usuarioObj} handleLogin={handleLogin} handleLogout={handleLogout} />
      <Noticias isLoggedIn={isLoggedIn} usuarioObj={usuarioObj} handleLogin={handleLogin} handleLogout={handleLogout} />
      <ContactForm isLoggedIn={isLoggedIn} usuarioObj={usuarioObj} handleLogin={handleLogin} handleLogout={handleLogout} />
      <Footer isLoggedIn={isLoggedIn} usuarioObj={usuarioObj} handleLogin={handleLogin} handleLogout={handleLogout} />

      <a href="https://api.whatsapp.com/send?phone=5491169074492" className="btn-wsp" target="_blank">
        <MiSVG class="icon-whats-fijo" />

      </a>
    </div>

  );
};


export default App;