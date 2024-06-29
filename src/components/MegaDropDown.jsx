import Link from "next/link"


export default function Megadropdown(){
    return(
        <div className='absolute font-poppins  mx-auto overflow-hidden right-0 left-0   w-full bg-white shadow-lg py-10 px-20 items-start  flex'>
        <div className='flex items-start gap-6 justify-between w-full'>
          {/* Megadropdown content for Services */}
          <div>
          <div className="mb-10">
            <img src="/s4.png" alt="s4" width={60}/>
           <h3 className='font-bold font-heading  text-2xl my-4'>Software Development</h3>
           </div>
            <ul className=" flex flex-col gap-2 text-lg mt-4">
             <li className="font-heading"><Link href="/services/">Custom Software Development <br/> <span className=" text-sm text-gray-400 font-normal font-poppins">Tailored tech Solutions</span></Link></li>
             <li className="font-heading"><Link href="/services/webdev">Web Development <br/> <span className=" text-sm text-gray-400 font-normal font-poppins">Execptional Web Application</span></Link></li>
             <li className="font-heading"><Link href="/services/app-dev">Mobile Development <br/> <span className=" text-sm text-gray-400 font-normal font-poppins">Cross-platform & Natie Applications</span></Link></li>
             <li className="font-heading"><Link href="/services/saas-dev">SAAS Development <br/> <span className=" text-sm text-gray-400 font-normal font-poppins">Cross-platform & Natie Applications</span></Link></li>
            
            </ul>
          </div>
          <div>
          <div className="mb-10">
            <img src="/s3.png" alt="s4" width={60}/>
           <h3 className='font-bold font-heading   text-2xl my-4'>Digital Designs</h3>
           </div>
            <ul className=" flex flex-col gap-2 text-xl mt-4">
             <li className="font-heading"><Link href="/design">Wireframing & Prototyping <br/> <span className=" text-sm text-gray-400 font-normal font-poppins">Visual Sketches & Clickable prototyping</span></Link></li>
             <li className="font-heading"><Link href="/design/ui-ux">UI/UX Design <br/> <span className=" text-sm text-gray-400 font-normal font-poppins">Friendly Interface</span></Link></li>
             <li className="font-heading"><Link href="/design/ui-ux">Product Design <br/> <span className=" text-sm text-gray-400 font-normal font-poppins">Unique concepts, Integral design</span></Link></li>
            
            </ul>
          </div>
          <div>
          <div className="mb-10">
            <img src="/s2.png" alt="s4" width={60}/>
           <h3 className='font-bold font-heading  text-2xl my-4'>AI Solutions</h3>
           </div>
            <ul className=" flex flex-col gap-2 text-xl mt-4">
             <li className="font-heading"><Link href="/ai-service/">AI Solutions<br/> <span className=" text-sm text-gray-400 font-normal font-poppins">AI Powered, Integration</span></Link></li>
            
            
            </ul>
          </div>
          <div>
           <div className="mb-10">
            <img src="/s1.png" alt="s4" width={60}/>
           <h3 className='font-bold font-heading  text-2xl my-4'>Cloud Solutions</h3>
           </div>
            <ul className=" flex flex-col gap-2 text-xl mt-4">
             <li className="font-heading"><Link href="/cloud-service/">Cloud Solutions <br/> <span className=" text-sm text-gray-400 font-normal font-poppins">DevOps, AWS Services</span></Link></li>
            
            
            </ul>
          </div>
          
          
        </div>
      </div>
    )
}