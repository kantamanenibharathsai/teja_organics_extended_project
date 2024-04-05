import { Box, Typography } from "@mui/material";

import image1 from "../../assets/testimonials_tab_images/profile1.png";
import image2 from "../../assets/testimonials_tab_images/profile2.png";
import image3 from "../../assets/testimonials_tab_images/profile3.png";
import image4 from "../../assets/testimonials_tab_images/profile4.png";
import { testimonial } from "./Styles";



const TestimonialsTab = () => {
  return (
    <Box sx={testimonial.testimonialContainer}>
      <Box sx={testimonial.testimonialHeadingContainer}>
        <Typography sx={testimonial.heading}>Testimonials</Typography>
      </Box>
      <Box sx={testimonial.testimonialBoxContainer}>
        <Box sx={testimonial.testimonialBox}>
          <Typography sx={testimonial.testimonialHeading}>
            This is one of the best Health + Organic stores in Hyderabad.
            Firstly the ambiance of the store is nice and especially the
            pleasant music. People in are very knowledgeable and very humble.
            The difference between other organic stores and this is that here
            you will find a complete range of Health products and aromatherapy
            products, books and many more.. sourced
          </Typography>
          <Box sx={testimonial.testimonialNameContainer}>
            <Box component={"img"} src={image1} alt="testimonialImage" sx={testimonial.image} />
            <Typography sx={testimonial.testimonialName}>
              Srivallabh N
            </Typography>
          </Box>
        </Box>
        <Box sx={testimonial.testimonialBox}>
          <Typography sx={testimonial.testimonialHeading}>
            This is one of the best Health + Organic stores in Hyderabad.
            Firstly the ambiance of the store is nice and especially the
            pleasant music. People in are very knowledgeable and very humble.
            The difference between other organic stores and this is that here
            you will find a complete range of Health products and aromatherapy
            products, books and many more.. sourced
          </Typography>
          <Box sx={testimonial.testimonialNameContainer}>
            <Box component={"img"} src={image3} alt="testimonialImage" sx={testimonial.image} />
            <Typography sx={testimonial.testimonialName}>
              Srivallabh N
            </Typography>
          </Box>
        </Box>
        <Box sx={testimonial.testimonialBox}>
          <Typography sx={testimonial.testimonialHeading}>
            This is one of the best Health + Organic stores in Hyderabad.
            Firstly the ambiance of the store is nice and especially the
            pleasant music. People in are very knowledgeable and very humble.
            The difference between other organic stores and this is that here
            you will find a complete range of Health products and aromatherapy
            products, books and many more.. sourced
          </Typography>
          <Box sx={testimonial.testimonialNameContainer}>
            <Box component={"img"} src={image2} alt="testimonialImage" sx={testimonial.image} />
            <Typography sx={testimonial.testimonialName}>
              Srivallabh N
            </Typography>
          </Box>
        </Box>
        <Box sx={testimonial.testimonialBox}>
          <Typography sx={testimonial.testimonialHeading}>
            This is one of the best Health + Organic stores in Hyderabad.
            Firstly the ambiance of the store is nice and especially the
            pleasant music. People in are very knowledgeable and very humble.
            The difference between other organic stores and this is that here
            you will find a complete range of Health products and aromatherapy
            products, books and many more.. sourced
          </Typography>
          <Box sx={testimonial.testimonialNameContainer}>
            <Box component={"img"} src={image4} alt="testimonialImage" sx={testimonial.image} />
            <Typography sx={testimonial.testimonialName}>
              Srivallabh N
            </Typography>
          </Box>
        </Box>
        <Box sx={testimonial.testimonialBox}>
          <Typography sx={testimonial.testimonialHeading}>
            This is one of the best Health + Organic stores in Hyderabad.
            Firstly the ambiance of the store is nice and especially the
            pleasant music. People in are very knowledgeable and very humble.
            The difference between other organic stores and this is that here
            you will find a complete range of Health products and aromatherapy
            products, books and many more.. sourced
          </Typography>
          <Box sx={testimonial.testimonialNameContainer}>
            <Box component={"img"} src={image1} alt="testimonialImage" sx={testimonial.image} />
            <Typography sx={testimonial.testimonialName}>
              Srivallabh N
            </Typography>
          </Box>
        </Box>
        <Box sx={testimonial.testimonialBox}>
          <Typography sx={testimonial.testimonialHeading}>
            This is one of the best Health + Organic stores in Hyderabad.
            Firstly the ambiance of the store is nice and especially the
            pleasant music. People in are very knowledgeable and very humble.
            The difference between other organic stores and this is that here
            you will find a complete range of Health products and aromatherapy
            products, books and many more.. sourced
          </Typography>
          <Box sx={testimonial.testimonialNameContainer}>
            <Box component={"img"} src={image3} alt="testimonialImage" sx={testimonial.image} />
            <Typography sx={testimonial.testimonialName}>
              Srivallabh N
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TestimonialsTab;