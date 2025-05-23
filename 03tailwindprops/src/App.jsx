import { useState } from 'react'
import './App.css'
import Card from './componets/Card'

function App() {

  const [count, setCount] = useState(0)

  let myObj ={
    username:"Nikhil",
    age:20
  }

  let newArray =[1,2,3]
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'  >Tailwind Test</h1>
      <Card username="Chai aur code"  btnText="Click me" />
      <Card username ="Nikhil Kumar" />
    </>
  )
}

export default App
