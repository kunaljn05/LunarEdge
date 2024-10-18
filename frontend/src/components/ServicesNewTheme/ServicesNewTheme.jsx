import React, { useState } from "react";
// import { MdDescription, MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MoonImage from "./bgLandingPage.png";
import BgServices2 from "./BgServices2.png";
import AI_ML_Solutions from "./Bg_AIML.png";
import CLOUD_SOLUTIONS from "./Bg_CLOUD.png";
import WEB_DEVELOPEMENT from "./Bg_WEBDEV.png";
import SOFTWARE_APP_DEVELOPMENT from "./Bg_SOFTWAREAPP.png";
import NEXTGEN_GAME from "./Bg_NEXTGAME.png";
import IT_CONSULTING from "./Bg_CONSULTING.png";
import HARWARE_SUPPLY_SOLUTIONS from "./Bg_HARDWARE.png";
import CYBER_SECURITY from "./Bg_CYBER.png";

import "./ServicesNewTheme.css";


const ServicesNewTheme = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Web Development",
      image: WEB_DEVELOPEMENT,
      description:
        "Custom websites designed for performance and user experience.",
    },
    {
      id: 2,
      title: "Software App Development",
      image: SOFTWARE_APP_DEVELOPMENT,
      description:
        "Innovative software solutions to enhance productivity and growth.",
    },
    {
      id: 3,
      title: "IT Consulting",
      image: IT_CONSULTING,
      description:
        "Expert guidance to optimize your IT strategy and infrastructure.",
    },
    {
      id: 4,
      title: "Cloud Solution",
      image: CLOUD_SOLUTIONS,
      description:
        "Scalable and secure cloud services tailored for your business.",
    },
    {
      id: 5,
      title: "AI & ML Solution",
      image: AI_ML_Solutions,
      description:
        "Intelligent solutions that leverage AI and machine learning for data-driven decisions.",
    },
    {
      id: 6,
      title: "NEXT-GEN Game Development",
      image: NEXTGEN_GAME,
      description: "Engaging games built with the latest technologies.",
    },
    {
      id: 7,
      title: "Cyber Security Services",
      image: CYBER_SECURITY,
      description: "Robust security measures to protect your data and systems.",
    },
    {
      id: 8,
      title: "Hardware Supply And Solution",
      image: HARWARE_SUPPLY_SOLUTIONS,
      description: "Reliable hardware solutions to support your operations.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1850,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="relative flex flex-col items-center justify-center gap-8 md:gap-10 lg:gap-16 h-[600px] md:h-screen overflow-hidden bg-white dark:bg-black z-0">
        {/* Half Moon */}
        <img
          src={MoonImage}
          alt="Half Moon"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            zIndex: -1,
          }}
        />

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-base text-black ">
          Services
        </h1>

        <h2 className="text-3xl md:text-3xl lg:text-5xl font-normal text-black ">
          What we do
        </h2>
        <div className="mt-10 md:hidden"></div>

        <p className="text-black dark:text-white text-lg md:text-2xl lg:text-3xl font-base text-center w-[70%] mt-16 md:mt-16 lg:px-2 lg:mt-6">
          With technology, we advance your business
        </p>
      </div>

      <div
        className="p-[5%] pr-[2%] pb-[5%] bg-white dark:bg-black"
        style={{
          backgroundImage: `url(${BgServices2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* for desktop */}
        <div className="hidden lg:block mx-[5%] px-4">
          <div className="grid xl:gap-10 gap- grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
            {cards.map((card) => (
              <div key={card.id} className="bg-white dark:bg-transparent px-4">
                <div className="border rounded-[25px] h-[350px] relative flex flex-col justify-between overflow-hidden hover:transition hover:duration-300 ease-in-out transform cursor-pointer">
                  <div
                    className="relative h-full w-full"
                    onMouseEnter={() => setHoveredCardId(card.id)}
                    onMouseLeave={() => setHoveredCardId(null)}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover z-0 transition duration-300"
                      style={{
                        filter:
                          hoveredCardId === card.id
                            ? "blur(2px)"
                            : "grayscale(100%)",
                      }}
                    />
                    <div className="absolute inset-0 bg-black opacity-40 z-5"></div>

                    <div className="relative z-10 p-4 h-full flex flex-col justify-between">
                      {hoveredCardId === card.id ? (
                        <>
                          <h3 className="text-lg font-normal pt-10 text-left text-white">
                            {card.title}
                          </h3>
                          <p className="text-white mb-10 text-left">
                            {card.description}
                          </p>
                        </>
                      ) : (
                        <h3 className="text-lg pt-10 font-normal text-left text-white">
                          {card.title}
                        </h3>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* for mobile */}
        <div className="md:hidden p-[10%] px-4">
          <Slider {...settings}>
            {cards.map((card) => (
              <div key={card.id} className="border rounded-[25px] h-[300px] relative flex flex-col justify-between overflow-hidden transition duration-300 ease-in-out transform cursor-pointer">
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover z-0 "
                  style={{
                    filter:
                      hoveredCardId === card.id
                        ? "blur(2px)"
                        : "grayscale(100%)",
                  }}
                />
                <div className="absolute inset-0 bg-black opacity-40 z-5 "></div>

                <div className="relative z-10 p-5 h-full flex flex-col justify-between">
                  <h3 className="text-md font-normal pt-10 text-left text-white">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-md text-white mb-6 text-left">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* medium device scroll right side */}
        <div className="hidden md:block lg:hidden lg:mx-[5%] px-4 mb-5" style={{ direction: "rtl" }}>
          <Slider {...settings2}>
            {cards.map((card) => (
              <div key={card.id} className="border rounded-[25px] h-[280px] md:h-[300px] relative flex flex-col justify-between overflow-hidden transition-all duration-300 ease-in-out cursor-pointer">
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover z-0"
                  style={{
                    filter:
                      hoveredCardId === card.id
                        ? "blur(2px)"
                        : "grayscale(100%)",
                  }}
                />
                <div className="absolute inset-0 bg-black opacity-40 z-5"></div>

                <div className="relative z-10 p-5 h-full flex flex-col justify-between">
                  <h3 className="text-md font-normal pt-10 text-left text-white">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-md text-white mb-6 text-left">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* md scroll left side */}
        <div className="hidden md:block lg:hidden lg:mx-[5%] px-4">
          <Slider {...settings}>
            {cards.map((card) => (
              <div key={card.id} className="border rounded-[25px] h-[300px] relative flex flex-col justify-between overflow-hidden transition duration-300 ease-in-out transform hover:grayscale-0 grayscale-100 cursor-pointer">
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover z-0"
                  style={{
                    filter:
                      hoveredCardId === card.id
                        ? "blur(2px)"
                        : "grayscale(100%)",
                  }}
                />
                <div className="absolute inset-0 bg-black opacity-40 z-5"></div>

                <div className="relative z-10 p-5 h-full flex flex-col justify-between">
                  <h3 className="text-md font-normal pt-10 text-left text-white">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-md text-white mb-6 text-left">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>



        
      </div>
    </>
  );
};

export default ServicesNewTheme;
