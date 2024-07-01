"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";

import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Megadropdown from "../MegaDropDown";
import MegaDropDownCompany from "../MegadropdownForCompany";
import MegaDropDownIndustries from "../MegaDropDownForIndustries";
import Image from "next/image";
const Navbar = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = (item) => {
    setHovered(item);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={`flex justify-between py-6 px-28 fixed w-full font-poppins text-[15px] hrefp-0 left-0 right-0 z-10 text-primary bg-white border-b `}
    >
      <Link href={"/"}>
        <div>
          <Image src="/Logoinfo.png" alt="LOGO" width={130} height={100} />
        </div>
      </Link>
      <div>
        <ul className="flex gap-6 font-semibold">
          <Link
            href={"/"}
            onMouseEnter={() => handleMouseEnter("home")}
            onMouseLeave={handleMouseLeave}
            className={`${hovered === "home" ? "text-tirtry" : ""}`}
          >
            Home
          </Link>
          <li
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/"
              className={`flex gap-2 justify-center items-center transition-all duration-150 ${
                hovered === "services" ? "text-tirtry" : ""
              }`}
            >
              Services{" "}
              {hovered === "services" ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </Link>
            {hovered === "services" && (
              <div
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <Megadropdown />
              </div>
            )}
          </li>
          <li>
            <Link
              href={"/"}
              onMouseEnter={() => handleMouseEnter("Industries")}
              onMouseLeave={handleMouseLeave}
              className={`flex gap-2 justify-center items-center transition-all duration-150 ${
                hovered === "Industries" ? "text-tirtry" : ""
              }`}
            >
              Industries{" "}
              {hovered === "Industries" ? <IoIosArrowUp /> : <IoIosArrowDown />}{" "}
            </Link>
            {hovered === "Industries" && (
              <div
                onMouseEnter={() => handleMouseEnter("Industries")}
                onMouseLeave={handleMouseLeave}
              >
                <MegaDropDownIndustries />
              </div>
            )}
          </li>

          <Link
            href={"/work"}
            onMouseEnter={() => handleMouseEnter("work")}
            onMouseLeave={handleMouseLeave}
            className={`${hovered === "work" ? "text-tirtry" : ""}`}
          >
            Our Work
          </Link>
          <li>
            <Link
              href={"/"}
              onMouseEnter={() => handleMouseEnter("Company")}
              onMouseLeave={handleMouseLeave}
              className={`flex gap-2 justify-center items-center transition-all duration-150 ${
                hovered === "Company" ? "text-tirtry" : ""
              }`}
            >
              Company{" "}
              {hovered === "Company" ? <IoIosArrowUp /> : <IoIosArrowDown />}{" "}
            </Link>
            {hovered === "Company" && (
              <div
                onMouseEnter={() => handleMouseEnter("Company")}
                onMouseLeave={handleMouseLeave}
              >
                <MegaDropDownCompany />
              </div>
            )}
          </li>

          <Link
            href={"/blog"}
            onMouseEnter={() => handleMouseEnter("Blog")}
            onMouseLeave={handleMouseLeave}
            className={`${hovered === "Blog" ? "text-tirtry" : ""}`}
          >
            Blogs
          </Link>
          <Link
            href={"/admin"}
            // onMouseEnter={() => handleMouseEnter("Blog")}
            // onMouseLeave={handleMouseLeave}
            // className={`${hovered === "Blog" ? "underline" : ""}`}
          >
            Add Blog
          </Link>
        </ul>
      </div>
      <Link
        href="/contact"
        className="border-2 bg-forth text-secondary font-semibold rounded-full py-3 px-6 text-sm"
      >
        Contact US
      </Link>
    </div>
  );
};

export default Navbar;
