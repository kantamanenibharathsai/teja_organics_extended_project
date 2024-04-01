import {
  Box,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { footerTejaOrganicsLogo, paperPlane } from "../../assets/home_images/HomeImages";
import { pinInterestImg, facebookImg, instagramImg, linkedinImg, twitterImg } from "../../assets/navbar_images/navbarImages";
import styles from "./FooterStyles";





const Footer = () => {
  return (
    <Box>
      <Box sx={styles.mainBox}>
        <Container maxWidth="lg">
          <Box sx={styles.firstBox}>
            <Grid container sx={styles.emailMainGrid}>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={styles.callBox}>
                  <WifiCalling3Icon sx={styles.callIcon} />
                  <Box>
                    <Typography sx={styles.callText}>
                      +91 040-2711-8688
                    </Typography>
                    <Typography sx={styles.callText}>
                      +91 9390 538 942
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={styles.callBox}>
                  <EmailIcon sx={styles.callIcon} />
                  <Typography sx={styles.callText}>
                    info@tejaorganics.com
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={styles.callBox}>
                  <LocationOnIcon sx={styles.callIcon} />
                  <Typography sx={styles.locationText}>
                    G 05 TEJA'S DREAMS PLAZA, 3RD, AVENUE, VAYAPURI,3RD. AVENUE,
                    VAYAPURI, Sainikpuri, Secunderbad, Telangana 500094
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Grid container spacing={6} sx={styles.secondGrid}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography sx={styles.brandsText}>
                Teja Organics is one of the biggest exclusive organic stores in
                india. Teja organixs is an intiative by a special child for
                independent living. Teja organics has 5000+ Organic, Ayurvedix,
                Herbal Products. Teja Organics is a multi-brand store.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={styles.brandsMainBox}>
                <Typography gutterBottom sx={styles.extraText}>
                  Extras
                </Typography>
                <Box sx={styles.brandsBox}>
                  <KeyboardArrowRightIcon sx={styles.rightArrowIcon} />
                  <Typography sx={styles.brandsText}>Brands</Typography>
                </Box>
                <Box sx={styles.brandsBox}>
                  <KeyboardArrowRightIcon sx={styles.rightArrowIcon} />
                  <Typography sx={styles.brandsText}>Specials</Typography>
                </Box>
                <Box sx={styles.brandsBox}>
                  <KeyboardArrowRightIcon sx={styles.rightArrowIcon} />
                  <Typography sx={styles.brandsText}>My account</Typography>
                </Box>
                <Box sx={styles.brandsBox}>
                  <KeyboardArrowRightIcon sx={styles.rightArrowIcon} />
                  <Typography sx={styles.brandsText}>Order History</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={styles.brandsMainBox}>
                <Typography gutterBottom sx={styles.extraText}>
                  Information
                </Typography>
                <Box sx={styles.brandsBox}>
                  <KeyboardArrowRightIcon sx={styles.rightArrowIcon} />
                  <Typography sx={styles.brandsText}>About Us</Typography>
                </Box>
                <Box sx={styles.brandsBox}>
                  <KeyboardArrowRightIcon sx={styles.rightArrowIcon} />
                  <Typography sx={styles.brandsText}>Privacy Policy</Typography>
                </Box>
                <Box sx={styles.brandsBox}>
                  <KeyboardArrowRightIcon sx={styles.rightArrowIcon} />
                  <Typography sx={styles.brandsText}>
                    Terms & Conditions
                  </Typography>
                </Box>
                <Box sx={styles.brandsBox}>
                  <KeyboardArrowRightIcon sx={styles.rightArrowIcon} />
                  <Typography sx={styles.brandsText}>Contact Us</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={styles.brandsMainBox}>
                <Typography gutterBottom sx={styles.extraText}>
                  Customer Service
                </Typography>
                <Box sx={styles.brandsBox}>
                  <KeyboardArrowRightIcon sx={styles.rightArrowIcon} />
                  <Typography sx={styles.brandsText}>Contact Us</Typography>
                </Box>
                <Box sx={styles.brandsBox}>
                  <KeyboardArrowRightIcon sx={styles.rightArrowIcon} />
                  <Typography sx={styles.brandsText}>
                    Shipping Policy
                  </Typography>
                </Box>
                <Box sx={styles.brandsBox}>
                  <KeyboardArrowRightIcon sx={styles.rightArrowIcon} />
                  <Typography sx={styles.brandsText}>
                    Refund and the Cancellation policy
                  </Typography>
                </Box>
                <Box sx={styles.brandsBox}>
                  <KeyboardArrowRightIcon sx={styles.rightArrowIcon} />
                  <Typography sx={styles.brandsText}>Site Map</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box sx={styles.thirdBox}>
            <Grid container spacing={{ xs: 2, md: 0 }} sx={styles.newsGrid}>
              <Grid item xs={12} md={3}>
                <Box component="img" src={footerTejaOrganicsLogo} sx={styles.tejaOrganicsLogo} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography sx={styles.newsletter}>Newsletter</Typography>
                <Typography sx={styles.subscribe}>
                  Please subscribe to our newsletter for offers and other
                  information.
                </Typography>
              </Grid>
              <Grid item xs={12} md={5} lg={5}>
                <TextField
                  placeholder="Email Address"
                  type="text"
                  sx={styles.textfield}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Box sx={styles.sendIconContainer}>
                          <Box
                            component="img"
                            src={paperPlane}
                            sx={styles.footerSearchImg}
                          />
                        </Box>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Box sx={styles.fourthBox}>
          <Grid container>
            <Grid item xs={12} md={10}>
              <Typography sx={styles.lastText}>
                Buy Organic Products Online | Teja Organics @ | 2023 | Designed
                And Developed By{" "}
                <Box component="span" sx={styles.extended}>
                  Extended Web AppTech
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box sx={styles.socialMediaImgBox}>
                <Box component="img" src={pinInterestImg} />
                <Box component="img" src={facebookImg} />
                <Box component="img" src={twitterImg} />
                <Box component="img" src={instagramImg} />
                <Box component="img" src={linkedinImg} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
