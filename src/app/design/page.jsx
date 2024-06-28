
'use client'
import React,{useState} from "react";
import BookACallButton from "@/components/BookACallButton"
import GetandEstimateButtn from "@/components/GetandEstimateButtn"
import { MdOutlineDeveloperMode } from "react-icons/md";

import Resorces from "@/components/Home/Resorces";
import BenefitsUs from "../services/BenefitsWorkWithUs";
import GetConsultingSection from "@/components/GetConsultingSection"
export default function Design(){
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
    const FrontendStack = [
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
        
        <div className='bg-gradient-to-tr from-forth to-tirtry'>
        <div className="  flex justify-between pt-20 pb-10 gap-10">
        <div className='pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col py-20 pl-20 w-[70%]'>
            <h1 className=' text-6xl  font-poppins tracking-wide font-bold leading-tight'>design Development Services for innovative web applications</h1>
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
    <BenefitsUs/>
    <Resorces/>
    <div  className=" min-h-screen px-28 flex flex-col justify-center items-center">
        <h1 className=" text-4xl font-heading font-semibold mb-6">Web Development stack </h1>
        <div className=" flex flex-col items-center justify-center">
            <h1 className=" font-poppins mb-10">Frontend </h1>
            <div className=" flex gap-6 items-center flex-wrap">
         {FrontendStack.map(item =>(
               <div key={item.id} className=" flex flex-col items-center">
               <div className='border-2 border-tirtry p-6 flex items-center  justify-center rounded-full '>
                      <p className={` text-2xl`}>{<item.icon />}</p>
                     
                    </div>
                    <p>{item.name}</p>
               </div>
              
         ))}
            </div>
           
        </div>
        <div className=" flex flex-col items-center justify-center">
            <h1 className=" font-poppins my-10">Backend </h1>
            <div className=" flex gap-6 items-center flex-wrap">
         {BackendStack.map(item =>(
               <div key={item.id} className=" flex flex-col items-center">
               <div className='border-2 border-tirtry p-6 flex items-center justify-center rounded-full '>
                      <p className={` text-2xl`}>{<item.icon />}</p>
                     
                    </div>
                    <p>{item.name}</p>
               </div>
              
         ))}
            </div>
           
        </div>
    </div>
    <GetConsultingSection heading={"Got an app idea that needs expert hands? "} text1={"Reach out to us today to start transforming your concept into a reality. "}/>
        </>
    )
}