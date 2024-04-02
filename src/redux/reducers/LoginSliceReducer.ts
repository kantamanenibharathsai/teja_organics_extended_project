import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginCardOpened: false,
  isMobileLoginCardOpened: true,
  isRegisterCardOpened: false,
  isMobileRegisterCardOpened: false,
};

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginReducer: (state, action: PayloadAction<boolean>) => {
      state.isLoginCardOpened = action.payload;
    },

    mobileLoginReducer: (state, action: PayloadAction<boolean>) => {
      state.isMobileLoginCardOpened = action.payload;
    },

    registerReducer: (state, action: PayloadAction<boolean>) => {
      state.isRegisterCardOpened = action.payload;
    },

    mobileRegisterReducer: (state, action: PayloadAction<boolean>) => {
      state.isMobileRegisterCardOpened = action.payload;
    },
  },
});

export default LoginSlice.reducer;
export const {
  loginReducer,
  mobileLoginReducer,
  registerReducer,
  mobileRegisterReducer,
} = LoginSlice.actions;
