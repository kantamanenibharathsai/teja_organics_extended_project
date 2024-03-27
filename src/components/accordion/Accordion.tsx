import { Box, IconButton, Stack, Typography } from "@mui/material"
import accordionStyles from "./Accordion.Styles"
import { BrowseCategoryInterface } from "../../utils/typescript/NavbarData"
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useState } from "react";


interface MyProps {
    eachCategory: BrowseCategoryInterface
}

interface IState {
    isAccordionOpen: boolean
}


const Accordion = ({ eachCategory }: MyProps) => {
    const [isAccordionOpen, setIsAccordionOpen] = useState<IState["isAccordionOpen"]>(false);


    const handleIsAccordionOpen = () => {
        setIsAccordionOpen(prevAccordionValue => !prevAccordionValue);
    };

    return (
        <Box sx={accordionStyles.accordion} onClick={handleIsAccordionOpen}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} sx={{ ...accordionStyles.accordianSummary, bgcolor:isAccordionOpen ? "#E0E0E0" : "white", }}>
                <Stack direction={"row"} alignItems={"center"} gap={1.4}>
                    <Box component="img" alt="organic-image" src={eachCategory.categoryImg} sx={accordionStyles.accordionCategoryImage} />
                    <Typography sx={accordionStyles.categoryName}>{eachCategory.categoryName}</Typography>
                </Stack>
                <IconButton disableFocusRipple disableRipple disableTouchRipple><KeyboardArrowDownOutlinedIcon sx={{
                    ...accordionStyles.arrowIconButton,
                    rotate: isAccordionOpen ? "180deg" : "0deg",
                }} /></IconButton>
            </Stack>
            <Box sx={{
                ...accordionStyles.accordionDetails,
                height: isAccordionOpen ? "auto" : "0px",
                py: isAccordionOpen ? "1rem" : 0,
                transform: `scaleY(${isAccordionOpen ? 1 : 0})`,
                transformOrigin: "top",
            }} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Box>
        </Box>
    )
}


export default Accordion