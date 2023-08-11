import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import boxSlice from "./boxSlice";

export const store = configureStore({
  reducer: { user: userSlice, box: boxSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
