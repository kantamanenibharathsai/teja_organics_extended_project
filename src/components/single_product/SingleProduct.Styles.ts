const singleProductStyles = {
  mainContainer: {
    width: "100%",
    position: "relative",
    // border: "7px solid red",
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

  backgroundModalContainerOpened: {
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.6)",
    transition: "0s ease all",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    opacity: 1,
    display: { xs: "block", lg: "none" },
  },

  backgroundModalContainerClosed: {
    height: "auto",
    width: 0,
    opacity: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    transition: "0s ease all",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    display: { xs: "block", lg: "none" },
  },

  drawerCloseIconBtnOpen: {
    display: { lg: "none" },
    position: "absolute",
    top: "13%",
    right: "250px",
    background: "#88BB22",
    width: "45px",
    height: "45px",
    borderRadius: "0px",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    outline: "none",
    cursor: "pointer",
    zIndex: 2,
    border: 0,
    transition: "2s ease all",
    "&:hover": {
      background: "#88BB22",
      width: "45px",
      height: "45px",
      borderRadius: "0px",
      borderTopLeftRadius: "10px",
      borderBottomLeftRadius: "10px",
      outline: "none",
      cursor: "pointer",
      border: 0,
    },
  },

  drawerCloseIconBtnClosed: {
    opacity: 0,
    position: "absolute",
    top: "13%",
    right: "0px",
    background: "#88BB22",
    width: "45px",
    height: "45px",
    borderRadius: "0px",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    outline: "none",
    cursor: "pointer",
    zIndex: 2,
    border: 0,
    transition: "2s ease all",
    "&:hover": {
      background: "#88BB22",
      width: "45px",
      height: "45px",
      borderRadius: "0px",
      borderTopLeftRadius: "10px",
      borderBottomLeftRadius: "10px",
      outline: "none",
      cursor: "pointer",
      border: 0,
    },
  },

  closeIcon: {
    width: "20px",
    height: "20px",
    color: "#fff",
  },

  rightSideDrawer: {
    height: "100%",
    width: "0px",
    position: "absolute",
    zIndex: 2,
    top: 0,
    right: 0,
    backgroundColor: "#fff",
    overflowX: "hidden",
    transition: "2s ease all",
    display: { xs: "flex", lg: "none" },
    flexDirection: "column",
    justifyContent: "center",
    boxShadow:
      "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
  },

  rightSideDrawerOpened: {
    height: "100%",
    width: "250px",
    position: "absolute",
    zIndex: 2,
    top: 0,
    right: 0,
    backgroundColor: "#fff",
    overflowX: "hidden",
    transition: "2s ease all",
    display: { xs: "flex", lg: "none" },
    flexDirection: "column",
    justifyContent: "center",
    boxShadow:
      "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
  },

  rightSideDrawerChildOpened: {
    height: "70%",
    width: "100%",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "2s ease all",
    opacity: 1,
  },

  rightSideDrawerChildClosed: {
    height: "70%",
    width: "0px",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "2s ease all",
    opacity: 0,
  },

  tabsUnorderedListContainer: {
    listStyle: "none",
    p: 0,
    m: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    transition: "2s ease all",
  },

  tabListItem: {
    font: "500 18px Montserrat",
    color: "#000",
    textAlign: "center",
  },

  navbarTopTextColor: {
    color: "#88BB22",
    font: "500 16px Poppins",
  },

  navbarTopText: {
    font: "500 16px Poppins",
    color: "#000",
  },

  navbarTopIcon: {
    width: "18px",
    height: "18px",
    color: "#32373C",
  },

  commonHeadingStyle: {
    font: "700 28px Montserrat",
    color: "#32373C",
  },

  bestSellersUnordredList: {
    listStyleType: "none",
    p: 0,
    m: 0,
    display: "flex",
    flexDirection: "row",
    gap: { xs: 3, sm: "50px", md: 4.5, lg: 0.5 },
    justifyContent: "space-between",
    position: "relative",
    overflowX: { xs: "auto", lg: "hidden" },
    scrollSnapType: "x mandatory",
    scrollBehavior: "smooth",
  },

  homeBodyContainer: {
    width: { xs: "95%", sm: "90%", lg: "85%" },
    margin: "auto",
    mt: 10,
    mb: 10,
    display: "flex",
    flexDirection: "column",
    gap: "100px",
  },

  bestSellerCarouselArrowBtn: {
    background: "#fff",
    borderRadius: "50%",
    width: "55px",
    height: "55px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    position: "absolute",
    zIndex: 2,
    top: "40%",
    right: -5,
    display: { xs: "none", lg: "inline" },
  },
};

export default singleProductStyles;
