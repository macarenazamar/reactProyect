import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './conteiners/ItemDetailContainer';
//import ItemListContainer from './conteiners/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        {/* <ItemListContainer greeting={"Hello Word!"}/> */}
        
      </header>
      <body>
        <ItemDetailContainer/>
      </body>
    </div>
  );
}

export default App;
