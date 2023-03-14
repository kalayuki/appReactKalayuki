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
import { useState } from 'react';
import React from 'react';
import { DarkMOdeCotext } from './componets/Context/DarkmodeContext';
import GlassCart from './componets/affter1/GlassCart';

import ItemListContainerBs from './componets/FronFareBase/ItemListContainerBs';

// Clase 10 - E1 
//CReamo un boton donde cambiara el estado de on a off
//CReamos un contexto , para cuando este quiera accedera a otra rutas




function App() {
  /* C10 E1 P2
  -Declaramos a funcion darkModeToggle
  -Guardamos el darkmode en un estdao
  -lo inicialisamos en false
  -llamamos en nuestra funcion al estado darkmode
  -llamamos a setDarkmode, que es quien cambiara el estado de darkmode
  -!darkmode, lo llamamos dentro de nuestro estado para que cuando se haga el click este pase al contrario 
    de su estado inicial , en este caso que pase a true
  -vamos a la carpeta contex

  */
  const [darkmode, setDarkmode] = useState(false)
  const darkModeToggle = () => {  
 
   setDarkmode(!darkmode)
  }

  return (
    /* C10 E1 P6
      -Englobamos el conxeto
      -Le tenemos que agregarel .provide
      -Definismo el value , paa que traiga el estado que declaramos en el p2 (darkmode) 
      -ahora todo lo que contengael provide , utilizara el valor que tenga todo el estado
      -Todo lo que cambien en el boton cread en el paso 1, tambien cambiara en el charditail que creamos 
      -ademasque el estado este en appjs, y el detail este por fuera perl lo engloba  */
      <DarkMOdeCotext.Provider value={darkmode}>
    <BrowserRouter>
      

      <Navbar/> 
      
    {/* C10 E1 paso1
    - CReamos un boton DARMODE
    -Le damos un Onclick */}
    {/* C10 E1 P3
    - {darkmode ? 'on':'off'} agregamos un codiciona para que cuando se produzca el click este cambie 
      cuando es false cuando es true */}

    <button className='btn' onClick={darkModeToggle}>Darkmode {darkmode ? 'on':'off'} </button>  
      <Routes>
        <Route path='/' element={<GlassesList/>}/>

        
      <Route path='/glass/:id' element={<GlassDetails/>}/>
      <Route path='/glass/cart' element={<GlassCart/>}/>
  

          <Route path='/rickandmorty' element={<CharList/>}/>
         
          <Route path='/rickandmorty/:charId' element={<CharDetail/>}/>   
          <Route path='/phone' element={<ProductsList/>}/>
          {/* C9-E1 P1 Creamos una nueva Ruta con ClickEvente */}
          <Route path='/event' element={<ClickEvent/>}></Route>
          {/* C9-E3 P1
          creamos ruta de ClickChange */}
          <Route path='/clickchange' element={<ClickChange/>}></Route>
          {/* <Route path='/items' element={<ItemList/>}></Route> */}
          <Route path='/itemsBs' element={<ItemListContainerBs greeting={"bienvenidos"}/>}></Route>
      </Routes>
  

        <Footer/>
    </BrowserRouter>
    </DarkMOdeCotext.Provider>
  );
}

export default App;

