
'use client'
import React, { useState } from 'react'
import { MdOutlineDeveloperMode } from "react-icons/md";
import Resorces from '@/components/Home/Resorces';
// import GetConsultingSection from '../../Components/GetConsultingSection';
import GetConsultingSection from '@/components/GetConsultingSection'; 
const SoftwareOffers = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const subServices = [
    {
      id: 1,
      icon: MdOutlineDeveloperMode,
      heading: "Full Stack Development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
    },
    {
      id: 2,
      icon: MdOutlineDeveloperMode,
      heading: "Frontend Development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
    },
    {
      id: 3,
      icon: MdOutlineDeveloperMode,
      heading: "Backend Development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
    },
    {
      id: 4,
      icon: MdOutlineDeveloperMode,
      heading: "Enterprise Software Development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
    },
    {
      id: 5,
      icon: MdOutlineDeveloperMode,
      heading: "Startup Development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
    },
    {
      id: 6,
      icon: MdOutlineDeveloperMode,
      heading: "Product Strategy",
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
    <Resorces/>
    <div className='px-20 py-20 min-h-screen text-primary bg-gray-100'>
      <h1 className='text-4xl font-heading font-bold text-forth w-[700px]'>Why custom software solutions
      we develop are reliable </h1>
      <div className='py-20 grid grid-cols-2 gap-10'>
        {subServices.map(service => (
           <div key={service.id}   className={` max-w-[590px]  min-h-[100px] font-poppins p-6 flex gap-4 transition-all duration-200 shadow-lg cursor-pointer`}>
           <div className='flex flex-col gap-4 text-start'>
             <div className='flex gap-4 items-center'>
               <div className='border-2 border-forth p-6 flex items-center w-12 justify-center rounded-full h-12'>
                 <p className={` text-xl`}>{<service.icon />}</p>
               </div>
               <h3 className={`font-poppins font-semibold text-xl `}>{service.heading}</h3>
             
             </div>
             <p className=' my-6 font-poppins'>{service.description}</p>
            
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
