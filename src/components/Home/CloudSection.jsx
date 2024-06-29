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
                  <h2 className="text-3xl font-bold px-10 pb-4 capitalize font-heading text-forth">
                    {" "}
                    Software development

                  </h2>
                  <p className=" px-20 text-sm">
                  Info Latch is an expert at creating custom software that is reliable, scalable, and appropriately matched to your company's specific needs. Whether you require enterprise software, integrated solutions, or a custom application, our experience promises excellent outcomes that advance your company. 

                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" flex justify-center items-center flex-col py-20">
                  <h2 className="text-3xl font-bold px-10 pb-4 capitalize font-heading text-forth">
                  Digital design
                  </h2>
                  <p className=" px-20 text-sm">
                  With careful design of interfaces and an appealing style, we strive to create smooth and captivating user experiences with our digital design services. We place a high value on accessibility and usability to ensure that every digital interaction on web and mobile platforms matches your business identity and improves the user experience.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" flex justify-center items-center flex-col py-20">
                  <h2 className="text-3xl font-bold px-10 pb-4 capitalize font-heading text-forth">
                  AI solution
                  </h2>
                  <p className=" px-20 text-sm">
                  Info Latch creates innovative solutions by utilizing artificial intelligence to automate procedures, analyze trends in data, and provide knowledge that may be used. Our AI solutions enable businesses to optimize processes, identify trends, and make confident decisions based on data, ranging from machine learning techniques to natural language processing tools.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" flex justify-center items-center flex-col py-20">
                  <h2 className="text-3xl font-bold px-10 pb-4 capitalize font-heading text-forth">
                  Cloud solution
                  </h2>
                  <p className=" px-20 text-sm">
                  Reliable cloud solutions from Info Latch are designed to improve scalability and optimize your company's operations. Our expertise ensures secure, adaptable, and affordable solutions that support your growth and creative goals in today's digital ecosystem, whether you require help with cloud migration, infrastructure management, or SaaS implementation.
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
