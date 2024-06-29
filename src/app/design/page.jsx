
'use client'
import React,{useState} from "react";
import BookACallButton from "@/components/BookACallButton"
import GetandEstimateButtn from "@/components/GetandEstimateButtn"
import { MdOutlineDeveloperMode } from "react-icons/md";

import Resorces from "@/components/Home/Resorces";
import BenefitsUs from "../services/BenefitsWorkWithUs";
import GetConsultingSection from "@/components/GetConsultingSection"
import { MdOutlineBubbleChart } from "react-icons/md";
import { MdOutlineStackedLineChart } from "react-icons/md";
import { TiChartLineOutline } from "react-icons/ti";
import { AiOutlineAntDesign } from "react-icons/ai";
import { SiPeakdesign } from "react-icons/si";
import { GiPlantSeed } from "react-icons/gi";
import { BsCardText } from "react-icons/bs";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { PiCardsBold } from "react-icons/pi";
import { FaUser } from "react-icons/fa6";
import { PiCardsThreeFill } from "react-icons/pi";
import { SiAltiumdesigner } from "react-icons/si";
import { PiArrowsInCardinalFill } from "react-icons/pi";
export default function Design(){
    const [hoveredId, setHoveredId] = useState(null);
    const subServices = [
        {
          id: 1,
          icon: MdOutlineBubbleChart,
          heading: "Wireframing & Prototyping",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
        },
        {
          id: 2,
          icon: MdOutlineStackedLineChart,
          heading: "UX/UI Design",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
        },
        {
          id: 3,
          icon: TiChartLineOutline,
          heading: "Product Design",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
        },
        
      ]
    const FrontendStack = [
        {id:1, icon: AiOutlineAntDesign, name: 'Research and Discovery '},
        {id:2, icon: SiPeakdesign, name: ' Conceptualization'},
        {id:3, icon: SiAltiumdesigner, name: 'Wireframing '},
        {id:4, icon: GiPlantSeed, name: 'Prototyping '},
        {id:5, icon: FaUser, name: 'User Testing'},
        {id:6, icon: BsCardText, name: 'Mockups '},
        {id:7, icon: PiCardsBold, name: 'Responsive Design '},
        {id:8, icon: PiCardsThreeFill, name: 'Design Testing '},
        {id:9, icon: TbBrandGoogleAnalytics, name: 'Analysis '},
        {id:10, icon: PiArrowsInCardinalFill, name: ' Development '},
    ]
    const BackendStack = [
        {id:1, icon: MdOutlineDeveloperMode, name: 'html'},
        {id:2, icon: MdOutlineDeveloperMode, name: 'html'},
        {id:3, icon: MdOutlineDeveloperMode, name: 'html'},
        {id:4, icon: MdOutlineDeveloperMode, name: 'html'},
        {id:5, icon: MdOutlineDeveloperMode, name: 'html'},
        {id:6, icon: MdOutlineDeveloperMode, name: 'html'},
        {id:7, icon: MdOutlineDeveloperMode, name: 'html'},
        {id:8, icon: MdOutlineDeveloperMode, name: 'html'},
        {id:9, icon: MdOutlineDeveloperMode, name: 'html'},
        {id:10, icon: MdOutlineDeveloperMode, name: 'html'},
    ]
    return(
        <>
        
        <div className='bg-forth'>
        <div className="  flex justify-between pt-20 pb-10 gap-10">
        <div className='pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col py-20 pl-20 w-[70%]'>
            <h1 className=' text-6xl  font-poppins tracking-wide font-bold leading-tight'>Our Digital Design
            Services Backed with a Professional Approach</h1>
            <p className=' font-poppins pt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, modi. Doloremque quo aliquam sapiente ipsa delectus nisi consectetur ea, voluptatum ab accusamus enim dolores voluptas perspiciatis atque saepe repellendus voluptate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cupiditate, pariatur commodi temporibus accusamus ab nostrum error deleniti accusantium, illum magnam rerum perferendis corrupti. Nam mollitia distinctio sed officiis totam?</p>
            <div  
      className=' py-6 flex gap-4 justify-start items-center'>
  <BookACallButton/>
  <GetandEstimateButtn/>
</div>
        </div>
        <div className=' flex items-start justify-end  mr-20  mt-20' >
            <img src='/design.png' alt="helo" width={500}/>
        </div>
        </div>
        </div>
        <div className='px-20 py-20 min-h-screen text-primary bg-gray-100'>
      <h1 className='text-4xl font-heading font-bold text-forth'>Digital Design services we provide </h1>
      <div className='py-20 grid grid-cols-2 gap-10'>
        {subServices.map(service => (
          <div
            onMouseEnter={() => setHoveredId(service.id)}
            onMouseLeave={() => setHoveredId(null)}
            key={service.id}
            className='p-6 bg-secondary'
          >
            <div className='flex gap-5 items-center'>
              <p className={` transition-all duration-150 ease-in p-2 rounded-lg text-4xl ${hoveredId === service.id ? 'bg-white text-primary' : 'bg-forth text-secondary '}`}>
                <service.icon />
              </p>
              <h2 className=' text-2xl font-poppins font-semibold text-forth'>{service.heading}</h2>
            </div>
            <p className=' my-6 font-poppins'>{service.description}</p>
          </div>
        ))}
      </div>
     
    </div>
  
    <GetConsultingSection heading={" Interested in different services?"} text1={"Look no further. Your challenge, our expertise."} text2={"Schedule a call to share your idea!"}/>
    <BenefitsUs/>
    <Resorces/>
    <div  className=" min-h-screen px-28 flex flex-col justify-center items-center">
        <h1 className=" text-4xl font-heading font-semibold mb-10">Stages of Design  </h1>
        <div className=" flex flex-col items-center justify-center">
            
            <div className=" grid grid-cols-5 items-center justify-center gap-10">
         {FrontendStack.map(item =>(
               <div key={item.id} className=" flex flex-col items-center gap-4">
             
                      <p className={`bg-forth text-secondary transition-all duration-150 ease-in p-2 rounded-lg text-4xl hover:bg-white hover:text-primary `}>{<item.icon />}</p>
                   
                    <p className=" font-poppins">{item.name}</p>
               </div>
              
         ))}
            </div>
           
        </div>
        
           
       
    </div>
    <GetConsultingSection heading={"Got an app idea that needs expert hands? "} text1={"Reach out to us today to start transforming your concept into a reality. "}/>
        </>
    )
}