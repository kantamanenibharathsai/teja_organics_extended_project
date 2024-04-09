const mobileProfileStyles = {
  cardOpenParentContainer: {
    position: "absolute",
    transition: "2s ease",
    width: "100%",
    bottom: 0,
    display: { xs: "flex", lg: "none" },
    justifyContent: "center",
    opacity: 1,
    height: "100vh",
    border: "4px solid yellow",
  },

  cardCloseParentContainer: {
    position: "absolute",
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
    display: "flex",
    flexDirection: "column",
    gap: 3,
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
    justifyContent: "center",
    width: 0,
    overflowX: "hidden",
    transition: "1s ease all",
    opcaity: 0,
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },

  heading: {
    font: "600 22px Montserrat",
    color: "#32373C",
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
    width: "65px",
    height: "65px",
    borderRadius: "20px",
    display: "grid",
    placeItems: "center",
  },

  icon: {
    width: "14px",
    height: "14px",
  },

  imageText: {
    font: "200 8px Montserrat",
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

export default mobileProfileStyles;
