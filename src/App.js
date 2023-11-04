import  { useState } from 'react';
import './App.css';
import Greeting from './components/Greeting';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';

function App() {
 const[counter, setCounter] = useState(0);

 const[mountFirst, setMouontFirst] = useState(true);
 const[mountSecond, setMountSecond] = useState(false);

const handleMountFirst = () =>{
  setMountSecond(false);
  setMouontFirst(true);
}

const handleMountSecond = () =>{
  setMouontFirst(false);
  setMountSecond(true);
}

  return (
    <div className="App">
      <div>
      <h1>Counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)} style={{margin:10}}> + </button>
      <button onClick={() => setCounter(counter - 1)}> - </button>
      </div>
      {mountFirst && <FirstComponent/>}
      {mountSecond && <SecondComponent/>}
      <div>
        <button onClick={handleMountFirst}>Toggle First Component</button>
        <button onClick={handleMountSecond}>Toggle Second Component</button>
      </div>
    </div>
  );
}

export default App;
