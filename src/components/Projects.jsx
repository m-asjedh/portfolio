import React from "react";
import movie from "../assets/movie.png";
import fashionCom from "../assets/fashionCom.png";
import furnitureCom from "../assets/furnitureCom.jpg";
import resturantSystem from "../assets/resturantSystem.jpg";
import jobNest from "../assets/jobNest.webp";
import portfolio from "../assets/portfolio.jpeg";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: movie,
      title: "Web",
    },
    {
      id: 2,
      src: fashionCom,
      title: "Mobile",
    },
    {
      id: 3,
      src: furnitureCom,
      title: "Web",
    },
    {
      id: 4,
      src: resturantSystem,
      title: "System",
    },
    {
      id: 5,
      src: jobNest,
      title: "Web",
    },
    {
      id: 6,
      src: portfolio,
      title: "Web",
    },
  ];
  return (
    <div
      name="projects"
      className="bg bg-gradient-to-b from-black to-gray-800 w-full
    text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-md duration-200 hover:scale-105"
            >
              <img src={src} alt="" />
              <div className="flex items-center justify-center">
                <p className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {title}
                </p>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
