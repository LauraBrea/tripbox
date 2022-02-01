import { ItemListContainer } from "../src/components/ItemListContainer/ItemListContainer";
import { NavBar } from "../src/components/NavBar/NavBar";

function App() {

  return (
      <>
        <NavBar/>
        <ItemListContainer greeting="Listado de productos" />
      </>
  );
}

export default App;