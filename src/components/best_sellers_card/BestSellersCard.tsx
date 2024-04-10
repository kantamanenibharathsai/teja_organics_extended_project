import { Box, Button, Rating, Stack, Typography } from "@mui/material"
import bestSellersCardStyles from "./BestSellersCard.Styles"
import heartImgIcon from "../../assets/home_images/heartImageIcon.png"
import { BestSellersCardInterface } from "../../utils/typescript/HomeData"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store/Store"
import { singleProductReducer } from "../../redux/reducers/SingleProductReducer"
import { useNavigate } from "react-router-dom"
import { addToCart, cartDecrement, cartIncrement } from "../../redux/reducers/CartSliceReducer"
import heartFilledImg from "../../assets/home_images/heartFilledIcon.png"

interface MyProps {
    eachProduct: BestSellersCardInterface
}


const BestSellerCard = ({ eachProduct }: MyProps) => {
    const requiredCartProduct = useSelector((state: RootState) => state.cart.cartProducts.find(product => product.productId === eachProduct.productId))
    // console.log(requiredCartProduct);
    const { productId, productName, productImg, productRating, isWishListed} = eachProduct;
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();


    const handleBestSellerCard = (name: string, image: string) => {
        dispatch(singleProductReducer({ productName: name, productImg: image }));
        navigate(`/singleProduct/${productId}`)
    }


    const handleIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        console.log(productId)
        dispatch(cartIncrement(productId))

    };

    const handleDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        console.log(productId)
        dispatch(cartDecrement(productId))

    };

    const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        dispatch(addToCart(eachProduct))

    };

    return (

        <Box sx={bestSellersCardStyles.cardContainer} onClick={() => handleBestSellerCard(productName, productImg)}>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Typography sx={bestSellersCardStyles.organicFoodText}>Organic Food</Typography>
                {!isWishListed && (<Box component={"img"} src={heartImgIcon} alt="heart-image-icon" sx={bestSellersCardStyles.favoriteIconImg} />)}
                {isWishListed && (<Box component={"img"} src={heartImgIcon} alt="heart-image-icon" sx={bestSellersCardStyles.favoriteIconImg} />)}
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
                        <Button disabled={requiredCartProduct?.productQuantity === 0} onClick={handleDecrement} disableElevation disableFocusRipple disableRipple disableTouchRipple sx={{ ...bestSellersCardStyles.increDecreBtn, ...bestSellersCardStyles.incrementBtn }}>-</Button>
                        <Typography sx={bestSellersCardStyles.productQuantity}>{requiredCartProduct ? requiredCartProduct.productQuantity : 0}</Typography>
                        <Button onClick={handleIncrement} disabled={requiredCartProduct?.productQuantity === 0} disableElevation disableFocusRipple disableRipple disableTouchRipple sx={bestSellersCardStyles.increDecreBtn}>+</Button>
                    </Stack>
                    <Button onClick={handleAddToCart} disableElevation disableFocusRipple disableRipple disableTouchRipple sx={bestSellersCardStyles.addToCartBtn}>Add to Cart</Button>
                </Stack>
            </Stack>
        </Box>
    )
}






export default BestSellerCard