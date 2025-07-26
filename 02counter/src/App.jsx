import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounterHook] = useState(10);

  // let counter = 10;

  const addValue = () => {
    // counter = counter + 1;
    if(counter === 20) {
      alert("Value cannot be greater than 20");
      return;
    }
    
    console.log(counter);
    setCounterHook(counter + 1);
  }
  
  const removeValue = () => {
    // counter = counter + 1;
    if(counter === 0) {
      alert("Value cannot be less than 0");
      return ;
    }
    
    console.log(counter);
    setCounterHook(counter - 1);
  }

  return (
    <>
      <h1>Counter project</h1>

      <h2>Value: {counter}</h2>

      <button
      onClick={addValue}
      class="btn">Add value</button>

      <button
      onClick={removeValue}
      class="btn">Remove value</button>

      <p>Footer: {counter}</p>
    </>
  )
}

export default App
