import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import photo1 from '../../images/img1.jpeg'
import photo2 from '../../images/img2.jpeg'
import photo3 from '../../images/img3.jpeg'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Slideshow from "../../components/ImageSlider/imgSlider";
function Home(){
    return <>
       <Slideshow width="500" height="300" />
    </>
}

export default Home