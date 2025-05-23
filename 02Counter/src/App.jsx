import { useState } from 'react'

import './App.css'

function App() {


  let [counter,setCounter] = useState(15)

  const batchUpdate =()=>{
    // here you take pervious state 
    setCounter(counter=>counter+1)
    setCounter(counter=>counter+1)
    setCounter(counter=>counter+1)
    setCounter(counter=>counter+1)
  }
   const batchRemove =()=>{
    // here you take pervious state 
    setCounter(counter=>counter-1)
    setCounter(counter=>counter-1)
    setCounter(counter=>counter-1)
    setCounter(counter=>counter-1)
  }

  // let counter =5;

  const addValue = ()=>{
    // this is function
      //  1st way 
    // counter=counter+1;
    // setCounter(counter)

    // set counter is just a refence ypu can keep anything 
    if(counter>=20){
      console.log("cannot go further than ",counter);
    }else{
      setCounter(counter+1);
    }

  } 
const removeValue = ()=>{
  if(counter<1){
    console.log("Negative number");
  }else
  setCounter(counter-1);
}

  return (
    <>
      <h1>React With Vite </h1>
      <h2>Counter Value : {counter} </h2>
      <button onClick={addValue} disabled={counter>=20}>Add value {counter} </button>
      <button onClick={batchUpdate} disabled={counter>=16}>Batch add value {counter} </button>
      <br />
      <button  onClick={removeValue}disabled={counter<=0}>Remove value {counter}</button>
      <button  onClick={batchRemove}disabled={counter<=4}>BatchRemove value {counter}</button>
      <footer> footer value : {counter}</footer>
    </>
  )
}

export default App
