import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";


const store = configureStore({
    reducer: {
        tasks: taskReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false
      })
  })
  export default store