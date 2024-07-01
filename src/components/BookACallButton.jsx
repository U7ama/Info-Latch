"use client";

import React, { useEffect, useState } from "react";
import { PopupWidget, PopupButton } from "react-calendly";
import Link from "next/link";

const BookACallButton = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <div className=" bg-forth text-white py-4 px-10 rounded-full border hover:bg-white hover:text-forth border-white hover:border-forth font-semibold  font-poppins">
        {isClient && (
          <PopupButton
            url="https://calendly.com/infolatchltd/30min"
            rootElement={document.body}
            text="Book A Call"
          />
        )}
      </div>
    </div>
  );
};

export default BookACallButton;
