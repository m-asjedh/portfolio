import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import reactImage from "../assets/react.png";

import c from "../assets/c.jpeg";
import java from "../assets/java.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import mysql from "../assets/mysql.png";
import nodejs from "../assets/nodejs-1-logo.png";
import expressjs from "../assets/express.png";
import springboot from "../assets/springboot.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: mysql,
      title: "My SQL",
      style: "shadow-white",
    },
    {
      id: 6,
      src: nodejs,
      title: "NodeJs",
      style: "shadow-green-400",
    },
    {
      id: 7,
      src: expressjs,
      title: "ExpressJs",
      style: "shadow-yellow-400",
    },
    {
      id: 8,
      src: springboot,
      title: "Springboot",
      style: "shadow-red-400",
    },
    {
      id: 9,
      src: c,
      title: "C",
      style: "shadow-pink-400",
    },
    {
      id: 10,
      src: java,
      title: "Java",
      style: "shadow-green-400",
    },
    {
      id: 11,
      src: github,
      title: "Github",
      style: "shadow-gray-500",
    },
    {
      id: 12,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-blue-400",
    },
  ];

  return (
    <div
      name="experince"
      className="bg-gradient-to-b pt-[120px] from-gray-800 to-black w-full  "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">these are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
