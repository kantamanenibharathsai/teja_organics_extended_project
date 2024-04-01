const singlePoductDetailsReviewStyles = {
  body: {
    display: "flex",
    gap: { xs: "25px", lg: "0" },
    flexDirection: { xs: "column", lg: "row" },
    justifyContent: { xs: "center", lg: "space-between" },
  },

  product: {
    width: { xs: "100%", sm: "100%", md: "80%" },
    height: { xs: "300px", lg: "auto" },
  },

  eachproducttitle: {
    fontSize: { sm: "15px", md: "22px" },
    fontWeight: "600",
    color: "#32373C",
    fontFamily: "Montserrat",
  },

  rupee: {
    fontSize: "16px",
    color: "#88BB22",
    fontWeight: "600",
    fontFamily: "Montserrat",
  },

  ruppeicon: {
    fontSize: "16px",
    color: "#88BB22",
    fontWeight: "600",
    fontFamily: "Montserrat",
  },

  rupeecontainer: { display: "flex", gap: "10px", alignItems: "center" },

  divider: { border: "1px solid #D9D9D9", height: "10px" },

  catbtn: {
    fontFamily: "Montserrat",
    fontSize: "13px",
    fontWeight: "600",
    background: "#E2E2E2",
    padding: "10px 10px",
    borderRadius: "0px 10px 10px 0px",
    width: "100px",
    opacity: "0.6",
    textAlign: "center",
  },

  barndbtn: {
    fontFamily: "Montserrat",
    fontSize: "13px",
    fontWeight: "600",
    background: "#E2E2E2",
    padding: "10px 10px",
    borderRadius: "0px 10px 10px 0px",
    width: "70px",
    opacity: "0.6",
    textAlign: "center",
  },

  message: {
    fontSize: { sm: "14px", md: "15px" },
    fontWeight: "600",
    opacity: "0.6",
    fontFamily: "Montserrat",
    mb: 1,
  },

  categorycontainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  addtocart: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #88BB22",
    borderRadius: "10px",
  },

  cart: {
    padding: "10 0px",
    width: "50%",
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "500",
    fontFamily: "Montserrat",
    textTransform: "capitalize",
    background: "#fff",
    color: "#000",
    "&:hover": {
      padding: "10 0px",
      width: "50%",
      textAlign: "center",
      fontSize: "14px",
      fontWeight: "500",
      fontFamily: "Montserrat",
      textTransform: "capitalize",
      background: "#fff",
      color: "#000",
    },
  },

  buynow: {
    padding: "10px 0px",
    width: "50%",
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "white",
    background: "#88BB22",
    borderRadius: "0px 7px 7px 0px",
    textTransform: "capitalize",
    "&:hover": {
      padding: "10px 0px",
      width: "50%",
      textAlign: "center",
      fontSize: "14px",
      fontWeight: "500",
      fontFamily: "Montserrat",
      color: "white",
      background: "#88BB22",
      borderRadius: "0px 7px 7px 0px",
      textTransform: "capitalize",
    },
  },

  descriptioncontainer: { marginTop: "20px" },

  descriptiontitle: {
    fontSize: "22x",
    fontWeight: "700",
    fontFamily: "Montserrat",
  },

  li: {
    fontSize: "14px",
    fontWeight: "500",
    fontFamily: "Montserrat",
    opacity: "0.6",
    marginTop: "8px",
    lineHeight: "20px",
  },

  reviewcontainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  profile: { width: "50px", height: "50px" },

  profilename: { fontSize: "14px" },

  review: { display: "flex", flexDirection: "column" },

  profilecontainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    alignItems: "center",
  },

  date: { fontSize: "11px", marginTop: "3px" },

  leftsection: {
    display: "flex",
    border: "1px solid #E2E2E2",
    width: { xs: "100%", lg: "32%" },
    flexDirection: "column",
    padding: { xs: "20px 4px", sm: "25px 20px" },
    borderRadius: "10px",
    height: { xs: "auto", lg: "550px" },
  },

  reviewtitle: {
    fontSize: "16px",
    fontWeight: "500",
    fontFamily: "Montserrat",
    mb: 1,
  },

  reviewsUnorderedList: {
    listStyle: "none",
    m: 0,
    p: 0,
    display: "flex",
    flexDirection: "column",
    gap: 1.8,
    width: "100%",
  },

  details: {
    fontSize: { xs: "14px", sm: "13px" },
    fontWeight: "500",
    fontFamily: "Montserrat",
    lineHeight: { xs: "26px", sm: "20px" },
    opacity: "0.6",
    padding: "15px 0px",
    borderBottom: "1px solid grey",
  },

  productcontainer: {
    width: { xs: "100%", sm: "48%" },
    background: "#E2E2E2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
  },

  currency: { display: "flex", justifyContent: "center", alignItems: "center" },
  container: {
    display: "flex",
    justifyContent: "space-between",
    width: { xs: "100%", lg: "64%" },
  },

  container1: { display: "flex", flexDirection: "column" },

  container2: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: { xs: "column-reverse", sm: "row" },
    gap: { xs: "15px", sm: "0px" },
  },

  rightcontainer: {
    width: { xs: "100%", sm: "50%" },
    display: "flex",
    flexDirection: "column",
    gap: { sm: "5px", md: "20px" },
  },
};

export default singlePoductDetailsReviewStyles;
