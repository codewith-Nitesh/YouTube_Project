import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./slice";

const store = configureStore({
    reducer : {
    sliceAction: sliceReducer
    }
})

export default store;
