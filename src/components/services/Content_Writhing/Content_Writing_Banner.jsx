import React from "react";
import { Link } from "react-router-dom";
import Content_Writing from "./Content_Writing";

const Content_Writing_Banner = () => {
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
            <Link to="/web-development/1">Content Writing</Link>
          </div>
        </div>
      </section>
      <Content_Writing />
    </>
  );
};

export default Content_Writing_Banner;



