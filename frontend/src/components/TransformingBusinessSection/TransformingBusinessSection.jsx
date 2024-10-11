import React, { useState, useEffect, useRef } from "react";
import halfmoon from './halfmoon.png';
import html from './html-5.png';
import sql from './sql.png';
import reactImg from './react.png';
import mongodb from './mongodb.png';
import aws from './aws.png';
import nodejs from './nodejs.png';
import figma from './figma.png';
import java from './java.png';
import css from './css.png';

const TransformingBusinessSection = () => {
  // Define state for active technology
  const [activeTechnology, setActiveTechnology] = useState(null);

  // Array of technologies for cycling through
  const technologies = ['figma', 'nodejs', 'mongodb', 'sql', 'html', 'react', 'aws', 'java', 'css'];

  // Ref to keep track of the index
  const indexRef = useRef(0);

  // Function to set the active technology
  const handleTechnologyClick = (tech) => {
    setActiveTechnology(tech);
    indexRef.current = technologies.indexOf(tech); // Update ref to the clicked tech index
  };

  // Define content for each technology
  const technologyContent = {
    html: "HTML is the backbone of web development, structuring content to create intuitive and user-friendly websites. Our team ensures seamless coding for optimal website performance.",
    sql: "SQL (Structured Query Language) is a standard language for managing and manipulating databases, allowing for the querying, updating, and management of data.",
    react: "React is a JavaScript library for building user interfaces, especially single-page applications, by using a component-based architecture.",
    mongodb: "MongoDB is a NoSQL database designed for scalability and flexibility, allowing developers to store and query large amounts of unstructured data.",
    aws: "Amazon Web Services (AWS) is a comprehensive cloud computing platform that offers services like computing power, storage, and databases.",
    nodejs: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that enables fast and scalable network applications.",
    java: "Java is a high-level, class-based programming language designed to have as few implementation dependencies as possible, making it widely portable.",
    figma: "Figma is a web-based UI/UX design tool that allows for collaborative design, prototyping, and sharing of designs in real-time.",
    css: " With CSS, we design visually engaging and responsive websites that adapt across devices. Our styling ensures an aesthetic and functional user experience."
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTechnology(technologies[indexRef.current]); 
      indexRef.current = (indexRef.current + 1) % technologies.length; // Cycle through the index
    }, 3000); 

    return () => clearInterval(interval); // Cleanup on unmount
  }, [technologies]);

  return (
   <>
    <div  id="technology" className="h-[10px] w-full hidden lg:block"></div>
    <div className="w-full h-[390px]  md:h-screen md:px-5 md:mt-28">
      <div className="w-[97%] h-[80%] md:h-full mx-auto flex flex-col justify-between">
        {/* heading-div */}
        <div className="w-full md:w-[50%] h-[40%] md:h-[60%] lg:h-auto mx-auto flex flex-col gap-3 md:gap-1 justify-center items-center">
          <p className="text-lg lg:text-4xl dark:text-white text-black md:text-nowrap text-center">
            TRANSFORMING BUSINESS THROUGH TECHNOLOGY
          </p>
          <p className="text-sm md:text-lg lg:text-2xl md:text-nowrap dark:text-white text-black text-center">
            We harness the latest tools to deliver exceptional results
          </p>
        </div>

        {/* Circle Gradients and Image */}
        <div className="w-full h-full relative">
          {/* First circle */}
          <div className="absolute left-[47%] md:left-[45%] top-[24%] md:top-[7%] w-[32%] xl:top-[5%] xl:left-[48%] h-auto flex justify-between items-center">
            <div
              className={`z-10 h-9 w-9 md:h-16 md:w-16 lg:h-24 lg:w-24 rounded-full bg-white dark:bg-black border transition-all duration-300 p-1 md:p-2 flex justify-center items-center cursor-pointer ${activeTechnology === 'html' ? 'dark:bg-white border-black scale-110' : ''}`}
              onClick={() => handleTechnologyClick('html')}
            >
              <img src={html} alt="HTML" className="h-[80%] w-[80%] object-contain" />
            </div>
          </div>

          {/* Second row of circles */}
          <div className="absolute left-[31%] xl:top-[9%] md:w-[37%] xl:w-[36%] xl:left-[33%] lg:left-[30%] top-[29%] md:top-[11%] lg:top-[10%] w-[41%] lg:w-[40%] h-auto flex justify-between items-center">
            <div
              className={`z-10 h-9 w-9 md:h-16 md:w-16 lg:h-24 lg:w-24 rounded-full bg-white dark:bg-black border hover:text-gray-400 transition-all duration-300 p-1 md:p-2 flex justify-center items-center cursor-pointer ${activeTechnology === 'sql' ? 'dark:bg-white border-black scale-110' : ''}`}
              onClick={() => handleTechnologyClick('sql')}
            >
              <img src={sql} alt="SQL" className="h-[80%] w-[80%] object-contain" />
            </div>
            <div
              className={`z-10 h-9 w-9 md:h-16 md:w-16 lg:h-24 lg:w-24 rounded-full bg-white dark:bg-black border hover:text-green-700 transition-all duration-300 p-1 md:p-2 flex justify-center items-center cursor-pointer ${activeTechnology === 'react' ? ' dark:bg-white border-black scale-110' : ''}`}
              onClick={() => handleTechnologyClick('react')}
            >
              <img src={reactImg} alt="react" className="h-[80%] w-[80%] object-contain" />
            </div>
          </div>

          {/* Third row of circles */}
          <div className="absolute left-[17%] top-[40%] md:top-[22%] lg:left-[17%] w-[67%] lg:w-[66%] xl:w-[60%] xl:left-[21%] xl:top-[21%] h-auto flex justify-between items-center">
            <div
              className={`z-10 h-9 w-9 md:h-16 md:w-16 lg:h-24 lg:w-24 rounded-full bg-white dark:bg-black border p-1 md:p-2 flex justify-center items-center cursor-pointer transition-all duration-300 ${activeTechnology === 'mongodb' ? 'dark:bg-white border-black scale-110' : ''}`}
              onClick={() => handleTechnologyClick('mongodb')}
            >
              <img src={mongodb} alt="mongodb" className="h-[80%] w-[80%] object-contain" />
            </div>
            <div
              className={`z-10 h-9 w-9 md:h-16 md:w-16 lg:h-24 lg:w-24 rounded-full bg-white dark:bg-black border p-1 md:p-2 flex justify-center items-center transition-all duration-300 cursor-pointer ${activeTechnology === 'aws' ? 'dark:bg-white border-black scale-110' : ''}`}
              onClick={() => handleTechnologyClick('aws')}
            >
              <img src={aws} alt="aws" className="h-[80%] w-[80%] object-contain" />
            </div>
          </div>

          {/* Fourth row of circles */}
          <div className="absolute left-[7%] lg:left-[5%] top-[57%] md:top-[40%] xl:top-[39%] w-[88%] lg:w-[90%] xl:w-[80%] xl:left-[11%] xl:top[45%] h-auto flex justify-between items-center">
            <div
              className={`z-10 h-9 w-9 md:h-16 md:w-16 lg:h-24 lg:w-24 rounded-full bg-white dark:bg-black border p-1 md:p-2 flex justify-center items-center transition-all duration-300 cursor-pointer ${activeTechnology === 'nodejs' ? 'dark:bg-white border-black scale-110' : ''}`}
              onClick={() => handleTechnologyClick('nodejs')}
            >
              <img src={nodejs} alt="nodejs" className="h-[80%] w-[80%] object-contain" />
            </div>
            <div
              className={`z-10 h-9 w-9 md:h-16 md:w-16 lg:h-24 lg:w-24 rounded-full bg-white dark:bg-black border p-1 md:p-2 flex justify-center items-center transition-all duration-300 cursor-pointer ${activeTechnology === 'java' ? 'dark:bg-white border-black scale-110' : ''}`}
              onClick={() => handleTechnologyClick('java')}
            >
              <img src={java} alt="java" className="h-[80%] w-[80%] object-contain" />
            </div>
          </div>

          {/* Fifth row of circles */}
          <div className="absolute left-[1%] top-[77%] md:top-[57%] lg:top-[60%] xl:top-[61%] w-[100%] xl:w-[94%] xl:left-[4%] h-auto flex justify-between items-center">
            <div
              className={`z-10 h-9 w-9 md:h-16 md:w-16 lg:h-24 lg:w-24 rounded-full dark:bg-black bg-white border p-1 md:p-2 flex justify-center items-center transition-all duration-300 cursor-pointer ${activeTechnology === 'figma' ? 'dark:bg-white border-black scale-110' : ''}`}
              onClick={() => handleTechnologyClick('figma')}
            >
              <img src={figma} alt="figma" className="h-[80%] w-[80%] object-contain" />
            </div>
            <div
              className={`z-10 h-9 w-9 md:h-16 md:w-16 lg:h-24 lg:w-24 rounded-full dark:bg-black bg-white border  p-1 md:p-2 flex justify-center items-center transition-all duration-300 cursor-pointer ${activeTechnology === 'css' ? 'dark:bg-white  border-black scale-110' : ''}`}
              onClick={() => handleTechnologyClick('css')}
            >
              <img src={css} alt="css" className="h-[80%] w-[80%] object-contain" />
            </div>
          </div>

          {/* Image */}
          <img
            src={halfmoon}
            alt="Picture of tagline"
            className="w-full h-full object-contain mt-10 md:mt-0 opacity-90"
          />

          {/* Conditionally render content based on active technology */}
          <p className=" text-white absolute text-[8px] md:text-[14px] xl:text-3xl w-[50%] md:w-[45%] left-[27%] xl:left-[31%] top-[63%] md:top-[42%] text-left">
            {activeTechnology ? technologyContent[activeTechnology] : "Click on a technology to learn more."}
          </p>
        </div>
        
      </div>
    </div></>
  );
};

export default TransformingBusinessSection;
