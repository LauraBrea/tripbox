import { ItemListContainer } from "../src/components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { NavBar } from "../src/components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Regalos } from "./components/Pages/Regalos";
import { Informacion } from "./components/Pages/Informacion";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Error } from "./components/Error/Error";
import { CartProvider } from "./components/Cart/CartContext";
import { Cart } from "./components/Cart/Cart";
import { Checkout } from "./components/Checkout/Checkout"


function App() {

  return (

    <CartProvider>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={ <ItemListContainer/> } />
                <Route path='/categoria/:catId' element={ <ItemListContainer/> } />
                <Route path='/detalle/:itemId' element={ <ItemDetailContainer/> }/>
                <Route path='/pages/informacion' element={ <Informacion/> } />
                <Route path='/pages/regalos' element={ <Regalos/> } />
                <Route path='*' element={ <Navigate to='/'/> }/>
                <Route path='/cart' element={ <Cart/> } />
                <Route path='/checkout' element={ <Checkout/> } />
                <Route path='/404' element={ <Error/> }/>
            </Routes>
            <Footer/>
        </BrowserRouter>
      </CartProvider>
  );
}

export default App;