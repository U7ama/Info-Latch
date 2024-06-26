
'use client'
import React,{useState} from 'react'
import styles from "./navbar.module.css";
import Link from 'next/link';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Navbar =  () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = (item) => {
    setHovered(item);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };


  return (
    <div className={`flex justify-between py-6 px-28 fixed w-full font-poppins text-[15px] hrefp-0 left-0 right-0 z-10 text-primary bg-white border-b `}>
        <div>
        <img src="/Logoinfo.png" alt="LOGO" width={130} />
        </div>
        <div>
          <ul className='flex gap-6 font-semibold'>
            <Link href={"/"} onMouseEnter={() => handleMouseEnter("home")}
              onMouseLeave={handleMouseLeave}
            >Home</Link>
            <Link href={"/"} onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
              className='flex gap-2 justify-center items-center transition-all duration-150'
            >Services {hovered === "services" ? <IoIosArrowUp /> : <IoIosArrowDown />} </Link>
            <Link href={"/"} onMouseEnter={() => handleMouseEnter("Industries")}
              onMouseLeave={handleMouseLeave}
              className='flex gap-2 justify-center items-center transition-all duration-150'
            >Industries {hovered === "Industries" ? <IoIosArrowUp /> : <IoIosArrowDown />} </Link>
            <Link href={"/"} onMouseEnter={() => handleMouseEnter("work")}
              onMouseLeave={handleMouseLeave}
            >Our Work</Link>
            <Link href={"/"} onMouseEnter={() => handleMouseEnter("Company")}
              onMouseLeave={handleMouseLeave}
              className='flex gap-2 justify-center items-center transition-all duration-150'
            >Company {hovered === "Company" ? <IoIosArrowUp /> : <IoIosArrowDown />} </Link>
            <Link href={"/"} onMouseEnter={() => handleMouseEnter("Blog")}
              onMouseLeave={handleMouseLeave}
              className={`${hovered === "Blog" ? 'underline' : ''}`}
            >Blog</Link>
          </ul>
        </div>
        <button className='border-2 bg-tirtry text-secondary font-semibold rounded-full py-3 px-6 text-sm'>Contact US</button>
      </div>

  )
}

export default Navbar
