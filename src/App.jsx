import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {

  const HandleOnAdd = (cantidad) => {
    console.log("AGREGASTE " + cantidad + " AL CARRITO");
  }

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={"LISTA DE PRODUCTOS"}/>
      <ItemCount inicial={1} stock={10} onAdd={HandleOnAdd}/>
    </div>
  );
}

export default App;
