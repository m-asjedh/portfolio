import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full pt-[120px] bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2 h-full flex flex-col justify-between">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>
          {/* Details Section */}
          <div className="mt-8">
            <p className="text-2xl font-bold mb-2">Info</p>
            <table className="table-auto text-left ">
              <tbody>
                <tr>
                  <td className="pr-4">Type:</td>
                  <td>Web Development</td>
                </tr>
                <tr>
                  <td className="pr-4">Birthday:</td>
                  <td>6 June 2002</td>
                </tr>
                <tr>
                  <td className="pr-4">Phone:</td>
                  <td>+9474 1146 366</td>
                </tr>
                <tr>
                  <td className="pr-4">City:</td>
                  <td>Colombo, Sri Lanka</td>
                </tr>
                <tr>
                  <td className="pr-4">Status:</td>
                  <td>Undergraduate</td>
                </tr>
                <tr>
                  <td className="pr-4">Age:</td>
                  <td>21</td>
                </tr>
                <tr>
                  <td className="pr-4">Education:</td>
                  <td className="whitespace-nowrap">
                    B.Sc. (Hons) Computer Science and Software Engineering
                    (Reading)
                  </td>
                </tr>
                <tr>
                  <td className="pr-4">Email:</td>
                  <td>masjedh.dev@gmail.com</td>
                </tr>
            
              </tbody>
            </table>
          </div>
        </div>

        {/* Skills Section */}
        <div className="md:w-1/2 flex flex-col justify-between m-28">
          <div>
            <p className="text-2xl font-bold mb-2">Skills</p>
            <ul className="list-disc pl-6 ">
              <li>Back-End Web Development</li>
              <li>Front-End Development</li>
              <li>Object-Oriented Programming</li>
              <li>Data Structures and Algorithms</li>
              <li>Problem Solving Skills</li>
              <li>Critical Thinking</li>
              <li>Fluent English</li>
              <li>Fast Leaner</li>
              <li>Freindly</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
