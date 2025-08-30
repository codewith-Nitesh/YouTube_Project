import { createSlice } from "@reduxjs/toolkit";

const sliceAction = createSlice({
  name: "slice",
  initialState: {
    open: false,
    video:[],
    category:"All",
    searchSuggestion:[],
    selectedTopic:[]
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
    setSelectedTopic:(state,action) =>{
      state.selectedTopic = action.payload;
    }
  },
});

export const {setOpen, setYoutubeVideo,setCategory,setSearchSuggestion,setSelectedTopic} = sliceAction.actions;
export default sliceAction.reducer;