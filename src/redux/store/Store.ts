import { configureStore } from "@reduxjs/toolkit";
import LoginSliceReducer from "../reducers/LoginSliceReducer";
import SingleProductReducer from "../reducers/SingleProductReducer";
import CartSliceReducer from "../reducers/CartSliceReducer";
import NavbarTabsReducer from "../reducers/NavbarTabsReducer";
import WishListReducer from "../reducers/WishListReducer";

export const Store = configureStore({
  reducer: {
    login: LoginSliceReducer,
    singleProduct: SingleProductReducer,
    cart: CartSliceReducer,
    navbarTabs: NavbarTabsReducer,
    wishList : WishListReducer
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
