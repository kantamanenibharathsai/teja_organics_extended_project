import { Box, Button, IconButton, Stack, Typography, } from "@mui/material"
import landingPageStyles from "./LandingPage.Styles"
import Navbar from "../../components/navbar/Navbar"
import Carousel from "../../components/carousel/Carousel"
import { userProfileImageUrl } from "../../assets/home_images/HomeImages"
import sidebarMobileImg from "../../assets/home_images/sidebarMobileImg.png"
import { useEffect, useState } from "react"
import { facebookImg, instagramImg, linkedinImg, pinInterestImg, twitterImg } from "../../assets/navbar_images/navbarImages"
import CloseIcon from '@mui/icons-material/Close';
import BestSellerCard from "../../components/best_sellers_card/BestSellersCard"
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import FreeShipping from "../../components/free_shipping/FreeShipping"
import DealsOftheDay from "../../components/deal_of_the_day/DealOfTheDay"
import Testmonials from "../../components/testimonials/Testimonials"
import Footer from "../../components/footer/Footer"
import LatestNews from "../../components/latest_news/LatestNews"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store/Store"
import Login from "../../components/login/Login"
import { cartToggleMobileReducer, cartToggleReducer, loginProfileReducer, loginReducer, mobileLoginProfileReducer, mobileLoginReducer } from "../../redux/reducers/LoginSliceReducer"
import Register from "../../components/register/Register"
import { useNavigate } from "react-router-dom"
import { cartImage } from "../../assets/home_images/HomeImages";
import DesktopCart from "../../components/desktop_cart/DesktopCart"
import Profile from "../../components/profile/Profile"
import ForgotPassword from "../../components/forgot_password/ForgotPassword"

interface IState {
    isRightSideDrawerDisplayed: boolean
}


const LandingPage = () => {
    const bestSellerStoreProducts = useSelector((state: RootState) => state.wishList.bestSellerProducts);
    const succLoggedInUserDetailsStringifiedData = localStorage.getItem("succLoggedInUserDetails");
    const parsedLoggedInUserCredentials = succLoggedInUserDetailsStringifiedData ? JSON.parse(succLoggedInUserDetailsStringifiedData) : null;
    const isMobileLoginCardDisplayed = useSelector((state: RootState) => state.login.isMobileLoginCardOpened);
    const isMobileRegisterCardDisplayed = useSelector((state: RootState) => state.login.isMobileRegisterCardOpened);
    const isMobileCartOpened = useSelector((state: RootState) => state.login.isMobileCartOpened);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [isRightSideDrawerDisplayed, setIsRightSideDrawerDisplayed] = useState<IState["isRightSideDrawerDisplayed"]>(false)


    const userProfileRightSideDrawerHandler = () => {
        setIsRightSideDrawerDisplayed(true)
    }

    const closeBtnDrawerHandler = () => {
        setIsRightSideDrawerDisplayed(false)
    }

    const userProfileEventHandler = () => {
        // console.log(window.innerWidth);
        if (parsedLoggedInUserCredentials && window.innerWidth <= 1200) {
            dispatch(mobileLoginProfileReducer(true))
            dispatch(loginReducer(false))
            dispatch(loginProfileReducer(false))
            navigate("/mobileProfile")
        }
        else if (parsedLoggedInUserCredentials && window.innerWidth > 1200) {
            dispatch(mobileLoginProfileReducer(false))
            dispatch(mobileLoginReducer(false))
            dispatch(loginProfileReducer(true))
        }
        else if (window.innerWidth > 1200) dispatch(loginReducer(true));
        else {
            dispatch(mobileLoginReducer(true));
            navigate("/mobileLogin");
        }
    }

    const handleResize = () => {
        if (window.innerWidth < 1200 && isMobileLoginCardDisplayed) {
            navigate("/mobileLogin")
        }
        else if (window.innerWidth < 1200 && isMobileRegisterCardDisplayed) {
            navigate("/mobileRegister")
        }
        else if (window.innerWidth < 1200 && isMobileCartOpened) {
            navigate("/cart")
        }
        else {
            navigate("/")
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    })


    const cartIconEventHandler = () => {
        console.log("sdbvsdkjbsdkf");
        if (window.innerWidth > 1200) dispatch(cartToggleReducer(true));
        else {
            dispatch(cartToggleMobileReducer(true));
            navigate("/cart");
        }
    }

    return (
        <Box sx={landingPageStyles.mainContainer}>
            <Navbar />
            <Box sx={landingPageStyles.carouselAccordionParentContainer}>
                <Box sx={landingPageStyles.accordionCarouselContainer}>
                    <Carousel />
                    <Box sx={landingPageStyles.sideButtonsContainer}>
                        <Box sx={{ ...landingPageStyles.backgroundColorContainer, ...landingPageStyles.displayInMobile }} onClick={userProfileRightSideDrawerHandler}>
                            <Box component="img" sx={landingPageStyles.userProfileImage} src={sidebarMobileImg} alt="sidebar-image" />
                        </Box>
                        <Box component="button" sx={landingPageStyles.backgroundColorContainer} onClick={userProfileEventHandler}>
                            <Box component="img" sx={landingPageStyles.userProfileImage} src={userProfileImageUrl} alt="user-profile-image" />
                        </Box>
                        {parsedLoggedInUserCredentials &&
                            (<Box component="button" sx={landingPageStyles.backgroundColorContainer} onClick={cartIconEventHandler}>
                                <Box component="img" sx={landingPageStyles.userProfileImage} src={cartImage} alt="cart-image" />
                                <Box sx={landingPageStyles.cartItemsCount}>
                                    6
                                </Box>
                            </Box>)
                        }
                    </Box>
                </Box>
            </Box>
            <Box sx={landingPageStyles.homeBodyContainer}>
                <Stack direction={"column"} gap={3}>
                    <Typography sx={landingPageStyles.commonHeadingStyle}>Our Best Sellers</Typography>
                    <Box component={"ul"} sx={landingPageStyles.bestSellersUnordredList}>
                        {bestSellerStoreProducts.map(eachProduct => (
                            <BestSellerCard key={eachProduct.productId} eachProduct={eachProduct} />
                        ))}
                        <IconButton disableFocusRipple disableRipple disableTouchRipple sx={landingPageStyles.bestSellerCarouselArrowBtn}><KeyboardArrowRightOutlinedIcon /></IconButton>
                    </Box>
                </Stack>
                <FreeShipping />
                <DealsOftheDay />
                <Testmonials />
                <LatestNews />
            </Box>
            <Footer />
            <Box sx={isRightSideDrawerDisplayed ? landingPageStyles.backgroundModalContainerOpened : landingPageStyles.backgroundModalContainerClosed}>
                <Box component="button" sx={isRightSideDrawerDisplayed ? landingPageStyles.drawerCloseIconBtnOpen : landingPageStyles.drawerCloseIconBtnClosed}><CloseIcon onClick={closeBtnDrawerHandler} sx={landingPageStyles.closeIcon} /></Box>
                <Box sx={isRightSideDrawerDisplayed ? landingPageStyles.rightSideDrawerOpened : landingPageStyles.rightSideDrawer}>
                    <Box sx={{ ...(isRightSideDrawerDisplayed && landingPageStyles.rightSideDrawerChildOpened), ...(!isRightSideDrawerDisplayed && landingPageStyles.rightSideDrawerChildClosed) }}>
                        <Box component="ul" sx={landingPageStyles.tabsUnorderedListContainer}>
                            <Box component="li" sx={landingPageStyles.tabListItem}>
                                Home
                            </Box>
                            <Box component="li" sx={landingPageStyles.tabListItem}>
                                About Us
                            </Box>
                            <Box component="li" sx={landingPageStyles.tabListItem}>
                                Shop
                            </Box>
                            <Box component="li" sx={landingPageStyles.tabListItem}>
                                Testimonals
                            </Box>
                            <Box component="li" sx={landingPageStyles.tabListItem}>
                                Blog
                            </Box>
                            <Box component="li" sx={landingPageStyles.tabListItem}>
                                Contact
                            </Box>
                        </Box>
                        <Stack direction={"column"} alignItems={"center"} gap={2.5}>
                            <Typography sx={landingPageStyles.navbarTopTextColor}>Email : <Box component={"span"} sx={landingPageStyles.navbarTopText}>
                                info@tejaorganics.com</Box></Typography>
                            <Stack direction={"row"} alignItems={"center"} gap={2}>
                                <Box component={"img"} src={pinInterestImg} alt="pin-interest-icon" sx={landingPageStyles.navbarTopIcon} />
                                <Box component={"img"} src={facebookImg} alt="facebook-icon" sx={landingPageStyles.navbarTopIcon} />
                                <Box component={"img"} src={twitterImg} alt="twitter-icon" sx={landingPageStyles.navbarTopIcon} />
                                <Box component={"img"} src={instagramImg} alt="instagram-icon" sx={landingPageStyles.navbarTopIcon} />
                                <Box component={"img"} src={linkedinImg} alt="linedin-icon" sx={landingPageStyles.navbarTopIcon} />
                            </Stack>
                        </Stack>
                    </Box>
                </Box>

            </Box>
            <Login />
            <Profile />
            <Register />
            <ForgotPassword/>
            <DesktopCart />
        </Box>
    )
}



export default LandingPage