const accordionStyles = {
  accordion: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid #5FA800",
    transition: "1s ease",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    width: "100%",
  },

  accordianSummary: {
    px: { xs: "3%", sm: "3.9%", md: "4.3%", lg: "0.6rem" },
    py: "0.6rem",
    font: "500 13px Poppins",
    color: "#32373C",
  },

  categoryName: {
    font: "500 13px Poppins",
    color: "#32373C",
  },

  accordionCategoryImage: {
    width: "24px",
    height: "24px",
  },

  accordionDetails: {
    transition: "1s ease all",
    pr: "1rem",
    pl: "2.8rem",
    font: "500 13px Poppins",
    color: "#32373C",
  },

  arrowIconButton: {
    width: "18px",
    height: "18px",
    color: "#32373C",
    transition: "1s ease all",
  },
};

export default accordionStyles;
