import { ItemListContainer } from "../src/components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { NavBar } from "../src/components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Regalos } from "./components/Pages/Regalos";
import { Informacion } from "./components/Pages/Informacion";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {

  return (
      <BrowserRouter>
          <NavBar/>
          <Routes>
              <Route path="/" element={ <ItemListContainer/> } />
              <Route path="/categoria/:catId" element={ <ItemListContainer/> } />
              <Route path="/detalle/:itemId" element={ <ItemDetailContainer/> }/>
              <Route path="/pages/informacion" element={ <Informacion/> } />
              <Route path="/pages/regalos" element={ <Regalos/> } />
              <Route path='*' element={ <Navigate to='/'/> }/>
          </Routes>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;