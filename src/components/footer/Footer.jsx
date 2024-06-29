import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6268083081222!2d-0.11056392414385266!3d51.520062309779206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b4dd9bf3689%3A0x81e904e52e4cb8f6!2s4787%203a%2C%2034-35%20Hatton%20Garden%2C%20London%20EC1N%208DX%2C%20UK!5e0!3m2!1sen!2s!4v1719565020122!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
export default function Footer(){
   
  return(
      <>
      <footer>
          <div className="min-h-[350px] bg-white text-black border-t w-full items-start flex justify-center px-20 font-poppins py-10">

              <div className="lg:flex justify-between items-start w-full">
              <div>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6268083081222!2d-0.11056392414385266!3d51.520062309779206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b4dd9bf3689%3A0x81e904e52e4cb8f6!2s4787%203a%2C%2034-35%20Hatton%20Garden%2C%20London%20EC1N%208DX%2C%20UK!5e0!3m2!1sen!2s!4v1719565020122!5m2!1sen!2s" width="300" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                  <div className="  text-start hidden lg:flex flex-col">
                      <h1 className="text-2xl font-semibold py-3 text-forth">Quick Links</h1>
                      <ul>
                          <li>About</li>
                          <li>Contact US</li>
                          <li>Cookies</li>
                          <li>Disclaimer</li>
                          <li>Saasa Offinces & Contact</li>
                      </ul>
                  </div>
                 
                  <div className=" ">
                      <h1 className="text-2xl font-semibold py-3 text-forth">Conatct</h1>
                      <ul className="flex flex-col space-y-3">
                          
                          <li className="flex space-x-2"><MdEmail  className="border-2 border-tirtry text-primary p-2 rounded-full text-4xl"/> <span>example.gmail.com</span></li>
                          <li className="flex space-x-2"><FaPhoneAlt className="border-2 border-tirtry text-primary p-2 rounded-full text-4xl"/><span>123456789</span></li>
                          <li className="flex space-x-2"><IoLocation  className="border-2 border-tirtry text-primary p-2 rounded-full text-4xl"/><span>location.metro sattion</span></li>
                      </ul>
                      </div>
                  <div className=" lg:text-start flex-flex-col">
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
