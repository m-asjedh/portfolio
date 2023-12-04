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
      githubLink: "",
    },
    {
      id: 2,
      src: fashionCom,
      title: "Mobile",
      githubLink: "https://github.com/your-username/fashion-project",
    },
    {
      id: 3,
      src: furnitureCom,
      title: "Web",
      githubLink: "https://github.com/your-username/furniture-project",
    },
    {
      id: 4,
      src: resturantSystem,
      title: "System",
      githubLink: "https://github.com/your-username/restaurant-system",
    },
    {
      id: 5,
      src: jobNest,
      title: "Web",
      githubLink: "https://github.com/your-username/jobnest-project",
    },
    {
      id: 6,
      src: portfolio,
      title: "Web",
      githubLink: "https://github.com/m-asjedh/portfolio",
    },
  ];

  return (
    <div
      name="projects"
      className="bg bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-[120px]"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-0">
          {portfolios.map(({ id, src, title, githubLink }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-md duration-200 hover:scale-105 p-2"
            >
              <img src={src} alt="" className="w-full h-auto" />
              <div className="flex flex-col items-center justify-center p-2">
                <p className="text-sm font-bold mb-1">{title}</p>
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xs py-1 px-2 rounded duration-200 transform hover:scale-105"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
