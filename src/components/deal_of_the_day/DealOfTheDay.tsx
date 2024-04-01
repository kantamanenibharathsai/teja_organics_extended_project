import { Box, Rating, Stack, Typography } from "@mui/material";
import { styles } from "./DealOfTheDay.Styles";
import { multani } from "../../assets/home_images/HomeImages";
import { nettle } from "../../assets/home_images/HomeImages";
import { burdok } from "../../assets/home_images/HomeImages";
import { nutmeg } from "../../assets/home_images/HomeImages";
import { antiage } from "../../assets/home_images/HomeImages";



const DealsOftheDay = () => {
    return (
        <Box sx={styles.container}>
            <Typography sx={styles.dealsHead}>Deal of the Day</Typography>
            <Box sx={styles.dealsContainer}>
                <Box sx={styles.dealsBox}>
                    <Box sx={styles.imageContainer}>
                        <Box component="img" src={multani} sx={styles.image} />
                    </Box>
                    <Box sx={styles.dealsBoxRight}>
                        <Box sx={styles.dealsBoxRightTag}>Organic Food</Box>
                        <Stack direction={`column`} gap={0.4}>
                            <Box sx={styles.dealsBoxRightTitle}>Multani Mitti 100gm</Box>
                            <Box sx={styles.dealsBoxRightPrice}>
                                <Box sx={styles.price}>₹340.00</Box>
                                <Rating sx={styles.rating} value={null} />
                            </Box>
                        </Stack>
                        <Box sx={styles.dealsBoxRightButton}>
                            <Box sx={styles.dealsBtn}>
                                <Box component="button">-</Box>
                                <Box >1</Box>
                                <Box component="button">+</Box>
                            </Box>
                            <Box component="button" sx={styles.addToCart}>Add to cart</Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={styles.dealsBox}>
                    <Box sx={styles.imageContainer}>
                        <Box component="img" src={nettle} sx={styles.image} />
                    </Box>
                    <Box sx={styles.dealsBoxRight}>
                        <Box sx={styles.dealsBoxRightTag}>Organic Food</Box>
                        <Stack direction={`column`} gap={0.4}>
                            <Box sx={styles.dealsBoxRightTitle}>Nettle Leaf Tea 50gm</Box>
                            <Box sx={styles.dealsBoxRightPrice}>
                                <Box sx={styles.price}>₹340.00</Box>
                                <Rating sx={styles.rating} value={null} />
                            </Box>
                        </Stack>
                        <Box sx={styles.dealsBoxRightButton}>
                            <Box sx={styles.dealsBtn}>
                                <Box component="button">-</Box>
                                <Box >1</Box>
                                <Box component="button">+</Box>
                            </Box>
                            <Box component="button" sx={styles.addToCart}>Add to cart</Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={styles.dealsBox}>
                    <Box sx={styles.imageContainer}>
                        <Box component="img" src={burdok} sx={styles.image} />
                    </Box>
                    <Box sx={styles.dealsBoxRight}>
                        <Box sx={styles.dealsBoxRightTag}>Organic Food</Box>
                        <Stack direction={`column`} gap={0.4}>
                            <Box sx={styles.dealsBoxRightTitle}>Burdock Tea 50gm</Box>
                            <Box sx={styles.dealsBoxRightPrice}>
                                <Box sx={styles.price}>₹340.00</Box>
                                <Rating sx={styles.rating} value={null} />
                            </Box>
                        </Stack>
                        <Box sx={styles.dealsBoxRightButton}>
                            <Box sx={styles.dealsBtn}>
                                <Box component="button">-</Box>
                                <Box >1</Box>
                                <Box component="button">+</Box>
                            </Box>
                            <Box component="button" sx={styles.addToCart}>Add to cart</Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={styles.dealsBox}>
                    <Box sx={styles.imageContainer}>
                        <Box component="img" src={nutmeg} sx={styles.image} />
                    </Box>
                    <Box sx={styles.dealsBoxRight}>
                        <Box sx={styles.dealsBoxRightTag}>Organic Food</Box>
                        <Stack direction={`column`} gap={0.4}>
                            <Box sx={styles.dealsBoxRightTitle}>Nutmeg Oil 15ml</Box>
                            <Box sx={styles.dealsBoxRightPrice}>
                                <Box sx={styles.price}>₹340.00</Box>
                                <Rating sx={styles.rating} value={null} />
                            </Box>
                        </Stack>
                        <Box sx={styles.dealsBoxRightButton}>
                            <Box sx={styles.dealsBtn}>
                                <Box component="button">-</Box>
                                <Box >1</Box>
                                <Box component="button">+</Box>
                            </Box>
                            <Box component="button" sx={styles.addToCart}>Add to cart</Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={styles.dealsBox}>
                    <Box sx={styles.imageContainer}>
                        <Box component="img" src={multani} sx={styles.image} />
                    </Box>
                    <Box sx={styles.dealsBoxRight}>
                        <Box sx={styles.dealsBoxRightTag}>Organic Food</Box>
                        <Stack direction={`column`} gap={0.4}>
                            <Box sx={styles.dealsBoxRightTitle}>Multani Mitti 100gm</Box>
                            <Box sx={styles.dealsBoxRightPrice}>
                                <Box sx={styles.price}>₹340.00</Box>
                                <Rating sx={styles.rating} value={null} />
                            </Box>
                        </Stack>
                        <Box sx={styles.dealsBoxRightButton}>
                            <Box sx={styles.dealsBtn}>
                                <Box component="button">-</Box>
                                <Box >1</Box>
                                <Box component="button">+</Box>
                            </Box>
                            <Box component="button" sx={styles.addToCart}>Add to cart</Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={styles.dealsBox}>
                    <Box sx={styles.imageContainer}>
                        <Box component="img" src={antiage} sx={styles.image} />
                    </Box>
                    <Box sx={styles.dealsBoxRight}>
                        <Box sx={styles.dealsBoxRightTag}>Organic Food</Box>
                        <Stack direction={`column`} gap={0.4}>
                            <Box sx={styles.dealsBoxRightTitle}>Anti Ageing Face...</Box>
                            <Box sx={styles.dealsBoxRightPrice}>
                                <Box sx={styles.price}>₹340.00</Box>
                                <Rating sx={styles.rating} value={null} />
                            </Box>
                        </Stack>
                        <Box sx={styles.dealsBoxRightButton}>
                            <Box sx={styles.dealsBtn}>
                                <Box component="button">-</Box>
                                <Box >1</Box>
                                <Box component="button">+</Box>
                            </Box>
                            <Box component="button" sx={styles.addToCart}>Add to cart</Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default DealsOftheDay;