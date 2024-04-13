import { Box, Button, Stack, Typography } from "@mui/material"
import otpCardStyles from "./OtpCard.Styles"
import { AppDispatch, RootState } from "../../redux/store/Store"
import { useDispatch, useSelector } from "react-redux"
import CloseIcon from '@mui/icons-material/Close';
import { loginOtpReducer } from "../../redux/reducers/LoginSliceReducer";
import OtpInput from 'react-otp-input';
import { useState } from "react";


const OtpCard = () => {
    const [otp, setOtp] = useState<string>('');
    const isLoginOtpCardOpened = useSelector((state: RootState) => state.login.isLoginOtpcardOpened);
    const { isSpinnerRotating } = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch<AppDispatch>();


    const closeBtnDrawerHandler = () => {
        dispatch(loginOtpReducer(false))
    }

    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }


    return (
        <Box sx={isLoginOtpCardOpened ? otpCardStyles.cardOpenParentContainer : otpCardStyles.cardParentCloseContainer}>
            <Box component="button" sx={isLoginOtpCardOpened ? otpCardStyles.drawerCloseIconBtnOpen : otpCardStyles.drawerCloseIconBtnClosed}><CloseIcon onClick={closeBtnDrawerHandler} sx={otpCardStyles.closeIcon} /></Box>
            <Box sx={isLoginOtpCardOpened ? otpCardStyles.cardOpenContainer : otpCardStyles.cardCloseContainer}>
                <Stack component={"form"} direction={"column"} justifyContent={"space-between"} height={"380px"} onSubmit={onSubmitForm}>
                    <Box>
                        <Typography sx={otpCardStyles.heading}>OTP Verification</Typography>
                        <Box sx={otpCardStyles.otpNumsContainer}>
                            <OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={4}
                                renderInput={(props) => <input {...props} />}
                                renderSeparator={<span style={{ width: "8px" }}></span>}
                                inputType={"tel"}
                                shouldAutoFocus={true}
                                inputStyle={{
                                    border: "1px solid black",
                                    borderRadius: "8px",
                                    width: "54px",
                                    height: "54px",
                                    fontSize: "12px",
                                    color: "#000",
                                    fontWeight: "400",
                                    caretColor: "black"
                                }}
                            />
                        </Box>
                    </Box>
                    {!isSpinnerRotating && (<Button type="submit" disableRipple disableFocusRipple disableTouchRipple disableElevation sx={otpCardStyles.continueBtn}>VERIFY OTP</Button>)}
                    {isSpinnerRotating && (<Box sx={otpCardStyles.spinnerContainerStyle}>
                        <Box sx={otpCardStyles.spinner}></Box>
                    </Box>)}
                </Stack>
            </Box>
        </Box>
    )
}



export default OtpCard