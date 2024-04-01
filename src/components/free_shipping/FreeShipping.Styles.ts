export const styles = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    alignItems: "center",
    gap: { xs: 4, lg: 0 },
    justifyContent: "space-between",
    // border: "2px solid red",
  },

  eachShippingBox: {
    border: "2px solid #88BB22",
    textAlign: "center",
    margin: "0px 0px",
    padding: { xs: "20px 0px", lg: "50px 0px" },
    maxWidth: { xs: "49%", lg: "100%" },
    flexGrow: 1,
    position: "relative",
    borderRadius: "9px",
  },

  eachShippingBoxImgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: { xs: "40px", lg: "70px" },
    height: { xs: "40px", lg: "70px" },
    background: "#88BB22",
    position: "absolute",
    top: { xs: -20, lg: -40 },
    left: { xs: "40%", sm: "45%", md: "48%" },
    borderRadius: "50%",
  },

  dealsOftheDayBoxImgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: { xs: "40px", lg: "70px" },
    height: { xs: "40px", lg: "70px" },
    background: "#88BB22",
    position: "absolute",
    top: { xs: -20, lg: -40 },
    bottom: { xs: 0, lg: -30 },
    left: { xs: "40%", sm: "45%", md: "48%" },
    borderRadius: "50%",
  },

  storePickupBoxImgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: { xs: "40px", lg: "70px" },
    height: { xs: "40px", lg: "70px" },
    background: "#88BB22",
    position: "absolute",
    top: { xs: -20, lg: -40 },
    bottom: { xs: 0, lg: -30 },
    left: { xs: "40%", sm: "45%", md: "48%" },
    borderRadius: "50%",
  },

  coupenCodeBoxImgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: { xs: "40px", lg: "70px" },
    height: { xs: "40px", lg: "70px" },
    background: "#88BB22",
    position: "absolute",
    top: { xs: -20, lg: -40 },
    bottom: { xs: 0, lg: -30 },
    left: { xs: "40%", sm: "45%", md: "48%" },
    borderRadius: "50%",
  },

  title: {
    fontSize: { xs: "13px", lg: "15px" },
    margin: "5px 0",
    fontWeight: 700,
    color: "#32373C",
    fontFamily: "Montserrat",
  },

  paragraph: {
    fontSize: { xs: "9px", lg: "13px" },
    fontWeight: 300,
    color: "#32373C",
    fontFamily: "Montserrat",
  },

  eachShippingBoxImg: {
    fontSize: "40px",
    color: "#fff",
  },

  imageContainer: {
    width: { lg: "35%", xl: "40%" },
  },

  image: {
    width: "100%",
    height: { xs: "150px", sm: "250px", lg: "400px" },
    objectFit: "cover",
  },

  icon: {
    width: { xs: "20px", lg: "40px" },
    height: { xs: "20px", lg: "40px" },
  },
};
