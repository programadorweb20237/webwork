
import './App.css';

import AreaProductos from './components/AreaProductos/AreaProductos';
import Box from './components/Box/Box';
import Contacto from './components/Contacto/Contacto';
import Entrenamientos from './components/Entrenamientos/Entrenamientos';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Nosotros from './components/Nosotros/Nosotros';
import Noticias from './components/Noticias/Noticias';
import Portada from './components/Portada/Portada';


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
      <Contacto/>
      <Footer/>
      
    </div>
  );
}

export default App;
