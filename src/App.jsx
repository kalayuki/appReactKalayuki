import logo from './logo.svg';
import './App.css';
import Footer from './componets/Footer';
import Saludo from './componets/Saludo';
import Navbar from './componets/Navbar';
import ItenListContainer from './componets/ItenListContainer';
import Clicker from './componets/Clicker';
import ProductsList_ej1y2 from './componets/ProductsList_ej1y2';
import ProductsList from './componets/ProductsList';
import CharList from './componets/rickandmorty/CharList';
import GlassesList from './componets/affter1/GlassesList';
import GlassDetails from './componets/affter1/GlassDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharDetail from './componets/rickandmorty/CharDetail';
import ClickEvent from './componets/ClickEvent';
import ClickChange from './componets/ClickChange';
// Clase 9 - E1  creamos un nuevo componente ClickEvent, nos permite ver como crear un evento
//E2 -CReamos un input que nos prohibe ingresra vocales  en ClickEvent
//E3- creamos un nuevo componente ClickChange , para poder recrear que al hacer click cambie el contenido por ejmploe "agregar al carrito" a "ir al carrito"
//E4- vemos como podemos llamar a componentes internos 



function App() {

  return (
    <BrowserRouter>
      

      <Navbar/>   
      <Routes>
        <Route path='/' element={<GlassesList/>}/>

        
      <Route path='/glass/:id' element={<GlassDetails/>}/>

          <Route path='/rickandmorty' element={<CharList/>}/>
         
          <Route path='/rickandmorty/:charId' element={<CharDetail/>}/>   
          <Route path='/phone' element={<ProductsList/>}/>
          {/* C9-E1 P1 Creamos una nueva Ruta con ClickEvente */}
          <Route path='/event' element={<ClickEvent/>}></Route>
          {/* C9-E3 P1
          creamos ruta de ClickChange */}
          <Route path='/clickchange' element={<ClickChange/>}></Route>
      </Routes>
  

        <Footer/>
    </BrowserRouter>
  );
}

export default App;

