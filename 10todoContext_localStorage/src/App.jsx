import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
function App() {
 
  // Todo's will come from context 
  // store them in state
  const [todos,setTodos] = useState([]);

  const addTodo =(todo)=>{
    // this todo doesnot come from above state it will come from form
   
    // setTodos(todo) --->   // if we pass like this all the previous todo will be deteted or overwritten

    // so we need previous state

    setTodos((prev)=>[{id:Date.now() ,...todo}, ...prev])
  }

  const updateTodo = (id,todo)=>{
    setTodos((prev) =>(prev.map((prevTodo)=>
      (prevTodo.id===id ? todo: prevTodo ))))
  }

  const deleteTodo =(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
  }

  const toggleComplete = (id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id ? {...prevTodo,completed:!prevTodo.completed}:prevTodo));
  }

  // to local storage we use useEffect 
  // when the application first time load  "useEffect" can query to local storage 

  useEffect(()=>{
    
     const todo = JSON.parse(localStorage.getItem("todos"));
      console.log("local Storage" ,todo);
     if(todo && todo.length>0){
      setTodos(todo);
     }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                         <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
