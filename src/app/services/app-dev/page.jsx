
'use client'
import React,{useState} from "react";
import BookACallButton from "@/components/BookACallButton"
import GetandEstimateButtn from "@/components/GetandEstimateButtn"
import { MdMobileScreenShare, MdOutlineDeveloperMode } from "react-icons/md";
import SoftwareOffers from "../SoftwareOffers"
import Resorces from "@/components/Home/Resorces";
import BenefitsUs from "../BenefitsWorkWithUs"
import GetConsultingSection from "@/components/GetConsultingSection"
import { SiKotlin, SiSwift } from "react-icons/si";
import { MdOutlineDataObject } from "react-icons/md";
import { TbBrandKotlin, TbDirectionSignFilled } from "react-icons/tb";
import { RiJavaLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { IoSave } from "react-icons/io5";
import { BsCodeSquare, BsCrosshair2 } from "react-icons/bs";
export default function AppDev(){
    const [hoveredId, setHoveredId] = useState(null);
    const subServices = [
        {
          id: 1,
          icon: TbDirectionSignFilled,
          heading: "UI/UX Mobile Design",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
        },
       
        {
          id: 3,
          icon: BsCodeSquare,
          heading: "iOS App Development",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
        },
        {
          id: 4,
          icon: MdMobileScreenShare,
          heading: "Android App Development",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
        },
        {
          id: 5,
          icon: BsCrosshair2,
          heading: "Cross-platform App Development",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis a ad amet, quia fugiat consequuntur totam saepe ipsa, necessitatibus temporibus, nam eveniet reiciendis soluta odio dignissimos quibusdam accusantium quam?"
        },
        
      ]
    const IosDevelopment = [
        {id:1, icon: SiSwift, name: 'Swift'},
        {id:2, icon: MdOutlineDataObject, name: 'Objective-c'},
       
    ]
    const AnrdiodApp = [
        {id:1, icon: SiKotlin, name: 'Kotlin'},
        {id:2, icon: RiJavaLine, name: 'Java'},
       
    ]
    const CrossPlatform = [
        {id:1, icon: TbBrandReactNative, name: 'React Native'},
       
       
    ]
    return(
      <>
        
      <div className='bg-forth'>
      <div className="  flex justify-between pt-20 pb-10 gap-10">
      <div className='pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col py-20 pl-20 w-[70%]'>
          <h1 className=' text-6xl  font-poppins tracking-wide font-bold leading-tight'>Mobile Application Development for seamless mobile experiences</h1>
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
    <h1 className='text-4xl font-heading font-bold text-forth'>Mobile App Development Services InfoLatch Offers </h1>
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
  <Resorces heading="Our App Development case study "/>
  <GetConsultingSection heading={" Interested in different services?"} text1={"Look no further. Your challenge, our expertise."} text2={"Schedule a call to share your idea!"}/>
  <BenefitsUs/>
 
  <div  className=" min-h-screen py-20 px-28 flex flex-col items-center ">
      <h1 className=" text-4xl font-heading font-semibold mb-10">Mobile app development stack  </h1>
      <div className=" flex items-center justify-between gap-10 w-full">
        <div>
        <h1 className=" my-10 text-2xl font-heading capitalize font-semibold">IOS Development</h1>

<div className=" flex items-center justify-center gap-10">
{IosDevelopment.map(item =>(
   <div key={item.id} className=" flex flex-col items-center gap-4">
 
          <p className={`bg-forth text-secondary transition-all duration-150 ease-in p-2 rounded-lg text-4xl hover:bg-white hover:text-primary `}>{<item.icon />}</p>
       
        <p className=" font-poppins">{item.name}</p>
   </div>
  
))}
</div>
        </div>
      <div>
      <h1 className=" my-10 text-2xl font-heading capitalize font-semibold">Andriod  Development</h1>
          <div className=" flex items-center justify-center gap-10">
       {AnrdiodApp.map(item =>(
             <div key={item.id} className=" flex flex-col items-center gap-4">
           
                    <p className={`bg-forth text-secondary transition-all duration-150 ease-in p-2 rounded-lg text-4xl hover:bg-white hover:text-primary `}>{<item.icon />}</p>
                 
                  <p className=" font-poppins">{item.name}</p>
             </div>
            
       ))}
          </div>
      </div>
         <div>
         <h1 className=" my-10 text-2xl font-heading capitalize font-semibold">Cross Platforms</h1>
          <div className=" flex items-center justify-center gap-10">
       {CrossPlatform.map(item =>(
             <div key={item.id} className=" flex flex-col items-center gap-4">
           
                    <p className={`bg-forth text-secondary transition-all duration-150 ease-in p-2 rounded-lg text-4xl hover:bg-white hover:text-primary `}>{<item.icon />}</p>
                 
                  <p className=" font-poppins">{item.name}</p>
             </div>
            
       ))}
          </div>
         </div>
          
         
      </div>
  </div>
  <GetConsultingSection heading={"Got an app idea that needs expert hands? "} text1={"Reach out to us today to start transforming your concept into a reality. "}/>
      </>
    )
}