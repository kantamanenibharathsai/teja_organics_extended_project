import { Box, Stack, Typography } from "@mui/material"
import { AppDispatch, RootState } from "../../redux/store/Store";
import profileStyles from "./Profile.Styles";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import { loginProfileReducer, loginReducer } from "../../redux/reducers/LoginSliceReducer";
import { loggedInUserProfilePic } from "../../assets/navbar_images/navbarImages";
import logoutImg from "../../assets/loggedin_profilecard_images/logout.png";
import securityImg from "../../assets/loggedin_profilecard_images/security.png";
import settingsImg from "../../assets/loggedin_profilecard_images/settings.png";
import termsAndConditionsImg from "../../assets/loggedin_profilecard_images/termsAndConditions.png";
import privacyPolicyImg from "../../assets/loggedin_profilecard_images/privacyPolicy.png";
import { editProfileImg, notificationImg, orderImg, whishlistImg } from "../../assets/loggedin_profilecard_images/ProfilecardImages"





const Profile = () => {
    const dispatch = useDispatch<AppDispatch>();
    const isLoginProfileCardOpened = useSelector((state: RootState) => state.login.isLoginProfileOpened);

    const closeBtnDrawerHandler = () => {
        dispatch(loginProfileReducer(false))
    }

    const logoutEventHandler = () => {
        dispatch(loginProfileReducer(false))
        dispatch(loginReducer(true))
        localStorage.removeItem("succLoggedInUserDetails")
    }


    return (
        <Box sx={isLoginProfileCardOpened ? profileStyles.cardOpenParentContainer : profileStyles.cardParentCloseContainer}>
            <Box component="button" sx={isLoginProfileCardOpened ? profileStyles.drawerCloseIconBtnOpen : profileStyles.drawerCloseIconBtnClosed}>
                <CloseIcon onClick={closeBtnDrawerHandler} sx={profileStyles.closeIcon} />
            </Box>
            <Box sx={isLoginProfileCardOpened ? profileStyles.cardOpenContainer : profileStyles.cardCloseContainer}>
                <Typography sx={profileStyles.profileHeading}>
                    Profile
                </Typography>
                <Stack direction={"column"} alignItems={"center"} justifyContent={"center"} gap={1}>
                    <Box component={"img"} src={loggedInUserProfilePic} alt="profile-image" sx={profileStyles.profileImg} />
                    <Typography sx={profileStyles.profileName}>Shubham Teja</Typography>
                    <Typography sx={profileStyles.phoneNum}>+91 9876543210</Typography>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Box sx={profileStyles.bgColorContainer}>
                        <Box component={"img"} src={editProfileImg} alt="icon-img" sx={profileStyles.icon} />
                        <Typography sx={profileStyles.imageText}>Edit Profile</Typography>
                    </Box>

                    <Box sx={profileStyles.bgColorContainer}>
                        <Box component={"img"} src={orderImg} alt="icon-img" sx={profileStyles.icon} />
                        <Typography sx={profileStyles.imageText}>Order</Typography>
                    </Box>

                    <Box sx={profileStyles.bgColorContainer}>
                        <Box component={"img"} src={notificationImg} alt="icon-img" sx={profileStyles.icon} />
                        <Typography sx={profileStyles.imageText}>Notification</Typography>
                    </Box>

                    <Box sx={profileStyles.bgColorContainer}>
                        <Box component={"img"} src={whishlistImg} alt="icon-img" sx={profileStyles.icon} />
                        <Typography sx={profileStyles.imageText}>Wishlist</Typography>
                    </Box>
                </Stack>


                <Stack direction={"column"} alignItems={"flex-start"} justifyContent={"flex-start"} gap={3}>
                    <Stack direction={"row"} alignItems={"center"} gap={1}>
                        <Box component={"img"} src={securityImg} alt="security-img" sx={profileStyles.smallIcon} />
                        <Typography sx={profileStyles.iconText}>Security</Typography>
                    </Stack>


                    <Stack direction={"row"} alignItems={"center"} gap={1}>
                        <Box component={"img"} src={privacyPolicyImg} alt="security-img" sx={profileStyles.smallIcon} />
                        <Typography sx={profileStyles.iconText}>Privacy Policy</Typography>
                    </Stack>


                    <Stack direction={"row"} alignItems={"center"} gap={1}>
                        <Box component={"img"} src={termsAndConditionsImg} alt="security-img" sx={profileStyles.smallIcon} />
                        <Typography sx={profileStyles.iconText}>Terms And Conditions</Typography>
                    </Stack>


                    <Stack direction={"row"} alignItems={"center"} gap={1}>
                        <Box component={"img"} src={settingsImg} alt="security-img" sx={profileStyles.smallIcon} />
                        <Typography sx={profileStyles.iconText}>Setting</Typography>
                    </Stack>


                    <Stack direction={"row"} alignItems={"center"} gap={1} onClick={logoutEventHandler} sx={profileStyles.cursor}>
                        <Box component={"img"} src={logoutImg} alt="security-img" sx={profileStyles.smallIcon} />
                        <Typography sx={profileStyles.iconText}>Logout</Typography>
                    </Stack>
                </Stack>
            </Box>
        </Box>

    )
}


export default Profile