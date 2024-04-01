import { Box, Button, Divider, Rating, Stack, Typography } from "@mui/material"
import singlePoductDetailsReviewStyles from "./ProductReviewsSingleProduct.Styles"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { singleProductImg, userReviewProfileImg } from "../../assets/single_product/SingleProductImages"



const SinglePoductDetailsReviews = () => {
    return (
        <Box sx={singlePoductDetailsReviewStyles.body}>
            <Box sx={singlePoductDetailsReviewStyles.container}>
                <Box sx={singlePoductDetailsReviewStyles.container1}>
                    <Box sx={singlePoductDetailsReviewStyles.container2}>
                        <Box sx={singlePoductDetailsReviewStyles.rightcontainer}>
                            <Typography sx={singlePoductDetailsReviewStyles.eachproducttitle}> Arnica Pain Relief Massage Oil 100ml </Typography> <Box sx={singlePoductDetailsReviewStyles.rupeecontainer}>
                                <Box sx={singlePoductDetailsReviewStyles.currency}>
                                    <CurrencyRupeeIcon sx={singlePoductDetailsReviewStyles.ruppeicon} />
                                    <Typography sx={singlePoductDetailsReviewStyles.rupee}>340.00</Typography>
                                </Box> <Divider orientation="vertical" variant="middle" flexItem sx={singlePoductDetailsReviewStyles.divider} />
                                <Rating name="size-small" defaultValue={2} size="small" />
                            </Box>
                            <Box sx={singlePoductDetailsReviewStyles.categorycontainer}>
                                <Box sx={singlePoductDetailsReviewStyles.catbtn}>Categories</Box>
                                <Typography sx={singlePoductDetailsReviewStyles.message}> Massage Oils, Teja Organics, Teja Organics Wellness Products </Typography> </Box>
                            <Box sx={singlePoductDetailsReviewStyles.categorycontainer}>
                                <Box sx={singlePoductDetailsReviewStyles.barndbtn}>Brand</Box>
                                <Typography sx={singlePoductDetailsReviewStyles.message}>Teja Organic</Typography>
                            </Box>
                            <Box sx={singlePoductDetailsReviewStyles.addtocart}>
                                <Button disableElevation disableFocusRipple disableRipple disableTouchRipple sx={singlePoductDetailsReviewStyles.cart}>Add To Cart</Button>
                                <Button disableElevation disableFocusRipple disableRipple disableTouchRipple sx={singlePoductDetailsReviewStyles.buynow}>Buy Now</Button>
                            </Box>
                        </Box>
                        <Box sx={singlePoductDetailsReviewStyles.productcontainer}>
                            <Box component={"img"} src={singleProductImg} sx={singlePoductDetailsReviewStyles.product} />
                        </Box>
                    </Box>
                    <Box sx={singlePoductDetailsReviewStyles.descriptioncontainer}>
                        <Typography sx={singlePoductDetailsReviewStyles.descriptiontitle}>Description</Typography>
                        <Box component={"li"} sx={singlePoductDetailsReviewStyles.li}> Smooth, pleasant smell. </Box>
                        <Box component={"li"} sx={singlePoductDetailsReviewStyles.li}> Relaxing silky feel. </Box>
                        <Box component={"li"} sx={singlePoductDetailsReviewStyles.li}> Awesome product for pain relief. </Box>
                        <Box component={"li"} sx={singlePoductDetailsReviewStyles.li}> Relief from joint pain, knee pain, back pain, wrist pain, ankle pain, foot pain and neck pain.
                        </Box>
                        <Box component={"li"} sx={singlePoductDetailsReviewStyles.li}> Relief from stiff and sore muscles; frozen shoulders, muscle pains, sprains and spasms. </Box>
                        <Box component={"li"} sx={singlePoductDetailsReviewStyles.li}> Quick relief from bruises and inflammation. </Box>
                        <Box component={"li"} sx={singlePoductDetailsReviewStyles.li}> Reduces swelling in ankles. </Box>
                        <Box component={"li"} sx={singlePoductDetailsReviewStyles.li}> Great Sports / Athletic massage oil </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={singlePoductDetailsReviewStyles.leftsection}>
                <Typography sx={singlePoductDetailsReviewStyles.reviewtitle}>Product Reviews</Typography>
                <Box component="ul" sx={singlePoductDetailsReviewStyles.reviewsUnorderedList}>
                    <Stack component="li" direction={"column"}>
                        <Box sx={singlePoductDetailsReviewStyles.reviewcontainer}>
                            <Box component={"img"} src={userReviewProfileImg} sx={singlePoductDetailsReviewStyles.profile}>
                            </Box>
                            <Box sx={singlePoductDetailsReviewStyles.review}>
                                <Typography sx={singlePoductDetailsReviewStyles.profilename}>Rajeev singh</Typography>
                                <Box sx={singlePoductDetailsReviewStyles.profilecontainer}>
                                    <Typography sx={singlePoductDetailsReviewStyles.date}>Nov 13, 2023 </Typography>
                                    <Rating size={"small"}></Rating>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={singlePoductDetailsReviewStyles.details}> This is one of the best Health + Organic stores in Hyderabad. Firstly the ambiance of the store is nice and especially the pleasant music. People in are very knowledgeable and very humble. The difference between other organic stores and this is that here you will find a complete range of Health products and aromatherapy products, books and many more.. sourced from various parts of India </Box>
                    </Stack>
                    <Stack component="li" direction={"column"}>
                        <Box sx={singlePoductDetailsReviewStyles.reviewcontainer}>
                            <Box component={"img"} src={userReviewProfileImg} sx={singlePoductDetailsReviewStyles.profile}>
                            </Box>
                            <Box sx={singlePoductDetailsReviewStyles.review}>
                                <Typography sx={singlePoductDetailsReviewStyles.profilename}>Rajeev singh</Typography>
                                <Box sx={singlePoductDetailsReviewStyles.profilecontainer}>
                                    <Typography sx={singlePoductDetailsReviewStyles.date}>Nov 13, 2023 </Typography>
                                    <Rating size={"small"}></Rating>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={singlePoductDetailsReviewStyles.details}> This is one of the best Health + Organic stores in Hyderabad. Firstly the ambiance of the store is nice and especially the pleasant music. People in are very knowledgeable and very humble. The difference between other organic stores and this is that here you will find a complete range of Health products and aromatherapy products, books and many more.. sourced from various parts of India </Box>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}


export default SinglePoductDetailsReviews