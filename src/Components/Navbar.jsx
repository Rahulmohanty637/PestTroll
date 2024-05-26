import React from "react";
import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "RESOURCES", link: "/" },
    { name: "CONTACT", link: "/" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="sticky shadow-md w-full border border-green-800 top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-green-800 py-4 md:px-10 px-7">
        <div className="text-white text-xl font-bold">PestTroll</div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-6 top-4 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[1] left-0 w-full bg-green-800 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-22" : "top-[-500px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className=" md:ml-8 md:my-0 my-7 font-semibold">
              <a
                href={link.link}
                className="flex items-center text-white hover:text-gray-800 duration-500"
              >
                <span className={!open ? "ml-2" : ""}>{link.name}</span>
              </a>
            </li>
          ))}
          <button className="btn bg-yellow-400 text-black md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
            Log In
          </button>
          <button className="btn bg-yellow-400 text-black md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
            Sign Up
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
