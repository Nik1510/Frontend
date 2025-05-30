import {configureStore} from '@reduxjs/toolkit'
import todoReducers from '../feature/Todo/todoSlice'


export const store = configureStore({
    reducer:todoReducers
})