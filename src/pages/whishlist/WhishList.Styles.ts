const whishListStyles = {
    mainContainer : {
        minHeight: "100vh",
        width: "100%"
    },

    bodyContainer : {
        width: {xs:"96%", sm: "95%", md: "75%", lg: "90%", xl: "80%"},
        margin: "auto",
        py: 3,
        display: "flex",
        flexDirection : "column",
        gap: 3
    },

    wishlistHeading : {
        font: "600 25px Montserrat",
        color: "#32373C",

    },

    unorededList:{
        listStyle : "none",
        padding : 0,
        margin : 0,
        display: "flex",
        flexDirection: {xs:"column", md : "row"},
        gap: 3,
        alignItems: {xs: "strech", md: "center"},
        flexWrap: "wrap"
    },


}



export default whishListStyles