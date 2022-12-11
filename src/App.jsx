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



function App() {

  
  return (
    <div className="App">
      <Navbar/>   

      {/* //Affter <GlassesList */}
      {/* PASO 0 */}
      {/* GLASSESLIST LLAMAMOS A NUESTRO NUEVO ARCHVOS  */}


      <GlassesList></GlassesList>

      {/* PASO 1 */}
      {/* ... VER EN EL ARCHIVO GLASSESLIST */}

     {/* PASO 7 */}
     {/* GLASSDETAILS,  llamamos a nuestro nuevo archivo donde simularemos poner la descripcion de nuestros productos  */}

      <GlassDetails></GlassDetails>

      {/* PASO 8  */}
      {/* ...VER EN EL ARCHIVO GLASSDETAILS */}






      {/* CLASES ANTERIORES */}


      {/* Comentamos ProductsList_ej1y2 para poder ver el ejemplo de la clase 6 
     <ProductsList_ej1y2/>
      */}

       {/* <ProductsList></ProductsList>  

       <CharList></CharList>*/}




      {/* Comentamos todo esto para ver los producto list  */}
       {/* 
      <ItenListContainer greting='Hola mundo'></ItenListContainer>
      <h1> Hola Mundo</h1>


      <Clicker></Clicker>

      {/* Dejamos comentado esto parapoder visualizar clicker ya que que tiene estilos particulares */}
      {/* <strong style={estilo}>Este es un mensaje para {nombre} </strong> }
      {/* {boton} }


      <Saludo name='Gabriel' age='31' lastName='Kalayuki' action={mensaje}></Saludo> 
      <Saludo name='ana' lastName='Perez' age='34' action={mensaje}></Saludo>

      <li>Fresa</li>
      <li>Melon</li>
      <li>Sandia</li>
      <li>Berrys</li>
      <li>Banano</li>
      <Footer>
      <strong>Enlace 1</strong>
      <strong>Enlace 2</strong>
      </Footer> */}
    </div>
  );
}

export default App;

