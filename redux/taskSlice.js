import { createSlice } from "@reduxjs/toolkit";


export const taskSlice = createSlice({
    name:'tasks',
    initialState:[],
    reducers:{
        addTask:(state, action) => {
            const newTask = {
                id: action.payload.task,
                name: action.payload.task,
            }
            state.push(newTask);
        },
        addTodo:(state, action) => {
            const newTodo ={
                id: action.payload.task,
                name: action.payload.task,
            }
            state.push(newTodo)
            console.log(action.payload)
        },
        deleteTask:(state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        }
    }
})
export const { addTask, deleteTask, addTodo } = taskSlice.actions;

export default taskSlice.reducer;