const profileStyles = {
  cardOpenParentContainer: {
    position: "absolute",
    top: "190px",
    zIndex: 2,
    transition: "1s ease all",
    width: "405px",
    overflowX: "hidden",
    right: 0,
    display: { xs: "none", lg: "flex" },
    justifyContent: "flex-end",
    opacity: 1,
  },

  cardParentCloseContainer: {
    position: "absolute",
    top: "190px",
    width: 0,
    zIndex: 2,
    transition: "1s ease all",
    overflowX: "hidden",
    right: 0,
    height: "480px",
    overflowY: "hidden",
    display: { xs: "none", lg: "flex" },
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
    width: "360px",
    overflowX: "hidden",
    opacity: 1,
    transition: "1s ease all",
    display: "flex",
    flexDirection: "column",
    gap: 2,
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
    width: 0,
    overflowX: "hidden",
    transition: "1s ease all",
    opcaity: 0,
    display: "flex",
    flexDirection: "column",
    gap: 2,
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
    transition: "1s ease all",
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
    transition: "1s ease all",
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

  profileHeading: {
    font: "500 15px Montserrat",
    color: "#32373C",
  },

  profileImg: {
    width: "100px",
    height: "100px",
    borderRadius: "15px",
  },

  profileName: {
    font: "600 14px Montserrat",
    color: "#32373C",
  },

  phoneNum: {
    font: "500 10px Montserrat",
    color: "#056839",
  },

  bgColorContainer: {
    background: "#EAEEF3",
    width: "70px",
    height: "70px",
    borderRadius: "20px",
    display: "grid",
    placeItems: "center",
    cursor: "pointer"
  },

  icon: {
    width: "16px",
    height: "16px",
  },

  imageText: {
    font: "200 10px Montserrat",
    color: "#1D2027",
    mt: -2,
  },

  smallIcon: {
    width: "12px",
    height: "12px",
  },

  iconText: {
    font: "200 11px Montserrat",
    color: "#989898",
  },

  cursor: {
    cursor: "pointer",
  },
};

export default profileStyles;
