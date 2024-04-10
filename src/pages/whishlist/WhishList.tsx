import { Box } from "@mui/system"
import whishListStyles from "./WhishList.Styles"
import Navbar from "../../components/navbar/Navbar"





const WhishList = () => {


    return(
        <Box sx={whishListStyles.mainContainer}>
            <Navbar/>
        </Box>
    )
}


export default WhishList