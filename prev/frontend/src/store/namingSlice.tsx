import { createSlice } from "@reduxjs/toolkit";

const namingSlice = createSlice({
  name: "naming",
  initialState: {
    value: "No name",
  },
  reducers: {
    setName: (state, action) => {
      state.value = action.payload;
    },
    setNone: (state) => {
      state.value = "none";
    },
    addName: (state, action) => {
      state.value += action.payload;
    },
    blankName: (state) => {
      state.value = "";
    },
  },
});

export const { setName, setNone, addName, blankName } = namingSlice.actions;
export default namingSlice.reducer;
