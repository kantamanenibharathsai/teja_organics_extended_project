const landingPageStyles = {
  mainContainer: {
    minHeight: "100vh",
    width: "100%",
    position: "relative",
  },

  carouselAccordionParentContainer: {
    position: "relative",
  },

  accordionCarouselContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: { xs: "100%", lg: "85%" },
    margin: "auto",
  },

  sideButtonsContainer: {
    position: "absolute",
    right: 0,
    top: "40px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  backgroundColorContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    background: "#056839",
    height: { xs: "40px", lg: "45px" },
    width: { xs: "40px", lg: "45px" },
    p: 0,
    cursor: "pointer",
  },

  displayInMobile: {
    display: { xs: "flex", lg: "none" },
  },

  userProfileImage: {
    width: { xs: "14.5px", lg: "16px" },
    height: { xs: "14.5px", lg: "16px" },
  },

  rightSideDrawer: {
    height: "100%",
    width: 0,
    backgroundColor: "#fff",
  },

  rightSideDrawerOpened: {
    height: "100%",
    width: { xs: "75%", sm: "48%", md: "30%" },
    position: "fixed",
    zIndex: 1,
    top: 0,
    right: 0,
    backgroundColor: "#fff",
    overflowX: "hidden",
    transition: "1.5s ease all",
    display: { xs: "flex", lg: "none" },
    flexDirection: "column",
    justifyContent: "center",
    boxShadow:
      "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
  },

  rightSideDrawerChild: {
    height: "70%",
    width: "100%",
    background: "#fff",
  },
};

export default landingPageStyles;
