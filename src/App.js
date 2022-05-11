import logo from './logo.svg';
import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import PersonCard from './componentes/PersonCard';

function App() {
  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <h4>Things I need to do:</h4>
      {/* <ListaDeTareas tareaEspecial="Darle de comer al hamster!"/> */}
      {/* Pasemos sus props(atributos) */}
      <PersonCard firstName={"Jhomar"} lastName={"Astuyauri"} age={22} hairColor={"negro"}/>
      <PersonCard firstName={"Elias"} lastName={"Herencia"} age={18} hairColor={"marron"}/>
      <PersonCard firstName={"Maria"} lastName={"Ying"} age={65} hairColor={"blanco"}/>
    </div>
  );
}

export default App;
