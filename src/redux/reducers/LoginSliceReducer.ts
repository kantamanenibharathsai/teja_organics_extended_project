import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginCardOpened: false,
  isMobileLoginCardOpened: false,
  isRegisterCardOpened: false,
  isMobileRegisterCardOpened: false,
  isCartCardOpened: false,
  isMobileCartOpened: false,
  isLoginProfileOpened: false,
  isMobileLoginProfileOpened: false,
  isForgotPasswordCardDisplayed: false,
  isMobileFrogotPasswordCardDisplayed: false,
  isLoginOtpcardOpened: false,
  isMobileLoginOtpcardOpened: false,
  isSpinnerRotating : false
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

    loginProfileReducer: (state, action: PayloadAction<boolean>) => {
      state.isLoginProfileOpened = action.payload;
    },

    mobileLoginProfileReducer: (state, action: PayloadAction<boolean>) => {
      state.isMobileLoginProfileOpened = action.payload;
    },

    loginOtpReducer: (state, action: PayloadAction<boolean>) => {
      state.isLoginOtpcardOpened = action.payload;
    },

    mobileLoginOtpReducer: (state, action: PayloadAction<boolean>) => {
      state.isMobileLoginOtpcardOpened = action.payload;
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

    forgotPasswordReducer: (state, action: PayloadAction<boolean>) => {
      state.isForgotPasswordCardDisplayed = action.payload
    },

    forgotMobilePasswordReducer: (state, action: PayloadAction<boolean>) => {
      state.isMobileFrogotPasswordCardDisplayed = action.payload
    },

    loadingSpinnerReducer: (state, action: PayloadAction<boolean>) =>  {
      state.isSpinnerRotating = action.payload
    }
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
  loginProfileReducer,
  mobileLoginProfileReducer,
  forgotPasswordReducer,
  forgotMobilePasswordReducer,
  loginOtpReducer,
  mobileLoginOtpReducer,
  loadingSpinnerReducer

} = LoginSlice.actions;
