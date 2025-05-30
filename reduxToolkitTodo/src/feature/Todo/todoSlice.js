import { createSlice, nanoid } from "@reduxjs/toolkit";

// nano id :- generates unique id 

const initialState ={
    todos:[{
        id:1,
        text:"Hello World"
    }]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo ={
                id:nanoid(),
                text:action.payload
            }
            // here we push the current todo to exciting todos
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id!==action.payload);
        },
        updateTodo:(state,action)=>{
            state.todos=state.todos.map((todo)=>todo.id===action.payload?{...todo,...action.payload}:todo);
        }
    }
});

export const {addTodo,removeTodo,updateTodo}=todoSlice.actions

export default todoSlice.reducer;