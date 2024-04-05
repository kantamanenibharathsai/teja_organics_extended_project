import { Box, Button, Stack, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { loginReducer, registerReducer } from "../../redux/reducers/LoginSliceReducer";
import { AppDispatch, RootState } from "../../redux/store/Store";
import registerStyles from "./Register.Styles";
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



interface FormData {
    username: string;
    email: string;
    password: string;
}


const Register = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();

    const [userNameErrMsg, setUserNameErrMsg] = useState<string>("");
    const [emailErrMsg, setEmailErrMsg] = useState<string>("");
    const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState<boolean>(false);

    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const isRegisterCardDisplayed = useSelector((state: RootState) => state.login.isRegisterCardOpened);


    const closeBtnDrawerHandler = () => {
        dispatch(loginReducer(false))
        dispatch(registerReducer(false))
    }

    const clickHereHandler = () => {
        dispatch(loginReducer(true))
        dispatch(registerReducer(false))
    }

    const onSubmit = (data: FormData) => {
        const storedDataString = localStorage.getItem("formData");
        const existingData = storedDataString ? JSON.parse(storedDataString) : [];
        let isUserNameAlreadyExist = false;
        let isEmailAlreadyExist = false;
        existingData.forEach((eachCredentials: FormData) => {
            if (eachCredentials.username.toLowerCase() === data.username.toLowerCase()) {
                isUserNameAlreadyExist = true;
            }
            if (eachCredentials.email.toLowerCase() === data.email.toLowerCase()) {
                isEmailAlreadyExist = true;
            }
        });
        console.log(isUserNameAlreadyExist, isEmailAlreadyExist)
        if (isUserNameAlreadyExist) {
            setUserNameErrMsg("*username already exists")
        }
        if (isEmailAlreadyExist) {
            setEmailErrMsg("*email already exists")
        }
        else {
            existingData.push(data);
            localStorage.setItem("formData", JSON.stringify(existingData));
            reset();
            console.table(data)
            dispatch(loginReducer(true))
            setIsRegistrationSuccessful(true)
            // navigate("/mobileLogin")
        }
    };

    return (
        <Box sx={isRegisterCardDisplayed ? registerStyles.cardOpenParentContainer : registerStyles.cardParentCloseContainer}>
            <Box component="button" sx={isRegisterCardDisplayed ? registerStyles.drawerCloseIconBtnOpen : registerStyles.drawerCloseIconBtnClosed}><CloseIcon onClick={closeBtnDrawerHandler} sx={registerStyles.closeIcon} /></Box>
            <Box sx={isRegisterCardDisplayed ? registerStyles.cardOpenContainer : registerStyles.cardCloseContainer}>
                <Box component="form" sx={registerStyles.cardChildContainer}
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    autoComplete="off"
                >
                    <Typography sx={registerStyles.heading}>Register</Typography>
                    <Stack direction={"column"} gap={1} width={"100%"}>
                        <Box sx={registerStyles.labelInputContainer}>
                            <Box component={"label"} htmlFor="userName" sx={registerStyles.label}>
                                Username *
                            </Box>
                            <Box id="userName" component={"input"} sx={registerStyles.inputFeild}
                                {...register("username", {
                                    required: "*username is required!",
                                    minLength: {
                                        value: 5,
                                        message: "*username should be at least 5 characters!",
                                    },
                                    maxLength: {
                                        value: 100,
                                        message: '*username should not exceed 10 characters!",',
                                    },
                                })}
                            />
                        </Box>
                        {errors.username?.message && <Typography sx={registerStyles.errorMsg}>{errors.username?.message}</Typography>}
                        {userNameErrMsg && <Typography sx={registerStyles.errorMsg}>{userNameErrMsg}</Typography>}
                        <Box sx={registerStyles.labelInputContainer}>
                            <Box component={"label"} sx={registerStyles.label} htmlFor="emailAddress">
                                Email Address *
                            </Box>
                            <Box component={"input"} sx={registerStyles.inputFeild} id="emailAddress"
                                type="email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "*Email is required!",
                                    },
                                    pattern: {
                                        value:
                                            /^(([^<>()/[\]\\.,;:\s@"]+(\.[^<>()/[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: "*Invalid Email Address",
                                    },
                                })}
                            />
                        </Box>
                        {errors.email?.message && <Typography sx={registerStyles.errorMsg}>{errors.email?.message}</Typography>}
                        {emailErrMsg && <Typography sx={registerStyles.errorMsg}>{emailErrMsg}</Typography>}
                        <Box sx={registerStyles.labelInputContainer}>
                            <Box component={"label"} sx={registerStyles.label} htmlFor="password">
                                Password *
                            </Box>
                            <Box component={"input"} sx={registerStyles.inputFeild} id="password"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "*Password is required!",
                                    },
                                    pattern: {
                                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                                        message:
                                            "*Password must contain at least one uppercase letter, one lowercase letter and one number, and must be between 6 and 15 characters long.",
                                    },
                                })}
                            />
                        </Box>
                        {errors.password?.message && <Typography sx={registerStyles.errorMsg}>{errors.password?.message}</Typography>}
                        <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} gap={0.5} mt={1}>
                            <Typography sx={registerStyles.privacyPolicy}>Privacy Policy</Typography>
                            <Typography sx={registerStyles.clickHere}>Click Here</Typography>
                        </Stack>
                    </Stack>
                    <Button disableRipple disableFocusRipple disableTouchRipple disableElevation sx={registerStyles.registerBtn} type="submit">REGISTER</Button>
                </Box>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} mt={1.7} gap={0.5}>
                    <Typography sx={registerStyles.alreadyRegistered}>Already Registered?</Typography>
                    <Typography onClick={clickHereHandler} sx={{ ...registerStyles.clickHere, marginTop: 0 }}>Click here to login</Typography>
                </Stack>
                {isRegistrationSuccessful && <Typography sx={registerStyles.registrationSuccessMsg}>Registration Successful. Please Login</Typography>}
            </Box>
        </Box>
    )


}


export default Register