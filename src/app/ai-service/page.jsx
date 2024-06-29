

'use client'
import React, { useState } from 'react'

import GetandEstimateButtn from '@/components/GetandEstimateButtn';
import { FaCodepen } from "react-icons/fa";
import { FaCodeMerge } from "react-icons/fa6";
import { MdCodeOff } from "react-icons/md";
import { AiOutlineCode } from "react-icons/ai";
import { SiCodeclimate } from "react-icons/si";
import { SiLintcode } from "react-icons/si";import { IoLayersOutline } from "react-icons/io5";

import GetConsultingSection from '@/components/GetConsultingSection';

import BookACallButton from '@/components/BookACallButton';
export default function AIService (){
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
    return(

        <>
          <div className='bg-forth'>
        <div className="  flex justify-between pt-20 pb-10 gap-10">
        <div className='pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col py-20 pl-20 w-[70%]'>
            <h1 className=' text-6xl  font-poppins tracking-wide font-bold leading-tight'>We are giving you perfect solutions with our services</h1>
            <p className=' font-poppins pt-6'>dotcode offers a wide range of solutions tailored to meet your unique business needs. Whether you require custom software development, product design, cloud & AI solutions, consulting, outsourcing, or QA/QC testing, we’ve got you covered.</p>
            <div  
      className=' py-6 flex gap-4 justify-start items-center'>
  <BookACallButton/>
  <GetandEstimateButtn/>
</div>
        </div>
        <div className=' flex items-start justify-end  mr-20  mt-20' >
            <img src='/webdev.png' alt="helo" width={500}/>
        </div>
        </div>
        </div>
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
        </>
    )
}