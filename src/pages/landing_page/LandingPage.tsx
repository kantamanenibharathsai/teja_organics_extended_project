import { Box, } from "@mui/material"
import landingPageStyles from "./LandingPage.Styles"
import Navbar from "../../components/navbar/Navbar"
import Carousel from "../../components/carousel/Carousel"
import { userProfileImageUrl } from "../../assets/home_images/HomeImages"
import sidebarMobileImg from "../../assets/home_images/sidebarMobileImg.png"
import { useState } from "react"


interface IState {
    isRightSideDrawerDisplayed: boolean
}


const LandingPage = () => {
    const [isRightSideDrawerDisplayed, setIsRightSideDrawerDisplayed] = useState<IState["isRightSideDrawerDisplayed"]>(false)


    const userProfileRightSideDrawerHandler = () => {
        setIsRightSideDrawerDisplayed(true)
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
            <Box sx={isRightSideDrawerDisplayed ? landingPageStyles.rightSideDrawerOpened : landingPageStyles.rightSideDrawer}>
                <Box sx={landingPageStyles.rightSideDrawerChild}>
                    
                </Box>
            </Box>
        </Box>
    )
}



export default LandingPage