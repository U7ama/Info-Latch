import Link from "next/link"
import { FaCaretRight } from "react-icons/fa";
export default function MegaDropDownIndustries(){
  const fintechItems =[
   { id:1, to: '/industries', name: "Fintech Development & Api Integrations" },
   { id:2,to: '/industries', name: "Accounting Software" },
   { id:3,to: '/industries', name: "Credit & Loan Management" },
   { id:4, to: '/industries', name: "Security & Fraud Preventation" },
  ]
  
  const HealthCare =[
   { id:1, to: '/industries', name: "HIPAA-Complaint Helathcare Software" },
   { id:2,to: '/industries', name: "Telehealth & Telemedicine" },
   { id:3,to: '/industries', name: "Health information management (EHR /industries EMR, HIS" },
   { id:4, to: '/industries', name: "E-Prescribing Software" },
  ]
  const Food =[
   { id:1, to: '/industries', name: "Food Delivery Applications" },
   { id:2,to: '/industries', name: "Food Ordering Applications" },
   { id:3,to: '/industries', name: "Resturant CRM System" },
   { id:4, to: '/industries', name: "Integration with POS System" },
  ]
  const Marketing =[
   { id:1, to: '/industries', name: "Affliate program development" },
   { id:2,to: '/industries', name: "Loyalty App Development" },
   { id:3,to: '/industries', name: "Integration ( Google Analytics, CRM )" },
   
  ]
  const Travel =[
   { id:1, to: '/industries', name: "Booking Application" },
   { id:2,to: '/industries', name: "Hostel Management software and POS" },
   { id:3,to: '/industries', name: "Travel and Portal Development" },
   
  ]
  const Edtech =[
   { id:1, to: '/industries', name: "Learning Management System (LMS)" },
   { id:2,to: '/industries', name: "E-Learning Application" },
   { id:3,to: '/industries', name: "School Management Software" },
   
  ]
    return(
        <>
         <div className='absolute font-poppins  mx-auto overflow-hidden right-0 left-0   w-full bg-white shadow-lg py-10 px-20 items-start  flex'>
        <div className='grid grid-cols-3 gap-6 w-full'>
          {/* Megadropdown content for Services */}
          <div>
          <div className="mb-5 flex items-center gap-4">
            <img src="/indutries/I1.jpg" alt="s4" width={50}/>
           <h3 className='font-bold  text-xl '>Fintech</h3>
           </div>
            <ul className=" flex flex-col gap-2 text-lg mt-4 font-normal">
         {fintechItems.map(item=>(
               <li key={item.id}><Link href={item.to} className=" flex items-center gap-3"><FaCaretRight className=" text-forth"/>{item.name}</Link></li>
         ))}
            </ul>
          </div>
          <div>
          <div className="mb-5 flex items-center gap-4">
            <img src="/indutries/I2.jpg" alt="s4" width={50}/>
           <h3 className='font-bold  text-xl '>HealthCare</h3>
           </div>
            <ul className=" flex flex-col gap-2 text-lg mt-4 font-normal">
         {HealthCare.map(item=>(
               <li key={item.id}><Link href={item.to} className=" flex items-center gap-3"><FaCaretRight className=" text-forth"/>{item.name}</Link></li>
         ))}
            </ul>
          </div>
          <div>
          <div className="mb-5 flex items-center gap-4">
            <img src="/indutries/I3.jpg" alt="s4" width={50}/>
           <h3 className='font-bold  text-xl '>Food Services</h3>
           </div>
            <ul className=" flex flex-col gap-2 text-lg mt-4 font-normal">
         {Food.map(item=>(
               <li key={item.id}><Link href={item.to} className=" flex items-center gap-3"><FaCaretRight className=" text-forth"/>{item.name}</Link></li>
         ))}
            </ul>
          </div>
          <div>
          <div className="mb-5 flex items-center gap-4">
            <img src="/indutries/I4.png" alt="s4" width={50}/>
           <h3 className='font-bold  text-xl '>Marketing</h3>
           </div>
            <ul className=" flex flex-col gap-2 text-lg mt-4 font-normal">
         {Marketing.map(item=>(
               <li key={item.id}><Link href={item.to} className=" flex items-center gap-3"><FaCaretRight className=" text-forth"/>{item.name}</Link></li>
         ))}
            </ul>
          </div>
          <div>
          <div className="mb-5 flex items-center gap-4">
            <img src="/indutries/I5.jpg" alt="s4" width={50}/>
           <h3 className='font-bold  text-xl '>Travel & Hospitality</h3>
           </div>
            <ul className=" flex flex-col gap-2 text-lg mt-4 font-normal">
         {Travel.map(item=>(
               <li key={item.id}><Link href={item.to} className=" flex items-center gap-3"><FaCaretRight className=" text-forth"/>{item.name}</Link></li>
         ))}
            </ul>
          </div>
          <div>
          <div className="mb-5 flex items-center gap-4">
            <img src="/indutries/I1.jpg" alt="s4" width={50}/>
           <h3 className='font-bold  text-xl '>EdTech</h3>
           </div>
            <ul className=" flex flex-col gap-2 text-lg mt-4 font-normal">
         {Edtech.map(item=>(
               <li key={item.id}><Link href={item.to} className=" flex items-center gap-3"><FaCaretRight className=" text-forth"/>{item.name}</Link></li>
         ))}
            </ul>
          </div>
         
        </div>
      </div>
        </>
    )
}