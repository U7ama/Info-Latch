import React from 'react'
import Link from 'next/link'
const BookACallButton = () => {
  return (
    <div>
        <Link href={"/"} className=' bg-forth text-white py-4 px-10 rounded-full border hover:bg-white hover:text-forth border-forth font-semibold  font-poppins'>Book a call</Link>
    </div>
  )
}

export default BookACallButton