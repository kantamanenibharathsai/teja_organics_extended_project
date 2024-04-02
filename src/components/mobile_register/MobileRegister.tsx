import { Box, Button, Stack, Typography } from "@mui/material"
import mobileRegisterStyles from "./MobileRegister.Styles"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/Store";
import CloseIcon from '@mui/icons-material/Close';
import { mobileLoginReducer, mobileRegisterReducer, } from "../../redux/reducers/LoginSliceReducer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
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

    const isMobileRegisterCardDisplayed = useSelector((state: RootState) => state.login.isMobileRegisterCardOpened);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()

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

    return (
        <Box sx={isMobileRegisterCardDisplayed ? mobileRegisterStyles.cardOpenParentContainer : mobileRegisterStyles.cardCloseParentContainer}>
            <Box sx={isMobileRegisterCardDisplayed ? mobileRegisterStyles.cardOpenContainer : mobileRegisterStyles.cardCloseContainer}>
                <Box component="form" sx={mobileRegisterStyles.cardChildContainer}>
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
                            <Box component={"input"} sx={mobileRegisterStyles.inputFeild} />
                        </Box>

                        <Box sx={mobileRegisterStyles.labelInputContainer}>
                            <Box component={"label"} sx={mobileRegisterStyles.label}>
                                Email Address *
                            </Box>
                            <Box component={"input"} sx={mobileRegisterStyles.inputFeild} />
                        </Box>

                        <Box sx={mobileRegisterStyles.labelInputContainer}>
                            <Box component={"label"} sx={mobileRegisterStyles.label}>
                                Password *
                            </Box>
                            <Box component={"input"} sx={mobileRegisterStyles.inputFeild} />
                        </Box>

                        <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} gap={0.5} mt={1}>
                            <Typography sx={mobileRegisterStyles.privacyPolicy}>Privacy Policy</Typography>
                            <Typography sx={mobileRegisterStyles.clickHere}>Click Here</Typography>
                        </Stack>
                    </Stack>
                    <Button disableRipple disableFocusRipple disableTouchRipple disableElevation sx={mobileRegisterStyles.backToHomeBtn}>BACK TO HOME</Button>
                </Box>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} mt={1.7} gap={0.5}>
                    <Typography sx={mobileRegisterStyles.alreadyRegistered}>Already Registered?</Typography>
                    <Typography onClick={clickHereHandler} sx={{ ...mobileRegisterStyles.clickHere, marginTop: 0 }}>Click here to login</Typography>
                </Stack>
            </Box>
        </Box>
    )
}


export default MobileRegister