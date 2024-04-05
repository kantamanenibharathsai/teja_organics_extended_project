import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentActiveTab: "Home",
};

const NavbarTabsSlice = createSlice({
  name: "NavbarTabs",
  initialState,
  reducers: {
    navbarTabsReducer: (state, action: PayloadAction<string>) => {
      state.currentActiveTab = action.payload;
    },
  },
});

export default NavbarTabsSlice.reducer;
export const { navbarTabsReducer } = NavbarTabsSlice.actions;
