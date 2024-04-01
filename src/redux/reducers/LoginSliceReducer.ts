import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginCardOpened: false,
};

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginReducer: (state, action: PayloadAction<boolean>) => {
      state.isLoginCardOpened = action.payload;
    },
  },
});

export default LoginSlice.reducer;
export const { loginReducer } = LoginSlice.actions;
