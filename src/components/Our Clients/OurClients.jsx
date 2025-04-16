import React from "react";

const clientLogos = [
  "/src/assets/OurClients/c1.png",
  "/src/assets/OurClients/c2.png",
  "/src/assets/OurClients/c3.webp",
  "/src/assets/OurClients/c4.webp",
  "/src/assets/OurClients/c5.png",
  "/src/assets/OurClients/c6.png",
  "/src/assets/OurClients/c7.avif",
  "/src/assets/OurClients/c8.png",
  "/src/assets/OurClients/c9.png",
];

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
