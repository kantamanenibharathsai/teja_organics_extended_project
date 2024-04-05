import { Box, Button, Rating, Stack, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { productImage } from "../../assets/cart_images/CartImages"
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/Store";
import desktopCartStyles from "./DesktopCart.Styles";
import { cartToggleReducer, } from "../../redux/reducers/LoginSliceReducer";
import { useNavigate } from "react-router-dom";
import { cartDecrement, cartIncrement, removeCartItem } from "../../redux/reducers/CartSliceReducer";
import { CartProductInterface } from "../../utils/typescript/HomeData";
import cartEmptyImg from "../../assets/cart_images/cartEmptyImg.png"



const DesktopCart = () => {
    const isDesktopCartOpened = useSelector((state: RootState) => state.login.isCartCardOpened);
    const requiredCartProducts = useSelector((state: RootState) => state.cart.cartProducts)
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const closeBtnDrawerHandler = () => {
        dispatch(cartToggleReducer(false));
        navigate("/")
    }

    const handleIncrement = (cartProduct: CartProductInterface) => {
        dispatch(cartIncrement(cartProduct.productId))

    };

    const handleDecrement = (cartProduct: CartProductInterface) => {
        if (cartProduct.productQuantity === 1)
            dispatch(removeCartItem(cartProduct.productId));
        else dispatch(cartDecrement(cartProduct.productId));
    };

    const deleteCartItemHandler = (cartProduct: CartProductInterface) => {
        dispatch(removeCartItem(cartProduct.productId));
    }

    const cartBtnEventHandler = () => {
        if (requiredCartProducts.length === 0) {
            dispatch(cartToggleReducer(false))
            navigate("/")
        }
    }


    return (
        <Box sx={isDesktopCartOpened ? desktopCartStyles.cardOpenParentContainer : desktopCartStyles.cardParentCloseContainer}>
            <Box onClick={closeBtnDrawerHandler} component="button" sx={isDesktopCartOpened ? desktopCartStyles.drawerCloseIconBtnOpen : desktopCartStyles.drawerCloseIconBtnClosed}><CloseIcon sx={desktopCartStyles.closeIcon} /></Box>
            <Box sx={isDesktopCartOpened ? desktopCartStyles.cardOpenChildContainer : desktopCartStyles.cardChildCloseContainer}>

                <Stack direction={"column"} justifyContent={"flex-end"} gap={1} sx={desktopCartStyles.childContainer}>
                    <Typography sx={desktopCartStyles.cartHeading}>Cart</Typography>
                    {requiredCartProducts.length > 0 && (<Box component={"ul"} sx={desktopCartStyles.unorderedList}>
                        {requiredCartProducts.map(eachProduct => (
                            <Box key={eachProduct.productId} component="li" sx={desktopCartStyles.listItem}>
                                <Box sx={desktopCartStyles.imageContainer}>
                                    <Box component={"img"} src={eachProduct.productImg} alt="product-image" sx={desktopCartStyles.productImage} />
                                </Box>
                                <Stack direction={"column"} gap={0.5} alignSelf={"center"}>
                                    <Typography sx={desktopCartStyles.itemName}>{eachProduct.productName}</Typography>
                                    <Stack direction={"row"} gap={1} alignItems={"center"}>
                                        <Typography sx={desktopCartStyles.productPrice}>₹370.00</Typography>
                                        <Rating name="read-only" value={4} readOnly size="small" />
                                        <ShareOutlinedIcon sx={desktopCartStyles.shareDeleteIcon} />
                                        <DeleteOutlineOutlinedIcon sx={desktopCartStyles.shareDeleteIcon} onClick={() => deleteCartItemHandler(eachProduct)} />
                                    </Stack>
                                </Stack>
                                <Stack direction={"column"} alignItems={"center"} sx={desktopCartStyles.incremDecreBtns}>
                                    <Box component="button" sx={desktopCartStyles.plusIncreDecreBtn} onClick={() => handleIncrement(eachProduct)}>+</Box>
                                    <Box component="button" sx={desktopCartStyles.plusIncreDecreBtn}>{eachProduct.productQuantity}</Box>
                                    <Box component="button" onClick={() => handleDecrement(eachProduct)} sx={desktopCartStyles.plusIncreDecreBtn}>-</Box>
                                </Stack>
                            </Box>
                        ))}
                    </Box>)}
                    {requiredCartProducts.length === 0 && (
                        <Box sx={desktopCartStyles.cartEmptyContainer}>
                            <Box component={"img"} src={cartEmptyImg} alt="cart-empty-img" sx={desktopCartStyles.cartEmptyImage} />
                        </Box>
                    )}
                    <Button onClick={cartBtnEventHandler} sx={desktopCartStyles.proceedToBuyBtn} disableElevation disableFocusRipple disableTouchRipple disableRipple>{requiredCartProducts.length === 0 ? "BACK TO HOME" : "PROCEED TO BUY"}</Button>
                </Stack>
            </Box>
        </Box >
    )
}


export default DesktopCart;