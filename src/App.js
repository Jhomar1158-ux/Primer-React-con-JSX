import logo from './logo.svg';
import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <h4>Things I need to do:</h4>
      <ListaDeTareas/>
    </div>
  );
}

export default App;
