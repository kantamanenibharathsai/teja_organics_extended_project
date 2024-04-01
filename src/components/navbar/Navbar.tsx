import { Box, Button, Divider, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material"
import navbarStyles from "./Navbar.Styles"
import { pinInterestImg, facebookImg, twitterImg, linkedinImg, instagramImg, tejaOrganicsLogo, phoneCallImg, } from "../../assets/navbar_images/navbarImages";
import searchIconImage from "../../assets/navbar_images/searchIcon.png"
import hamburgerIconImage from "../../assets/navbar_images/hamburgerIcon.png"
import { accordionBrowseCategoryData } from "../../utils/typescript/NavbarData"
import { useState } from "react";
import Accordion from "../accordion/Accordion";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from "react-redux";
import { loginReducer } from "../../redux/reducers/LoginSliceReducer";
import { AppDispatch } from "../../redux/store/Store";


interface IState {
    isBrowseCategoryClicked: boolean;
    isMobileSearchIconContainerClicked: boolean
}

const Navbar = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [isBrowseCategoryClicked, setIsBrowseCategoryClicked] = useState<IState["isBrowseCategoryClicked"]>(false);
    const [isMobileSearchIconContainerClicked, setIsMobileSearchIconContainerClicked] = useState<IState["isMobileSearchIconContainerClicked"]>(false);



    const browseCategoryHandler = () => {
        setIsBrowseCategoryClicked(prevValue => !prevValue)
    }


    const mobileSearchContainerHandler = () => {
        setIsMobileSearchIconContainerClicked(true)
    }

    const modalCloseIconBtnHandler = () => {
        setIsMobileSearchIconContainerClicked(false)
    }

    const loginBtnHandler = () => {
        dispatch(loginReducer(true));
    }

    return (
        <>
            <Box sx={navbarStyles.mainContainer}>
                <Box sx={navbarStyles.topContainer}>
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} sx={navbarStyles.topChildContainer}>
                        <Typography sx={navbarStyles.navbarTopText}>Free shipping for orders over <Box component={"span"} sx={navbarStyles.navbarTopTextColor}>
                            ₹1500/-</Box></Typography>
                        <Stack direction={"row"} alignItems={"center"} gap={2.5} sx={navbarStyles.topRightContainer}>
                            <Typography sx={navbarStyles.navbarTopTextColor}>Email:<Box component={"span"} sx={navbarStyles.navbarTopText}>
                                info@tejaorganics.com</Box></Typography>
                            <Divider sx={navbarStyles.divider} />
                            <Stack direction={"row"} alignItems={"center"} gap={2}>
                                <Box component={"img"} src={pinInterestImg} alt="pin-interest-icon" sx={navbarStyles.navbarTopIcon} />
                                <Box component={"img"} src={facebookImg} alt="facebook-icon" sx={navbarStyles.navbarTopIcon} />
                                <Box component={"img"} src={twitterImg} alt="twitter-icon" sx={navbarStyles.navbarTopIcon} />
                                <Box component={"img"} src={instagramImg} alt="instagram-icon" sx={navbarStyles.navbarTopIcon} />
                                <Box component={"img"} src={linkedinImg} alt="linedin-icon" sx={navbarStyles.navbarTopIcon} />
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
                <Box sx={navbarStyles.middleContainer}>
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} sx={navbarStyles.middleChildContainer}>
                        <Box component={"img"} alt="teja-organics-logo" sx={navbarStyles.tejaOrganicsLogo} src={tejaOrganicsLogo} />
                        <Stack direction={"row"} alignItems={"center"} gap={{ xs: 0, lg: 4 }}>
                            <Box sx={navbarStyles.textFieldContainer}>
                                <TextField
                                    sx={navbarStyles.textFieldStyle}
                                    placeholder="Search Product..."
                                    fullWidth
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">
                                            <Box sx={navbarStyles.searchIconContainer}>
                                                <Box component={"img"} alt="search-icon" src={searchIconImage} sx={navbarStyles.searchIcon} />
                                            </Box>
                                        </InputAdornment>,
                                    }}
                                />
                            </Box>
                            <Stack direction={"row"} alignItems={"center"} gap={2}>
                                <Box component={"img"} alt="phone-call-image" sx={navbarStyles.phoneCallImage} src={phoneCallImg} />
                                <Stack direction={"column"} gap={0.3}>
                                    <Typography sx={navbarStyles.phoneNumStyle}>+91-040-2711-8688</Typography>
                                    <Typography sx={navbarStyles.phoneNumStyle}>+91-9390538942</Typography>
                                </Stack>
                            </Stack>
                            <Button disableElevation disableRipple disableFocusRipple disableTouchRipple sx={navbarStyles.loginButtonStyle} onClick={loginBtnHandler}>LOGIN</Button>
                        </Stack>
                    </Stack>
                </Box>
                <Box sx={navbarStyles.bottomContainer}>
                    <Box sx={navbarStyles.bottomChildContainer}>
                        <Box sx={navbarStyles.browseCategoryContainer}>
                            <Box sx={navbarStyles.iconTextContainer} onClick={browseCategoryHandler}>
                                <Box component="img" alt="browse-category-image" src={hamburgerIconImage} sx={navbarStyles.browseCategoryImage} />
                                <Typography sx={navbarStyles.tabsText}>Browse category</Typography>
                            </Box>
                            <Box sx={isBrowseCategoryClicked ? navbarStyles.accordionsDropDownContainerOpen : navbarStyles.accordionsDropDownContainerClose}>
                                {accordionBrowseCategoryData.map(eachCategory => (
                                    <Accordion eachCategory={eachCategory} key={eachCategory.categoryId} />
                                ))}
                            </Box>
                        </Box>
                        <Box sx={navbarStyles.searchContainerMobile} onClick={mobileSearchContainerHandler}>
                            <Box component={"img"} alt="search-icon" src={searchIconImage} sx={navbarStyles.searchIcon} />

                        </Box>
                        <Box component="ul" sx={navbarStyles.bottomTabsUnorderedListContainer}>
                            <Box component="li" sx={navbarStyles.tabListItem}>
                                Home
                            </Box>
                            <Box component="li" sx={navbarStyles.tabListItem}>
                                About Us
                            </Box>
                            <Box component="li" sx={navbarStyles.tabListItem}>
                                Shop
                            </Box>
                            <Box component="li" sx={navbarStyles.tabListItem}>
                                Testimonals
                            </Box>
                            <Box component="li" sx={navbarStyles.tabListItem}>
                                Blog
                            </Box>
                            <Box component="li" sx={navbarStyles.tabListItem}>
                                Contact
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box >
            <Box sx={{ ...navbarStyles.modalContainer, display: isMobileSearchIconContainerClicked ? { xs: "block", lg: "none" } : "none" }}>
                <Box sx={navbarStyles.mobileSearchBarCloseiconContainer}>
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"flex-end"}>
                        <IconButton onClick={modalCloseIconBtnHandler} disableFocusRipple disableRipple disableTouchRipple sx={navbarStyles.closeIconButton}>
                            <CloseIcon sx={navbarStyles.closeIcon} />
                        </IconButton>
                    </Stack>
                    <Box sx={{ ...navbarStyles.textFieldContainer, ...navbarStyles.modalTextFieldContainer }}>
                        <TextField
                            sx={navbarStyles.textFieldStyle}
                            placeholder="Search Product..."
                            fullWidth
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <Box sx={navbarStyles.searchIconContainer}>
                                        <Box component={"img"} alt="search-icon" src={searchIconImage} sx={navbarStyles.searchIcon} />
                                    </Box>
                                </InputAdornment>,
                            }}
                        />
                    </Box>

                </Box>
            </Box>
        </>
    )
}


export default Navbar