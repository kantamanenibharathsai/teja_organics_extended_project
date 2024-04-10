import { Box, Button, Stack, Typography } from "@mui/material"
import mobileRegisterStyles from "./MobileRegister.Styles"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/Store";
import CloseIcon from '@mui/icons-material/Close';
import { mobileLoginReducer, mobileRegisterReducer, } from "../../redux/reducers/LoginSliceReducer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";


interface FormData {
    username: string;
    email: string;
    password: string;
}


const MobileRegister = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();

    const [userNameErrMsg, setUserNameErrMsg] = useState<string>("");
    const [emailErrMsg, setEmailErrMsg] = useState<string>("");
    const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState<boolean>(false);

    const isMobileRegisterCardDisplayed = useSelector((state: RootState) => state.login.isMobileRegisterCardOpened);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const closeBtnDrawerHandler = () => {
        dispatch(mobileLoginReducer(false))
        navigate("/")
    }

    const clickHereHandler = () => {
        dispatch(mobileLoginReducer(true))
        dispatch(mobileRegisterReducer(false))
        navigate("/mobileLogin")
    }

    const handleResize = () => {
        if (window.innerWidth < 1200) {
            navigate("/mobileRegister")
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
            dispatch(mobileLoginReducer(true))
            setIsRegistrationSuccessful(true)
            setTimeout(() => {
                navigate("/mobileLogin")
            }, 2000)
        }
    };

    return (
        <Box sx={isMobileRegisterCardDisplayed ? mobileRegisterStyles.cardOpenParentContainer : mobileRegisterStyles.cardCloseParentContainer}>
            <Box sx={isMobileRegisterCardDisplayed ? mobileRegisterStyles.cardOpenContainer : mobileRegisterStyles.cardCloseContainer}>
                <Box component="form" sx={mobileRegisterStyles.cardChildContainer}
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    autoComplete="off"
                >
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                        <Typography sx={mobileRegisterStyles.heading}>Register</Typography>
                        <Box component="button" sx={mobileRegisterStyles.drawerCloseIconBtn}><CloseIcon onClick={closeBtnDrawerHandler} sx={mobileRegisterStyles.closeIcon} /></Box>
                    </Stack>
                    <Stack direction={"column"} gap={1} width={"100%"}>
                        <Box sx={mobileRegisterStyles.labelInputContainer}>
                            <Box component={"label"} sx={mobileRegisterStyles.label}
                            >
                                User Name *
                            </Box>
                            <Box component={"input"} sx={mobileRegisterStyles.inputFeild}
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
                        {errors.username?.message && <Typography sx={mobileRegisterStyles.errorMsg}>{errors.username?.message}</Typography>}
                        {userNameErrMsg && <Typography sx={mobileRegisterStyles.errorMsg}>{userNameErrMsg}</Typography>}
                        <Box sx={mobileRegisterStyles.labelInputContainer}>
                            <Box component={"label"} sx={mobileRegisterStyles.label}>
                                Email Address *
                            </Box>
                            <Box component={"input"} sx={mobileRegisterStyles.inputFeild}
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
                        {errors.email?.message && <Typography sx={mobileRegisterStyles.errorMsg}>{errors.email?.message}</Typography>}
                        {emailErrMsg && <Typography sx={mobileRegisterStyles.errorMsg}>{emailErrMsg}</Typography>}
                        <Box sx={mobileRegisterStyles.labelInputContainer}>
                            <Box component={"label"} sx={mobileRegisterStyles.label}>
                                Password *
                            </Box>
                            <Box component={"input"} sx={mobileRegisterStyles.inputFeild}
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
                        {errors.password?.message && <Typography sx={mobileRegisterStyles.errorMsg}>{errors.password?.message}</Typography>}
                        <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} gap={0.5} mt={1}>
                            <Typography sx={mobileRegisterStyles.privacyPolicy}>Privacy Policy</Typography>
                            <Typography sx={mobileRegisterStyles.clickHere}>Click Here</Typography>
                        </Stack>
                    </Stack>
                    <Button disableRipple disableFocusRipple disableTouchRipple disableElevation sx={mobileRegisterStyles.backToHomeBtn} type="submit">REGISTER</Button>
                </Box>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} mt={1.7} gap={0.5}>
                    <Typography sx={mobileRegisterStyles.alreadyRegistered}>Already Registered?</Typography>
                    <Typography onClick={clickHereHandler} sx={{ ...mobileRegisterStyles.clickHere, marginTop: 0 }}>Click here to login</Typography>
                </Stack>
                {isRegistrationSuccessful && <Typography sx={mobileRegisterStyles.registrationSuccessMsg}>Registration Successful. Please Login.</Typography>}
            </Box>
        </Box>
    )
}


export default MobileRegister