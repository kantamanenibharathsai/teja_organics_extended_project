const otpCardStyles = {
  cardOpenParentContainer: {
    position: "absolute",
    top: "190px",
    zIndex: 2,
    transition: "0.7s ease all",
    width: "395px",
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
    width: "350px",
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

  heading: {
    color: "#32373C",
    font: "600 17px Montserrat",
    mb: 3,
  },

  otpNumsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "50px",
    justifyContent: "space-between",
    alignItems: "center",
  },

  continueBtn: {
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

  spinnerContainerStyle: {
    background: "#f2f7f4",
    height: "44px",
    alignSelf: "strech",
    borderRadius: "13px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  spinner: {
    "&:before": {
      content: '""',
      boxSizing: "border-box",
      position: "absolute",
      // top: '50%',
      left: "50%",
      width: "25px",
      height: "25px",
      borderRadius: "50%",
      border: "1px solid #f6f",
      borderTopColor: "#0e0",
      borderRightColor: "#0dd",
      borderBottomColor: "#f90",
      animation: "spinnerAnim .6s linear infinite",
      mt: "-12px",
    },
    "@keyframes spinnerAnim": {
      to: {
        transform: "rotate(360deg)",
      },
    },
  },
};

export default otpCardStyles;
