export const contact = {
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
    width: "100%",
    boxSizing: "border-box",
    padding: { xs: "20px 20px", md: "20px 80px" },
  },
  contactHeadingContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  heading: {
    color: "#32373C",
    fontSize: "20px",
    fontWeight: "900",
    textAlign: "left",
  },
  contactInnerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: { xs: "100%", md: "80%" },
    height: "100%",
    boxSizing: "border-box",
    padding: "20px 0px",

    marginTop: { xs: "20px", md: "50px" },
  },
  contactRowContainer: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    padding: { md: "20px 0px" },
  },
  firstContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: { xs: "100%", md: "50%" },
    marginBottom: { xs: "20px", md: "0px" },
  },
  firstContainer1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: { xs: "100%", md: "29%", lg: "20%" },
    marginBottom: { xs: "20px", md: "0px" },
  },
  firstColumnContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: "10px",
  },
  firstContainerHeading: {
    color: "#32373C",
    fontSize: { xs: "12px", lg: "14px", xl: "16px" },
    fontWeight: 450,
    lineHeight: "19px",
    textAlign: "left",
  },
  contactFormContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: { md: "80%" },
    marginTop: "30px",
  },
  contactText: {
    fontSize: { sm: 18 },
    color: "#32373C",
  },
  contactFormRowContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: "20px",
    gap: 2,
  },
  contactInput: {
    height: "45px",
    width: "46%",
    borderRadius: "10px",
    border: "2px solid #7EAD20",
    outline: "none",
    padding: "0 10px",
    color: "#32373C",
    fontWeight: 500,
  },
  contactTextArea: {
    height: "200px",
    width: "100%",
    borderRadius: "10px",
    border: "2px solid #7EAD20",
    outline: "none",
    padding: "10px",
    marginTop: "20px",
    color: "#32373C",
    fontWeight: 500,
    boxSizing: "border-box",
  },
  contactButton: {
    backgroundColor: "#056839",
    px: 5,
    py: 1,
    borderRadius: 2,
    border: "none",
    outline: "none",
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
    marginTop: "10px",
    alignSelf: "flex-start",
    "&: hover": {
      background: "#056839",
      color: "#fff",
    },
  },
  firstContainerImg: {
    height: { xs: "25px", md: "35px" },
    width: { xs: "25px", md: "35px" },
  },
  firstContainerImg1: {
    height: { xs: "30px", md: "40px" },
    width: { xs: "30px", md: "40px" },
  },
};
