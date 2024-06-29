import React from 'react'

import GetandEstimateButtn from '@/components/GetandEstimateButtn';
import BookACallButton from '@/components/BookACallButton';
export const metadata = {
    title: "About Page",
    description: "About description",
};
import GetConsultingSection from '@/components/GetConsultingSection';
import BenefitsUs from '../services/BenefitsWorkWithUs';
const AboutPage = () => {
  return (
    <>
    <div className='bg-forth'>
    <div className="  flex justify-between pt-20 pb-10 gap-10">
    <div className='pt-20 min-h-fit flex justify-center items-start  text-secondary flex-col py-20 pl-20 w-[70%]'>
        <h1 className=' text-6xl  font-poppins tracking-wide font-bold leading-tight'>Find out more about
        our company</h1>
        <p className=' font-poppins pt-6'>Continued success at dotcode has prompted us to grow an international team of the brightest minds in software development. Meet the company’s leadership and the hard-working people, who deliver game-changing software solutions to companies like yours.</p>
        <div  
  className=' py-6 flex gap-4 justify-start items-center'>
<BookACallButton/>
<GetandEstimateButtn/>
</div>
    </div>
   
    </div>
   
    </div>
   <div>
    <img src="/group.jpg" alt="helo" className=' w-full minh-screen' />
   </div>
   <div className=' flex justify-between items-start py-20 px-28 gap-10 min-h-screen w-full'>
   <div className=' w-1/2'>
    <h1 className=' text-4xl font-heading mb-8 font-semibold uppercase text-forth'>Our story </h1>
    <p>Established in 2017 by a group of brilliant minds, experts in Computer Sciences and Applied Mathematics, dotcode embarked on a journey to redefine the future of software development for those who are in need of functional yet cost-effective products. From the very beginning, the company set its sights high, striving not just for success but for excellence. This commitment has been the driving force behind the dotcode's consistent growth. Year after year, we have surpassed expectations, leaving a trail of satisfied clients and great projects in our wake. Based on our experience, we know exactly how to combine software development according to the rules and best practices without sacrificing the innovativeness of your bold ideas.
      <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda non impedit quasi vitae necessitatibus reprehenderit voluptatibus corporis qui, animi est, maiores ullam, dignissimos officia atque accusantium quos. Repellat, amet obcaecati!

    </p>
   </div>
   <div className=' w-1/2'>
   <img src="/single.jpg" alt="helo" />
   </div>
   </div>
   <div className=' flex justify-between items-start py-20 px-28 gap-10 min-h-screen w-full'>
   <div className=' w-1/2'>
   <img src="/group.jpg" alt="helo" />
   </div>
   <div className=' w-1/2'>
    <h1 className=' text-4xl font-heading mb-8 font-semibold uppercase text-forth'>Our Mission </h1>
    <p>Established in 2017 by a group of brilliant minds, experts in Computer Sciences and Applied Mathematics, dotcode embarked on a journey to redefine the future of software development for those who are in need of functional yet cost-effective products. From the very beginning, the company set its sights high, striving not just for success but for excellence. This commitment has been the driving force behind the dotcode's consistent growth. Year after year, we have surpassed expectations, leaving a trail of satisfied clients and great projects in our wake. Based on our experience, we know exactly how to combine software development according to the rules and best practices without sacrificing the innovativeness of your bold ideas.
      <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda non impedit quasi vitae necessitatibus reprehenderit voluptatibus corporis qui, animi est, maiores ullam, dignissimos officia atque accusantium quos. Repellat, amet obcaecati!

    </p>
   </div>
   
   </div>
   <BenefitsUs/>
   <GetConsultingSection heading={" Interested in different services?"} text1={"Look no further. Your challenge, our expertise."} text2={"Schedule a call to share your idea!"}/>
   </>
  )
}

export default AboutPage
