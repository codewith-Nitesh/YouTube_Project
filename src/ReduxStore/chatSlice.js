import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        userMessage:[],
    },
    reducers:{
        setUserMessage:(state,action)=>{
            state.userMessage.splice(100,1);
            state.userMessage.push(action.payload)
        }
    }
})

export const {setUserMessage} = chatSlice.actions;
export default chatSlice.reducer;