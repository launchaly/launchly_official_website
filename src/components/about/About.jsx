import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Image1 from "../Our_Working_Team/assets/img1.webp";
import Image2 from "../Our_Working_Team/assets/img2.png";

const About = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-24 bg-white mb-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Images */}
        <div className="relative flex justify-center">
          <img
            src={Image1}
            alt="about-img"
            className="rounded-xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-[500px] xl:w-[85%] xl:h-[50%] h-[250px] sm:h-[400px] md:h-[450px] lg:h-[500px] shadow-md object-cover"
          />

          <img
            src={Image2}
            alt="team working"
            className="absolute bottom-[-40px] sm:bottom-[-50px] left-[70%] sm:left-[75%] translate-x-[-50%] rounded-xl w-40 sm:w-52 md:w-60 lg:w-72 border-4 border-white shadow-xl"
          />
        </div>

        <div>
          <p className="text-[#b48f2b] text-sm sm:text-base font-bold uppercase mb-3 tracking-[2.56px] leading-6 pr-[10px] relative">
            About Us —
          </p>

          {/* Main Heading */}
          <h2 className="text-[#00113b] text-4xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold tracking-tight md:tracking-[-1.48px] leading-snug md:leading-[64px] w-full md:w-[500px] mb-4">
            Empowering Your Digital Journey
          </h2>

          {/* Paragraphs */}
          <p className="text-gray-700 mb-4 text-md sm:text-base-tracking-tighter">
            <strong className="font-semibold">
              Welcome to Launchly Software Pvt Ltd
            </strong>{" "}
            – Your one-stop solution for all things digital. We are passionate
            about helping businesses thrive in the digital world. From stunning
            websites to mobile apps, impactful marketing strategies to engaging
            content, we craft solutions that leave a lasting impression.
          </p>
          <p className="text-gray-700 mb-4 text-md sm:text-base-tracking-tighter">
            Our mission is to empower brands to grow, connect, and succeed in a
            competitive landscape. With innovation at our core and a commitment
            to excellence, we aim to turn your vision into reality.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 text-sm text-black">
            <div className="flex items-center gap-2 text-lg">
              <span className="text-yellow-500 text-lg">
                <IoCheckmarkCircleOutline />
              </span>
              Websites Development
            </div>
            <div className="flex items-center gap-2 text-lg">
              <span className="text-yellow-500 text-lg">
                <IoCheckmarkCircleOutline />
              </span>
              App Developments
            </div>
            <div className="flex items-center gap-2 text-lg">
              <span className="text-yellow-500 text-lg">
                <IoCheckmarkCircleOutline />
              </span>
              Graphic Design
            </div>
            <div className="flex items-center gap-2 text-lg">
              <span className="text-yellow-500 text-lg">
                <IoCheckmarkCircleOutline />
              </span>
              Content Writing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
