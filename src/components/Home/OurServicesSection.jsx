'use client';
import React, { useState } from 'react';
import { FaAngleDown, FaPaintRoller } from 'react-icons/fa';
import { IoMdCloseCircle } from "react-icons/io";
import { SiCodesignal, SiAntdesign } from "react-icons/si";
import { FaCloud } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { TbSeo } from "react-icons/tb";
import ExploreMeButton from '../ExploreMeButton';

const OurServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('Software Development');
  const [height, setHeight] = useState(false);
  const [visibleDescriptions, setVisibleDescriptions] = useState({});

  const toggleDescription = (id) => {
    setVisibleDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    setHeight(!height);
  };

  const Services = [
    {
      id: 1,
      h3: 'Software Development',
      src: FaPaintRoller,
      des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nam cupiditat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nam cupiditat consectetur adipisicing elit. Doloremque nam cupiditat',
      to: '/services',
    },
    {
      id: 2,
      h3: 'Digital Design',
      src: MdDesignServices,
      des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nam cupiditat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nam cupiditat consectetur adipisicing elit. Doloremque nam cupiditat',
      to: '/',
    },
    {
      id: 3,
      h3: 'AI Solutions',
      src: SiAntdesign,
      des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nam cupiditat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nam cupiditat consectetur adipisicing elit. Doloremque nam cupiditat',
      to: '/',
    },
    {
      id: 4,
      h3: 'SEO',
      src: TbSeo,
      des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nam cupiditat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nam cupiditat consectetur adipisicing elit. Doloremque nam cupiditat',
      to: '/',
    },
    {
      id: 5,
      h3: 'Graphic Design',
      src: SiCodesignal,
      des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nam cupiditat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nam cupiditat consectetur adipisicing elit. Doloremque nam cupiditat',
      to: '/',
    },
    {
      id: 6,
      h3: 'Cloud Solution',
      src: FaCloud,
      des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nam cupiditat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nam cupiditat consectetur adipisicing elit. Doloremque nam cupiditat',
      to: '/',
    },
  ];

  return (
    <div className={`w-full ${height ? 'min-h-[900px]' : 'min-h-screen'} transition-all duration-200 trustedDiv bg-gradient-to-r from-forth to-tirtry flex flex-col items-center justify-start py-20 px-28 mt-10 text-secondary`}>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='font-overlock text-5xl mb-4 font-semibold text-center'>
            Our Services
          </h1>
          <p className='font-poppins w-[500px] text-center'>
            Explore Our Comprehensive Service Offerings Solutions Tailored to Your Needs
          </p>
          <hr className='mt-3 w-[200px] border-t-4 border-secondary items-center mx-auto' />
        </div>
      </div>
      <div className='grid grid-cols-3 justify-between items-start gap-2 pt-20 relative'>
        {Services.map((service) => (
          <div key={service.id} >
            <div onClick={() => toggleDescription(service.id)} className={`max-w-[590px] min-h-[100px] ${visibleDescriptions[service.id] ? 'bg-white text-forth' : 'bg-[#082140] text-secondary'} font-poppins p-6 flex gap-4 transition-all duration-200 shadow-lg cursor-pointer`}>
              <div className='flex flex-col gap-4 text-center'>
                <div className='flex gap-4 items-center'>
                  <div className='border-2 border-forth p-6 flex items-center w-12 justify-center rounded-full h-12'>
                    <p className={`${visibleDescriptions[service.id] ? 'text-primary' : 'text-secondary'} text-xl`}>{<service.src />}</p>
                  </div>
                  <h3 className={`font-poppins font-semibold text-xl ${visibleDescriptions[service.id] ? 'text-primary' : 'text-secondary'}`}>{service.h3}</h3>
                </div>
              </div>
            </div>
            {visibleDescriptions[service.id] && (
              <div className={`flex justify-center mx-auto left-0  overflow-hidden flex-col absolute h-[390px] w-[1062px] bg-white text-primary z-40 mt-2 pt-6 px-10 font-poppins transition-all duration-150`}>
                <div className='flex justify-end items-center'>
                  <button onClick={() => toggleDescription(service.id)}><IoMdCloseCircle className='text-3xl text-forth' /></button>
                </div>
                <div className='flex flex-col items-start justify-start text-start'>
                  <h1 className='py-4 font-semibold capitalize text-forth text-2xl'>Transform Ideas into Reality With Our Software Development Services</h1>
                  <p>{service.des}</p>
                  <div className='mt-6'>
                    <ExploreMeButton to={service.to} />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServicesSection;
