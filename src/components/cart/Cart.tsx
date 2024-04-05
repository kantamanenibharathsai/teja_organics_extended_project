import { Box, Button, Rating, Stack, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { productImage } from "../../assets/cart_images/CartImages"
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/Store";
import cartStyles from "./Cart.Styles";
import { useNavigate } from "react-router-dom";
import { CartProductInterface } from "../../utils/typescript/HomeData";
import { cartDecrement, cartIncrement, mobileCartToggleReducer, removeCartItem } from "../../redux/reducers/CartSliceReducer";
import cartEmptyImg from "../../assets/cart_images/cartEmptyImg.png"



const Cart = () => {
    const isMobileCartOpened = useSelector((state: RootState) => state.login.isMobileCartOpened);
    const requiredCartProducts = useSelector((state: RootState) => state.cart.cartProducts);

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const closeBtnDrawerHandler = () => {
        dispatch(mobileCartToggleReducer(false));
        navigate("/")
    }


    const handleIncrement = (cartProduct: CartProductInterface) => {
        dispatch(cartIncrement(cartProduct.productId))
    };

    const handleDecrement = (cartProduct: CartProductInterface) => {
        if (cartProduct.productQuantity === 1) dispatch(removeCartItem(cartProduct.productId));
        else dispatch(cartDecrement(cartProduct.productId));
    };

    const deleteCartItemHandler = (cartProduct: CartProductInterface) => {
        dispatch(removeCartItem(cartProduct.productId));
    }

    const cartBtnEventHandler = () => {
        if (requiredCartProducts.length === 0) {
            dispatch(mobileCartToggleReducer(false));
            navigate("/")
        }
    }


    return (
        <Box sx={{ ...cartStyles.mainContainer, display: isMobileCartOpened ? { xs: "flex", lg: "none" } : "flex" }}>
            <Stack direction={"column"} justifyContent={"flex-end"} gap={1} sx={cartStyles.childContainer}>
                <Stack direction={"row"} justifyContent={"flex-end"} alignItems={"center"} sx={cartStyles.buttonContainer}>
                    <Box component="button" sx={cartStyles.drawerCloseIconBtn} onClick={closeBtnDrawerHandler}>
                        <CloseIcon sx={cartStyles.closeIcon} />
                    </Box>
                </Stack>
                <Typography sx={cartStyles.cartHeading}>Cart</Typography>
                {requiredCartProducts.length > 0 && (<Box component={"ul"} sx={cartStyles.unorderedList}>
                    {requiredCartProducts.map(eachProduct => (
                        <Box key={eachProduct.productId} component="li" sx={cartStyles.listItem}>
                            <Box sx={cartStyles.imageContainer}>
                                <Box component={"img"} src={eachProduct.productImg} alt="product-image" sx={cartStyles.productImage} />
                            </Box>
                            <Stack direction={"column"} gap={0.5} alignSelf={"center"}>
                                <Typography sx={cartStyles.itemName}></Typography>
                                <Stack direction={"row"} gap={1} alignItems={"center"}>
                                    <Typography sx={cartStyles.productPrice}>₹370.00</Typography>
                                    <Rating name="read-only" value={4} readOnly size="small" />
                                    <ShareOutlinedIcon sx={cartStyles.shareDeleteIcon} />
                                    <DeleteOutlineOutlinedIcon sx={cartStyles.shareDeleteIcon} onClick={() => deleteCartItemHandler(eachProduct)} />
                                </Stack>
                            </Stack>
                            <Stack direction={"column"} alignItems={"center"} sx={cartStyles.incremDecreBtns}>
                                <Box onClick={() => handleIncrement(eachProduct)} component="button" sx={cartStyles.plusIncreDecreBtn}>+</Box>
                                <Box component="button" sx={cartStyles.plusIncreDecreBtn}>{eachProduct.productQuantity}</Box>
                                <Box component="button" onClick={() => handleDecrement(eachProduct)} sx={cartStyles.plusIncreDecreBtn}>-</Box>
                            </Stack>
                        </Box>
                    ))}
                </Box>)}
                {requiredCartProducts.length === 0 && (
                    <Box sx={cartStyles.cartEmptyContainer}>
                        <Box component={"img"} src={cartEmptyImg} alt="cart-empty-img" sx={cartStyles.cartEmptyImage} />
                    </Box>
                )}
                <Button onClick={cartBtnEventHandler} sx={cartStyles.proceedToBuyBtn} disableElevation disableFocusRipple disableTouchRipple disableRipple>{

                    requiredCartProducts.length === 0 ? "BACK TO HOME" : "PROCEED TO BUY"}</Button>
            </Stack>
        </Box>
    )
}


export default Cart;