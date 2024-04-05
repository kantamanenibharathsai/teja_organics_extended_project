import { Box } from "@mui/material"
import Navbar from "../../components/navbar/Navbar"
import aboutUsStyles from "./AboutUs.Styles"
import Footer from "../../components/footer/Footer"
import About from "../../components/about/About"















const AboutUs = () => {


    return (
        <Box sx={aboutUsStyles.mainContainer}>
            <Navbar />
            <About />
            <Footer />
        </Box>
    )
}





export default AboutUs