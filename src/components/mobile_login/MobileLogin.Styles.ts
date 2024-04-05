const mobileLoginStyles = {
  cardOpenParentContainer: {
    position: "absolute",
    // zIndex: 1,
    transition: "2s ease",
    width: "100%",
    bottom: 0,
    display: { xs: "flex", lg: "none" },
    justifyContent: "center",
    opacity: 1,
    height: "100vh",
    // overflow: "hidden",
    // border: "4px solid yellow",
  },

  cardCloseParentContainer: {
    position: "absolute",
    // zIndex: 1,
    width: 0,
    transition: "2s ease",
    bottom: 0,
    height: 0,
    overflow: "hidden",
    display: { xs: "flex", lg: "none" },
    justifyContent: "center",
    opacity: 0,
    border: "4px solid yellow",
  },

  cardOpenContainer: {
    // boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderTopLeftRadius: "18px",
    borderBottomLeftRadius: "18px",
    background: "#fff",
    padding: "45px 15px",
    position: "relative",
    zIndex: 1,
    top: "0px",
    right: 0,
    width: { xs: "100%", sm: "80%", md: "65%" },
    overflowX: "hidden",
    opacity: 1,
    transition: "1s ease all",
  },

  cardCloseContainer: {
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderTopLeftRadius: "18px",
    borderBottomLeftRadius: "18px",
    background: "#fff",
    padding: "0",
    position: "relative",
    zIndex: 1,
    top: "0px",
    right: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: 0,
    overflowX: "hidden",
    transition: "1s ease all",
    opcaity: 0,
  },

  cardChildContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  heading: {
    font: "600 22px Montserrat",
    color: "#32373C",
  },

  labelInputContainer: {
    border: "2px solid #7EAD20",
    padding: "10px 14px",
    display: "flex",
    flexDirection: "column",
    gap: 0.6,
    borderRadius: "12px",
    width: "100%",
  },

  label: {
    font: "600 13px Montserrat",
    color: "#32373C",
    width: "100%",
    opacity: 0.6,
  },

  inputFeild: {
    border: "none",
    outline: "none",
    font: "500 15px Montserrat",
    color: "#32373C",
    width: "100%",
  },

  rememberMe: {
    font: "500 15px Poppins",
    color: "#32373C",
  },

  loginBtn: {
    background: "#056839",
    height: "44px",
    alignSelf: "strech",
    color: "#fff",
    font: "600 14px Poppins",
    borderRadius: "13px",
    "&:hover": {
      background: "#056839",
      height: "44px",
      alignSelf: "strech",
      color: "#fff",
      font: "600 14px Poppins",
      borderRadius: "13px",
    },
  },

  commonStyle: {
    font: "500 14px Poppins",
    color: "#32373C",
  },

  clickHereText: {
    font: "500 14px Poppins",
    color: "#056839",
    cursor: "pointer",
  },

  drawerCloseIconBtn: {
    background: "#88BB22",
    width: "34px",
    height: "34px",
    borderRadius: "10px",
    outline: "none",
    cursor: "pointer",
    border: 0,
    "&:hover": {
      background: "#88BB22",
      width: "34px",
      height: "34px",
      borderRadius: "10px",
      outline: "none",
      cursor: "pointer",
      border: 0,
    },
  },

  closeIcon: {
    width: "15px",
    height: "15px",
    color: "#fff",
  },

  errorMsg: {
    color: "red",
    font: "200 11px Poppins",
  },
};

export default mobileLoginStyles;
