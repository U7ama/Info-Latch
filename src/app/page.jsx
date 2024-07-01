import React from "react";
import BookACallButton from "@/components/BookACallButton";
import ExploreMeButton from "@/components/ExploreMeButton";
import GetandEstimateButtn from "@/components/GetandEstimateButtn";
import OurServicesSection from "@/components/Home/OurServicesSection";
import CloudSection from "@/components/Home/CloudSection";
import ContactInfo from "@/components/Home/ContactInfo";
import Resorces from "@/components/Home/Resorces";
import TestimonialSlider from "@/components/Home/TestimonialSection";
import TrustedBy from "@/components/Home/TrustedBy";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <div className="divBg  flex items-center justify-start  w-full h-screen   pt-10  px-28 ">
        <div className=" w-[750px] mt-10">
          <p
            data-aos="fade-down"
            data-aos-duration="900"
            className=" font-poppins  text-primary"
          >
            We focus on developing unique software solutions to accelerate your
            business&apos;s expansion.
          </p>
          <h1
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-primary text-3xl py-4 font-overlock font-bold "
          >
            Take your ideas to the next level with Info Latch`&apos;s reliable
            creative and technical services. We provide premium, personalized
            software solutions to meet your specific company goals.{" "}
            <span className=" text-forth">
              your vision`&apos;s best future.
            </span>
          </h1>

          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className=" mt-4 flex gap-4 justify-start items-center"
          >
            <BookACallButton />
            <GetandEstimateButtn />
          </div>
        </div>
        <div className="check flex items-start justify-start mb-10 mr-20"></div>
      </div>

      <TrustedBy />
      <CloudSection />

      <OurServicesSection />
      <Resorces />
      <TestimonialSlider />
      {/* <TestimonialSection/> */}
      <div className=" flex items-center justify-center flex-col py-14 px-28 font-poppins">
        <h1 className=" text-2xl absolute py-2 px-4 bg-white text-forth font-semibold">
          Trusted By
        </h1>
        <hr className=" border-t-2 border-forth w-full " />
      </div>
      <div className="logos">
        <div className="logos-slide">
          <Image src="/logos/1.svg" alt="0" />
          <Image src="/logos/2.svg" alt="two" />
          <Image src="/logos/3.svg" alt="two" />
          <Image src="/logos/4.svg" alt="two" />
          <Image src="/logos/5.svg" alt="two" />
          <Image src="/logos/6.svg" alt="two" />
          <Image src="/logos/7.svg" alt="two" />
          <Image src="/logos/8.svg" alt="two" />
        </div>
      </div>
      <div className="px-28">
        <hr className=" border-t-2 border-forth w-full " />
      </div>
      {/* <Link href='https://wa.me/03446743886?text=Hello%20there' className="bottom-10 right-10  fixed">
        <Image src="/whatsapp.png" alt="sas" width={60} />
      </Link> */}
    </div>
  );
}
