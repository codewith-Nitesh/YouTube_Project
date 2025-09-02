import { createSlice } from "@reduxjs/toolkit";

const sliceAction = createSlice({
  name: "slice",
  initialState: {
    open: false,
    video:[],
    category:"All",
    searchSuggestion:[],
    darkMode:false,
  },
  reducers: {
    setOpen: (state,action) => {
      state.open = action.payload;
    },
    setYoutubeVideo:(state,action) => {
      state.video = action.payload;
    },
    setCategory:(state,action)=>{
      state.category = action.payload
    },
    setSearchSuggestion:(state,action)=>{
      state.searchSuggestion = action.payload
    },
    setdarkMode:(state,action) =>{
      state.darkMode = action.payload;
    }
  },
});

export const {setOpen, setYoutubeVideo,setCategory,setSearchSuggestion,setdarkMode} = sliceAction.actions;
export default sliceAction.reducer;