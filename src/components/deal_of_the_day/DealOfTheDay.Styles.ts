export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 2.1,
    "& button": {
        border: "none",
        cursor: "pointer"
    }
  },

  dealsHead: {
    fontSize: "28px",
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#32373C",
  },

  dealsContainer: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: { xs: 3, sm: 0 },
  },

  dealsBox: {
    display: "flex",
    justifyContent: "space-between",
    width: { xs: "100%", sm: "49%", md: "48.5%", lg: "32%", xl: "32%" },
    mb: { xs: 0, sm: 3.1, xl: 3 },
  },

  imageContainer: {
    border: "1px solid #e2e2e2",
    width: "48%",
    height: { xs: "190px", lg: "225px" },
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "120px",
    height: "160px",
  },

  dealsBoxRight: {
    width: "48%",
    height: { xs: "190px", lg: "225px" },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  dealsBoxRightTag: {
    width: { xs: "100px", lg: "150px" },
    background: "#E2E2E2",
    padding: "10px",
    borderTopLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    textAlign: "center",
    font: "600 12px Montserrat",
    color: "#32373C",
  },

  activedealsBoxRightTag: {
    width: "150px",
    background: "#88BB22",
    color: "#fff",
    padding: "10px",
    borderTopLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    textAlign: "center",
  },

  dealsBoxRightTitle: {
    font: "600 13px Montserrat",
    color: "#32373C",
  },

  dealsBoxRightPrice: {
    display: "flex",
    alignItems: "center",
    gap: 0.7,
  },

  price: {
    font: "600 12px Montserrat",
    color: "#898989",
  },

  rating: {
    fontSize: "14px",
  },

  dealsBtn: {
    justifyContent: "space-between",
    height: "36px",
    display: "flex",
    alignItems: "center",
    px: 1,
  },

  dealsBoxRightButton: {
    border: "1px solid #E2E2E2",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
  },

  addToCart: {
    padding: "10px",
    textAlign: "center",
    cursor: "pointer",
    background: "#E2E2E2",
    font: "500 14px Montserrat",
    color: "#898989",
  },

  activeaddToCart: {
    padding: "10px",
    textAlign: "center",
    cursor: "pointer",
    background: "#88BB22",
    color: "#fff",
  },
};
