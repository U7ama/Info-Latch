"use client";

import React, { useState } from "react";


const ContactForm = () => {
 
 
  

  return (
   <div className="min-h-screen flex justify-center items-center bg-forth text-secondary px-20">
  <div className="flex justify-between">
    <div className=" w-1/2 ">
<h1 className=" text-6xl font-semibold font-poppins capitalize mt-40">Tell us about your project</h1>
<p className=" mt-10 font-poppins w-[500px]">In our brief consultation, protected by an NDA, we'll assess your product for critical design issues and outline potential steps that are tailored specifically to your goals</p>
    </div>
    <div className=" w-1/2 px-6">
<form action="">
  <div className=" flex flex-wrap gap-10   mt-20 justify-between">
  <input type="text" name="name" id="name" className="border-b-2 border-tirtry bg-transparent py-2 focus:outline-none outline-none" placeholder="Full Name"/>

  <input type="email" name="email" id="email" className="border-b-2 border-tirtry bg-transparent py-2 focus:outline-none outline-none"placeholder="Email"/>
  <input type="text" name="Phone" id="Phone" className="border-b-2 border-tirtry bg-transparent py-2 focus:outline-none outline-none" placeholder="Phone Number"/>
  <input type="text" name="Country" id="Country" className="border-b-2 border-tirtry bg-transparent py-2 focus:outline-none outline-none" placeholder="Country"/>
  </div>
  <textarea id="message" rows="4" className="outline-0 mt-10  p-2.5 w-full text-sm bg-transparent border-b-2 border-tirtry focus:outline-none outline-none" placeholder='Message' ></textarea>
  <div>
  <button className=" py-3 px-20 bg-tirtry mt-10 rounded-full">Send</button>
  </div>
</form>
    </div>
  </div>
   </div>
  );
};

export default ContactForm;
