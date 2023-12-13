import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./RouteReducer";
const store = configureStore({
    reducer:{
        root:rootReducer
    }
})
export default store