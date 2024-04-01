const carouselStyles = {
  sliderWrapper: {
    position: "relative",
    margin: "0px",
    top: { xs: 0, lg: "20px" },
    width: { xs: "100%", lg: "72.5%", xl: "76.5%" },
  },

  slider: {
    display: "flex",
    aspectRatio: "16/9",
    overflowX: "auto",
    scrollSnapType: "x mandatory",
    scrollBehavior: "smooth",
    boxShadow: "0 1.5rem 3rem -0.75rem hsla(0, 0%, 0%, 0.25)",
    height: { lg: "420px" },
    width: { lg: "100%" },
  },

  carouselImage: {
    flex: "1 0 100%",
    scrollSnapAlign: "start",
    objectFit: "cover",
  },

  sliderNav: {
    display: "flex",
    columnGap: "0.5rem",
    position: "absolute",
    bottom: "0.7rem",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1,
    listStyle: "none",
    padding: 0,
  },

  dotContainer: {
    width: "0.4rem",
    height: "0.4rem",
    borderRadius: "50%",
    backgroundColor: "transparent",
    opacity: 0.75,
    border: "1px solid #fff",
    transition: "opacity ease 250ms",
    cursor: "pointer",
  },

  activeDotStyle: {
    border: 0,
    background: "green",
  },
};

export default carouselStyles;
