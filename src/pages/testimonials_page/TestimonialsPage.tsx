import { Box } from "@mui/material"
import testimonialsPageStyles from "./TestimonialsPage.Styles"
import Navbar from "../../components/navbar/Navbar"
import TestimonialsTab from "../../components/testimonials_tab/Testimonial"
import Footer from "../../components/footer/Footer"












const TestimonialsPage = () => {


    return (
        <Box sx={testimonialsPageStyles.mainContainer}>
            <Navbar />
            <TestimonialsTab />
            <Footer />
        </Box>
    )
}

export default TestimonialsPage