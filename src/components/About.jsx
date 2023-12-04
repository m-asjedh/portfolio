import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full pt-[120px] bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-base mt-10">
          As a determined undergraduate student at SLIIT, I am deeply engaged in
          my pursuit of a Bachelor of Science degree with a specialization in
          Computer Science and Software Engineering. Over the course of my
          academic journey, I've honed a diverse skillset, encompassing
          technical proficiency in areas such as programming, software
          applications, and data analysis, alongside well-developed
          problem-solving, time management, and communication skills.
          Collaborative projects and extracurricular activities have cultivated
          my ability to work effectively in teams. My personal characteristics
          are marked by unwavering dedication to academic and personal growth,
          adaptability to evolving circumstances, a relentless curiosity,
          resilience in the face of challenges, and a penchant for leadership
          roles within student organizations and clubs. Looking ahead, my future
          goals involve not only completing my degree with honors but also
          delving into postgraduate studies, advancing my career in a rewarding
          and challenging software engineering, contributing to research
          endeavors, and giving back to the community by mentoring and sharing
          knowledge with aspiring students, thereby striving for a positive
          impact on both my field and society as a whole.
        </p>

        <br />

        <p className="text-base">
          In addition to my academic pursuits, I am actively seeking
          opportunities to apply my skills and knowledge in a professional
          setting. I am eager to secure a job that aligns with my field of study
          and provides me with the chance to put my abilities to practical use.
          This job search is not just about entering the workforce but also a
          crucial step towards achieving my career aspirations. I am
          enthusiastic about the prospect of contributing to a dynamic
          organization, taking on new challenges, and further developing my
          expertise in Software Engineering. My job search is a vital part of my
          overall journey, and I am committed to finding a role where I can make
          a meaningful impact and continue my personal and professional growth.
        </p>
      </div>
    </div>
  );
};

export default About;
