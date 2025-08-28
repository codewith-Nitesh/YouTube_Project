import { createSlice } from "@reduxjs/toolkit";

const sliceAction = createSlice({
  name: "slice",
  initialState: {
    open: false,
    video:[],
    category:"All"
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
    }
  },
});

export const {setOpen, setYoutubeVideo,setCategory} = sliceAction.actions;
export default sliceAction.reducer;