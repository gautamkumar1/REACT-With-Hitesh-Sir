import { useState } from 'react'

import './App.css'

function App() {

  // useState returns a pair. 'counter' is the current state. 'setCounter' is a function we can use to update the state.

  let [counter,setCounter] = useState(15) 
  const increaseValue = () =>{

    if(counter < 20){
      setCounter(counter+1)
    }
    else{
      return;
    }
  }

  const decreaseValue = () =>{
    if(counter > 0){
      setCounter(counter-1)
    }
    else{
      return 0;
    }
  }
  
  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value : {counter}</h2>
      <div>
        <button
          onClick={increaseValue}
        >Increase</button>
        <br />
        <br />
        <button
          onClick={decreaseValue}
        >Decrease</button>
      </div>
    </>
  )
}

export default App
