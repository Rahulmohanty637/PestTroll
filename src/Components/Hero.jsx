import React from "react";
import HeroPng from "../assets/leaf.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="min-h-[550px] sm:min-h-[600px] bg-white border-2 p-4 flex justify-center items-center text-black">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                AI-Powered Plant Health &{" "}
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  class="bg-clip-text text-green-800 bg-gradient-to-b from-primary to-primary/90 font-cursive"
                >
                  Pest Management Tools
                </span>{" "}
              </h1>
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="flex justify-start space-x-4"
              >
                <Link to="/diseasedetection">
                  <button className="bg-yellow-400 border-2 border-primary hover:scale-105 duration-200 text-black font-bold py-2 px-4 rounded-full">
                    Disease Detection
                  </button>
                </Link>
                <Link to="/pesticideprediction">
                  <button className="bg-yellow-400 border-2 border-primary hover:scale-105 duration-200 text-black font-bold py-2 px-4 rounded-full">
                    Pesticide Prediction
                  </button>
                </Link>
              </div>
            </div>
            {/* Image section */}
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2"
            >
              <img
                data-aos-once="true"
                src={HeroPng}
                alt="biryani img"
                className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin "
              />
              <div
                data-aos="fade-right"
                data-aos-offset="0"
                className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute bottom-10 right-10"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
