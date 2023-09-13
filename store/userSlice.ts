import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { userID: string } = { userID: "" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.userID = action.payload;
    },
    clearUser: (state) => {
      state.userID = "";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
