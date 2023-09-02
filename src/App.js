
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


function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Box/>
      <Portada/>
      <Nosotros/>
      <AreaProductos/>
      <Entrenamientos/>
      <Noticias/>
      <ContactForm/>
      <Footer/>
      <a href="https://api.whatsapp.com/send?phone=5491169074492" class="btn-wsp" target="_blank">
	    <i class="fa fa-whatsapp icono"></i>
	</a>
      
    </div>
  );
}

export default App;
