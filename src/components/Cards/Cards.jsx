import React from 'react';
import { RiGlobeFill } from "react-icons/ri";

const Cards = ({ number, text }) => {
  return (
    <div className='max-w-[300px] px-4 flex flex-col items-center text-center gap-4 rounded-2xl border-l-8 border-tirtry'>
     
        <h1 className='text-7xl mt-[-30px] text-gray-700 '>{number}</h1>
      
      <p className='font-poppins text-sm text-primary font-semibold'>{text}</p>
    </div>
  );
};

export default Cards;
