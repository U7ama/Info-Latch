
import Link from "next/link"
import { FaCaretRight } from "react-icons/fa";
export default function MegaDropDownCompany(){
  const About =[
    { id:1, to: '/', name: "Company Leadership" },
    { id:2,to: '/', name: "Our Leadership" },
    { id:3,to: '/', name: "Testimonials" },
    
   ]
   
   const Carears =[
    { id:1, to: '/', name: "Open Positions" },
    { id:2,to: '/', name: "Send Your CV" },
  
   ]
   const GetinTouch =[
    { id:1, to: '/', name: "Estimator" },
    { id:2,to: '/', name: "Book a call" },
   
   ]
 
    return(
      <>
      <div className='absolute font-poppins  mx-auto overflow-hidden right-0 left-0   w-full bg-white shadow-lg py-10 px-20 items-start  flex'>
     <div className='grid grid-cols-3 gap-6 w-full'>
       {/* Megadropdown content for Services */}
       <div>
       <div className="mb-5 flex items-center gap-4">
         <img src="/Company/C1.png" alt="s4" width={50}/>
        <h3 className='font-bold  text-xl '>About US</h3>
        </div>
         <ul className=" flex flex-col gap-2 text-lg mt-4 font-normal">
      {About.map(item=>(
            <li key={item.id}><Link href={item.to} className=" flex items-center gap-3"><FaCaretRight className=" text-forth"/>{item.name}</Link></li>
      ))}
         </ul>
       </div>
       <div>
       <div className="mb-5 flex items-center gap-4">
         <img src="/Company/C2.png" alt="s4" width={50}/>
        <h3 className='font-bold  text-xl '>Carears</h3>
        </div>
         <ul className=" flex flex-col gap-2 text-lg mt-4 font-normal">
      {Carears.map(item=>(
            <li key={item.id}><Link href={item.to} className=" flex items-center gap-3"><FaCaretRight className=" text-forth"/>{item.name}</Link></li>
      ))}
         </ul>
       </div>
       <div>
       <div className="mb-5 flex items-center gap-4">
         <img src="/Company/C3.png" alt="s4" width={50}/>
        <h3 className='font-bold  text-xl '>Get In Touch</h3>
        </div>
         <ul className=" flex flex-col gap-2 text-lg mt-4 font-normal">
      {GetinTouch.map(item=>(
            <li key={item.id}><Link href={item.to} className=" flex items-center gap-3"><FaCaretRight className=" text-forth"/>{item.name}</Link></li>
      ))}
         </ul>
       </div>
      
      
     </div>
   </div>
     </>
    )
}