import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  BestSellersCardInterface, bestSellersCardsList,
} from "../../utils/typescript/HomeData";

interface InitialStateType {
    bestSellerProducts : BestSellersCardInterface[]
}
const initialState: InitialStateType = {
    bestSellerProducts : bestSellersCardsList,
};

const WhistListSlice = createSlice({
  name: "wishListSlice",
  initialState,
  reducers: {
    wishListToggleReducer: (state, action: PayloadAction<number>) => {
      const newProductsList = state.bestSellerProducts.map(eachProduct => {
        if (eachProduct.productId === action.payload) {
          return {...eachProduct, isWishListed : !eachProduct.isWishListed}
        }
        return eachProduct
      })

      state.bestSellerProducts = newProductsList
   
  },
}});

export default WhistListSlice.reducer;
export const {
  wishListToggleReducer
} = WhistListSlice.actions;
