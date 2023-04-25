import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer gretting={"Bienvenido a Nuestra Tienda"}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('La cantidad agregada es: ',quantity)}></ItemCount>
    </div>
  );
}

export default App;
