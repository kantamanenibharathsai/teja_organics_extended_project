import { Box, Typography } from "@mui/material";
import bannerImg from "../../assets/about_us_images/banner.png";
import bannerImg1 from "../../assets/about_us_images/banner (1).png";
import bannerImg2 from "../../assets/about_us_images/banner (2).png";
import { about } from "./Styles";

const About = () => {
  return (
    <Box sx={about.aboutContainer}>
      <Box sx={about.aboutFirstContainer}>
        <Box sx={about.firstColumn}>
          <Typography sx={about.heading}>About Us</Typography>
          <Typography sx={about.subHeading}>
            Teja Organics is one of the biggest exclucive organic stores in
            India.
          </Typography>
          <Typography sx={about.description}>
            Teja Organics is an initiative by a Special Child (Down syndrome)
            for independent living.
          </Typography>
          <Typography sx={about.subHeading}>
            Teja Organics is an exclusive store for certified natural,
            chemical-free products. It is a multi-brand store.
          </Typography>
        </Box>
        <Box sx={about.secondColumn}>
          <Box
            component={"img"}
            src={bannerImg}
            alt={"banner"}
            sx={about.bannerImg}
          />
        </Box>
      </Box>
      <Typography sx={about.subHeading}>
        Teja Organics has Organic Groceries, Organic Super Food Products,
        Organic Cosmetics, Organic Skin Care/ Organic Body Care products/
        Organic Hair Care Products, Organic Weight Loss products, Organic
        Wellness Products, Diabetic-friendly products, Aromatherapy Products/
        Essential Oils, Ayurvedic & Herbal Products, Artisan Products/ Hand
        Crafted, Teja Organic Brand Products.
      </Typography>
      <Typography sx={about.description}>
        Teja Organics supports Sai Krishna Teja Foundation (SKTF), a Trust
        working for the welfare of mentally challenged persons. SKTF provides
        medical services and Provides financial assistance for vocational
        training of special children.
      </Typography>
      <Typography sx={about.subHeading}>
        Teja Organics believes in health for our society, our customers, the
        local neighborhood stores and surroundings, the people behind the
        products, and the team who works for our stores. To us, a healthy planet
        is just on our priority list.
      </Typography>
      <Box sx={about.imageRowContainer}>
        <Box
          component={"img"}
          src={bannerImg1}
          alt={"banner"}
          sx={about.bannerImg}
        />
        <Box
          component={"img"}
          src={bannerImg2}
          alt={"banner"}
          sx={about.bannerImg}
        />
      </Box>
      <Typography sx={about.subHeading}>
        At Teja Organics, We strive to be just more than a store because we want
        to do much more for our customers, and society. We aim to promote our
        society through organic, natural, and sustainable products. We have
        started our Organic Online store to make it more convenient for our
        customers to cater products made using only organic ingredients. We
        welcome everyone to our Organic online store and ensure to serve you
        only the best.
      </Typography>
      <Typography sx={about.description}>
        You can now find a variety of Organic products online at the Teja
        organics store that provides you with a wide range of certified organic
        products fulfilling all your requirements from dairy products to dietary
        supplements. We aim to direct customers through a crowded marketplace to
        green, natural, and organic products. The products that we provide come
        from the best suppliers with natural grocery, supplements, and health
        and beauty options. We wish to continue our contribution to society with
        your support and cultivate a practice that is healthy and acting
        sustainably and ethically as a business. We provide you with the best
        organic products online than the grocery store and healthy products that
        you can’t buy anywhere else. Order Organic products online, at your
        convenience and enjoy good health with delightful culinary experiences.
      </Typography>
    </Box>
  );
};

export default About;
