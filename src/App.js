//@ts-check
import './App.css';
import NavBar from './Components/NavBar/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {

  function onAdd(){
    alert(`Se añadieron los items a tu Carrito!`)
  }

  return (
    <main> 
      <BrowserRouter>
      <NavBar/>
      
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
