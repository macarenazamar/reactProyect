import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './conteiners/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer greeting={"Hello Word!"}/>
      </header>
    </div>
  );
}

export default App;
