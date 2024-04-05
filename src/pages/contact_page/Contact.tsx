import { Box } from "@mui/material"
import contactStyles from "./Contact.Styles"
import Navbar from "../../components/navbar/Navbar"
import Contact from "../../components/contact/Contact"
import Footer from "../../components/footer/Footer"





const Contactpage = () => {


    return (
        <Box sx={contactStyles.mainContainer}>
            <Navbar />
            <Contact />
            <Footer />
        </Box>
    )
}


export default Contactpage