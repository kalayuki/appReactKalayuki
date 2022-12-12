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



function App() {
// clase 8 

//C8 -PASO 1 
//intalamos react router mni 16
//<BrowserRouter, cambiamos el div contenedor por un <BrowserRouter>
/*<Routes> Utilizamos </Routes>, para poder establecer nuestras rutas, dejamos el NavBar por fuera ya que 
  siempre queremos que aparezca , dentro de Router se pondra todas la paguina o rutas de nuestra app*/
//<Route>, se utilizara para llamar a todas las rutas individuales y estas van dentro de <Routes>
//<Route path='/' element={<GlassesList/>}/>, esta es la forma de llamar a la ruta del componente que vamos a utilizar
// http://localhost:3000/phone, forma de llamar a cada una de las rutas en el navegador , ej el que tiene el path phone
  return (
    <BrowserRouter>
        {/* C8- PASO 4
          - QUERMOS ESTABLECER LOS LINKS EN NAVBAR
          - NAVBAR ,  vamos a nuestro archivo navbar , y cambiamos la "a" donde esta metido nuestro titulo daisyIU ,
    <BrowserRouter>
            por LINK, para que esto funcione que se pueda linkear es necesario que siempre este dentro de BrowswrRouter, si esta por fuera
            no funcionara 
            VER COMO CONTINUA PASO 3 EN NAVBAR.JS
             */}

      <Navbar/>   
      <Routes>
        <Route path='/' element={<GlassesList/>}/>

             {/* C8-PASO 5
                - utilizamos lo que hicimos en el after 1
                -LINK EN  CADA UNOS DE LOS ELEMENTOS PARA QUE NOS LLEVE A LOS DETALLES 
                -<Route path='/glass/:id' element={<GlassDetails/>}/>> CREAMOS , una nueva route , donde le 
                  indicaremos especificamente que tendra el id de los elementos , con GlassesDetails
                  
                  C8- PASO 6
                  VER EN GLASSCARD*/}

        
      <Route path='/glass/:id' element={<GlassDetails/>}/>


        {/* C8- PASO 2
          -Ejemplo de llamar a una ruta que esta en otra carpeta como Rickand morthi y llamar a otras rutas
          -PATH , indicara e nombe que le ponemos a nuestra rura ej rickandmorty
          -ELEMENT, indicara componente que vamos a usar  element={<CharList/>} */}
          <Route path='/rickandmorty' element={<CharList/>}/>
          {/* C8-2 PASO 1
              - VAMOS HACER LO MISMO QUE EN EL EJERCIO ANTERIO , LO QUE ESTA VEZ LO HAREMOS CON RICK
              -CREAMOS UNA UN NUEVO COMPNENTE EN CARPETA RICK AND MORTI, "CHARDSDETALLS, DONDE PONDREMOS LOS 
                DETALLES DE NUETRAS CARDA " 
                -LLAMAMOS A ESE NUEVO COMPONENTE PARA QUE SE PUEDA VER
                C8 - 2 PASO 2
                VER EN CHARDETAIL*/}
          <Route path='/rickandmorty/:charId' element={<CharDetail/>}/>   
          <Route path='/phone' element={<ProductsList/>}/>

      {/* 
      <GlassDetails></GlassDetails>*/}
      </Routes>
      {/* C8-PASO 3
        - FOOTER, al igual que NABVAR, footer se encontrara en cada uno de nuestros link , por eso lo dejamos 
        por fuera de Routes, pero si dentro de   */}

        <Footer/>
    </BrowserRouter>
  );
}

export default App;

