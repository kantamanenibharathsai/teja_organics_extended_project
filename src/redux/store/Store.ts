import { configureStore } from "@reduxjs/toolkit";
import LoginSliceReducer from "../reducers/LoginSliceReducer";

export const Store = configureStore({
  reducer: {
    login : LoginSliceReducer
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
