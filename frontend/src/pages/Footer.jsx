import React, { useState } from "react";
import MyImage from "../assets/MyImage.gif";
import { BsWhatsapp } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  // scrolling-down-to-sevice-box

  const isExtraSmallDevice = useMediaQuery({ maxWidth: 599 });
  const isSmallDevice = useMediaQuery({ minWidth: 600, maxWidth: 767 });
  const isMediumDevice = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isLargeDevice = useMediaQuery({ minWidth: 992, maxWidth: 1199 });
  const isExtraLargeDevice = useMediaQuery({ minWidth: 1200 });
  const [clickedSection, setClickedSection] = useState(""); // Section clicked by user

  // Scroll to specific section and set it as clicked
  const scrollToSection = (e, section) => {
    e.preventDefault(); // Prevent default anchor behavior
    setClickedSection(section); // Set clicked section
    const sectionElement = document.querySelector(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to section
    }
  };

  const navigate = useNavigate();

  const handleServiceClick = () => {
    navigate("/");

    setTimeout(() => {
      if (isExtraSmallDevice) {
        window.scrollTo(0, 3000);
      } else if (isSmallDevice) {
        window.scrollTo(0, 2600);
      } else if (isMediumDevice) {
        window.scrollTo(0, 2500);
      } else if (isLargeDevice) {
        window.scrollTo(0, 2650);
      } else {
        window.scrollTo(0, 3200);
      }
    }, 200);
  };

  const handleAboutClick = () => {
    navigate("/");
    setTimeout(() => {
      if (isExtraSmallDevice) {
        window.scrollTo(0, 550);
      } else if (isSmallDevice) {
        window.scrollTo(0, 580);
      } else if (isMediumDevice) {
        window.scrollTo(0, 700);
      } else if (isLargeDevice) {
        window.scrollTo(0, 700);
      } else {
        window.scrollTo(0, 900);
      }
    }, 200);
  };

  // socila icon size set 
  const getSize = () => {
    if (window.innerWidth < 640) {
        return 16; 
    } else if (window.innerWidth < 768) { 
        return 20; 
    }
    return 25; 
};

const iconSize = getSize();


const currentYear = new Date().getFullYear();


  return (
    <footer className="bg-gradient-to-r from-[#a6a6a6] to-[#ffffff]  lg:grid lg:grid-cols-5 border-t-2 border-black dark:border-white  ">
      <div className="px-3 py-3 md:py-6 sm:px-6 lg:col-span-3 lg:px-6 dark:bg-black ">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-sm uppercase tracking-wide text-black dark:text-white ">
                Call us
              </span>
              <a
                href="tel:0141-4512611"
                className="block text-2xl font-medium text-black dark:text-white hover:opacity-75 sm:text-3xl "
              >
                0141-4512611
              </a>
            </p>

            <ul className="text-sm">
              <br />
              <li className="flex gap-2 items-center">
                <div className="mb-[2px]">
                  <BsWhatsapp className="text-green-600" />
                </div>
                <p className="text-blue-600  hover:underline underline-offset-2 transition-all duration-300 whitespace-nowrap">
                  <a href="https://wa.me/919829011076" target="_blank">
                    +91-9829011076
                  </a>
                </p>
                <span className="font-semibold text-black dark:text-white whitespace-nowrap">
                  {" "}
                  [Sandeep Katariya]
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <div>
                  <BsWhatsapp className="text-green-600" />
                </div>
                <p className="text-blue-600  hover:underline underline-offset-2 transition-all duration-300">
                  <a href="https://wa.me/917760701155" target="_blank">
                    +91-7760701155
                  </a>
                </p>
                <span className="font-semibold text-black dark:text-white">
                  {" "}
                  [Sanjeev Ola]
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-row flex-wrap gap-4 px-4">
            <div className="flex-1">
              <p className="font-medium text-black dark:text-white ">
                Quick Links
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link
                    to="/common"
                    className="text-blac dark:text-white transition hover:opacity-75"
                  >
                    Career
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-black dark:text-white  transition hover:opacity-75"
                  >
                    Services
                  </Link>
                </li>
                {/* <li>
                  <Link
                    to="https://www.linkedin.com/company/lunaredge/"
                    target="_blank"
                    className="text-black dark:text-white  transition hover:opacity-75"
                  >
                    LinkedIn
                  </Link>
                </li> */}
              </ul>
            </div>

            <div className="flex-1">
              <p className="font-medium text-black dark:text-white ">Company</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href="#aboutUs"
                    onClick={(e) => scrollToSection(e, "#aboutUs")}
                    className="text-black dark:text-white  transition hover:opacity-75 cursor-pointer"
                  >
                    About
                  </a>
                </li>
                <li>
                  <Link
                    to="/contactus"
                    className="text-black dark:text-white  transition hover:opacity-75"
                  >
                    Meet the Team
                  </Link>
                </li>
              </ul>
              <div className="flex justify-items-end gap-4 mt-6">
            <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" dark:text-white text-blue-600"
            >
                <FaFacebook size={iconSize} />
            </a>
            <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" dark:text-white text-blue-400"
            >
                <FaTwitter size={iconSize} />
            </a>
            <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" dark:text-white text-blue-700"
            >
                <FaLinkedin size={iconSize} />
            </a>
            <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" dark:text-white text-pink-600"
            >
                <FaInstagram size={iconSize} />
            </a>
        </div>
        </div>
            </div>
            

           
          </div>
          

        <div className=" mt-2 md:mt-4 border-t border-black dark:border-white pt-2 md:pt-4 ">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs">
              <li>
                <Link
                  to="/common"
                  className="text-black dark:text-white  transition hover:opacity-75 "
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/common"
                  className="text-black dark:text-white  transition hover:opacity-75 "
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/common"
                  className="text-black dark:text-white  transition hover:opacity-75 "
                >
                  Cookies
                </Link>
              </li>
            </ul>

            <p className=" mt-3 md:mt-6 text-xs text-black dark:text-white  sm:mt-0 ">
              &copy; {currentYear}. LunarEdge IT Services Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <div className=" hidden relative lg:block  lg:col-span-2 lg:h-full">
        <img
          className="z-5 absolute inset-0 h-[150px] md:h-full w-full object-cover"
          src={MyImage}
          alt="please reload"
        />
      </div>
    </footer>
  );
};

export default Footer;
