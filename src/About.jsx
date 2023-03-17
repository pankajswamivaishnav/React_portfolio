import React from "react";
import Common from "./Common";
import headerImg from './images/pankaj.png';
const About = () =>{
   return(
      <>
      <Common name='Welcome to About Page ' btnname='ContactMe'  visit='/contact' imgsrc = {headerImg} content={'I am a Full stack developer and Security expert or Network engineer'}/>
      </>
   )
}

export default About;