import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./slice";
import chatReducer from "./chatSlice";

const store = configureStore({
    reducer : {
    sliceAction: sliceReducer,
    chatSlice: chatReducer
    }
})

export default store;
