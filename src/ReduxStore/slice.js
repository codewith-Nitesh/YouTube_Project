import { createSlice } from "@reduxjs/toolkit";

const sliceAction = createSlice({
  name: "slice",
  initialState: {
    open: false,
  },
  reducers: {
    setOpen: (state,action) => {
      state.open = action.payload;
    },
  },
});

export const {setOpen} = sliceAction.actions;
export default sliceAction.reducer;