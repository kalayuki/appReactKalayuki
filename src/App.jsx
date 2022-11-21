import logo from './logo.svg';
import './App.css';
import Footer from './componets/Footer';
import Saludo from './componets/Saludo';



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
      <h1> Hola Mundo</h1>
      <strong style={estilo}>Este es un mensaje para {nombre} </strong>
      {boton}


      <Saludo name='Gabriel' age='31' lastName='Kalayuki' action={mensaje}></Saludo> 
      <Saludo name='ana' lastName='Perez' age='34' action={mensaje}></Saludo>

      <li>Fresa</li>
      <li>Melon</li>
      <li>Sandia</li>
      <li>Berrys</li>
      <li>Banano</li>
      <Footer/>
    </div>
  );
}

export default App;
