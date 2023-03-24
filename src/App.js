import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer gretting={"Bienvenido a Nuestra Tienda"}/>
    </div>
  );
}

export default App;
