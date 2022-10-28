import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import photo1 from '../../../images/img1.jpeg'
import photo2 from '../../../images/img2.jpeg'
import photo3 from '../../../images/img3.jpeg'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import TeacherHeader from "../TeacherHeader/headers";
import './teacherh.css'
import Slideshow from "../../../components/ImageSlider/imgSlider";
import TeacherSlideshow from "../../../components/teacherImgSlider/imgs";
import Buttons from "../../../components/buttons/button";
import Select from 'react-select'
import { useHistory } from "react-router-dom";
function TeacherHome(){
    const [open,setOpen]=useState(false)
    let history = useHistory();
    const styleData={backgroundColor:'lightblue', height:'40px',width:'200px', border:'1px solid white', borderRadius:'10px', cursor:'pointer'}
   
    const onclick=()=>{
       history.push('/teacherlaunchquiz')
    }
    return <>
       <TeacherSlideshow />
       <div id="div_home" style={{width:'40%' , display:'block', margin:'auto', justifyContent:'space-between', cursor:'pointer'}}>
        <div style={{display:'flex', flexDirection:'row'}}>
        <Buttons styles={styleData} text="Upload Quiz" id="buttonBt"/>
        <Buttons styles={styleData} text="Generate Quiz"/>
        <div style={{display:'flex', flexDirection:'column'}}>
        <Buttons styles={styleData} text="Launch Quiz" onclick={onclick}/>

        </div>
        </div>
       </div>
    </>
}

export default TeacherHome