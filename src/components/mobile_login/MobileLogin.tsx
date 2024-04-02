import { Box, Button, Checkbox, Stack, Typography } from "@mui/material"
import mobileLoginStyles from "./MobileLogin.Styles"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/Store";
import CloseIcon from '@mui/icons-material/Close';
import {  mobileLoginReducer, mobileRegisterReducer, } from "../../redux/reducers/LoginSliceReducer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";



const MobileLogin = () => {
    const isMobileLoginCardDisplayed = useSelector((state: RootState) => state.login.isMobileLoginCardOpened);


    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()


    const handleResize = () => {
        if (window.innerWidth < 1200) {
            navigate("/mobileLogin")
        } else {
            navigate("/")
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    })


    const closeBtnDrawerHandler = () => {
        dispatch(mobileLoginReducer(false))
        navigate("/")
    }

    const clickHereHandler = () => {
        dispatch(mobileLoginReducer(false))
        dispatch(mobileRegisterReducer(true))
        navigate("/mobileRegister")
    }


    return (
        <Box sx={isMobileLoginCardDisplayed ? mobileLoginStyles.cardOpenParentContainer : mobileLoginStyles.cardCloseParentContainer}>

            <Box sx={isMobileLoginCardDisplayed ? mobileLoginStyles.cardOpenContainer : mobileLoginStyles.cardCloseContainer}>
                <Box component="form" sx={mobileLoginStyles.cardChildContainer}>
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                        <Typography sx={mobileLoginStyles.heading}>Login</Typography>
                        <Box component="button" sx={mobileLoginStyles.drawerCloseIconBtn}><CloseIcon onClick={closeBtnDrawerHandler} sx={mobileLoginStyles.closeIcon} /></Box>
                    </Stack>
                    <Stack direction={"column"} gap={1} width={"100%"}>
                        <Box sx={mobileLoginStyles.labelInputContainer}>
                            <Box component={"label"} sx={mobileLoginStyles.label}>
                                Username or email address *
                            </Box>
                            <Box component={"input"} sx={mobileLoginStyles.inputFeild} />
                        </Box>

                        <Box sx={mobileLoginStyles.labelInputContainer}>
                            <Box component={"label"} sx={mobileLoginStyles.label}>
                                Password *
                            </Box>
                            <Box component={"input"} sx={mobileLoginStyles.inputFeild} />
                        </Box>

                        <Stack direction={"row"} alignItems={"center"}>
                            <Checkbox disableFocusRipple disableRipple disableTouchRipple defaultChecked color="default" />
                            <Typography sx={mobileLoginStyles.rememberMe}>Remember me</Typography>
                        </Stack>
                    </Stack>
                    <Button disableRipple disableFocusRipple disableTouchRipple disableElevation sx={mobileLoginStyles.loginBtn}>LOGIN</Button>
                </Box>
                <Stack direction={"column"} alignItems={"center"} gap={4} justifyContent={"space-between"} mt={2.5}>
                    <Typography sx={mobileLoginStyles.commonStyle}>Forgot Password?</Typography>
                    <Stack direction={"column"} alignItems={"center"} gap={1} justifyContent={"space-between"}>
                        <Typography sx={mobileLoginStyles.commonStyle}>Don’t have an account?</Typography>
                        <Box component="span" onClick={clickHereHandler} sx={mobileLoginStyles.clickHereText}>Click here to create new account</Box>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}


export default MobileLogin