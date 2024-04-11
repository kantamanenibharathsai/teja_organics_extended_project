import { Box } from "@mui/system"
import whishListStyles from "./WhishList.Styles"
import Navbar from "../../components/navbar/Navbar"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store/Store"
import { Typography } from "@mui/material"
import BestSellerCard from "../../components/best_sellers_card/BestSellersCard"





const WhishList = () => {
    const productsList = useSelector((state : RootState) => state.wishList.bestSellerProducts);
    const wishListedProducts = productsList.filter(eachProduct => eachProduct.isWishListed === true);


    
    return (
        <Box sx={whishListStyles.mainContainer}>
            <Navbar/>
            <Box sx={whishListStyles.bodyContainer}>
                <Typography sx={whishListStyles.wishlistHeading}>Wishlist</Typography>
                <Box component="ul" sx={whishListStyles.unorededList}>
                    {wishListedProducts.map(eachProduct => (
                    <BestSellerCard key={eachProduct.productId} eachProduct={eachProduct}/>))}
                </Box>
            </Box>
        </Box>
    )
}

export default WhishList