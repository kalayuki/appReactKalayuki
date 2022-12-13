
import logo from './logo.svg';
import './App.css';
import NavBar from './componets/NavBar';
import ItemListContainer from './componets/ItemListContainer';
import ItemDetailContainer from './componets/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {
 
  
  return ( 
    <BrowserRouter>
    <div className="App">
        
      <NavBar/> 
      <Routes>
      <Route  path='/' element={<ItemListContainer/>}></Route>
      <Route path='/category/:idCategory' element={<ItemListContainer/>}></Route>
      <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
      
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
