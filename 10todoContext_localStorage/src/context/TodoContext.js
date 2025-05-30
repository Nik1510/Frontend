import { useContext, createContext } from "react";


export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Todo message",
            completed :false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo = ()=>{
    // whenever you use "useContext" ypu have to pass the dependencies props 
    // to let the use Context know in which context you are taking 
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;