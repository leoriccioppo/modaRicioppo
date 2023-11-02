import { useTheme } from "@mui/system"
import { HeroContainer, HeroImage } from '../../styles/Hero';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Paper, useMediaQuery } from '@mui/material'
   

const Hero = () =>{

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };

    return (
        <HeroContainer> 
            <Slider {...settings}>
             <Paper>
             <HeroImage src="../../../../src/assets/images/hero/banner-1.avif" alt="banner"/>
             </Paper>          
            

            <Paper>
            <HeroImage src="../../../../src/assets/images/hero/banner-2.avif" alt="banner"/>
            </Paper>
            
            </Slider>
        </HeroContainer>
    )
}

export { Hero }