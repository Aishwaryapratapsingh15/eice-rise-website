import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./slice"


const store = configureStore({
    reducer : {
        sideBar : sideBarReducer
    }
})

export default store;