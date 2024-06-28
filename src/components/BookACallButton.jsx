'use client'

import React,{useEffect, useState} from 'react'
import { PopupWidget } from "react-calendly";
import Link from 'next/link'
import { PopupButton } from "react-calendly";
const BookACallButton = () => {
const [open, setOpen] = useState(false)
  
  return (
    <div>
  
  <div className=' bg-forth text-white py-4 px-10 rounded-full border hover:bg-white hover:text-forth border-forth font-semibold  font-poppins'>
  <PopupButton
        url="https://calendly.com/infolatchltd/30min"
       
        rootElement={document && document.body}
        text="Book A Call"
      />
  </div>

    </div>
  )
}

export default BookACallButton

