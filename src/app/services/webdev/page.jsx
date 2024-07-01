
'use client'
import React,{useState} from "react";
import BookACallButton from "@/components/BookACallButton"
import GetandEstimateButtn from "@/components/GetandEstimateButtn"
import { MdOutlineDeveloperMode, MdOutlineDynamicForm } from "react-icons/md";
import SoftwareOffers from "../SoftwareOffers"
import Resorces from "@/components/Home/Resorces";
import BenefitsUs from "../BenefitsWorkWithUs"
import GetConsultingSection from "@/components/GetConsultingSection"
import { RiJavascriptFill } from "react-icons/ri";
import { BiCodeBlock, BiLogoTypescript } from "react-icons/bi";
import { BsFiletypeScss } from "react-icons/bs";
import { MdHtml } from "react-icons/md";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact, FaWeibo } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { RiBootstrapLine } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { FaSass } from "react-icons/fa";



import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { LuBedSingle } from "react-icons/lu";
import { AiFillWeiboSquare } from "react-icons/ai";
import { FaAppStoreIos } from "react-icons/fa6";
export default function WebDeb(){
    const [hoveredId, setHoveredId] = useState(null);
    const subServices = [
        {
          id: 1,
          icon: BiCodeBlock,
          heading: "Full Stack Development",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
        },
        {
          id: 2,
          icon: LuBedSingle,
          heading: "Single-page App (SPA) Development",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
        },
        {
          id: 3,
          icon: FaWeibo,
          heading: "Progressive Web App (PWA) Development",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
        },
        {
          id: 4,
          icon: AiFillWeiboSquare,
          heading: "Static Web Application Development",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
        },
        {
          id: 5,
          icon: MdOutlineDynamicForm,
          heading: "Dynamic Web Application Development",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
        },
        {
          id: 6,
          icon: FaAppStoreIos,
          heading: "Rich Internet Application (RIA) Development",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
        },
      ]
      const FrontendStack = [
        { id: 1, icon: MdHtml, name: 'HTML' },
        { id: 2, icon: IoLogoCss3, name: 'CSS' },
        { id: 3, icon: RiJavascriptFill, name: 'JavaScript' },
        { id: 4, icon: BiLogoTypescript, name: 'TypeScript' },
        { id: 5, icon: FaReact, name: 'React' },
        { id: 6, icon: SiNextdotjs, name: 'Next.js' },
        { id: 7, icon: FaVuejs, name: 'Vue.js' },
        { id: 8, icon: RiBootstrapLine, name: 'Bootstrap' },
        { id: 9, icon: SiRedux, name: 'Redux' },
        { id: 10, icon: FaSass, name: 'Sass' },
      ];
      
      const BackendStack = [
        { id: 1, icon: FaJava, name: 'Java' },
        { id: 2, icon: SiSpring, name: 'Spring' },
        { id: 3, icon: SiSpringboot, name: 'Spring Boot' },
        { id: 4, icon: SiPhp, name: 'PHP' },
        { id: 5, icon: TbBrandMysql, name: 'MySQL' },
        { id: 6, icon: SiMongodb, name: 'MongoDB' },
        { id: 7, icon: FaAws, name: 'AWS' },
        { id: 8, icon: FaDocker, name: 'Docker' },
      ];
    return(
        <>
        
        <div className='bg-forth'>
        <div className="  flex justify-between pt-20 pb-10 gap-10">
        <div className='pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col py-20 pl-20 w-[70%]'>
            <h1 className=' text-6xl  font-poppins tracking-wide font-bold leading-tight'>Web Development Services for innovative web applications</h1>
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
      <h1 className='text-4xl font-heading font-bold text-forth'>Web Development Services
      InfoLatch offers </h1>
      <div className='py-20 grid grid-cols-2 gap-10'>
        {subServices.map(service => (
          <div
            onMouseEnter={() => setHoveredId(service.id)}
            onMouseLeave={() => setHoveredId(null)}
            key={service.id}
            className='p-6 bg-secondary'
          >
            <div className='flex gap-5 items-center'>
              <p className={` transition-all duration-150 ease-in p-2 rounded-lg text-4xl ${hoveredId === service.id ? 'bg-white text-forth' : 'bg-forth text-secondary '}`}>
                <service.icon />
              </p>
              <h2 className=' text-2xl font-poppins font-semibold text-forth'>{service.heading}</h2>
            </div>
            <p className=' my-6 font-poppins'>{service.description}</p>
          </div>
        ))}
      </div>
     
    </div>
    <Resorces heading="Our Web case study "/>
    <GetConsultingSection heading={" Interested in different services?"} text1={"Look no further. Your challenge, our expertise."} text2={"Schedule a call to share your idea!"}/>
    <BenefitsUs/>
   
    <div  className=" min-h-screen py-20 px-28 flex flex-col justify-center items-center">
        <h1 className=" text-4xl font-heading font-semibold mb-10">Web Development Stacks  </h1>
        <div className=" flex flex-col items-center justify-center">
        <h1 className=" my-10 text-2xl font-heading capitalize">Frontend</h1>

            <div className=" grid grid-cols-7 items-center justify-center gap-10">
         {FrontendStack.map(item =>(
               <div key={item.id} className=" flex flex-col items-center gap-4">
             
                      <p className={`bg-forth text-secondary transition-all duration-150 ease-in p-2 rounded-lg text-4xl hover:bg-white hover:text-primary `}>{<item.icon />}</p>
                   
                    <p className=" font-poppins">{item.name}</p>
               </div>
              
         ))}
            </div>
            <h1 className=" my-10 text-2xl font-heading capitalize">backend</h1>
            <div className=" grid grid-cols-7 items-center justify-center gap-10">
         {BackendStack.map(item =>(
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