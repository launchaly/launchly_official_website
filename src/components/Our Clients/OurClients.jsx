import React from "react";
import cc1 from "./assets/c1.png";
import cc2 from "./assets/c2.png";
import cc3 from "./assets/c3.webp";
import cc4 from "./assets/c4.webp";
import cc5 from "./assets/c5.png";
import cc6 from "./assets/c6.png";
import cc7 from "./assets/c7.avif";
import cc8 from "./assets/c8.png";
import cc9 from "./assets/c1.png";

const clientLogos = [cc1, cc2, cc3, cc4, cc5, cc6, cc7, cc8, cc9];

const OurClients = () => {
  return (
    <section className="bg-[#f4eadf] py-1 px-6">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12 mb-20">
        <div className="mb-10 mt-20 ">
          <h2 className="text-[#b48f2b] text-[16px] font-bold tracking-[2.56px] leading-[30px] mb-[10px] pr-[10px] relative uppercase m-0 font-['Roboto','Helvetica','Arial',sans-serif] flex items-center">
            OUR CLIENTS
            <span className="ml-4 w-10 h-[2px] bg-[#b48f2b]"></span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center mt-[30px] gap-2 sm:gap-4   lg:ml-20">
          {clientLogos.map((logo, idx) => (
            <div
              key={idx}
              className="bg-white rounded-md shadow-md hover:shadow-lg hover:scale-[1.05] transition-all duration-300 ease-in-out flex-wrap items-center justify-center p-2 sm:p-6 w-auto max-w-100% object-cover h-12 sm:h-24 "
            >
              <img
                src={logo}
                alt={`Client logo ${idx + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
