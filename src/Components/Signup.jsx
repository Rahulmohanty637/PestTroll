import React from "react";
import image from "../assets/leaf.jpg";

const LoginSignup = () => {
  return (
    <div className="min-h-screen py-40 background-image: linear-gradient(115deg, #9f7aea, #fee2fe)">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-green-400">
            {/* <img src={image} alt="farmer"/> */}
            <h1 className="text-black text-3xl mb-3">Welcome</h1>
            <div>
              <p class="text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                suspendisse aliquam varius rutrum purus maecenas ac{" "}
                <a href="#" class="text-purple-500 font-semibold">
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Register</h2>
            <p class="mb-4">
              Create your account. It’s free and only take a minute
            </p>
            <form action="#">
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Firstname"
                  className="border border-gray-400 py-1 px-2"
                ></input>
                <input
                  type="text"
                  placeholder="Surname"
                  className="border border-gray-400 py-1 px-2"
                ></input>
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Mobile"
                  className="border border-gray-400 py-1 px-2 w-full"
                ></input>
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Email"
                  className="border border-gray-400 py-1 px-2 w-full"
                ></input>
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <input type="checkbox" className="border border-gray-400" />
                <span>
                  {" "}
                  I accept the{" "}
                  <a href="#" className="text-purple-500 font-semibold">
                    Terms of Use{" "}
                  </a>
                  &{" "}
                  <a href="#" className="text-purple-500 font-semibold">
                    Privacy Policy
                  </a>
                </span>
              </div>
              <div className="mt-5">
                <button className="w-full bg-purple-500 py-3 text-center text-white">
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
