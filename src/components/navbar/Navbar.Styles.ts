const navbarStyles = {
  mainContainer: {
    width: "100%",
    position: "relative",
  },

  topContainer: {
    background: "#32373C",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "40px",
  },

  topChildContainer: {
    width: { xs: "95%", lg: "85%" },
    height: "inherit",
  },

  navbarTopText: {
    font: "500 14px Poppins",
    color: "#C1C3C4",
  },

  navbarTopTextColor: {
    color: "#88BB22",
  },

  topRightContainer: {
    display: { xs: "none", lg: "flex" },
  },

  divider: {
    border: "1px solid #C1C3C4",
    height: "40px",
  },

  navbarTopIcon: {
    width: "18px",
    height: "18px",
  },

  middleContainer: {
    background: "#fff",
    width: "100%",
    py: 2.7,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  middleChildContainer: {
    width: { xs: "95%", lg: "85%" },
    height: "inherit",
  },

  tejaOrganicsLogo: {
    width: { xs: "110px", sm: "165px" },
    height: { xs: "48px", sm: "59px" },
  },

  textFieldContainer: {
    width: "360px",
    display: { xs: "none", lg: "block" },
  },

  textFieldStyle: {
    "& .MuiInputBase-root": {
      paddingRight: "0px",
    },
    "& .MuiInputBase-input": {
      padding: "0px",
      pl: "18px",
      paddingRight: { xs: "18px", lg: 0 },
      height: "44px",
      background: "#fff",
      mr: { xs: "-7.8px", lg: 0 },
    },
    input: {
      "&::placeholder": {
        color: "#232323",
        font: "500 14px Poppins",
      },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: { xs: "0", lg: "1px solid #88BB22" },
        borderRadius: "10px",
        paddingRight: 0,
      },
      "&.Mui-focused fieldset": {
        border: { xs: "0", lg: "1px solid #88BB22" },
        paddingRight: 0,
        borderRadius: "10px",
      },
      "&:hover fieldset": {
        borderColor: "#88BB22",
        paddingRight: 0,
        borderRadius: "10px",
      },
    },
  },

  searchIconContainer: {
    background: "#88BB22",
    height: "44px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "45px",
    borderRadius: "0px 10px 10px 0px",
  },

  searchIcon: {
    color: "#000",
    width: "15px",
    height: "15px",
  },

  phoneCallImage: {
    width: { xs: "30px", sm: "36px" },
    height: { xs: "30px", sm: "36px" },
  },

  phoneNumStyle: {
    font: "500 16px Poppins",
    color: "#32373C",
    fontSize: { xs: "13px", sm: "16px" },
  },

  loginButtonStyle: {
    display: { xs: "none", lg: "inline" },
    background: "#056839",
    borderRadius: "10px",
    width: "124px",
    height: "46px",
    font: "600 14px Poppins",
    color: "#FFFFFF",
    "&:hover": {
      background: "#056839",
      borderRadius: "10px",
      width: "124px",
      height: "46px",
      font: "600 14px Poppins",
      color: "#FFFFFF",
    },
  },

  bottomContainer: {
    background: "#88BB22",
    width: "100%",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  bottomChildContainer: {
    display: "flex",
    alignItems: "center",
    height: "inherit",
    width: { xs: "100%", lg: "85%" },
    justifyContent: { xs: "space-between", lg: "flex-start" },
    gap: { xs: 0, lg: 2 },
  },

  browseCategoryContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "inherit",
    width: { xs: "88%", sm: "90%", lg: "300px" },
    background: "#5FA800",
    cursor: "pointer",
    position: "relative",
  },

  iconTextContainer: {
    display: "flex",
    alignItems: "center",
    width: "90%",
    gap: 2,
  },

  browseCategoryImage: {
    width: "16px",
    height: "13px",
  },

  searchContainerMobile: {
    background: "#88bb22",
    display: { xs: "flex", lg: "none" },
    height: "inherit",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },

  tabsText: {
    font: "500 15px Poppins",
    color: "#FFFFFF",
  },

  accordionsDropDownContainerOpen: {
    position: "absolute",
    top: "50px",
    display: "flex",
    zIndex: 4,
    flexDirection: "column",
    // height: "400px",
    width: { xs: "99%", sm: "100%", lg: "300px" },
    border: "1px solid #5FA800",
    transition: "4s ease all",
    // height: "auto",
    // maxHeight: "auto",
    // overflowY: "auto",
    opacity: 1,
  },

  accordionsDropDownContainerClose: {
    position: "absolute",
    top: "50px",
    display: "flex",
    zIndex: 4,
    flexDirection: "column",
    // height: "400px",
    width: { xs: "99%", sm: "100%", lg: "300px" },
    border: "1px solid #5FA800",
    transition: "4s ease all",
    opacity: 0,
    // height: "0px",
    // maxHeight: "auto",
    // overflowY: "auto",
  },

  bottomTabsUnorderedListContainer: {
    display: { xs: "none", lg: "flex" },
    alignItems: "center",
    height: "inherit",
    listStyle: "none",
    padding: 0,
    margin: 0,
    width: "68%",
    gap: 1.5,
    justifyContent: "space-between",
    // border: "2px solid red",
  },

  tabListItem: {
    width: "18%",
    font: "500 14px Poppins",
    color: "#FFFFFF",
    background: "#4aa14b",
    borderRight: "1px solid #ffffff",
    height: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    "&:last-child": {
      borderRight: "0px",
    },
  },

  modalContainer: {
    display: "none",
    position: "absolute",
    zIndex: 1,
    paddingTop: "20px",
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  mobileSearchBarCloseiconContainer: {
    display: { xs: "flex", lg: "none" },
    flexDirection: "column",
    gap: 3,
    width: { xs: "97%", sm: "90%", md: "90%" },
    margin: "auto",
  },

  modalTextFieldContainer: {
    display: { xs: "inline", lg: "block" },
    width: "100%",
  },

  closeIconButton: {
    borderRadius: "10px",
    background: "rgba(0, 0, 0, 0.4)",
    "&:hover": {
      borderRadius: "10px",
      background: "rgba(0, 0, 0, 0.4)",
    },
  },

  closeIcon: {
    color: "#FFFFFF",
  },

  loggedInUserImage: {
    width: "50px",
    height: "50px",
    borderRadius: "8px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  },

  profileText: {
    font: "500 14px Poppins",
    color: "#056839",
  },

  userName: {
    font: "500 15px Poppins",
    color: "#1D2027",
  },
};

export default navbarStyles;
