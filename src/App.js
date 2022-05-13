import logo from './logo.svg';
import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import PersonCard from './componentes/PersonCard';
import MyNewComponent from './componentes/MyNewComponent';
import LightSwitch from './componentes/LightSwitch';
import PersonCardFunctional from './componentes/PersonCardFunctional';
import Formulario from './componentes/Formulario';
import MovieForm from './componentes/MovieForm';
import Groceries from './componentes/Groceries';
import MessageForm from './componentes/MessageForm';
import MessageDisplay from './componentes/MessageDisplay';
import { useState } from 'react';
import DisplayCajasForm from './componentes/DisplayCajasForm';
import GeneradorCajasForm from './componentes/GeneradorCajasForm';


function App() {

  // const [currentMsg, setCurrentMsg] = useState("There are no messages");
  const [currentColor, setCurrentColor] = useState([]);

  const yourNewColor = e =>{
    console.log(e)
    // Color -> e
    // EL push no sirve para manejar sets*
    setCurrentColor([...currentColor, e]);
    console.log(currentColor)
  }

  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <h4>Things I need to do:</h4>
      {/* <ListaDeTareas tareaEspecial="Darle de comer al hamster!"/> */}
      {/* Pasemos sus props(atributos) */}
      {/* <PersonCard firstName={"Jhomar"} lastName={"Astuyauri"} age={22} hairColor={"negro"}/> 
      <PersonCard firstName={"Elias"} lastName={"Herencia"} age={18} hairColor={"marron"}/>
      <PersonCard firstName={"Maria"} lastName={"Ying"} age={65} hairColor={"blanco"}/>  */}
      {/* <Groceries/> */}
      {/* <Formulario/> */}
      {/* <MovieForm/> */}
      <DisplayCajasForm currentColor={currentColor} />
      <GeneradorCajasForm onNewColor={yourNewColor}/>
      {/* <MessageForm onNewMessage={youveGotMail}/>
      <MessageDisplay message={currentMsg}/> */}
      {/* <PersonCardFunctional firstName="Lolo" lastName="astuyauri" age={23} hairColor={"black"}/>
      <PersonCardFunctional firstName="him" lastName="astuyauri" age={21} hairColor={"red"}/>
      <PersonCardFunctional firstName="Lolo" lastName="astuyauri" age={58} hairColor={"black"}/>
      <PersonCardFunctional firstName="matias" lastName="astuyauri" age={8} hairColor={"black"}/> */}

      {/* <MyNewComponent header={ "Header Prop" }>
            <p>This is a child</p>
            <p>This is another child</p>
            <p>This is even another child</p>
      </MyNewComponent>   */}

      {/* <button onClick={() => alert("Este botón ha sido clickeado!")}>Click me!</button> */}

      {/* <LightSwitch/> */}
      
    </div>
  );
}

export default App;
