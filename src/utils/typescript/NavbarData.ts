import {
  organicFoodImg,
  skinCareImg,
  bodyCareImg,
  hairCareImg,
  aromaTherapyImg,
  homeCareImg,
  tejaOrganicsImg,
  roomfreshnerImg,
} from "../../assets/navbar_images/navbarImages";

export interface BrowseCategoryInterface {
  categoryId: number;
  categoryName: string;
  categoryImg: string;
  isExpand: boolean;
}

export const accordionBrowseCategoryData: BrowseCategoryInterface[] = [
  {
    categoryId: 1,
    categoryName: "Organic Food",
    categoryImg: organicFoodImg,
    isExpand: false,
  },
  {
    categoryId: 2,
    categoryName: "Skin Care",
    categoryImg: skinCareImg,
    isExpand: false,
  },
  {
    categoryId: 3,
    categoryName: "Body Care",
    categoryImg: bodyCareImg,
    isExpand: false,
  },
  {
    categoryId: 4,
    categoryName: "Hair Care",
    categoryImg: hairCareImg,
    isExpand: false,
  },
  {
    categoryId: 5,
    categoryName: "Aroma Therapy",
    categoryImg: aromaTherapyImg,
    isExpand: false,
  },
  {
    categoryId: 6,
    categoryName: "Home Care",
    categoryImg: homeCareImg,
    isExpand: false,
  },
  {
    categoryId: 7,
    categoryName: "Teja Organics",
    categoryImg: tejaOrganicsImg,
    isExpand: false,
  },
  {
    categoryId: 8,
    categoryName: "Room Freshner",
    categoryImg: roomfreshnerImg,
    isExpand: false,
  },
];
