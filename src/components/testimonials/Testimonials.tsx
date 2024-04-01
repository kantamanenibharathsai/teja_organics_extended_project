import { Box, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { styles } from "./Testimonial.Styles";
import { quoteOne, quoteTwo, borderOne, borderTwo, userProfileImageUrl } from "../../assets/home_images/HomeImages";




const Testmonials = () => {

    return (
        <Box sx={styles.bgCon}>
            <Box sx={styles.testContainer}>
                <Typography sx={styles.head}>Testimonials</Typography>
            </Box>
            <Box sx={styles.cardContainer}>
                <Box sx={styles.cardContentCon}>
                    <Typography sx={styles.text1}>
                        This is one of the best Health + Organic stores in Hyderabad.// Firstly the ambiance of the store is nice and especially the// pleasant music. People in are very knowledgeable and very humble.// The difference between other organic stores and this is that here// you will find a complete range of Health products and aromatherapy// products, books and many more.. sourced from various parts of India
                    </Typography>
                </Box>
                <Stack sx={styles.personCardContainer}>
                    <Box sx={styles.personImageCon}>
                        <Box component="img" src={userProfileImageUrl} sx={styles.personImg} />
                    </Box>
                    <Typography sx={styles.personName}>Srivalab N</Typography>
                </Stack>
            </Box>
            <Box component="img" src={borderOne} sx={styles.borderImg1} />
            <Box component="img" src={borderTwo} sx={styles.borderImg2} />
            <Box component="img" src={quoteTwo} sx={styles.quoteImg1} />
            <Box component="img" src={quoteOne} sx={styles.quoteImg2} />
            <ArrowBackIosNewIcon sx={styles.forWordIcon} />
            <ArrowForwardIosIcon sx={styles.backWardIcon} />
        </Box>
    );
};


export default Testmonials