import ItemListContainer from "./ItemListContainer/ItemListContainer";
import NavBar from "./NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="¡Bienvenidos a Nuestra Tienda Online!"/>
    </div>
  );
}

export default App;
