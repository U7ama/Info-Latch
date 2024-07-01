import React from 'react'

const Resorces = ({
  heading = 'Our work',
  subHeading = 'From concept to success: see our solutions in action',
  projectName = 'Uni Hub',
  description = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi fugit optio aliquid nam consequuntur eaque ab ea corporis molestiae non delectus ipsa deserunt maxime voluptatibus et temporibus maiores, adipisci nihil?',
  moreDes = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quis consequatur in velit quo minus nihil similique totam ad doloribus temporibus officia veritatis soluta, ex praesentium cum natus odio vel.'
}) => {
  return (
    <div className='min-h-screen w-full px-28 py-10 font-poppins flex justify-between items-center gap-10'>
      <div className='w-1/2'>
        <h1 className='text-5xl capitalize font-bold font-overlock text-forth'>
          {heading}
        </h1>
        <p className='w-[600px] pt-2 pb-3'>{subHeading}</p>
        <hr className='border-t-4 border-tirtry mb-6 w-[200px]' />
        <h1 className='text-3xl font-semibold font-poppins mb-4 text-forth'>
          {projectName}
        </h1>
        <p>{description}</p>
        <br />
        <br />
        <p>{moreDes}</p>
        <div className='py-4'>
          <button className='py-2 px-6 bg-forth text-secondary font-semibold rounded-full'>Case Details</button>
        </div>
      </div>
      <div className='w-1/2'>
        <div className='h-[450px] w-full bg-gray-400 flex justify-center items-center'>Project Image</div>
      </div>
    </div>
  )
}

export default Resorces
