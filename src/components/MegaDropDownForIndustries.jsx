import Link from "next/link"

export default function MegaDropDownIndustries(){
    return(
        <>
         <div className='absolute font-poppins  mx-auto overflow-hidden right-0 left-0   w-full bg-white shadow-lg py-10 px-20 items-center  flex'>
        <div className='flex items-center gap-6 justify-between w-full'>
          {/* Megadropdown content for Services */}
          <div>
          <div className="mb-10">
            <img src="/s4.png" alt="s4" width={70}/>
           <h3 className='font-bold  text-xl mb-4'>Software Development</h3>
           </div>
            <ul className=" flex flex-col gap-2 text-lg mt-4">
              <li><Link href="/services/">Web Development <br/> <span className=" text-sm text-gray-400 font-normal">Tailored tech Solutions</span></Link></li>
              <li><Link href="/services/">Web Development <br/> <span className=" text-sm text-gray-400 font-normal">Tailored tech Solutions</span></Link></li>
              <li><Link href="/services/">Web Development <br/> <span className=" text-sm text-gray-400 font-normal">Tailored tech Solutions</span></Link></li>
            
            </ul>
          </div>
          <div>
          <div className="mb-10">
            <img src="/s3.png" alt="s4" width={70}/>
           <h3 className='font-bold  text-2xl mb-4'>Degital Designs</h3>
           </div>
            <ul className=" flex flex-col gap-2 text-xl mt-4">
              <li><Link href="/services/">Web Development <br/> <span className=" text-sm text-gray-400 font-normal">Tailored tech Solutions</span></Link></li>
              <li><Link href="/services/">Web Development <br/> <span className=" text-sm text-gray-400 font-normal">Tailored tech Solutions</span></Link></li>
              <li><Link href="/services/">Web Development <br/> <span className=" text-sm text-gray-400 font-normal">Tailored tech Solutions</span></Link></li>
            
            </ul>
          </div>
          <div>
          <div className="mb-10">
            <img src="/s2.png" alt="s4" width={70}/>
           <h3 className='font-bold  text-2xl mb-4'>AI Solutions</h3>
           </div>
            <ul className=" flex flex-col gap-2 text-xl mt-4">
              <li><Link href="/services/">Web Development <br/> <span className=" text-sm text-gray-400 font-normal">Tailored tech Solutions</span></Link></li>
              <li><Link href="/services/">Web Development <br/> <span className=" text-sm text-gray-400 font-normal">Tailored tech Solutions</span></Link></li>
              <li><Link href="/services/">Web Development <br/> <span className=" text-sm text-gray-400 font-normal">Tailored tech Solutions</span></Link></li>
            
            </ul>
          </div>
          <div>
           <div className="mb-10">
            <img src="/s1.png" alt="s4" width={70}/>
           <h3 className='font-bold  text-2xl mb-4'>Cloud Solutions</h3>
           </div>
            <ul className=" flex flex-col gap-2 text-xl mt-4">
              <li><Link href="/services/">Web Development <br/> <span className=" text-sm text-gray-400 font-normal">Tailored tech Solutions</span></Link></li>
              <li><Link href="/services/">Web Development <br/> <span className=" text-sm text-gray-400 font-normal">Tailored tech Solutions</span></Link></li>
              <li><Link href="/services/">Web Development <br/> <span className=" text-sm text-gray-400 font-normal">Tailored tech Solutions</span></Link></li>
            
            </ul>
          </div>
          
          
        </div>
      </div>
        </>
    )
}