import React from 'react'

import { RiGlobeFill } from "react-icons/ri";
import { TbCloudSnow } from "react-icons/tb";
import { SiMicrostrategy } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
import { SiAntdesign } from "react-icons/si";
import Cards from '../Cards/Cards';



//data-aos="fade-down"
   //  data-aos-duration="1000"
const TrustedBy = () => {


    const renderOne = () => {
        return <TbCloudSnow />;
    };
    const renderTwo = () => {
        return <SiMicrostrategy />;
    };
    const renderthree = () => {
        return <IoNewspaperOutline />;
    };
    const renderfour = () => {
        return <SiAntdesign />;
    };

  return (
    <div 
   
     className=' bg-secondary  w-full min-h-[700px]  flex flex-col items-start justify-center py-10 px-28'>
        
      {/* <p className=' font-poppins'>Wellcome to <span className='text-md text-forth font-semibold'>INFOLATCH</span></p> */}
<h1  data-aos="fade-up"
     data-aos-duration="500" className=' font-overlock text-5xl font-semibold text-forth my-10'>What Makes Us Distant</h1>
<hr  className=' pt-4 w-[200px] border-t-4 border-forth'/>
<p className=' text-sm font-poppins w-[600px]'>We provide specialized software solutions, a group of competent professionals, and a dedication to providing top-notch client support.

</p>
<div  data-aos="fade-up"
     data-aos-duration="600" className=' flex justify-between w-full mt-20'>
    <Cards
    number={"700+"}
    text={"We have served over 700 clients around more than 20 countries. "}
    />
    <Cards
    number={"2000+"}
    text={"We have completed more than 2000 projects with satisfied customers. "}
    />
    <Cards
    number={" 50+"}
    text={"We collaborated with more than 50 others companies.  "}
    />
  
   
  
   
</div>
    </div>
  )
}

export default TrustedBy