import { Box, Button, Stack, Typography } from "@mui/material"
import forgotPasswordStyles from "./ForgotPassword.Styles"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store/Store"
import { forgotPasswordReducer, loadingSpinnerReducer } from "../../redux/reducers/LoginSliceReducer"
import CloseIcon from '@mui/icons-material/Close';
import { CleaningServices } from "@mui/icons-material"








const ForgotPassword = () => {
    const isFgPassCardDisplayed = useSelector((state: RootState) => state.login.isForgotPasswordCardDisplayed);
    const {isSpinnerRotating} = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch<AppDispatch>();

    const closeBtnDrawerHandler = () => {
        dispatch(forgotPasswordReducer(false))
    }

    const onSubmitForm = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(loadingSpinnerReducer(true))
        setTimeout(() => {
            dispatch(loadingSpinnerReducer(false));
        }, 5000000)
    }

    return (
        <Box sx={isFgPassCardDisplayed ? forgotPasswordStyles.cardOpenParentContainer : forgotPasswordStyles.cardParentCloseContainer}>
            <Box component="button" sx={isFgPassCardDisplayed ? forgotPasswordStyles.drawerCloseIconBtnOpen : forgotPasswordStyles.drawerCloseIconBtnClosed}><CloseIcon onClick={closeBtnDrawerHandler} sx={forgotPasswordStyles.closeIcon} /></Box>
            <Box sx={isFgPassCardDisplayed ? forgotPasswordStyles.cardOpenContainer : forgotPasswordStyles.cardCloseContainer}>
                <Stack component={"form"} direction={"column"} justifyContent={"space-between"} height={"380px"} onSubmit={onSubmitForm}>
                    <Box>
                    <Typography sx={forgotPasswordStyles.heading}>Forgot Password?</Typography>
                    <Box sx={forgotPasswordStyles.labelInputContainer}>
                        <Box component={"label"} sx={forgotPasswordStyles.label}>
                            Username or email address *
                        </Box>
                        <Box component={"input"} sx={forgotPasswordStyles.inputFeild} type="email" />
                    </Box>
                    </Box>
                    {!isSpinnerRotating && (<Button type="submit" disableRipple disableFocusRipple disableTouchRipple disableElevation sx={forgotPasswordStyles.continueBtn}>Continue</Button>)}
                    {isSpinnerRotating && (<Box sx={forgotPasswordStyles.spinnerContainerStyle}>
                        <Box sx={forgotPasswordStyles.spinner}></Box>
                    </Box>)}
                </Stack>
            </Box>
        </Box>

    )
}



export default ForgotPassword