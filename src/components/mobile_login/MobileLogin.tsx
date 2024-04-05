import { Box, Button, Checkbox, Stack, Typography } from "@mui/material"
import mobileLoginStyles from "./MobileLogin.Styles"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/Store";
import CloseIcon from '@mui/icons-material/Close';
import { mobileLoginReducer, mobileRegisterReducer, } from "../../redux/reducers/LoginSliceReducer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";


interface FormData {
    email: string;
    password: string;
}


const MobileLogin = () => {
    // const loggedInUserCredentialsStringifiedData = localStorage.getItem("loggedInUserCredentials")
    // const parsedDataCredentials = loggedInUserCredentialsStringifiedData ? JSON.parse(loggedInUserCredentialsStringifiedData) : null;
    const isMobileLoginCardDisplayed = useSelector((state: RootState) => state.login.isMobileLoginCardOpened);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.checked)
        setChecked(event.target.checked);
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();


    const handleResize = () => {
        if (window.innerWidth < 1200) {
            navigate("/mobileLogin")
        } else {
            navigate("/")
        }
    }

    useEffect(() => {

    }, [])

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

    const onSubmit = (data: FormData) => {
        const existingData = JSON.parse(localStorage.getItem("formData") ?? "[]");
        const user = existingData.find(
            (userDetailsObj: { email: string; password: string }) =>
                userDetailsObj.email === data.email && userDetailsObj.password === data.password
        );
        if (user) {
            localStorage.setItem("succLoggedInUserDetails", JSON.stringify(user));
            if (checked) {
                localStorage.setItem("loggedInUserCredentials", JSON.stringify(user))
            }
            setTimeout(() => {
                navigate("/");
            }, 10);
        }
        reset();
    };


    return (
        <Box sx={isMobileLoginCardDisplayed ? mobileLoginStyles.cardOpenParentContainer : mobileLoginStyles.cardCloseParentContainer}>

            <Box sx={isMobileLoginCardDisplayed ? mobileLoginStyles.cardOpenContainer : mobileLoginStyles.cardCloseContainer}>
                <Box component="form" sx={mobileLoginStyles.cardChildContainer}
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    autoComplete="off"
                >
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                        <Typography sx={mobileLoginStyles.heading}>Login</Typography>
                        <Box component="button" sx={mobileLoginStyles.drawerCloseIconBtn}><CloseIcon onClick={closeBtnDrawerHandler} sx={mobileLoginStyles.closeIcon} /></Box>
                    </Stack>
                    <Stack direction={"column"} gap={1} width={"100%"}>
                        <Box sx={mobileLoginStyles.labelInputContainer}>
                            <Box component={"label"} sx={mobileLoginStyles.label}>
                                Username or email address *
                            </Box>
                            <Box component={"input"} sx={mobileLoginStyles.inputFeild}
                                type="email"
                                // value={parsedDataCredentials ? parsedDataCredentials.email : ""}
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
                        {errors.email?.message && <Typography sx={mobileLoginStyles.errorMsg}>{errors.email?.message}</Typography>}
                        <Box sx={mobileLoginStyles.labelInputContainer}>
                            <Box component={"label"} sx={mobileLoginStyles.label}>
                                Password *
                            </Box>
                            <Box component={"input"} sx={mobileLoginStyles.inputFeild}
                                // value={parsedDataCredentials ? parsedDataCredentials.password : ""}
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
                        {errors.password?.message && <Typography sx={mobileLoginStyles.errorMsg}>{errors.password?.message}</Typography>}
                        <Stack direction={"row"} alignItems={"center"}>
                            <Checkbox onChange={handleChange} disableFocusRipple disableRipple disableTouchRipple color="default" checked={checked} />
                            <Typography sx={mobileLoginStyles.rememberMe}>Remember me</Typography>
                        </Stack>
                    </Stack>
                    <Button type="submit" disableRipple disableFocusRipple disableTouchRipple disableElevation sx={mobileLoginStyles.loginBtn}>LOGIN</Button>
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