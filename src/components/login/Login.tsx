import { Box, Button, Checkbox, Stack, Typography } from "@mui/material"
import loginStyles from "./Login.Styles"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/Store";
import CloseIcon from '@mui/icons-material/Close';
import { forgotPasswordReducer, loginReducer, registerReducer } from "../../redux/reducers/LoginSliceReducer";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface FormData {
    email: string;
    password: string;

}

const Login = () => {
    const isLoginCardDisplayed = useSelector((state: RootState) => state.login.isLoginCardOpened);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [checked, setChecked] = useState(false);
    const [logginErrMsg, setLoginErrMsg] = useState("");
    const loggedInUserCredentialsStringifiedData = localStorage.getItem("loggedInUserCredentials")
    const parsedDataCredentials = loggedInUserCredentialsStringifiedData ? JSON.parse(loggedInUserCredentialsStringifiedData) : null;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();

    const closeBtnDrawerHandler = () => {
        dispatch(loginReducer(false))
    }

    const clickHereHandler = () => {
        dispatch(loginReducer(false))
        dispatch(registerReducer(true))
    }

    const onSubmit = (data: FormData) => {
        const existingData = JSON.parse(localStorage.getItem("formData") ?? "[]");
        const user = existingData.find(
            (userDetailsObj: { email: string; password: string }) =>
                userDetailsObj.email === data.email && userDetailsObj.password === data.password
        );
        if (user) {
            setLoginErrMsg("");
            dispatch(loginReducer(false))
            localStorage.setItem("succLoggedInUserDetails", JSON.stringify(user));
            setTimeout(() => {
                navigate("/");
            }, 10);
            if (checked) {
                localStorage.setItem("loggedInUserCredentials", JSON.stringify(user))
            }
        }
        else {
            setLoginErrMsg("*Invalid Credentials")
        }
        reset();
    };


    const forgotPasswordHandler = () => {
        dispatch(forgotPasswordReducer(true))
        dispatch(loginReducer(false))
    }

    return (
        <Box sx={isLoginCardDisplayed ? loginStyles.cardOpenParentContainer : loginStyles.cardParentCloseContainer}>
            <Box component="button" sx={isLoginCardDisplayed ? loginStyles.drawerCloseIconBtnOpen : loginStyles.drawerCloseIconBtnClosed}><CloseIcon onClick={closeBtnDrawerHandler} sx={loginStyles.closeIcon} /></Box>
            <Box sx={isLoginCardDisplayed ? loginStyles.cardOpenContainer : loginStyles.cardCloseContainer}>
                <Box component="form" sx={loginStyles.cardChildContainer}
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    autoComplete="off"
                >
                    <Typography sx={loginStyles.heading}>Login</Typography>
                    <Stack direction={"column"} gap={1} width={"100%"}>
                        <Box sx={loginStyles.labelInputContainer}>
                            <Box component={"label"} sx={loginStyles.label}>
                                Username or email address *
                            </Box>
                            <Box component={"input"} sx={loginStyles.inputFeild}
                                type="email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "* Email is required!",
                                    },
                                    pattern: {
                                        value:
                                            /^(([^<>()/[\]\\.,;:\s@"]+(\.[^<>()/[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: "* Invalid Email Address",
                                    },
                                })}
                            />
                        </Box>
                        {errors.email?.message && <Typography sx={loginStyles.errorMsg}>{errors.email?.message}</Typography>}
                        <Box sx={loginStyles.labelInputContainer}>
                            <Box component={"label"} sx={loginStyles.label}>
                                Password *
                            </Box>
                            <Box component={"input"} sx={loginStyles.inputFeild}
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "* Password is required!",
                                    },
                                    pattern: {
                                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                                        message:
                                            "* Password must contain at least one uppercase letter, one lowercase letter and one number, and must be between 6 and 15 characters long.",
                                    },
                                })}
                            />
                        </Box>
                        {errors.password?.message && <Typography sx={loginStyles.errorMsg}>{errors.password?.message}</Typography>}
                        <Stack direction={"row"} alignItems={"center"}>
                            <Checkbox disableFocusRipple disableRipple disableTouchRipple defaultChecked color="default" />
                            <Typography sx={loginStyles.rememberMe}>Remember me</Typography>
                        </Stack>
                    </Stack>
                    <Button disableRipple disableFocusRipple disableTouchRipple disableElevation type="submit" sx={loginStyles.loginBtn}>LOGIN</Button>
                </Box>
                <Stack direction={"column"} alignItems={"center"} gap={4} justifyContent={"space-between"} mt={2.5}>
                    <Typography onClick={forgotPasswordHandler} sx={{ ...loginStyles.commonStyle, ...loginStyles.forgotPassword }}>Forgot Password?</Typography>
                    <Stack direction={"column"} alignItems={"center"} gap={1} justifyContent={"space-between"}>
                        <Typography sx={loginStyles.commonStyle}>Don’t have an account?</Typography>
                        <Box component="span" onClick={clickHereHandler} sx={loginStyles.clickHereText}>Click here to create new account</Box>
                        {logginErrMsg && (<Typography sx={loginStyles.loginErrMsg}>{logginErrMsg}</Typography>)}
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}


export default Login