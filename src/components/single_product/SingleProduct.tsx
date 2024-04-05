import { Box, IconButton, Stack, Typography, } from "@mui/material"
import singleProductStyles from "./SingleProduct.Styles"
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
import Footer from "../../components/footer/Footer"
import SinglePoductDetailsReviews from "../product_reviews_single_product/ProductReviewsSingleProduct"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store/Store"


interface IState {
    isRightSideDrawerDisplayed: boolean
}


const SingleProduct = () => {
    const [isRightSideDrawerDisplayed, setIsRightSideDrawerDisplayed] = useState<IState["isRightSideDrawerDisplayed"]>(false)
    const singleProductDetailsObj = useSelector((state: RootState) => state.singleProduct.singleProductDetails)

    const userProfileRightSideDrawerHandler = () => {
        setIsRightSideDrawerDisplayed(true)
    }

    const closeBtnDrawerHandler = () => {
        setIsRightSideDrawerDisplayed(false)
    }

    return (
        <Box sx={singleProductStyles.mainContainer}>
            <Navbar />
            <Box sx={singleProductStyles.carouselAccordionParentContainer}>
                <Box sx={singleProductStyles.accordionCarouselContainer}>
                    <Carousel />
                    <Box sx={singleProductStyles.sideButtonsContainer}>
                        <Box sx={{ ...singleProductStyles.backgroundColorContainer, ...singleProductStyles.displayInMobile }} onClick={userProfileRightSideDrawerHandler}>
                            <Box component="img" sx={singleProductStyles.userProfileImage} src={sidebarMobileImg} alt="sidebar-image" />
                        </Box>
                        <Box sx={singleProductStyles.backgroundColorContainer}>
                            <Box component="img" sx={singleProductStyles.userProfileImage} src={userProfileImageUrl} alt="user-profile-image" />
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box sx={singleProductStyles.homeBodyContainer}>
                <SinglePoductDetailsReviews />
                <Stack direction={"column"} gap={3}>
                    <Typography sx={singleProductStyles.commonHeadingStyle}>Our Best Sellers</Typography>
                    <Box component={"ul"} sx={singleProductStyles.bestSellersUnordredList}>
                        {bestSellersCardsList.map(eachProduct => (
                            <BestSellerCard key={eachProduct.productId} eachProduct={eachProduct} />
                        ))}
                        <IconButton disableFocusRipple disableRipple disableTouchRipple sx={singleProductStyles.bestSellerCarouselArrowBtn}><KeyboardArrowRightOutlinedIcon /></IconButton>
                    </Box>
                </Stack>
            </Box>

            <Footer />
            <Box sx={isRightSideDrawerDisplayed ? singleProductStyles.backgroundModalContainerOpened : singleProductStyles.backgroundModalContainerClosed}>
                <Box component="button" sx={isRightSideDrawerDisplayed ? singleProductStyles.drawerCloseIconBtnOpen : singleProductStyles.drawerCloseIconBtnClosed}><CloseIcon onClick={closeBtnDrawerHandler} sx={singleProductStyles.closeIcon} /></Box>
                <Box sx={isRightSideDrawerDisplayed ? singleProductStyles.rightSideDrawerOpened : singleProductStyles.rightSideDrawer}>
                    <Box sx={{ ...(isRightSideDrawerDisplayed && singleProductStyles.rightSideDrawerChildOpened), ...(!isRightSideDrawerDisplayed && singleProductStyles.rightSideDrawerChildClosed) }}>
                        <Box component="ul" sx={singleProductStyles.tabsUnorderedListContainer}>
                            <Box component="li" sx={singleProductStyles.tabListItem}>
                                Home
                            </Box>
                            <Box component="li" sx={singleProductStyles.tabListItem}>
                                About Us
                            </Box>
                            <Box component="li" sx={singleProductStyles.tabListItem}>
                                Shop
                            </Box>
                            <Box component="li" sx={singleProductStyles.tabListItem}>
                                Testimonals
                            </Box>
                            <Box component="li" sx={singleProductStyles.tabListItem}>
                                Blog
                            </Box>
                            <Box component="li" sx={singleProductStyles.tabListItem}>
                                Contact
                            </Box>
                        </Box>
                        <Stack direction={"column"} alignItems={"center"} gap={2.5}>
                            <Typography sx={singleProductStyles.navbarTopTextColor}>Email : <Box component={"span"} sx={singleProductStyles.navbarTopText}>
                                info@tejaorganics.com</Box></Typography>
                            <Stack direction={"row"} alignItems={"center"} gap={2}>
                                <Box component={"img"} src={pinInterestImg} alt="pin-interest-icon" sx={singleProductStyles.navbarTopIcon} />
                                <Box component={"img"} src={facebookImg} alt="facebook-icon" sx={singleProductStyles.navbarTopIcon} />
                                <Box component={"img"} src={twitterImg} alt="twitter-icon" sx={singleProductStyles.navbarTopIcon} />
                                <Box component={"img"} src={instagramImg} alt="instagram-icon" sx={singleProductStyles.navbarTopIcon} />
                                <Box component={"img"} src={linkedinImg} alt="linedin-icon" sx={singleProductStyles.navbarTopIcon} />
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}



export default SingleProduct