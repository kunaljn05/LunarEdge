import React, { useState } from "react";
import bgCareer from "../assets/bgCareer.png";
import { VacancyBox } from "../components/VacancyBox";
import { useSelector } from "react-redux";
import bgCareerSM from "../assets/bgCareerSM.png";
import AddVacancy from "../components/AddVacancy";
export const Career = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddVacancy,setShowAddVacancy] = useState(false)

  const handleClose = ()=>{
  setShowAddVacancy(false)
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Search term:", searchTerm);
  };

  // getting user

  const { user } = useSelector((state) => state.user);
  console.log(user);

  // Array of job vacancies
  const jobDataArray = [
    {
      jobTitle: "Frontend Developer",
      location: "Jaipur, India",
      experience: "Experience: 2 - 3 Years",
      postedDate: "Posted: 07/05/2024",
      jobDescription: {
        rolePurpose:
          "The purpose of this role is to perform the development of VLSI systems by defining the various functionalities, architecture, layout, and implementation for a client.",
        expert:
          "Applies the competency in all situations and serves as a guide to others.",
        master:
          "Coaches others and builds organizational capability in the competency area. Serves as a key resource for that competency and is recognized within the entire organization.",
      },
    },
    {
      jobTitle: "Backend Developer",
      location: "Jaipur, India",
      experience: "Experience: 2 - 3 Years",
      postedDate: "Posted: 08/15/2024",
      jobDescription: {
        rolePurpose:
          "Responsible for server-side web application logic and integration of the work front-end developers do.",
        expert:
          "In-depth knowledge of server-side scripting languages and database management.",
        master: "Mentors junior developers and optimizes back-end processes.",
      },
    },
    {
      jobTitle: "Full Stack Developer",
      location: "Jaipur, India",
      experience: "Experience: 2 - 3 Years",
      postedDate: "Posted: 09/01/2024",
      jobDescription: {
        rolePurpose:
          "Develops and maintains both front-end and back-end of web applications.",
        expert:
          "Proficient in both front-end and back-end technologies and frameworks.",
        master:
          "Leads projects and mentors teams in both front-end and back-end development.",
      },
    },
  ];

  return (
    <div className="h-full bg-gray-100">
      <div className="pt-[98px] md:pt-[135px] px-4">
        <div className="relative">
          {/* Added relative positioning */}
          <img
            src={bgCareer}
            alt="Career Background"
            className=" md:block hidden w-full h-auto"
          />
           <img
            src={bgCareerSM}
            alt="Career Background"
            className=" block md:hidden w-full h-auto"
          />
          <div className="  absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
            <h1 className="text-white text-md  md:text-4xl font-bold sm:text-shadow-md-white text-shadow-sm-white">
              Explore Your Career Opportunities
            </h1>
            <p className="text-white text-md md:text-xl mt-2 text-center sm:block hidden ">
              Find your dream job with us
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex items-center mt-4 pb-3">
          <input
            type="text"
            placeholder="Try 'Skills' or 'Keywords'"
            value={searchTerm}
            onChange={handleChange}
            className="bg-[#edeafa] w-full text-xs md:text-base px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#160962]"
          />
          <button
            type="submit"
            className="w-[100px] ml-[-100px] text-xs md:text-base py-2 rounded-full bg-[#160962] text-white hover:bg-[#5c45dd] focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Find Jobs
          </button>
        </form>
        {/* showing add-new-vacancy button only if user is admin  */}
        {user?.role === 'ADMIN' ?
       <div className="w-full text-center my-3">
       <button className="hover:text-green-400 hover:bg-white border border-green-400 p-2 text-white bg-green-400 rounded-lg transition-all duration-300" onClick={()=>{setShowAddVacancy(true)}}>
          Add New Vacancy
        </button>
       </div> : ''}
        {/* Render VacancyBox components for each job */}
        {jobDataArray.map((job, index) => (
          <div key={index} className="p-2">
            <VacancyBox
              jobTitle={job.jobTitle}
              location={job.location}
              experience={job.experience}
              postedDate={job.postedDate}
              jobDescription={job.jobDescription}
            />
          </div>
        ))}
      </div>
      {showAddVacancy && <AddVacancy onClose={handleClose}/>}
    </div>
  );
};
