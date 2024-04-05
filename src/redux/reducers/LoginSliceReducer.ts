import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginCardOpened: false,
  isMobileLoginCardOpened: false,
  isRegisterCardOpened: false,
  isMobileRegisterCardOpened: false,
  isCartCardOpened: false,
  isMobileCartOpened: false,
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

    cartToggleReducer: (state, action: PayloadAction<boolean>) => {
      state.isCartCardOpened = action.payload;
    },

    cartToggleMobileReducer: (state, action: PayloadAction<boolean>) => {
      state.isMobileCartOpened = action.payload;
    },
  },
});

export default LoginSlice.reducer;
export const {
  loginReducer,
  mobileLoginReducer,
  registerReducer,
  mobileRegisterReducer,
  cartToggleReducer,
  cartToggleMobileReducer,
} = LoginSlice.actions;
