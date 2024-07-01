
'use client'
import React,{useState} from 'react'

import GetandEstimateButtn from '@/components/GetandEstimateButtn';
import GetConsultingSection from '@/components/GetConsultingSection';

import { IoLayersOutline } from "react-icons/io5";
import { SiClickhouse } from "react-icons/si";
import { FaPagelines } from "react-icons/fa";
import { MdPages } from "react-icons/md";
import { BiLastPage } from "react-icons/bi";
import { SiSpeedypage } from "react-icons/si";

import ServiceCard from '@/components/ServiceCard';
import BookACallButton from '@/components/BookACallButton';
import { AiOutlineAntDesign } from 'react-icons/ai';
const Services = () => {
    const [hoveredId, setHoveredId] = useState(null);
    const subServicesTwo = [
        {
          id: 1,
          icon: IoLayersOutline,
          to: "/services/software-dev",
          heading: "Software Development Services ",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
        },
        {
          id: 2,
          icon: AiOutlineAntDesign,
          to: "/services",
          heading: "Digital Design ",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
        },
        {
          id: 3,
          icon: FaPagelines,
          to: "/services",
          heading: "Consulting ",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
        },
        {
          id: 4,
          icon: MdPages,
          to: "/services",
          heading: "Cloud Solutions",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
        },
        {
          id: 5,
          icon: BiLastPage,
          to: "/services",
          heading: "AI Solutions ",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
        },
        {
          id: 6,
          icon: SiSpeedypage,
          to: "/services",
          heading: "Degital Marketing",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
        },
      ]

  return (
    <div>
        
        <div className='bg-forth'>
        <div className="  flex justify-between pt-20 pb-10 gap-10">
        <div className='pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col py-20 pl-20 w-[70%]'>
            <h1 className=' text-6xl  font-poppins tracking-wide font-bold leading-tight'>We are giving you perfect solutions with our services</h1>
            <p className=' font-poppins pt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, modi. Doloremque quo aliquam sapiente ipsa delectus nisi consectetur ea, voluptatum ab accusamus enim dolores voluptas perspiciatis atque saepe repellendus voluptate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cupiditate, pariatur commodi temporibus accusamus ab nostrum error deleniti accusantium, illum magnam rerum perferendis corrupti. Nam mollitia distinctio sed officiis totam?</p>
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
        <div className='py-20 grid grid-cols-2 gap-10 px-20'>
      {subServicesTwo.map(service => (
        <ServiceCard
          key={service.id}
          service={service}
          hoveredId={hoveredId}
          btnText="Explore"
          setHoveredId={setHoveredId}
        />
      ))}
    </div>
     <GetConsultingSection heading={" Interested in different services?"} text1={"Look no further. Your challenge, our expertise."} text2={"Schedule a call to share your idea!"}/>
    </div>
  )
}

export default Services