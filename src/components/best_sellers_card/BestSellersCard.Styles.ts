const bestSellersCardStyles = {
  cardContainer: {
    boxShadow:
      "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
    pb: 2,
    width: { xs: "100%", sm: "48%", md: "48%", lg: "24%", xl: "20%" },
    display: "flex",
    flexDirection: "column",
    gap: 1.8,
    borderRadius: 2,
    scrollSnapAlign: "start",
    cursor: "pointer",
  },

  organicFoodText: {
    width: { xs: "90px", sm: "150px" },
    height: { xs: "38px", sm: "45px" },
    background: "#E2E2E2",
    borderTopLeftRadius: "7px",
    borderBottomRightRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: "500 14px Montserrat",
    color: "#424549",
  },

  favoriteIconImg: {
    alignSelf: "flex-end",
    mr: 1.5,
    width: { xs: "15px", sm: "20px" },
    height: { xs: "15px", sm: "20px" },
  },

  productImage: {
    width: { xs: "130px", sm: "190px" },
    height: { xs: "180px", sm: "220px" },
  },

  productName: {
    font: "500 15px Montserrat",
    color: "#424549",
  },

  productPrice: {
    font: "500 15px Montserrat",
    color: "#898989",
  },

  increDecreBtnsStack: {
    border: "1px solid #E2E2E2",
    borderLeft: "1px solid #E2E2E2",
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px",
    width: "45%",
    px: { xs: 3.8, sm: 0 },
    "&:hover": {
      borderLeft: "1px solid #E2E2E2",
    },
  },

  increDecreBtn: {
    width: "auto",
    height: { xs: "40px", sm: "44px" },
    color: "#424549",
    "&:hover": {
      width: "auto",
      height: { xs: "40px", sm: "44px" },
      background: "#ffffff",
      color: "#424549",
    },
  },

  incrementBtn: {
    "&:hover": {},
  },

  productQuantity: {
    font: "500 16px Montserrat",
    color: "#898989",
  },

  addToCartBtn: {
    borderRadius: 0,
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",
    font: "500 14px Montserrat",
    color: "#424549",
    background: "#E2E2E2",
    width: "55%",
    height: { xs: "42px", sm: "46px" },
    border: "0px",
    textTransform: "capitalize",
    "&:hover": {
      borderRadius: 0,
      width: "55%",
      height: { xs: "42px", sm: "46px" },
      background: "#E2E2E2",
      color: "#424549",
      border: "0px",
      borderTopRightRadius: "8px",
      borderBottomRightRadius: "8px",
      textTransform: "capitalize",
    },
  },
};

export default bestSellersCardStyles;
