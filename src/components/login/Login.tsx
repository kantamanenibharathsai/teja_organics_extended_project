import { Box, Button, Checkbox, Stack, Typography } from "@mui/material"
import loginStyles from "./Login.Styles"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/Store";
import CloseIcon from '@mui/icons-material/Close';
import { loginReducer } from "../../redux/reducers/LoginSliceReducer";



const Login = () => {
    const isLoginCardDisplayed = useSelector((state: RootState) => state.login.isLoginCardOpened);
    const dispatch = useDispatch<AppDispatch>()

    const closeBtnDrawerHandler = () => {
        dispatch(loginReducer(false))
    }

    return (
        <Box sx={isLoginCardDisplayed ? loginStyles.cardOpenParentContainer : loginStyles.cardParentCloseContainer}>
            <Box component="button" sx={isLoginCardDisplayed ? loginStyles.drawerCloseIconBtnOpen : loginStyles.drawerCloseIconBtnClosed}><CloseIcon onClick={closeBtnDrawerHandler} sx={loginStyles.closeIcon} /></Box>
            <Box sx={isLoginCardDisplayed ? loginStyles.cardOpenContainer : loginStyles.cardCloseContainer}>
                <Box component="form" sx={loginStyles.cardChildContainer}>
                    <Typography sx={loginStyles.heading}>Login</Typography>
                    <Stack direction={"column"} gap={1} width={"100%"}>
                        <Box sx={loginStyles.labelInputContainer}>
                            <Box component={"label"} sx={loginStyles.label}>
                                Username or email address *
                            </Box>
                            <Box component={"input"} sx={loginStyles.inputFeild} />
                        </Box>

                        <Box sx={loginStyles.labelInputContainer}>
                            <Box component={"label"} sx={loginStyles.label}>
                                Password *
                            </Box>
                            <Box component={"input"} sx={loginStyles.inputFeild} />
                        </Box>

                        <Stack direction={"row"} alignItems={"center"}>
                            <Checkbox disableFocusRipple disableRipple disableTouchRipple defaultChecked color="default" />
                            <Typography sx={loginStyles.rememberMe}>Remember me</Typography>
                        </Stack>
                    </Stack>
                    <Button disableRipple disableFocusRipple disableTouchRipple disableElevation sx={loginStyles.loginBtn}>LOGIN</Button>
                </Box>
                <Stack direction={"column"} alignItems={"center"} gap={4} justifyContent={"space-between"} mt={2.5}>
                    <Typography sx={loginStyles.commonStyle}>Forgot Password?</Typography>
                    <Stack direction={"column"} alignItems={"center"} gap={1} justifyContent={"space-between"}>
                        <Typography sx={loginStyles.commonStyle}>Don’t have an account?</Typography>
                        <Box component="span" sx={loginStyles.clickHereText}>Click here to create new account</Box>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}


export default Login