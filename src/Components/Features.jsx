import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Upload and Analyze Images",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Simply upload images of your plants and crops, and our AI will analyze them to detect any diseases.",
    aosDelay: "0",
  },
  {
    name: "Comprehensive Disease Database",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Access a comprehensive database of plant diseases to get accurate diagnoses and recommendations for treatments.",
    aosDelay: "500",
  },
  {
    name: "Pesticide Recommendations",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description:
      "Receive tailored pesticide recommendations to effectively treat identified diseases and protect your crops.",
    aosDelay: "1000",
  },
  {
    name: "Disease Detection",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Identify plant diseases in real-time by analyzing uploaded images, allowing for quick and accurate diagnosis.",
    aosDelay: "0",
  },
  {
    name: "Pesticide Recommendations",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Receive tailored pesticide recommendations based on the detected diseases, ensuring effective and targeted pest control.",
    aosDelay: "500",
  },
  {
    name: "Growth Analytics",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description:
      "Gain valuable insights into the health and growth patterns of your crops with our integrated analytics dashboard.",
    aosDelay: "1000",
  },
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className=" py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Why Choose Us
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-1 sm:py-16 bg-white hover:bg-green-800 border border-green-800 duration-300 text-green-800 hover:text-white rounded-lg"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                <a
                  href={skill.link}
                  className="inline-block text-lg font-semibold p-1 text-black border bg-yellow-400 rounded-md duration-300"

                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
