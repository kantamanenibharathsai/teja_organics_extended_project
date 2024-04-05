const cartStyles = {
  mainContainer: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 2,
    justifyContent: "space-between",
    py: "15px",
    px: "5px",
    border: "2px solid red",
  },

  childContainer: {
    // border: "2px solid red",
    flexGrow: 1,
  },

  buttonContainer: {
    // border: "2px solid orange",
    width: "100%",
  },

  drawerCloseIconBtn: {
    background: "#056839",
    width: "38px",
    height: "38px",
    borderRadius: "10px",
    outline: "none",
    cursor: "pointer",
    border: 0,
    transition: "1s ease all",
    "&:hover": {
      background: "#056839",
      width: "38px",
      height: "38px",
      borderRadius: "10px",
      outline: "none",
      cursor: "pointer",
      border: 0,
      transition: "1s ease all",
    },
  },

  closeIcon: {
    width: "20px",
    height: "20px",
    color: "#fff",
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
    gap: { xs: 1, sm: 5.5, md: 7 },
    alignItems: "center",
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
  },
};

export default cartStyles;
