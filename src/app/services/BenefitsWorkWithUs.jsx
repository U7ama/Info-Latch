


import { MdOutlineDeveloperMode } from "react-icons/md";
export default function BenefitsUs(){
    const subServices = [
        {
          id: 1,
          icon: MdOutlineDeveloperMode,
          heading: "Assurance of quality",
          description: "Every solution we offer is of the highest caliber because of the efforts of our quality assurance department."
        },
        {
          id: 2,
          icon: MdOutlineDeveloperMode,
          heading: "Client-Centered",
          description: "We put your needs first and build good relationships with customers."
        },
        {
          id: 3,
          icon: MdOutlineDeveloperMode,
          heading: "Timely response",
          description: "We take great satisfaction in always being reachable for our clients."
        },
        {
          id: 4,
          icon: MdOutlineDeveloperMode,
          heading: "Sincerity",
          description: "We maintain transparency by monitoring time and tasks closely to ensure project visibility."
        },
        {
          id: 5,
          icon: MdOutlineDeveloperMode,
          heading: "Teamwork",
          description: "To guarantee successful results, our experts work closely with clients."
        },
        {
          id: 6,
          icon: MdOutlineDeveloperMode,
          heading: "Cost-effective",
          description: "We produce high-quality solutions quickly and reasonably by employing creative strategies"
        },
      ]
    
    return(

        <div className='px-20 py-20 min-h-screen text-primary bg-gray-100'>
        <h1 className='text-4xl font-heading font-bold text-forth w-[700px]'>Partnering with Info Latch brings you: 
        </h1>
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
    )
}