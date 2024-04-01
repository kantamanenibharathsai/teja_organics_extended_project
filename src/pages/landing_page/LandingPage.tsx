import { Box, IconButton, Stack, Typography, } from "@mui/material"
import landingPageStyles from "./LandingPage.Styles"
import Navbar from "../../components/navbar/Navbar"
import Carousel from "../../components/carousel/Carousel"
import { userProfileImageUrl } from "../../assets/home_images/HomeImages"
import sidebarMobileImg from "../../assets/home_images/sidebarMobileImg.png"
import { useState } from "react"
import { facebookImg, instagramImg, linkedinImg, pinInterestImg, twitterImg } from "../../assets/navbar_images/navbarImages"
import CloseIcon from '@mui/icons-material/Close';
import { bestSellersCardsList } from "../../utils/typescript/HomeData"
import BestSellerCard from "../../components/best_sellers_card/BestSellersCard"
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import FreeShipping from "../../components/free_shipping/FreeShipping"
import DealsOftheDay from "../../components/deal_of_the_day/DealOfTheDay"
import Testmonials from "../../components/testimonials/Testimonials"
import Footer from "../../components/footer/Footer"
import LatestNews from "../../components/latest_news/LatestNews"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store/Store"
import Login from "../../components/login/Login"

interface IState {
    isRightSideDrawerDisplayed: boolean
}


const LandingPage = () => {
    const isLoginCardDisplayed = useSelector((state: RootState) => state.login.isLoginCardOpened);
    const [isRightSideDrawerDisplayed, setIsRightSideDrawerDisplayed] = useState<IState["isRightSideDrawerDisplayed"]>(false)


    const userProfileRightSideDrawerHandler = () => {
        setIsRightSideDrawerDisplayed(true)
    }

    const closeBtnDrawerHandler = () => {
        setIsRightSideDrawerDisplayed(false)
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
                        <Box sx={landingPageStyles.backgroundColorContainer}>
                            <Box component="img" sx={landingPageStyles.userProfileImage} src={userProfileImageUrl} alt="user-profile-image" />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={landingPageStyles.homeBodyContainer}>
                <Stack direction={"column"} gap={3}>
                    <Typography sx={landingPageStyles.commonHeadingStyle}>Our Best Sellers</Typography>
                    <Box component={"ul"} sx={landingPageStyles.bestSellersUnordredList}>
                        {bestSellersCardsList.map(eachProduct => (
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
        </Box>
    )
}



export default LandingPage