
'use client'
import React, { useState } from 'react'
import { MdOutlineDeveloperMode } from "react-icons/md";
import Resorces from '@/components/Home/Resorces';
// import GetConsultingSection from '../../Components/GetConsultingSection';
import BenefitsUs from './BenefitsWorkWithUs';
import GetConsultingSection from '@/components/GetConsultingSection'; 
import { FaCodepen } from "react-icons/fa";
import { FaCodeMerge } from "react-icons/fa6";
import { MdCodeOff } from "react-icons/md";
import { AiOutlineCode } from "react-icons/ai";
import { SiCodeclimate } from "react-icons/si";
import { SiLintcode } from "react-icons/si";import { IoLayersOutline } from "react-icons/io5";
import { SiClickhouse } from "react-icons/si";
import { FaPagelines } from "react-icons/fa";
import { MdPages } from "react-icons/md";
import { BiLastPage } from "react-icons/bi";
import { SiSpeedypage } from "react-icons/si";
const SoftwareOffers = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const subServices = [
    {
      id: 1,
      icon: FaCodepen,
      heading: "Full Stack Development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
    },
    {
      id: 2,
      icon: FaCodeMerge,
      heading: "Frontend Development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
    },
    {
      id: 3,
      icon: MdCodeOff,
      heading: "Backend Development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
    },
    {
      id: 4,
      icon: AiOutlineCode,
      heading: "Enterprise Software Development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
    },
    {
      id: 5,
      icon: SiLintcode,
      heading: "Startup Development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
    },
    {
      id: 6,
      icon: SiCodeclimate,
      heading: "Product Strategy",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
    },
  ]
  const subServicesTwo = [
    {
      id: 1,
      icon: IoLayersOutline,
      heading: "Streamlined Workflows ",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
    },
    {
      id: 2,
      icon: SiClickhouse,
      heading: "Scalable Architecture ",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
    },
    {
      id: 3,
      icon: FaPagelines,
      heading: "Legacy System Modernization ",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
    },
    {
      id: 4,
      icon: MdPages,
      heading: "Integration and Interoperability ",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
    },
    {
      id: 5,
      icon: BiLastPage,
      heading: "Regular Updates & Support ",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
    },
    {
      id: 6,
      icon: SiSpeedypage,
      heading: "Fast Time-to-Market ",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
    },
  ]

  return (
    <>
    <div className='px-20 py-20 min-h-screen text-primary bg-gray-100'>
      <h1 className='text-4xl font-heading font-bold text-forth'>Software Development Services</h1>
      <div className='py-20 grid grid-cols-2 gap-10'>
        {subServices.map(service => (
          <div
            onMouseEnter={() => setHoveredId(service.id)}
            onMouseLeave={() => setHoveredId(null)}
            key={service.id}
            className='p-6 bg-secondary shadow-md'
          >
            <div className='flex gap-5 items-center '>
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
    <div className='px-20 py-20 min-h-screen text-primary bg-gray-100'>
      <h1 className='text-4xl font-heading font-bold text-forth w-[700px]'>Software Development
      Challenges we solve for you </h1>
      <div className='py-20 grid grid-cols-2 gap-10'>
        {subServicesTwo.map(service => (
           <div key={service.id}   className={` max-w-[590px]  min-h-[100px] font-poppins p-6 flex gap-4 rounded transition-all duration-200 border-t-2 border-tirtry cursor-pointer`}>
           <div className='flex flex-col gap-4 text-start'>
             <div className='flex gap-4 items-center'>
               <div className='border-2 border-forth p-6 flex items-center w-12 justify-center rounded-full h-12'>
                 <p className={` text-forth text-2xl`}>{<service.icon />}</p>
               </div>
               <h3 className={`font-heading text-forth font-semibold text-2xl `}>{service.heading}</h3>
             
             </div>
             <p className=' mt-3 mb-6 font-poppins'>{service.description}</p>
            
           </div>
         </div>
        ))}
      </div>
     
    </div>
    <GetConsultingSection heading={"Got an app idea that needs expert hands? "} text1={"Reach out to us today to start transforming your concept into a reality. "}/>
  
    </>
  )
}

export default SoftwareOffers;
