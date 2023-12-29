import React from "react";
import movie from "../assets/lankacinema.png";
import ecommerce1 from "../assets/lankaeats.png";
import ecommerce2 from "../assets/lankahomes.png";
import ecommerce3 from "../assets/lankashoes.png";
import system1 from "../assets/lankaservices.png";
import jobNest from "../assets/jobnest.png";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: ecommerce1,
      title: "Web",
      githubLink: "https://lankaeats.netlify.app/",
    },
    {
      id: 2,
      src: ecommerce3,
      title: "Web",
      githubLink: "https://lanakashoes.netlify.app/",
    },
    {
      id: 3,
      src: movie,
      title: "Web",
      githubLink: "https://lankacinema.netlify.app/",
    },
    {
      id: 4,
      src: system1,
      title: "System",
      githubLink: "https://lanakservices.netlify.app/",
    },
    {
      id: 5,
      src: jobNest,
      title: "Web",
      githubLink: "https://job-nest.netlify.app/",
    },
    {
      id: 6,
      src: ecommerce2,
      title: "Web",
      githubLink: "file:///D:/CAMPUS/Y1S2/WAD/WAD%20Website/index.html",
    },
  ];

  return (
    <div
      name="projects"
      className="bg bg-gradient-to-b from-black to-gray-800 w-full text-white  pt-[120px]"
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
                  View
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
