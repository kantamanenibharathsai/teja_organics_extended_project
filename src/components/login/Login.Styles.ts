const loginStyles = {
  cardOpenParentContainer: {
    position: "absolute",
    top: "190px",
    zIndex: 2,
    transition: "0.7s ease all",
    width: "495px",
    overflowX: "hidden",
    right: 0,
    display: "flex",
    justifyContent: "flex-end",
    opacity: 1,
    height: "auto",
  },

  cardParentCloseContainer: {
    position: "absolute",
    top: "190px",
    width: 0,
    zIndex: 2,
    transition: "0.7s ease all",
    overflowX: "hidden",
    right: 0,
    height: "480px",
    overflowY: "hidden",
    display: "flex",
    justifyContent: "flex-end",
    opacity: 0,
  },

  cardOpenContainer: {
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderTopLeftRadius: "18px",
    borderBottomLeftRadius: "18px",
    background: "#fff",
    padding: "45px 25px",
    position: "relative",
    zIndex: 1,
    top: "0px",
    right: 0,
    width: "450px",
    overflowX: "hidden",
    opacity: 1,
    transition: "0.7s ease all",
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
    transition: "0.7s ease all",
    opcaity: 0,
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
    transition: "0.7s ease all",
    display: "flex",
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
    transition: "0.7s ease all",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow:
      "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
    border: "5px solid yellow",
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
    font: "500 17px Montserrat",
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
    font: "500 15px Montserrat",
    color: "#32373C",
  },

  clickHereText: {
    font: "500 14px Montserrat",
    color: "#056839",
    cursor: "pointer",
  },

  drawerCloseIconBtnOpen: {
    position: "absolute",
    top: "50px",
    left: "0px",
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
    transition: "0.7s ease all",
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
    top: "30px",
    left: 0,
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
    transition: "0.7s ease all",
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

  errorMsg: {
    color: "red",
    font: "200 11px Poppins",
  },


  forgotPassword:{
    cursor: "pointer"
  },

  loginErrMsg:{
    font: "600 15px Poppins",
    color: "red",
    alignSelf: "flex-start",
  }
};

export default loginStyles;
