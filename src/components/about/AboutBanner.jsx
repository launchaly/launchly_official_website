import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import ChooseUs from "../chooseUs/ChooseUs";
import OurClients from "../Our Clients/OurClients";

const AboutBanner = () => {
  return (
    <>
      <section className="bg-[#1d1500] text-yellow-400 py-20 px-4 sm:px-10 sm:mt-[95px]">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">ABOUT US</h1>
          <div className="text-sm sm:text-base text-yellow-300 flex items-center space-x-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span className="text-yellow-400">/</span>
            <span>About Us</span>
          </div>
          <p className="text-black mt-2 text-sm sm:text-base">Breadcrumbs</p>
        </div>
      </section>
      <About />
      <ChooseUs />
      <OurClients />
    </>
  );
};

export default AboutBanner;
