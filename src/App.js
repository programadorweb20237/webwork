
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
import Whats from "https://kit.fontawesome.com/eb496ab1a0.js"


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import NuevaPagina from "./components/NuevaPagina"



const App = () =>  {
  return (
    <Router>

      <Routes>
       
        <Route path='/' element={<Home/>} />

        <Route path="/nueva-pagina" element={<NuevaPagina/>} />
    
        
      </Routes>

    </Router>
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
        <i className="fa fa-whatsapp icono"></i>
      </a>
    </div>

  );
};


export default App;