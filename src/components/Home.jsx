import React from "react";
import heroImage from "../assets/heroImage.jpg";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full pt-[150px] bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4  md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am an Undergraduate
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Bachelor of Science in Software Engineer at SLIIT Academy. I love to
            work on web application using technologies like React, Taliwind, and
            UI/UX designing
          </p>
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <FiArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-50"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
