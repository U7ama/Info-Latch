"use client";

import React, { useEffect, useState } from "react";
import { PopupWidget, PopupButton } from "react-calendly";
import Link from "next/link";

const BookACallButton = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      {/* {open && (
         <div onClick={hanleClick} className='absolute mx-auto flex justify-center bg-gray-300 w-full min-h-screen'>
         <div className=' w-[500px] h-[500px] bg-white'>
         <div data-url='https://calendly.com/infolatchltd/30min' className='calendly-inline-widget z-50'></div>
         </div>
        </div>
      )} */}
      <div className=" bg-forth text-white py-4 px-10 rounded-full border hover:bg-white hover:text-forth border-forth font-semibold  font-poppins">
        {isClient && (
          <PopupButton
            url="https://calendly.com/infolatchltd/30min"
            rootElement={document.body}
            text="Book A Call"
          />
        )}
      </div>
      {/*  
            <button  className=' bg-forth text-white py-4 px-10 rounded-full border hover:bg-white hover:text-forth border-forth font-semibold  font-poppins'>Book a call</button> */}
    </div>
  );
};

export default BookACallButton;
