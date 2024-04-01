import { Box, Button, Rating, Stack, Typography } from "@mui/material"
import bestSellersCardStyles from "./BestSellersCard.Styles"
import heartImgIcon from "../../assets/home_images/heartImageIcon.png"
import { BestSellersCardInterface } from "../../utils/typescript/HomeData"


interface MyProps {
    eachProduct: BestSellersCardInterface
}


const BestSellerCard = ({ eachProduct }: MyProps) => {
    const { productId, productName, productImg, productRating } = eachProduct


    return (
        <Box sx={bestSellersCardStyles.cardContainer}>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Typography sx={bestSellersCardStyles.organicFoodText}>Organic Food</Typography>
                <Box component={"img"} src={heartImgIcon} alt="heart-image-icon" sx={bestSellersCardStyles.favoriteIconImg} />
            </Stack>
            <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
                <Box component={"img"} src={productImg} alt={`product${productId}`} sx={bestSellersCardStyles.productImage} />
            </Stack>
            <Stack direction={"column"} gap={1} width={"90%"} margin={"auto"}>
                <Typography sx={bestSellersCardStyles.productName}>{productName}</Typography>
                <Stack direction={"row"} gap={2} alignItems={"center"}>
                    <Typography sx={bestSellersCardStyles.productPrice}>₹340.00</Typography>
                    <Rating name="no-value" value={productRating} />
                </Stack>
                <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
                    <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={0} sx={bestSellersCardStyles.increDecreBtnsStack}>
                        <Button disableElevation disableFocusRipple disableRipple disableTouchRipple sx={{...bestSellersCardStyles.increDecreBtn, ...bestSellersCardStyles.incrementBtn}}>-</Button>
                        <Typography sx={bestSellersCardStyles.productQuantity}>1</Typography>
                        <Button disableElevation disableFocusRipple disableRipple disableTouchRipple sx={bestSellersCardStyles.increDecreBtn}>+</Button>
                    </Stack>
                    <Button disableElevation disableFocusRipple disableRipple disableTouchRipple sx={bestSellersCardStyles.addToCartBtn}>Add to Cart</Button>
                </Stack>
            </Stack>
        </Box>
    )
}






export default BestSellerCard