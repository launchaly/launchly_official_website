import React from "react";
import { Link } from "react-router-dom";
import Web_Development from "./Web_Developer";

const Web_DeveloperBanner = () => {
  return (
    <>
      {" "}
      <section className="bg-[#1d1500] text-yellow-400 py-20 px-4 sm:px-10 sm:mt-[95px]">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">Our Work</h1>
          <div className="text-sm sm:text-base text-yellow-300 flex items-center space-x-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span className="text-yellow-400">/</span>
            <Link to="/services-banner">services</Link>
            <span className="text-yellow-400">/</span>
            <Link to="/web-development/1">Website Development</Link>
          </div>
        </div>
      </section>
      <Web_Development />
    </>
  );
};

export default Web_DeveloperBanner;
