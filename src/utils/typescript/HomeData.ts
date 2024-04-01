import {
  blueTeaImg,
  burdockTeaImg,
  lemonGrassTeaImg,
  peppermintTeaImg,
} from "../../assets/home_images/HomeImages";

export interface BestSellersCardInterface {
  productId: number;
  productName: string;
  productImg: string;
  productRating: number | null;
}

export const bestSellersCardsList: BestSellersCardInterface[] = [
  {
    productId: 1,
    productName: "Blue Tea 50gm",
    productImg: blueTeaImg,
    productRating: null,
  },
  {
    productId: 2,
    productName: "peppermint Tea 50gm",
    productImg: peppermintTeaImg,
    productRating: 5,
  },
  {
    productId: 3,
    productName: "Lemongrass Tea 50gm",
    productImg: lemonGrassTeaImg,
    productRating: null,
  },
  {
    productId: 4,
    productName: "Burdock Tea 50gm",
    productImg: burdockTeaImg,
    productRating: null,
  },
];