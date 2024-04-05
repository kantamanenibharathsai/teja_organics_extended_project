const desktopCartStyles = {
  cardOpenParentContainer: {
    position: "absolute",
    top: "190px",
    zIndex: 2,
    transition: "1s ease all",
    width: "440px",
    overflowX: "hidden",
    right: 0,
    display: "flex",
    justifyContent: "flex-end",
    opacity: 1,
    height: "500px",
    // border: "4px solid red"
  },

  cardParentCloseContainer: {
    position: "absolute",
    top: "190px",
    zIndex: 2,
    transition: "1s ease all",
    width: "0px",
    overflowX: "hidden",
    right: 0,
    display: "flex",
    justifyContent: "flex-end",
    opacity: 1,
    height: "500px",
  },

  cardOpenChildContainer: {
    transition: "1s ease all",
    width: "395px",
    overflowX: "hidden",
    right: 0,
    display: "flex",
    justifyContent: "flex-end",
    opacity: 1,
    height: "500px",
    background: "#fff",
    py: 3,
    px: 2,
    pl: 3,
    borderRadius: "15px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  },

  cardChildCloseContainer: {
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    background: "#fff",
    width: 0,
    zIndex: 2,
    transition: "1s ease all",
    overflowX: "hidden",
    right: 0,
    height: "380px",
    overflowY: "hidden",
    display: "flex",
    justifyContent: "flex-end",
    opacity: 0,
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

  childContainer: {
    // border: "2px solid red",
    flexGrow: 1,
  },

  cartHeading: {
    font: "400 18px Montserrat",
    color: "#32373C",
  },

  unorderedList: {
    listStyleType: "none",
    display: "flex",
    flexDirection: "column",
    gap: 2,
    width: "100%",
    flexGrow: 1,
    overflowY: "auto",
    height: "500px",
    // border: "2px solid orange",
  },

  listItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: { xs: "space-between", sm: "flex-start" },
    gap: { xs: 1, sm: 5.5, md: 7, lg: 2 },
    alignItems: "center",
    pr: 1,
  },

  imageContainer: {
    borderRadius: "10px",
    border: "1px solid #eaeef3",
    width: "60px",
    height: "76px",
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
  },

  productImage: {
    width: "55px",
    height: "76px",
    borderRadius: "15px",
  },

  itemName: {
    font: "400 13px Montserrat",
    color: "#32373C",
  },

  productPrice: {
    font: "500 13px Montserrat",
    color: "#88BB22",
  },

  shareDeleteIcon: {
    width: "18px",
    height: "18px",
    color: "#989898",
  },

  incremDecreBtns: {
    background: "#EAEEF3",
    borderRadius: "10px",
    py: 0.4,
  },

  plusIncreDecreBtn: {
    font: "500 11px Montserrat",
    color: "#424549",
    background: "transparent",
    outline: "none",
    border: "none",
    cursor: "pointer",
    padding: "5px 13px",
  },

  proceedToBuyBtn: {
    height: "45px",
    background: "#056839",
    borderRadius: "10px",
    font: "500 14px Montserrat",
    color: "#ffffff",
    "&:hover": {
      height: "45px",
      background: "#056839",
      borderRadius: "10px",
      font: "500 14px Montserrat",
      color: "#ffffff",
    },
  },

  cartEmptyContainer: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  cartEmptyImage: {
    width: "260px",
    height: "260px",
    mixBlendMode: "multiply",
  },
};

export default desktopCartStyles;
