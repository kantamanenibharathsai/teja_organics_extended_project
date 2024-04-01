const styles = {
  mainBox: {
    background: "#32373c",
    color: "#fff",
    position: "relative",
    mt: 12,
    mb: 12,
  },
  firstBox: {
    background: "#88bb23",
    borderRadius: "8px",
    p: 2,
    position: "relative",
    top: -40,
  },
  emailMainGrid: {
    display: "flex",
    alignItems: "center",
  },
  callBox: {
    display: "flex",
    alignItems: "center",
  },
  callIcon: {
    mr: 1.5,
    fontSize: { xs: "1.4rem", sm: "1.7rem" },
  },
  callText: {
    fontWeight: 600,
    fontSize: { xs: "0.8rem", sm: "0.95rem" },
  },
  locationText: {
    fontSize: { xs: "0.7rem", sm: "0.8rem" },
    mt: { xs: 0.5, md: 0 },
  },
  secondGrid: {
    color: "#C1C3C4",
    textAlign: { xs: "center", sm: "start" },
  },
  brandsText: { fontSize: "0.89rem" },
  extraText: { fontWeight: 600, color: "#fff" },
  brandsBox: { display: "flex", alignItems: "center", mb: 1 },
  rightArrowIcon: {
    fontSize: "1.3rem",
    mr: 1,
    display: { xs: "none", sm: "block" },
  },
  brandsMainBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: { xs: "center", sm: "flex-start" },
  },
  thirdBox: {
    background: "#88bb23",
    borderRadius: "8px",
    p: { xs: "35px 15px", sm: 4 },
    position: "relative",
    bottom: -80,
    mt: -6,
  },
  newsGrid: { display: "flex", alignItems: "center" },

  tejaOrganicsLogo: {
    width: { xs: "200px", md: "170px", lg: "200px" },
    height: '75px'
  },

  newsletter: { fontWeight: 600, fontSize: "1.6rem", color: "#32373C" },
  subscribe: { color: "#32373C", fontSize: "0.8rem" },

  sendIconContainer: {
    height: "54px",
    width: "43px",
    background: "#056839",
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px"
  },

  footerSearchImg: { width: "16px", height: "16px" },
  textfield: {
    width: "100%",
    background: "#fff",
    borderRadius: "9px",
    "& .MuiOutlinedInput-root": {
      pr: 0,
      "& fieldset": {
        border: "1px solid #88bb23",
        borderRadius: "9px",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid #88bb23",
      },
      "&:hover fieldset": {
        borderColor: "#88bb23",
        color: "#000",
      },
    },
    "& img": {
      width: "16px", height: "16px"
    }
  },
  fourthBox: {
    my: 2,
    textAlign: { xs: "center", md: "start" },
  },
  lastText: { fontWeight: 600, fontSize: "0.95rem" },

  extended: { color: "#88bb23" },

  socialMediaImgBox: {
    mt: { xs: 2, md: 0 },
    display: "flex",
    justifyContent: { xs: "center", md: "space-between" },
    gap: 2,
    "& img": {
      width: "15px",
      height: "15px",
      color: "black"
    }
  },
};

export default styles;
