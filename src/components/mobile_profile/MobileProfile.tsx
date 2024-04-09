import { Box, Stack, Typography } from "@mui/material"
import mobileRegisterStyles from "./MobileProfile.Styles"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/Store";
import CloseIcon from '@mui/icons-material/Close';
import mobileProfileStyles from "./MobileProfile.Styles";
import { mobileLoginProfileReducer, mobileLoginReducer } from "../../redux/reducers/LoginSliceReducer";
import { loggedInUserProfilePic } from "../../assets/navbar_images/navbarImages";
import logoutImg from "../../assets/loggedin_profilecard_images/logout.png";
import securityImg from "../../assets/loggedin_profilecard_images/security.png";
import settingsImg from "../../assets/loggedin_profilecard_images/settings.png";
import termsAndConditionsImg from "../../assets/loggedin_profilecard_images/termsAndConditions.png";
import privacyPolicyImg from "../../assets/loggedin_profilecard_images/privacyPolicy.png";
import { editProfileImg, notificationImg, orderImg, whishlistImg } from "../../assets/loggedin_profilecard_images/ProfilecardImages"


const MobileProfile = () => {
    const dispatch = useDispatch<AppDispatch>();
    const isMobileProfileOpened = useSelector((state: RootState) => state.login.isMobileLoginProfileOpened);



    const closeBtnDrawerHandler = () => {
        dispatch(mobileLoginProfileReducer(false))
    }

    const logoutEventHandler = () => {
        dispatch(mobileLoginProfileReducer(false))
        dispatch(mobileLoginReducer(true))
        localStorage.removeItem("succLoggedInUserDetails")
    }

    return (
        <Box sx={isMobileProfileOpened ? mobileProfileStyles.cardOpenParentContainer : mobileProfileStyles.cardCloseParentContainer}>
            <Box sx={isMobileProfileOpened ? mobileRegisterStyles.cardOpenContainer : mobileProfileStyles.cardCloseContainer}>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Typography sx={mobileProfileStyles.heading}>Profile</Typography>
                    <Box component="button" sx={mobileProfileStyles.drawerCloseIconBtn}><CloseIcon onClick={closeBtnDrawerHandler} sx={mobileRegisterStyles.closeIcon} /></Box>
                </Stack>

                <Stack direction={"column"} alignItems={"center"} justifyContent={"center"} gap={1}>
                    <Box component={"img"} src={loggedInUserProfilePic} alt="profile-image" sx={mobileProfileStyles.profileImg} />
                    <Typography sx={mobileProfileStyles.profileName}>Shubham Teja</Typography>
                    <Typography sx={mobileProfileStyles.phoneNum}>+91 9876543210</Typography>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Box sx={mobileProfileStyles.bgColorContainer}>
                        <Box component={"img"} src={editProfileImg} alt="icon-img" sx={mobileProfileStyles.icon} />
                        <Typography sx={mobileProfileStyles.imageText}>Edit Profile</Typography>
                    </Box>

                    <Box sx={mobileProfileStyles.bgColorContainer}>
                        <Box component={"img"} src={orderImg} alt="icon-img" sx={mobileProfileStyles.icon} />
                        <Typography sx={mobileProfileStyles.imageText}>Order</Typography>
                    </Box>
                    <Box sx={mobileProfileStyles.bgColorContainer}>
                        <Box component={"img"} src={notificationImg} alt="icon-img" sx={mobileProfileStyles.icon} />
                        <Typography sx={mobileProfileStyles.imageText}>Notification</Typography>
                    </Box>
                    <Box sx={mobileProfileStyles.bgColorContainer}>
                        <Box component={"img"} src={whishlistImg} alt="icon-img" sx={mobileProfileStyles.icon} />
                        <Typography sx={mobileProfileStyles.imageText}>Wishlist</Typography>
                    </Box>
                </Stack>
                <Stack direction={"column"} alignItems={"flex-start"} justifyContent={"flex-start"} gap={3}>
                    <Stack direction={"row"} alignItems={"center"} gap={1}>
                        <Box component={"img"} src={securityImg} alt="security-img" sx={mobileProfileStyles.smallIcon} />
                        <Typography sx={mobileProfileStyles.iconText}>Security</Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} gap={1}>
                        <Box component={"img"} src={privacyPolicyImg} alt="security-img" sx={mobileProfileStyles.smallIcon} />
                        <Typography sx={mobileProfileStyles.iconText}>Privacy Policy</Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} gap={1}>
                        <Box component={"img"} src={termsAndConditionsImg} alt="security-img" sx={mobileProfileStyles.smallIcon} />
                        <Typography sx={mobileProfileStyles.iconText}>Terms And Conditions</Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} gap={1}>
                        <Box component={"img"} src={settingsImg} alt="security-img" sx={mobileProfileStyles.smallIcon} />
                        <Typography sx={mobileProfileStyles.iconText}>Setting</Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} gap={1} onClick={logoutEventHandler} sx={mobileProfileStyles.cursor}>
                        <Box component={"img"} src={logoutImg} alt="security-img" sx={mobileProfileStyles.smallIcon} />
                        <Typography sx={mobileProfileStyles.iconText}>Logout</Typography>
                    </Stack>
                </Stack>
            </Box>
        </Box>

    )
}


export default MobileProfile