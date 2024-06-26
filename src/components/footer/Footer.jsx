import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
export default function Footer(){
   
  return(
      <>
      <footer>
          <div className="min-h-[350px] bg-white text-black border-t w-full items-start flex justify-center px-28 font-poppins py-10">

              <div className="lg:flex p-10 justify-between items-start w-full">
                 
                  <div className="w-1/4  text-start hidden lg:flex flex-col">
                      <h1 className="text-2xl font-semibold py-3 text-forth">Quick Links</h1>
                      <ul>
                          <li>About</li>
                          <li>Contact US</li>
                          <li>Cookies</li>
                          <li>Disclaimer</li>
                          <li>Saasa Offinces & Contact</li>
                      </ul>
                  </div>
                  <div className="lg:w-1/4 ">
                      <h1 className="text-2xl font-semibold py-3 text-forth">Conatct</h1>
                      <ul className="flex flex-col space-y-3">
                          
                          <li className="flex space-x-2"><MdEmail  className="border-2 border-tirtry text-primary p-2 rounded-full text-4xl"/> <span>example.gmail.com</span></li>
                          <li className="flex space-x-2"><FaPhoneAlt className="border-2 border-tirtry text-primary p-2 rounded-full text-4xl"/><span>123456789</span></li>
                          <li className="flex space-x-2"><IoLocation  className="border-2 border-tirtry text-primary p-2 rounded-full text-4xl"/><span>location.metro sattion</span></li>
                      </ul>
                      </div>
                  <div className="lg:w-1/4  lg:text-start flex-flex-col">
                      <h1 className="text-2xl font-semibold py-3 text-forth">Follow Us</h1>
                      <ul className="flex lg:items-center lg:justify-start space-x-7 mt-8">
                          <Link href={"/"} className="border-2 border-tirtry text-primary p-2 rounded-full text-2xl"><FaFacebook/></Link>
                          <Link href={"/"}className="border-2 border-tirtry text-primary p-2 rounded-full text-2xl"><FaLinkedin/></Link>
                          <Link href={"/"}className="border-2 border-tirtry text-primary p-2 rounded-full text-2xl"><FaSquareXTwitter/></Link>
                      </ul>
                  </div>
              </div>
          </div>
      </footer>
      </>
  )
}
