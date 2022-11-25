import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/Nav/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      </header>
      <ItemListContainer/>
    </div>
  );
}

export default App;