import React, { useState } from "react";
import SideImage from "./SideImageGetInTouch.png";
import darkSideImage from "./darkSideImageGetInTouch.png";
import { toast } from "react-toastify";
import { API } from "../../helper";
import { useOutletContext } from "react-router-dom";
 

const GetInTouch = () => {

  const { darkMode } = useOutletContext();

  const imageSrc = (darkMode ? darkSideImage : SideImage );
 


  const [email,setEmail] = useState('')

  const handleEmail = (event)=>{
    setEmail(event.target.value)
  }

 const handleEmailClick = async()=>{
  if(!email) return;
  try{
    console.log(API.sendEmail)
   const response = await fetch(API.sendEmail.url,{
    method : API.sendEmail.method,
    headers : {
      "content-type" : "application/json"
    },
    body: JSON.stringify({email}),
   })

   const responseData = await response.json();
   if(responseData.success){
    setEmail('')
    toast.success(responseData.message);
   }
   if(responseData.error){
    toast.error('Unable to send email. Please try again!')
   }
   
  }
  catch(error){
    console.log(error);
    toast.error('Unable to send email. Please try again!')
  }
 }

  return (
    <>
    <div id="contactUs" className="h-[10px] w-full hidden lg:block"></div>
    <div  className="flex md:flex-row flex-col-reverse items-center w-[100%] h-full bg-white dark:bg-black  md:pb-10 p-4">
      <div className="md:w-[60%] p-6 w-full">
        <div className="flex flex-col items-center w-full">
          <h2 className="xl:text-5xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Have a <span className="text-pink-500">project</span> in mind?
          </h2>
          <h3 className="xl:text-4xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-8">
            Send us an e-mail
          </h3>
          <p className="text-black dark:text-white mb-8 xl:text-lg text-sm font-light text-left md:w-[70%]">
            LunarEdge provides a wide range of IT services, from website
            development to software solutions, helping businesses grow with
            innovative strategies and support.
          </p>
          <div className="flex flex-row w-full justify-center">
            <input
              type="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={handleEmail}
              className="md:w-[35%] md:text-lg text-xs border border-gray-300 bg-gray-200 rounded-s-lg py-2 px-4 focus:outline-none focus:ring-1 focus:ring-pink-600"
            />
            <button onClick={handleEmailClick} className=" md:text-lg text-xs bg-gradient-to-r from-[#ff5757] to-[#8c52ff] text-white dark:text-black font-semibold py-2 px-6 rounded-e-lg hover:from-[#8c52ff] hover:to-[#ff5757] focus:outline-none focus:ring-1 focus:ring-pink-500">
              Send
            </button>
          </div>
        </div>
      </div>
      <div className=" md:flex justify-end w-[40%] ">
        <img
          src={`${imageSrc}`} // Replace with your actual image path
          alt="Abstract Head"
          className=" object-cover opacity-45  dark:opacity-90"
        />
      </div>
    </div></>
  );
};

export default GetInTouch;
