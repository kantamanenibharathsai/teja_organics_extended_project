const latestNewsStyles = {
  latestNewsHeading: {
    fontSize: "25px",
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#32373C",
  },

  cardsContainer: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: { sm: "space-between" },
    alignItems: { xs: "center", lg: "strech" },
  },

  cardContainer: {
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    boxShadow: `rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px`,
    width: { xs: "100%", sm: "57%", md: "40%" },
    borderRadius: "12px",
    alignItems: { xs: "center" },
  },

  leftImage: {
    width: { xs: "100%", lg: "295px" },
    height: "270px",
    objectFit: "cover",
    borderTopLeftRadius: "12px",
    borderBottomLeftRadius: "12px",
    borderTopRightRadius: { xs: "12px", lg: 0 },
    borderBottomRightRadius: { xs: "12px", lg: 0 },
  },

  rightContainer: {
    width: { xs: "100%", lg: "295px" },
    height: "270px",
    padding: "15px 10px 10px 10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  heading: {
    font: "600 15px Montserrat",
    color: "#32373C",
  },

  paragraph: {
    font: "500 12px Montserrat",
    color: "#32373C",
  },

  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
  },

  dateBtn: {
    background: "#fff",
    font: "600 12px Montserrat",
    color: "#424549",
    textTransform: "lowercase",
    width: "50%",
    height: "45px",
    "&:hover": {
      background: "#fff",
      font: "500 12px Montserrat",
      color: "#424549",
      textTransform: "lowercase",
      width: "50%",
      height: "45px",
    },
  },

  readMoreBtn: {
    background: "#E2E2E2",
    font: "600 12px Montserrat",
    color: "#424549",
    textTransform: "lowercase",
    width: "50%",
    height: "45px",
    "&:hover": {
      background: "#E2E2E2",
      font: "500 12px Montserrat",
      color: "#424549",
      textTransform: "lowercase",
      width: "50%",
      height: "45px",
    },
  },
};

export default latestNewsStyles;
