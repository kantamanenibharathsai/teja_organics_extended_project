import { Box, Button, Typography } from "@mui/material";
import mapImg from "../../assets/contact_us_images/mapImg.png";
import phoneImg from "../../assets/contact_us_images/phoneImg.png";
import whatsappImg from "../../assets/contact_us_images/whatsappImg.png";
import shopping from "../../assets/contact_us_images/shopImg.png";
import { contact } from "./Styles";

export default function Contact() {
  return (
    <Box sx={contact.contactContainer}>
      <Box sx={contact.contactHeadingContainer}>
        <Typography sx={contact.heading}>Contact Us</Typography>
      </Box>
      <Box sx={contact.contactInnerContainer}>
        <Box sx={contact.contactRowContainer}>
          <Box sx={contact.firstContainer}>
            <Box
              component={"img"}
              src={mapImg}
              alt="map"
              sx={contact.firstContainerImg1}
            />
            <Typography sx={contact.firstContainerHeading}>
              G 05 TEJA'S DREAMS PLAZA,3RD. AVENUE, VAYUPURI, Sainikpuri,
              Secunderabad,Telangana 500094
            </Typography>
          </Box>
          <Box sx={contact.firstContainer1}>
            <Box
              component={"img"}
              src={phoneImg}
              alt="map"
              sx={contact.firstContainerImg}
            />
            <Box sx={contact.firstColumnContainer}>
              <Typography sx={contact.firstContainerHeading}>
                Phone No.
              </Typography>
              <Typography sx={contact.firstContainerHeading}>
                {" "}
                +91-040-27118688
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={contact.contactRowContainer}>
          <Box sx={contact.firstContainer1}>
            <Box
              component={"img"}
              src={whatsappImg}
              alt="map"
              sx={contact.firstContainerImg}
            />
            <Box sx={contact.firstColumnContainer}>
              <Typography sx={contact.firstContainerHeading}>
                Whatsapp No.{" "}
              </Typography>
              <Typography sx={contact.firstContainerHeading}>
                {" "}
                +91 9390538942
              </Typography>
            </Box>
          </Box>
          <Box sx={contact.firstContainer1}>
            <Box
              component={"img"}
              src={shopping}
              alt="map"
              sx={contact.firstContainerImg}
            />
            <Box sx={contact.firstColumnContainer}>
              <Typography sx={contact.firstContainerHeading}>
                Shop Timings - All days{" "}
              </Typography>
              <Typography sx={contact.firstContainerHeading}>
                {" "}
                9:00AM - 9:00PM
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={contact.contactFormContainer}>
          <Typography sx={contact.contactText}>Contact</Typography>
          <Box sx={contact.contactFormRowContainer}>
            <Box
              component={"input"}
              sx={contact.contactInput}
              placeholder="Enter Full Name"
            />
            <Box
              component={"input"}
              sx={contact.contactInput}
              placeholder="Enter Email Address"
            />
          </Box>
          <Box
            component={"textarea"}
            sx={contact.contactTextArea}
            placeholder="Enquiry"
          />
          <Button variant="contained" sx={contact.contactButton}>Submit</Button>
        </Box>
      </Box>
    </Box>
  );
}
