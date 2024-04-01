import { Box, Stack } from "@mui/material";
import { styles } from "./FreeShipping.Styles";
import { freeShippingImg } from "../../assets/home_images/HomeImages"
import { CiDeliveryTruck } from "react-icons/ci";
import { FaHandshakeSimple } from "react-icons/fa6";
import "../../App.css"


const FreeShipping = () => {
    return (
        <Box sx={styles.container}>
            <Stack direction={{ xs: "row", lg: "column" }} gap={{ xs: 0, lg: 7 }} justifyContent={{ xs: "space-between", lg: "flex-start" }} width={{ xs: "100%", lg: "30%", xl: "25%" }}>
                <Box sx={styles.eachShippingBox}>
                    <Box sx={styles.eachShippingBoxImgContainer}>
                        <CiDeliveryTruck className="icon" />
                    </Box>
                    <Box sx={styles.title}>Free Shipping</Box>
                    <Box sx={styles.paragraph}>Free shipping for orders over ₹1500/-</Box>
                </Box>
                <Box sx={styles.eachShippingBox}>
                    <Box sx={styles.storePickupBoxImgContainer}>
                        <FaHandshakeSimple className="icon" />
                    </Box>
                    <Box sx={styles.title}>free store pickup</Box>
                    <Box sx={styles.paragraph}>Please visit our store to explore different brands.</Box>
                </Box>
            </Stack>
            <Stack direction={"column"} alignItems={"center"} justifyContent={"center"} sx={styles.imageContainer}>
                <Box component="img" src={freeShippingImg} sx={styles.image} />
            </Stack>
            <Stack direction={{ xs: "row", lg: "column" }} gap={{ xs: 0, lg: 7 }} justifyContent={{ xs: "space-between", lg: "flex-start" }} width={{ xs: "100%", lg: "30%", xl: "25%" }}>
                <Box sx={styles.eachShippingBox}>
                    <Box sx={styles.dealsOftheDayBoxImgContainer}>
                        <FaHandshakeSimple className="icon" />
                    </Box>
                    <Box sx={styles.title}>Deal of the day</Box>
                    <Box sx={styles.paragraph}>Order over ₹5000/- and get 5% off.</Box>
                </Box>
                <Box sx={styles.eachShippingBox}>
                    <Box sx={styles.coupenCodeBoxImgContainer}>
                        <FaHandshakeSimple className="icon" />
                    </Box>
                    <Box sx={styles.title}>“Tejafirst”</Box>
                    <Box sx={styles.paragraph}>Use our coupon code</Box>
                </Box>
            </Stack>
        </Box>

    );
};

export default FreeShipping;