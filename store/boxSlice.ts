import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { currentBox: string; id: string } = {
  currentBox: "",
  id: "",
};

const boxSlice = createSlice({
  name: "box",
  initialState,
  reducers: {
    setBox: (
      state,
      action: PayloadAction<{ currentBox: string; id: string }>
    ) => {
      state.currentBox = action.payload.currentBox;
      state.id = action.payload.id;
    },
    clearBox: (state) => {
      state.currentBox = "";
      state.id = "";
    },
  },
});

export const { setBox, clearBox } = boxSlice.actions;

export default boxSlice.reducer;
