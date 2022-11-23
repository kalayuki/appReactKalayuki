import logo from './logo.svg';
import './App.css';
import Footer from './componets/Footer';
import Saludo from './componets/Saludo';
import NavBar from './componets/NavBar';
import ItemListContainer from './componets/ItemListContainer';



function App() {
  //Establecems una constante para poder observar como lo establecemos en el contenido
  const boton= <button>BOTON</button>
  const nombre='Mauricio'
  //Agregamos un estilo
  const estilo ={
    color:'red',  
    backgroundColor:'yellow',
    padding:20, 
  }

  const mensaje =()=>{
    console.log('mensaje de la consola')
  } 
  
  return (
    <div className="App">
      <NavBar > 
      <a className="link link-hover">Productos</a>
      <a className="link link-hover">Iniciar sesion</a>
      <a className="link link-hover">Contacto</a>
      </NavBar >
      <ItemListContainer greeting="Bienvenido a nuestra tienda online, de alimentos saludables"/>
      
    </div>
  );
}

export default App;
