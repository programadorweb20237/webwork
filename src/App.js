
import './App.css';

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
import ConsumirApi from './components/API/ConsumirApi';



const App = () =>  {
  return (
    <HashRouter>

      <Routes>
       
        
        <Route path='/' element={<Home/>} />
       

        <Route path="/nueva-pagina" element={<NuevaPagina/>} />
        <Route path="/products" element={<ConsumirApi/>} />
    
        
      </Routes>

    </HashRouter>
  );
};

// Define tus componentes separadamente

function Home() {
  return (
    <div className="App">
      <Navbar />
      <Box />
      <Portada />
      <Nosotros />
      <AreaProductos />
  
      <Entrenamientos />
      <Noticias />
      <ContactForm />
      <Footer />
      
      <a href="https://api.whatsapp.com/send?phone=5491169074492" className="btn-wsp" target="_blank">
       <MiSVG class="icon-whats-fijo" />
      
      </a>
    </div>

  );
};


export default App;