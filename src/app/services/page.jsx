import React from 'react'

import GetandEstimateButtn from '@/components/GetandEstimateButtn';

import { LuLaptop2 } from "react-icons/lu";
import SoftwareOffers from './SoftwareOffers';
import { BiMobileVibration } from "react-icons/bi";
import { FaRegLightbulb } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa6";
import BookACallButton from '@/components/BookACallButton';
const Services = () => {
  const subServices= [
    {
        id:1,
        name: ' Software Developmen',
        icon: FaRegLightbulb
    },
    {
        id:2,
        name: 'Web Development',
        icon: LuLaptop2
    },
    {
        id:3,
        name: 'Mobile Development',
        icon: BiMobileVibration
    },
    {
        id:4,
        name: 'SaaS Development',
        icon: FaNetworkWired
    },
]

  return (
    <div>
        
        <div className='bg-forth'>
        <div className="  flex justify-between pt-20 pb-10 gap-10">
        <div className='pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col py-20 pl-20 w-[70%]'>
            <h1 className=' text-6xl  font-poppins tracking-wide font-bold leading-tight'>Expert Software Development Services you’re looking for</h1>
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
       <div className='px-20 text-secondary font-poppins pb-10'>
       <h1 className=' text-3xl font-semibold mb-6 capitalize tracking-wider w-[700px]'>Our full-cycle software
       development approach</h1>
       <div className='flex justify-between items-center gap-6'>
{subServices.map(service =>(
    <div key={service.id} className=' my-10 flex flex-col gap-5'>
    <div className='flex items-center gap-4'>
<p className='border-2 p-4 rounded-full text-2xl'><service.icon/></p>
<hr className='  border-t-2 border-white w-[200px]'/>
    </div>
    <h1 className='text-xl '>{service.name}</h1>
</div>
))}
  </div>
 
       </div>
        </div>
        <SoftwareOffers/>
    </div>
  )
}

export default Services