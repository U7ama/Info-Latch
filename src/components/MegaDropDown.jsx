import Link from "next/link"


export default function Megadropdown(){
    return(
        <div className='absolute   mx-auto overflow-hidden right-0 left-0   w-full bg-white shadow-lg py-6 flex'>
        <div className='grid grid-cols-3 gap-4'>
          {/* Megadropdown content for Services */}
          <div>
            <h3 className='font-bold mb-2'>Development</h3>
            <ul>
              <li><Link href="/services/web-development">Web Development</Link></li>
              <li><Link href="/services/mobile-development">Mobile Development</Link></li>
              <li><Link href="/services/software-development">Software Development</Link></li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold mb-2'>Design</h3>
            <ul>
              <li><Link href="/services/ui-ux-design">UI/UX Design</Link></li>
              <li><Link href="/services/graphic-design">Graphic Design</Link></li>
              <li><Link href="/services/branding">Branding</Link></li>
            </ul>
          </div>
          
        </div>
      </div>
    )
}