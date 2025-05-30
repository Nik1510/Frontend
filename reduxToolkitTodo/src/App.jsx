import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import AddTodo from './components/addTodo'



function App() {

  return (
    <>
      <h1>Learn about redux Toolkit</h1>
      <AddTodo/>
      <Todo/>
    </>
  )
}

export default App
