import { Box, Button, Stack, Typography } from "@mui/material"
import latestNewsStyles from "./LatestNews.Styles"

import { latestNewsImageOne } from "../../assets/home_images/HomeImages"








const LatestNews = () => {





    return (
        <Stack direction={"column"} gap={3}>
            <Typography sx={latestNewsStyles.latestNewsHeading}>Our Latest News</Typography>
            <Stack gap={{ xs: 3, lg: 0 }} sx={latestNewsStyles.cardsContainer}>
                <Box sx={latestNewsStyles.cardContainer}>
                    <Box component={"img"} src={latestNewsImageOne} alt="get-best-blue-tea-image" sx={latestNewsStyles.leftImage} />
                    <Box sx={latestNewsStyles.rightContainer}>
                        <Typography sx={latestNewsStyles.heading}>Get best Blue Tea</Typography>
                        <Typography sx={latestNewsStyles.paragraph}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</Typography>
                        <Box sx={latestNewsStyles.buttonsContainer}>
                            <Button disableElevation disableFocusRipple disableRipple disableTouchRipple sx={latestNewsStyles.dateBtn}>May 13, 2023</Button>
                            <Button disableElevation disableFocusRipple disableRipple disableTouchRipple sx={latestNewsStyles.readMoreBtn}>Read More</Button>
                        </Box>
                    </Box>
                </Box>

                <Box sx={latestNewsStyles.cardContainer}>
                    <Box component={"img"} src={latestNewsImageOne} alt="get-best-blue-tea-image" sx={latestNewsStyles.leftImage} />
                    <Box sx={latestNewsStyles.rightContainer}>
                        <Typography sx={latestNewsStyles.heading}>Get best Blue Tea</Typography>
                        <Typography sx={latestNewsStyles.paragraph}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</Typography>
                        <Box sx={latestNewsStyles.buttonsContainer}>
                            <Button disableElevation disableFocusRipple disableRipple disableTouchRipple sx={latestNewsStyles.dateBtn}>May 13, 2023</Button>
                            <Button disableElevation disableFocusRipple disableRipple disableTouchRipple sx={latestNewsStyles.readMoreBtn}>Read More</Button>
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </Stack>
    )
}


export default LatestNews