import { Box } from "@mui/material"
import carouselStyles from "./Carousel.Styles"
import { useEffect, useState } from "react"


interface IState {
    activeCarouselId: number
}

interface CarouselImageInterface {
    carouselId: number;
    carouselImage: string
}

const carouselImagesList: CarouselImageInterface[] = [
    { carouselId: 1, carouselImage: "https://s3-alpha-sig.figma.com/img/b982/7e9b/94dab8b06c0e343af895e4ef1c4ee146?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m3j55O0o0ltj-FnRGTxnC9z~HUfQXIjhe-zXcG2lEJRHtIKFh01Yp9imgEUIvPT-1RI7Oy4bC8-k9mm~vGO0YJhEB7FKWGfrf~sXebZsYpeIUy6~qwtVDKpE-xkhN0rH~r-RM~9cScnsUIAMRmoF5LCpoq-c2Yt9yWEbRAfXyMn9fbgpPr69Z4HGfK3y~Z4Lsb3Gs7qMPaWkbJWs1CyxTz9yYrUf0FuHjXh-FbP7F~x9NvL1y0s1WIyQ8s767ZE0zDRyTaOhVar9rVbJ0FDwbDkURrJ3gFkWhEiMsjhyK0MaHodTKpM5yY7DOdMMZLyfz-ry4X64dDrtRd5tEpF6fA__" },
    { carouselId: 2, carouselImage: "https://images.unsplash.com/photo-1525904097878-94fb15835963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { carouselId: 3, carouselImage: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { carouselId: 4, carouselImage: "https://images.unsplash.com/photo-1609780447631-05b93e5a88ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { carouselId: 5, carouselImage: "https://plus.unsplash.com/premium_photo-1664007755648-579d4f9dfe39?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { carouselId: 6, carouselImage: "https://plus.unsplash.com/premium_photo-1661320820224-4e26b71099ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
]

const Carousel = () => {
    const [activeCarouselId, setActiveCarouselId] = useState<IState["activeCarouselId"]>(1);

    const listDotEventHandler = (carouselId: number) => {
        setActiveCarouselId(carouselId)
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveCarouselId((prevId) =>
                prevId === carouselImagesList.length ? 1 : prevId + 1
            );
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Box sx={carouselStyles.sliderWrapper}>
            <Box sx={carouselStyles.slider}>
                {carouselImagesList.map(eachCarousel => (
                    <Box key={eachCarousel.carouselId} component={"img"} src={eachCarousel.carouselImage} sx={{ ...carouselStyles.carouselImage, display: eachCarousel.carouselId === activeCarouselId ? "inline" : "none" }} alt={`carousel-image-${eachCarousel.carouselId}`} />
                ))}
            </Box>
            <Box component="ul" sx={carouselStyles.sliderNav}>
                {carouselImagesList.map(eachCarousel => (
                    <Box component="li" onClick={() => listDotEventHandler(eachCarousel.carouselId)} key={eachCarousel.carouselId} sx={{ ...carouselStyles.dotContainer, ...(eachCarousel.carouselId === activeCarouselId && carouselStyles.activeDotStyle) }}></Box>))}
            </Box>
        </Box>
    )
}

export default Carousel