"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "./home.css";
import Image from "next/image";

// import required modules

const CloudSection = () => {
  return (
    <div className="w-full min-h-[500px] px-20 py-10 relative font-poppins z-0">
      <div className="flex items-center">
        <div className="h-[300px] w-[800px]  z-20 bg-transparent relative">
          <div className="absolute top-0 left-0 p-4">
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper w-[650px] h-[300px] shadow-lg bottom-4"
            >
              <SwiperSlide>
                <div className=" flex justify-center items-center flex-col py-20">
                  <h2 className="text-xl font-bold px-10">
                    {" "}
                    Excellence in Digital Designs Experiences
                  </h2>
                  <p className=" px-20 text-sm">
                    We are experts in digital design at Figma Design, and we can
                    make the best UI and UX designs for you. As one of the best
                    design firms, we combine creativity with ease to make
                    digital experiences that are truly engaging.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" flex justify-center items-center flex-col py-20">
                  <h2 className="text-xl font-bold px-10">
                    Advanced AI Solutions Can Help Your business
                  </h2>
                  <p className=" px-20 text-sm">
                    Our team of AI experts has created AI solutions that will
                    help you unlock the future. As a top company that uses
                    artificial intelligence, we offer modern AI services that
                    will improve and change the way your business works.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" flex justify-center items-center flex-col py-20">
                  <h2 className="text-xl font-bold px-10">
                    Scalability Redefined by Our Cloud Solutions
                  </h2>
                  <p className=" px-20 text-sm">
                    Figma Designs modern cloud solutions experts can help your
                    business grow. We are trusted experts in cloud solutions,
                    and we offer safe, scalable cloud services that are made to
                    fit the needs of your business. Our experienced team makes
                    sure that everything works together easily and effectively.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="ml-[-30px]">
          <Image
            src="/cloud.jpg"
            alt="cloud"
            width={700}
            height={400}
            className="relative z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default CloudSection;
