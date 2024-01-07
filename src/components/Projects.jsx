import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import movie from "../assets/lankacinema.png";
import ecommerce1 from "../assets/lankaeats.png";
import ecommerce2 from "../assets/lankahomes.png";
import ecommerce3 from "../assets/lankashoes.png";
import system1 from "../assets/lankaservices.png";
import jobNest from "../assets/jobnest.png";
import etf from "../assets/etfproject.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import p9 from "../assets/p9.png";
import p10 from "../assets/p10.png";
import p11 from "../assets/p11.png";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: ecommerce1,
      title: "Food Web Application",
      githubLink: "https://lankaeats.netlify.app/",
      details: (
        <div className="flex justify-center">
          <img
            src={p2}
            alt="Project Screenshot 2"
            className="w-1/8 mx-2 rounded"
          />
          <img
            src={p5}
            alt="Project Screenshot 5"
            className="w-1/8 mx-2 rounded"
          />
          <img
            src={p1}
            alt="Project Screenshot 6"
            className="w-1/8 mx-2 rounded"
          />
        </div>
      ),
    },
    {
      id: 2,
      src: ecommerce3,
      title: "Shoe Web Application",
      githubLink: "https://lanakashoes.netlify.app/",
      details: (
        <div className="flex justify-center">
          <img
            src={p2}
            alt="Project Screenshot 2"
            className="w-1/6 mx-2 rounded"
          />
          <img
            src={p4}
            alt="Project Screenshot 6"
            className="w-1/6 mx-2 rounded"
          />
          <img
            src={p3}
            alt="Project Screenshot 6"
            className="w-1/6 mx-2 rounded"
          />
          <img
            src={p5}
            alt="Project Screenshot 6"
            className="w-1/6 mx-2 rounded"
          />
        </div>
      ),
    },
    {
      id: 3,
      src: movie,
      title: "Movie Web Application",
      githubLink: "https://lankacinema.netlify.app/",
      details: (
        <div className="flex justify-center">
          <img
            src={p2}
            alt="Project Screenshot 2"
            className="w-1/8 mx-2 rounded"
          />
          <img
            src={p1}
            alt="Project Screenshot 2"
            className="w-1/8 mx-2 rounded"
          />
          <img
            src={p5}
            alt="Project Screenshot 2"
            className="w-1/8 mx-2 rounded"
          />
        </div>
      ),
    },
    {
      id: 4,
      src: system1,
      title: "Car Service System",
      githubLink: "https://lanakservices.netlify.app/",
      details: (
        <div className="flex justify-center">
          <img
            src={p2}
            alt="Project Screenshot 2"
            className="w-1/6 mx-2 rounded"
          />
          <img
            src={p1}
            alt="Project Screenshot 2"
            className="w-1/6 mx-2 rounded"
          />
          <img
            src={p10}
            alt="Project Screenshot 2"
            className="w-1/6 mx-2 rounded"
          />
          <img
            src={p7}
            alt="Project Screenshot 2"
            className="w-1/6 mx-2 rounded"
          />
          <img
            src={p3}
            alt="Project Screenshot 2"
            className="w-1/6 mx-2 rounded"
          />
        </div>
      ),
    },
    {
      id: 5,
      src: jobNest,
      title: "Job Web Application",
      githubLink: "https://job-nest.netlify.app/",
      details: (
        <div className="flex justify-center">
          <img
            src={p2}
            alt="Project Screenshot 2"
            className="w-1/6 mx-2 rounded"
          />
          <img
            src={p11}
            alt="Project Screenshot 2"
            className="w-1/6 mx-2 rounded"
          />
          <img
            src={p1}
            alt="Project Screenshot 2"
            className="w-1/6 mx-2 rounded"
          />
          <img
            src={p6}
            alt="Project Screenshot 2"
            className="w-1/6 mx-2 rounded"
          />
          <img
            src={p5}
            alt="Project Screenshot 2"
            className="w-1/6 mx-2 rounded"
          />
        </div>
      ),
    },
    {
      id: 6,
      src: etf,
      title: "Movie Web Application",
      githubLink: "https://github.com/m-asjedh/ETFproject",
      details: (
        <div className="flex justify-center">
          <img
            src={p1}
            alt="Project Screenshot 2"
            className="w-1/8 mx-2 rounded"
          />
          <img
            src={p8}
            alt="Project Screenshot 2"
            className="w-1/8 mx-2 rounded"
          />
          <img
            src={p9}
            alt="Project Screenshot 2"
            className="w-1/8 mx-2 rounded"
          />
        </div>
      ),
    },
    {
      id: 7,
      src: ecommerce2,
      title: "Furniture Web Application",
      githubLink: "file:///D:/CAMPUS/Y1S2/WAD/WAD%20Website/index.html",
      details: (
        <div className="flex justify-center">
          <img
            src={p1}
            alt="Project Screenshot 2"
            className="w-1/8 mx-2 rounded"
          />
          <img
            src={p8}
            alt="Project Screenshot 2"
            className="w-1/8 mx-2 rounded"
          />
          <img
            src={p9}
            alt="Project Screenshot 2"
            className="w-1/8 mx-2 rounded"
          />
        </div>
      ),
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div
      name="projects"
      className="bg bg-gradient-to-b from-black to-gray-800 w-full text-white pt-[120px]"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <Slider {...settings}>
          {portfolios.map(({ id, src, title, githubLink, details }) => (
            <div
              key={id}
              className="slick-slide"
              style={{ margin: "0 20px", boxSizing: "border-box" }}
            >
              <div
                className="rounded-md p-4 border border-gray-600 shadow-lg"
                style={{ width: "100%", boxSizing: "border-box" }}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-48 object-cover rounded"
                />
                <div className="flex flex-col items-center justify-center p-2">
                  <p className="text-sm font-bold mb-1">{title}</p>
                  <div className="text-gray-500 text-xs mb-2">{details}</div>
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white font-bold text-sm py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
